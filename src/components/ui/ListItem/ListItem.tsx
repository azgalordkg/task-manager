import { isEqual } from 'lodash';
import React, { FC, useMemo, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import { Cross, Trash } from '@/components/icons';
import { ActionButton, CustomCheckbox } from '@/components/ui';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { TagsResponseItem } from '@/types';
import { formatDate, prepareTagsForRender, vibrate } from '@/utils';

import styles from './ListItem.styles';
import { ListItemProps } from './ListItem.types';

const customComparator = (
  prevProps: ListItemProps,
  nextProps: ListItemProps,
) => {
  return isEqual(prevProps, nextProps);
};

export const ListItem: FC<ListItemProps> = ({
  name,
  tags,
  checked,
  onCheckPress,
  onDeletePress,
  startDate,
  endDate,
  isLast,
  onItemPress,
  hasDeadline,
  id,
  isDone,
  repeat,
}) => {
  const { theme } = useThemeContext();
  const style = styles({ isLast, checked, theme });
  const swipeRef = useRef<Swipeable | null>(null);
  const [swiping, setSwiping] = useState(false);
  const isRecurring = repeat ? repeat !== 'Never' : false;

  const { fetchList } = useTaskModalContext();

  const { tags: allTags } = useTagManageContext();

  const rightSwipe = (
    progress: Animated.AnimatedInterpolation<string>,
    dragX: Animated.AnimatedInterpolation<string>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const handleDeletePress = () => {
      onDeletePress(id, isRecurring);
      if (!isRecurring) {
        fetchList();
      }
      vibrate('selection');
    };

    return (
      <>
        <ActionButton icon={Trash} scale={scale} onPress={handleDeletePress} />
      </>
    );
  };

  const onCheckPressHandler = () => {
    vibrate();
    onCheckPress(id, Boolean(!isDone));
    fetchList();
  };

  const onEasyRemovePress = () => {
    vibrate();
    onDeletePress(id, isRecurring);
    fetchList();
  };

  const deadlineStart = startDate && formatDate(startDate, 'LT');
  const deadlineEnd = endDate && formatDate(endDate, 'LT');

  const tagsForRender: TagsResponseItem[] = useMemo(
    () => prepareTagsForRender(tags, allTags),
    [allTags, tags],
  );

  return (
    <View style={style.outerContainer}>
      <Swipeable
        ref={swipeRef}
        onActivated={() => setSwiping(true)}
        onSwipeableClose={() => setSwiping(false)}
        renderRightActions={rightSwipe}
        shouldCancelWhenOutside>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (!swiping) {
              onItemPress(id);
            }
          }}
          style={style.container}>
          <View style={style.contentWrapper}>
            <View style={style.checkmarkWrapper}>
              <CustomCheckbox
                defaultColor={theme.TEXT_INFO}
                onPress={onCheckPressHandler}
                checked={checked}
              />
            </View>
            <View style={style.textWrapper}>
              {Boolean(tagsForRender.length) && (
                <View style={style.tagsWrapper}>
                  {tagsForRender.map(({ color, _id }) => (
                    <View
                      key={_id}
                      style={{ ...style.tag, backgroundColor: color }}
                    />
                  ))}
                </View>
              )}
              <Text style={[style.title, style.crossedTextStyles]}>{name}</Text>
              {hasDeadline && (
                <Text style={[style.time, style.crossedTextStyles]}>
                  {deadlineStart} - {deadlineEnd}
                </Text>
              )}
            </View>
          </View>
          {checked && !isRecurring && (
            <View style={style.deleteBtnWrapper}>
              <TouchableOpacity
                onPress={onEasyRemovePress}
                style={style.deleteBtn}>
                <Cross width={8} height={8} />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      </Swipeable>
      <View style={style.outsideBackground} />
    </View>
  );
};

export const MemoizedListItem = React.memo(ListItem, customComparator);
