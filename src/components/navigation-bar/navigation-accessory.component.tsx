import React from 'react';
import { IconButton, IconButtonProps } from '../icon-button.component';
import { Text } from '../text.component';

export const NavigationBarBackAccessory: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton 
      {...props}
      icon={() => <Text>Back</Text>}
    />
  );
};

export const NavigationBarShareAccessory: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton 
      {...props}
      icon={() => <Text>Share</Text>}
    />
  );
};
