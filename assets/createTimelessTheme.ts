import {createTheme} from '@shopify/restyle';
import {Platform} from 'react-native';
import colors from './colors';
import {shadowVariants} from './shadows';
import spacing from './spacing';
import {textVariants} from './textVariants';
interface DynamicThemeProps {
  scaleFactor?: number;
  mode?: 'light' | 'dark';
}

const createTimelessTheme = ({scaleFactor = 1}: DynamicThemeProps = {}) => {
  return createTheme({
    colors: {
      // brand colors
      tlDarkGray: colors.primary800,
      tlGray: colors.primary700,
      tlLightGray: colors.primary300,
      tlPowderBlue: colors.tlBlue100,
      tlBlue: colors.tlBlue,
      // interaction colors
      active: colors.tlBlue500,
      inactive: colors.primary500,
      hover: colors.tlBlue400,
      textSelection:
        Platform.OS === 'ios' ? colors.tlBlue400 : colors.tlBlue200,
      pressed: colors.tlBlue600,
      disabled: colors.tlBlue100,
      disabledBackground: colors.disabledFillColorLight,
      disabledOutline: colors.primary100,
      error: colors.red400,
      warning: colors.orange400,
      information: colors.tlBlue500,
      informationSecondary: colors.tlBlue200,
      success: colors.green400,
      successLight: colors.green200,
      // layout colors
      shadow: colors.primary100,
      outline: colors.tlBlue100,
      typography: colors.primary900,
      typographySecondary: colors.primary700,
      typographyTertiary: colors.primary500,
      typographyLinks: colors.tlBlue500,
      typographyDisabled: colors.primary600,
      surface: colors.white,
      overlay: colors.black,
      applePay: colors.black,
      applePayDisabled: colors.primary300,
      googlePay: colors.black,
      googlePayDisabled: colors.primary300,
      facebookBlue: colors.facebookBlue,
    },
    spacing: {
      xxs: spacing.xxs * scaleFactor,
      xs: spacing.xs * scaleFactor,
      s: spacing.s * scaleFactor,
      m: spacing.m * scaleFactor,
      l: spacing.l * scaleFactor,
      xl: spacing.xl * scaleFactor,
      xxl: spacing.xxl * scaleFactor,
      // 12px padding
      inputPadding: spacing.xxs * 3 * scaleFactor,
    },
    iconSize: {
      xs: 16 * scaleFactor,
      s: 20 * scaleFactor,
      m: 24 * scaleFactor,
      l: 32 * scaleFactor,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
    textVariants,
    shadowVariants,
  });
};

export type Theme = ReturnType<typeof createTimelessTheme>;
export type ThemeColor = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export default createTimelessTheme;
