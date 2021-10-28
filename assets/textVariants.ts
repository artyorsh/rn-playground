/**
 *
100    Extra Light or Ultra Light
200    Light or Thin
300    Book or Demi
400    Regular or Normal
500    Medium
600    Semibold, Demibold
700    Bold
800    Black, Extra Bold or Heavy
900    Extra Black, Fat, Poster or Ultra Black
 */

export const fontFamilies = {
  light: 'Barlow-Light',
  regular: 'Barlow-Regular',
  medium: 'Barlow-Medium',
  bold: 'Barlow-Bold',
  semiBold: 'Barlow-SemiBold',
} as const;

export const textVariants = {
  h1: {
    fontFamily: fontFamilies.bold,
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 38,
    letterSpacing: 0,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h2: {
    fontFamily: fontFamilies.bold,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h3: {
    fontFamily: fontFamilies.bold,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 0,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h4: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h5: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  h6: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  titleTopNav: {
    fontFamily: fontFamilies.semiBold,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  titleMd: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  body: {
    fontFamily: fontFamilies.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  label: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  captions1: {
    fontFamily: fontFamilies.regular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.6,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  captions2: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.3,
    color: 'typography',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  link: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.5,
    color: 'typographyLinks',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  itemTitle: {
    fontFamily: fontFamilies.medium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 3,
    color: 'typography',
    textTransform: 'uppercase',
  },
} as const;

export type TextVariant = keyof typeof textVariants;
