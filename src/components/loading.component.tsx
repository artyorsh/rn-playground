import React from 'react';
import { Text } from './text.component';
import { ProgressBar } from './progress-bar.component';

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export const Loading: React.FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading ? <ProgressBar /> : children}
    </>
  );
};