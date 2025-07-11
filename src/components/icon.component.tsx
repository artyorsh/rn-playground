import React from 'react';
import { IconProps as ExpoIconProps } from '@expo/vector-icons/build/createIconSet';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type IconName = keyof typeof Icons;
export type IconProps = Omit<ExpoIconProps<any>, 'name'>;

const IconComponent = MaterialIcons;

/**
 * @see https://icons.expo.fyi
 */
export const Icons = {
  Back: (props: IconProps) => React.createElement(IconComponent, { ...props, name: 'arrow-back' }),
  Close: (props: IconProps) => React.createElement(IconComponent, { ...props, name: 'close' }),
  Share: (props: IconProps) => React.createElement(IconComponent, { ...props, name: 'share' }),
};
