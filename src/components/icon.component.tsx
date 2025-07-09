import React from 'react';
import { ViewProps } from 'react-native';

export type IconName =
  | 'back'
  | 'share'
  | 'close';

/**
 * @see https://pictogrammers.com/library/mdi
 */
export const ICON_MAP: Record<IconName, string> = {
  'back': 'arrow-left',
  'share': 'share-variant',
  'close': 'close',
};

export interface IconProps extends ViewProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => null;
