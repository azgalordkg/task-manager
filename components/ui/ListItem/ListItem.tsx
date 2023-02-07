import React, {FC} from 'react';
import {Text, TouchableOpacity, View, Animated} from 'react-native';
import styles from './ListItem.styles';
import {ListItemProps} from './ListItem.types';
import {Checkmark, Trash} from '../../icons';
import {Swipeable} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants';

export const ListItem: FC<ListItemProps> = ({name, checked, onCheckPress}) => {
  const rightSwipe = (
    progress: Animated.AnimatedInterpolation<string>,
    dragX: Animated.AnimatedInterpolation<string>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.buttonsContainer}>
          <Animated.View
            style={{transform: [{scale}], ...styles.buttonsContainer}}>
            <Trash width={35} height={35} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.checkmarkWrapper}>
            <TouchableOpacity onPress={onCheckPress}>
              <Checkmark
                color={checked ? COLORS.GREEN : COLORS.WHITE}
                checked={checked}
                width={28}
                height={28}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textWrapper}>
            <TouchableOpacity>
              <View style={styles.timeWrapper}>
                <Text style={styles.time}>11:00AM - 1:00PM</Text>
              </View>
              <View>
                <Text style={styles.title}>{name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
