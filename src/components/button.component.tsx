import React from 'react';
import { ButtonProps as RNButtonProps } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';
import { Icon, IconName } from './icon.component';

export interface ButtonProps extends RNButtonProps {
  type:
    | 'filled'
    | 'ghost';
  icon: IconName;
}

export const Button: React.FC<RNButtonProps> = ({ title, icon, ...props }) => {

  const renderIcon = (iconProps): React.ReactElement => (
    <Icon {...iconProps} name={icon} />
  );

  return (
    <RNPButton
      {...props}
      icon={renderIcon}>
      {title}
    </RNPButton>
  );
}