import React from 'react';
import { ViewProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type IconName =
  | 'back'
  | 'share'
  | 'close';

/**
 * @see https://icons.expo.fyi
 */
export const ICON_MAP: Record<IconName, string> = {
  'back': 'arrow-back',
  'share': 'share',
  'close': 'close',
};

export interface IconProps extends ViewProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => (
  <MaterialIcons
    {...props}
    name={ICON_MAP[name]}
    size={24}
  />
);
