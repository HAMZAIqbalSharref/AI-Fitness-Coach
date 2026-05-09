import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
  ViewToken
} from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";
import { onboardingSlides } from "../data/onboarding-data";
import { Button } from "../components/ui";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const router = useRouter();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/(auth)/signin");
    }
  };

  const renderSlide = ({ item }: { item: (typeof onboardingSlides)[0] }) => {
    return (
      <StyledView className="flex-1 justify-center items-center px-6">
        <StyledView className="w-64 h-64 bg-primary-600 rounded-full mb-10 items-center justify-center">
          <StyledText className="text-6xl">💪</StyledText>
        </StyledView>
        <StyledText className="text-3xl font-bold text-white text-center mb-4">
          {item.title}
        </StyledText>
        <StyledText className="text-lg text-gray-400 text-center px-4">
          {item.description}
        </StyledText>
      </StyledView>
    );
  };

  const renderDots = () => {
    return (
      <StyledView className="flex-row justify-center mb-10">
        {onboardingSlides.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          });
          const width = scrollX.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [8, 24, 8],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={i}
              className="h-2 rounded-full bg-primary-600 mx-1"
              style={{ opacity, width }}
            />
          );
        })}
      </StyledView>
    );
  };

  return (
    <StyledView className="flex-1 bg-dark-300">
      <StyledTouchableOpacity
        className="absolute top-12 right-6 z-10"
        onPress={() => router.replace("/(auth)/signin")}
      >
        <StyledText className="text-primary-600 font-medium">Skip</StyledText>
      </StyledTouchableOpacity>

      <FlatList
        data={onboardingSlides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef as any}
      />

      {renderDots()}

      <StyledView className="px-6 pb-12">
        <Button
          title={
            currentIndex === onboardingSlides.length - 1
              ? "Get Started"
              : "Next"
          }
          onPress={scrollToNext}
        />
      </StyledView>
    </StyledView>
  );
};