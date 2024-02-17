import React from 'react';

import { ProgressBar } from './progress-bar.component';

interface Props {
  loading: boolean;
  children: React.ReactNode;
}

export const Loading: React.FC<Props> = ({ loading, children }) => (
  <>
    {loading ? <ProgressBar /> : children}
  </>
);
