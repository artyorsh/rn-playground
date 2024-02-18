import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { Text as RNPText } from 'react-native-paper';

export interface TextProps extends RNTextProps {
  category?: TextCategory;
}

type TextCategory =
    | 'heading'
    | 'subheading'
    | 'paragraph'
    | 'subparagraph'
    | 'label';

const CATEGORY_VARIANT_MAP: Record<TextCategory, string> = {
  'heading': 'headlineSmall',
  'subheading': 'titleMedium',
  'paragraph': 'bodyMedium',
  'subparagraph': 'bodySmall',
  'label': 'labelLarge',
};

export const Text: React.FC<TextProps> = ({ children, category, ...props }) => (
  <RNPText
    {...props}
    variant={CATEGORY_VARIANT_MAP[category as TextCategory] as any}>
    {children}
  </RNPText>
);

Text.defaultProps = {
  category: 'paragraph',
};
