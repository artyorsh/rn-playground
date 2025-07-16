import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';

import { IconName, Icons } from './icon.component';

export interface ButtonProps extends TouchableOpacityProps {
  type?:
  | 'filled'
  | 'ghost';
  title?: string;
  icon?: IconName;
}

type RNPIconProps = { color: string };

type RNPButtonProps = React.ComponentProps<typeof RNPButton>;

export const Button: React.FC<ButtonProps> = ({ title, icon, ...props }) => {

  const renderIcon = (iconProps: RNPIconProps): React.ReactElement => {
    const IconComponent = Icons[icon as IconName];

    return (
      <IconComponent
        {...iconProps}
      />
    );
  };

  return (
    <RNPButton
      {...props as RNPButtonProps}
      icon={icon && renderIcon}>
      {title}
    </RNPButton>
  );
};
