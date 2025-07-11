import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { IconButton as RNPIconButton } from 'react-native-paper';

import { IconName, Icons } from './icon.component';

export interface IconButtonProps extends TouchableOpacityProps {
  icon: IconName;
}

// @see react-native-paper@5.12.3
// https://github.com/callstack/react-native-paper/blob/0d0206d6dd0b60e50aea9a57193ec507ca28aed3/src/components/Icon.tsx#L19
interface RNPIconProps {
  size: number;
  allowFontScaling?: boolean;
  color: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {

  const renderIcon = (iconProps: RNPIconProps): React.ReactElement => {
    const IconComponent = Icons[icon];

    return (
      <IconComponent {...iconProps} />
    );
  };

  return (
    <RNPIconButton
      {...props}
      mode='contained'
      icon={renderIcon}
    />
  );
};

