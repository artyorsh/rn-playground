import React from 'react';
import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native';

export const Button: React.FC<RNButtonProps> = (props) => {
  return (
    <RNButton {...props} />
  );
}