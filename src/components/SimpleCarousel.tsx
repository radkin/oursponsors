import * as React from 'react';
import {View, Image} from 'react-native';
import { interpolate,} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import type { TAnimationStyle } from '../layouts/BaseLayout';
import SButton from '../components/SButton';
import { ElementsText, window } from '../constants';

import { AP, BBC, NPR} from "../images";

const senatorImages = [
  {key: 1, value: NPR},
  {key: 2, value: AP},
  {key: 3, value: BBC}
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

export default SimpleCarousel;
