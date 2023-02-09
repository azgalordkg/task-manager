import React, {FC} from 'react';
import {Text, TouchableOpacity, View, Animated, TextStyle} from 'react-native';
import styles from './ListItem.styles';
import {ListItemProps} from './ListItem.types';
import {Checkmark, Trash} from '../../icons';
import {Swipeable} from 'react-native-gesture-handler';
import {COLORS} from '../../../constants';
import {format} from 'date-fns';

export const ListItem: FC<ListItemProps> = ({
  name,
  checked,
  onCheckPress,
  onDeletePress,
  startDate,
  endDate,
  isLast,
}) => {
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
        <TouchableOpacity
          onPress={onDeletePress}
          style={styles.buttonsContainer}>
          <Animated.View
            style={{transform: [{scale}], ...styles.buttonsContainer}}>
            <Trash width={35} height={35} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const crossedTextStyles: TextStyle = checked
    ? {textDecorationLine: 'line-through'}
    : {};

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <View
        style={{
          ...styles.container,
          ...(isLast ? {borderBottomWidth: 0} : {}),
        }}>
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
              {startDate && endDate && (
                <View style={styles.timeWrapper}>
                  <Text
                    style={{
                      ...styles.time,
                      ...crossedTextStyles,
                    }}>
                    {format(new Date(startDate), 'p')} -{' '}
                    {format(new Date(endDate), 'p')}
                  </Text>
                </View>
              )}
              <View>
                <Text style={{...styles.title, ...crossedTextStyles}}>
                  {name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};
