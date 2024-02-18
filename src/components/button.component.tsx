import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button as RNPButton } from 'react-native-paper';

import { Icon, IconName } from './icon.component';

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

  const renderIcon = (iconProps: RNPIconProps): React.ReactElement => (
    <Icon
      {...iconProps}
      name={icon as IconName}
    />
  );

  return (
    <RNPButton
      {...props as RNPButtonProps}
      icon={renderIcon}>
      {title}
    </RNPButton>
  );
};
