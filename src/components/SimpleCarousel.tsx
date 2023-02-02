import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import type { TAnimationStyle } from '../layouts/BaseLayout';
import { SBItem } from '../components/SBItem';
import SButton from '../components/SButton';
import { ElementsText, window } from '../constants';

import { SEN1, SEN2, SEN3, SEN4, SEN5, SEN6, SEN7 } from "../images";

const senatorImages = [
  {key: 1, value: SEN1},
  {key: 2, value: SEN2},
  {key: 3, value: SEN3},
  {key: 4, value: SEN4},
  {key: 5, value: SEN5},
  {key: 6, value: SEN6},
  {key: 7, value: SEN7}
];

const PAGE_WIDTH = window.width;

function SimpleCarousel() {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  type ItemProps = {value: object};
  const RenderCard = ({value}: ItemProps) => {
    return (
      <Image style={{width: PAGE_WIDTH, height: 240}} source={value} />
    )};


  const animationStyle: TAnimationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
      const translateX = interpolate(
        value,
        [-2, 0, 1],
        [-PAGE_WIDTH, 0, PAGE_WIDTH]
      );

      return {
        transform: [{ translateX }],
        zIndex,
      };
    },
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop={true}
        // autoPlay={isAutoPlay}
        autoPlay={true}
        style={{ width: PAGE_WIDTH, height: 240 }}
        width={PAGE_WIDTH}
        data={senatorImages}
        renderItem={({item}) => <RenderCard value={item.value} />}
        customAnimation={animationStyle}
        scrollAnimationDuration={2400}
      />
      <SButton
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
      </SButton>
    </View>
  );
}

interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
}
const CustomItem: React.FC<ItemProps> = ({ index, animationValue }) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#000000dd', 'transparent', '#000000dd']
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);

  return (
    <View style={{ flex: 1 }}>
      <SBItem key={index} index={index} style={{ borderRadius: 0 }} />
      <Animated.View
        pointerEvents="none"
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          maskStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SimpleCarousel;
