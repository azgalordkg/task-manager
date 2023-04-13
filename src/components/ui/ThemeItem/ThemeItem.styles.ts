import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';
import { addAlpha } from '@/utils';

import { Props } from './ThemeItem.types';

const styles = ({
  headerBackgroundColor,
  bodyBackgroundColor,
  titleColor,
}: Partial<Props>) =>
  StyleSheet.create({
    title: {
      color: titleColor || COLORS.WHITE,
      fontSize: 16,
      fontWeight: '600',
    },
    header: {
      backgroundColor: headerBackgroundColor,
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderTopRightRadius: 12,
      borderTopLeftRadius: 12,
    },
    body: {
      columnGap: 10,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 18,
      backgroundColor: bodyBackgroundColor || COLORS.BLACK_DARK,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: COLORS.DARK,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    contentMock: {
      flexGrow: 1,
      rowGap: 6,
    },
    contentMockItem: {
      backgroundColor: addAlpha(COLORS.GREY_LIGHT, 0.2),
      height: 5,
      width: '100%',
    },
  });

export default styles;
