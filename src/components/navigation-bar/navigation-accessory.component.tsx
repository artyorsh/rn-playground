import React from 'react';

import { IconButton, IconButtonProps } from '../icon-button.component';

export const NavigationBarBackAccessory: React.FC<Omit<IconButtonProps, 'icon'>> = (props) => (
  <IconButton
    {...props}
    icon='back'
  />
);

export const NavigationBarShareAccessory: React.FC<Omit<IconButtonProps, 'icon'>> = (props) => (
  <IconButton
    {...props}
    icon='share'
  />
);
