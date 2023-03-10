import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants';

import { Props } from './CustomButton.types';

const styles = ({
  width,
  fullWidth,
  paddingHorizontal,
  height,
  fontSize,
  type,
  bgColor,
  textColor,
  borderWidth,
  disabled,
}: Partial<Props>) => {
  const isFilled = type === 'filled';
  const isOutlined = type === 'outlined';
  const isClean = type === 'clean';

  return StyleSheet.create({
    button: {
      borderRadius: 10,
      flexDirection: 'row',
      columnGap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '100%',
      width: fullWidth ? '100%' : width,
      paddingHorizontal,
      height: height,
      backgroundColor: (isFilled && bgColor) || 'transparent',
      borderWidth: (isOutlined && borderWidth) || 0,
      borderColor: (isOutlined && bgColor) || 'transparent',
      opacity: (disabled && 0.3) || 1,
    },
    text: {
      fontWeight: '500',
      fontSize: fontSize,
      color:
        (isFilled && textColor) ||
        (isOutlined && bgColor) ||
        (isClean && COLORS.BLACK_DARK) ||
        'transparent',
    },
  });
};

export default styles;
