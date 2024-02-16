import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

export interface TextProps extends RNTextProps {
  category?:
    | 'heading'
    | 'subheading'
    | 'paragraph'
    | 'subparagraph'
}

export const Text: React.FC<TextProps> = ({ category, ...props }) => {
  return (
    <RNText 
      {...props}
      style={[styles[category!], props.style]}
    />
  );
}; 

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 'normal',
  },
  subparagraph: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
  },
});

Text.defaultProps = {
  category: 'paragraph',
};