import React, { FC, useEffect, useMemo, useState } from 'react';
import { Animated, Text, View } from 'react-native';

import styles from './ProgressBar.styles';
import { Props } from './ProgressBar.types';

export const ProgressBar: FC<Props> = ({ current, total }) => {
  const [animatedProgress] = useState(new Animated.Value(0));

  const progress = useMemo(() => {
    if (total && current) {
      if (current >= total) {
        return 100;
      }
      return current / (total / 100);
    }
    return 0;
  }, [total, current]);

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolated = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const style = styles(progress);

  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Animated.View style={[style.progress, { width: widthInterpolated }]} />
      </View>
      <Text style={style.text}>
        {current}/{total}
      </Text>
    </View>
  );
};
