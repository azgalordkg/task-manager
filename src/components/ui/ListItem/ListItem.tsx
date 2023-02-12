import { format } from 'date-fns';
import React, { FC, useRef } from 'react';
import {
  Animated,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import { Pencil, Trash } from '@/components/icons';
import { ActionButton } from '@/components/ui';
import { COLORS } from '@/constants';

import { Checkmark } from '../../icons';
import styles from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

export const ListItem: FC<ListItemProps> = ({
  name,
  checked,
  onCheckPress,
  onDeletePress,
  onEditPress,
  startDate,
  endDate,
  isLast,
  onItemPress,
}) => {
  const swipeRef = useRef<Swipeable | null>(null);

  const closeSwiper = () => {
    if (swipeRef) {
      swipeRef.current?.close();
    }
  };

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
      <>
        <ActionButton icon={Trash} scale={scale} onPress={onDeletePress} />
        <ActionButton
          backgroundColor={COLORS.ORANGE}
          icon={Pencil}
          scale={scale}
          onPress={() => {
            onEditPress();
            closeSwiper();
          }}
        />
      </>
    );
  };

  const crossedTextStyles: TextStyle = checked
    ? { textDecorationLine: 'line-through' }
    : {};

  return (
    <Swipeable ref={swipeRef} renderRightActions={rightSwipe}>
      <View
        style={{
          ...styles.container,
          ...(isLast ? { borderBottomWidth: 0 } : {}),
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
            <TouchableOpacity
              onPress={onItemPress}
              style={styles.contentButton}>
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
                <Text style={{ ...styles.title, ...crossedTextStyles }}>
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
