import React from 'react';
import { IconButton, IconButtonProps } from '../icon-button.component';
import { Text } from '../text.component';

export const NavigationBarBackAccessory: React.FC<IconButtonProps> = (props) => (
  <IconButton
    {...props}
    icon='back'
  />
);

export const NavigationBarShareAccessory: React.FC<IconButtonProps> = (props) => (
  <IconButton
    {...props}
    icon='share'
  />
);
