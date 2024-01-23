import {createTheme, useTheme as useRestyleTheme} from '@shopify/restyle';
import {Platform} from 'react-native';
import colors from './colors';
import {shadowVariants} from './shadows';
import spacing from './spacing';
import {TextVariant, textVariants} from './textVariants';

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
      activeBackground: colors.tlBlue50,
      disabledOutline: colors.primary100,
      tableRowHighlight: colors.tlBlue50,
      activeBadge: colors.petrol,
      iconLightBackground: colors.primary50,
      // layout colors
      shadow: colors.primary100,
      bottomSheetModalShadow: colors.primary400,
      outline: colors.tlBlue100,
      typography: colors.primary900,
      typographySecondary: colors.primary700,
      typographyTertiary: colors.primary500,
      typographyLinks: colors.tlBlue500,
      typographyDisabled: colors.primary600,
      surface: colors.white,
      overlay: colors.black,
      overlayTransparent: colors.blackTransparent,
      overlayTransparentLight: colors.blackTransparentLight,
      lightBackground: colors.primary50,
      applePay: colors.black,
      applePayDisabled: colors.primary300,
      googlePay: colors.black,
      googlePayDisabled: colors.primary300,
      facebookBlue: colors.facebookBlue,
      icon: colors.tlBlue200,
      // badge colors
      expertTalk: colors.purple400,
      goodToKnow: colors.orange400,
      highlight: colors.green400,
      // feedback colors
      positive: colors.green500,
      successBadge: colors.green500,
      negative: colors.red400,
      danger: colors.red400,
      error: colors.red400,
      warning: colors.orange400,
      information: colors.tlBlue500,
      informationSecondary: colors.tlBlue200,
      success: colors.green400,
      successLight: colors.green200,
      // graph colors
      walletGraph: colors.green400,
      doughnutGraphSegment1: colors.tlBlue100,
      doughnutGraphSegment2: colors.tlBlue200,
      doughnutGraphSegment3: colors.tlBlue300,
      chartLineMarketValues: colors.purple800,
      chartLineMarketValuesText: colors.purple800,
      chartLineTradingValues: colors.tlBlue300,
      chartLineTradingValuesText: colors.tlBlue400,
      // skeleton colors
      skeletonBase: colors.primary100,
      skeletonHighlight: colors.skeletonHighlight,
      brightOrange: colors.orange300,
    },
    spacing: {
      base: spacing.base * scaleFactor,
      xxs: spacing.xxs * scaleFactor,
      xs: spacing.xs * scaleFactor,
      s: spacing.s * scaleFactor,
      m: spacing.m * scaleFactor,
      l: spacing.l * scaleFactor,
      xl: spacing.xl * scaleFactor,
      xxl: spacing.xxl * scaleFactor,
      // 12px padding
      inputPadding: spacing.xxs * 3 * scaleFactor,
      formElementHeight: spacing.base * 12 * scaleFactor,
      formElementHeightReduced: spacing.base * 10 * scaleFactor,
    },
    iconSize: {
      xs: 16 * scaleFactor,
      s: 20 * scaleFactor,
      m: 24 * scaleFactor,
      l: 32 * scaleFactor,
      xl: 36 * scaleFactor,
      xxl: 40 * scaleFactor,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
    textVariants,
    shadowVariants,
    borderRadii: {
      xs: 4 * scaleFactor,
      s: 8 * scaleFactor,
      m: 12 * scaleFactor,
      l: 16 * scaleFactor,
      xl: 24 * scaleFactor,
      iconBgRadius: 50,
    },
  });
};

export type Theme = ReturnType<typeof createTimelessTheme>;
export type ThemeColor = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export type ThemeBorderRadius = keyof Theme['borderRadii'];
export type ThemeFontWeight = (typeof textVariants)[TextVariant]['fontWeight'];
export default createTimelessTheme;

export const useTheme = () => useRestyleTheme<Theme>();
