import React from 'react';
import { ViewProps } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconName =
  | 'back'
  | 'share';

/**
 * @see https://pictogrammers.com/library/mdi
 */
export const ICON_MAP: Record<IconName, string> = {
  'back': 'arrow-left',
  'share': 'share-variant',
};

export interface IconProps extends ViewProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => (
  <MCIcon
    {...props}
    name={ICON_MAP[name]}
  />
);
