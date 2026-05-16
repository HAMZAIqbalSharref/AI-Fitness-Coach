import React, { useState, useRef } from "react";
import { useAppStore } from "../store/app-store";
import {
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
  ViewToken,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { onboardingSlides } from "../data/onboarding-data";
import { Button } from "../components/ui";

const { width } = Dimensions.get("window");

export const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);
  const router = useRouter();
  const { setHasSeenOnboarding } = useAppStore();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollToNext = async () => {
  if (currentIndex < onboardingSlides.length - 1) {
    slidesRef.current?.scrollToIndex({
      index: currentIndex + 1,
    });
  } else {
    await setHasSeenOnboarding();

    router.replace("/signin");
  }
};

  const renderSlide = ({ item }: { item: (typeof onboardingSlides)[0] }) => {
    return (
      <View
        style={{ width }}
        className="flex-1 justify-center items-center px-8"
      >
        <View className="w-64 h-64 rounded-full bg-primary-600 items-center justify-center mb-12">
          <Text className="text-7xl">💪</Text>
        </View>

        <Text className="text-white text-4xl font-bold text-center mb-5">
          {item.title}
        </Text>

        <Text className="text-gray-400 text-lg text-center leading-7">
          {item.description}
        </Text>
      </View>
    );
  };

  const renderDots = () => {
    return (
      <View className="flex-row justify-center items-center mb-8">
        {onboardingSlides.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotWidth = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [8, 24, 8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={i}
              style={{
                width: dotWidth,
                opacity,
              }}
              className="h-2 rounded-full bg-primary-600 mx-1"
            />
          );
        })}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-dark-300">
      <TouchableOpacity
        className="absolute top-14 right-6 z-10"
        onPress={async () => {
        await setHasSeenOnboarding();
        router.replace("/signin");
}}
      >
        <Text className="text-primary-600 text-base font-semibold">
          Skip
        </Text>
      </TouchableOpacity>

      <FlatList
        data={onboardingSlides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        ref={slidesRef as any}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
      />

      {renderDots()}

      <View className="px-6 pb-12">
        <Button
          title={
            currentIndex === onboardingSlides.length - 1
              ? "Get Started"
              : "Next"
          }
          onPress={scrollToNext}
        />
      </View>
    </View>
  );
};