import { TLoading } from '@src/types';
import React from 'react';
import Typography from '../Typography';
import getStyles from './Loading.styles';

type TLoadingProps = {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
};

export default function Loading({ status, error, children }: TLoadingProps) {
  const styles = getStyles();

  if (status === 'pending') {
    return <Typography>Loading ...</Typography>;
  }

  if (status === 'failed' && typeof error === 'string') {
    return <Typography>{error}</Typography>;
  }

  return <>{children}</>;
}
