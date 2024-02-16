import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export interface CardProps extends TouchableOpacityProps {

}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <TouchableOpacity 
      {...props}
      activeOpacity={0.85}
      style={[styles.container, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
});