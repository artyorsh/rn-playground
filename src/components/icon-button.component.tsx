import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconButton as RNPIconButton } from 'react-native-paper';
import { Icon, IconName } from './icon.component';

export interface IconButtonProps extends TouchableOpacityProps {
  icon: IconName;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {

  const renderIcon = (iconProps): React.ReactElement => (
    <Icon {...iconProps} name={icon} />
  );

  return (
    <RNPIconButton
      {...props}
      mode='contained'
      icon={renderIcon}
    />
  );
};

