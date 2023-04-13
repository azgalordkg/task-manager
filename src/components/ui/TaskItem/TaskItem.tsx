import { isEqual } from 'lodash';
import React, { FC, useMemo, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import OutsidePressHandler from 'react-native-outside-press';

import { Calendar, Trash } from '@/components/icons';
import { ActionButton, CustomCheckbox } from '@/components/ui';
import { COLORS } from '@/constants';
import {
  useTagManageContext,
  useTaskModalContext,
  useThemeContext,
} from '@/context/hooks';
import { TagsResponseItem } from '@/types';
import {
  formatDate,
  getPriorityObject,
  prepareTagsForRender,
  vibrate,
} from '@/utils';

import styles from './TaskItem.styles';
import { ListItemProps } from './TaskItem.types';

const customComparator = (
  prevProps: ListItemProps,
  nextProps: ListItemProps,
) => {
  return isEqual(prevProps, nextProps);
};

export const TaskItem: FC<ListItemProps> = ({
  name,
  tags,
  checked,
  onCheckPress,
  onDeletePress,
  startDate,
  isLast,
  onItemPress,
  hasDeadline,
  id,
  isDone,
  repeat,
  description,
  priority,
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
      onDeletePress(id);
      if (!isRecurring) {
        fetchList();
      }
      vibrate('selection');
    };

    return (
      <ActionButton icon={Trash} scale={scale} onPress={handleDeletePress} />
    );
  };

  const onCheckPressHandler = () => {
    vibrate();
    onCheckPress(id, Boolean(!isDone));
    fetchList();
  };

  const onEasyRemovePress = () => {
    vibrate();
    onDeletePress(id, true);
    fetchList();
  };

  const deadlineStart = startDate && formatDate(startDate, 'LT');

  const tagsForRender: TagsResponseItem[] = useMemo(
    () => prepareTagsForRender(tags, allTags),
    [allTags, tags],
  );

  const { color: priorityColor } = getPriorityObject(priority);
  const checkmarkColor =
    priorityColor === COLORS.WHITE ? COLORS.BLACK_DARK : undefined;

  return (
    <View style={style.outerContainer}>
      <OutsidePressHandler
        onOutsidePress={() => {
          swipeRef.current?.close();
        }}
        disabled={false}>
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
            <View style={style.mainWrapper}>
              <CustomCheckbox
                defaultColor={priorityColor}
                checkedColor={priorityColor}
                checkmarkColor={checkmarkColor}
                onPress={onCheckPressHandler}
                checked={checked}
                size={24}
                type="filled"
              />
              <View style={style.textWrapper}>
                <Text style={[style.title, style.crossedTextStyles]}>
                  {name}
                </Text>
                {description && (
                  <Text
                    numberOfLines={1}
                    style={[style.description, style.crossedTextStyles]}>
                    {description}
                  </Text>
                )}
                {hasDeadline && (
                  <View style={style.timeContainer}>
                    <Calendar height={14} width={14} color={COLORS.GREEN} />

                    <Text style={[style.time, style.crossedTextStyles]}>
                      {deadlineStart}
                    </Text>
                  </View>
                )}

                {Boolean(tagsForRender.length) && (
                  <View style={style.tagsWrapper}>
                    {tagsForRender.map(({ color, name: tagTitle, _id }) => (
                      <Text
                        key={_id}
                        style={{ ...style.tagText, color: color }}>
                        {tagTitle}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </View>
            {checked && !isRecurring && (
              <View style={style.deleteBtnWrapper}>
                <TouchableOpacity onPress={onEasyRemovePress}>
                  <Trash color={theme.ICONS.SECONDARY} width={20} height={20} />
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </Swipeable>
      </OutsidePressHandler>
      <View style={style.outsideBackground} />
    </View>
  );
};

export const MemoizedListItem = React.memo(TaskItem, customComparator);
