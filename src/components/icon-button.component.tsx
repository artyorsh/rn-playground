import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconButton as RNPIconButton } from 'react-native-paper';

import { Icon, IconName } from './icon.component';

export interface IconButtonProps extends TouchableOpacityProps {
  icon: IconName;
}

type RNPIconProps = { color: string };

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {

  const renderIcon = (iconProps: RNPIconProps): React.ReactElement => (
    <Icon
      {...iconProps}
      name={icon}
    />
  );

  return (
    <RNPIconButton
      {...props}
      mode='contained'
      icon={renderIcon}
    />
  );
};

