import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewProps } from 'react-native';

export interface IconButtonProps extends TouchableOpacityProps {
  icon: React.FC<ViewProps>;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <TouchableOpacity 
      {...props}
      style={[styles.container, props.style]}>
      {icon({ style: styles.icon })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});