import React from 'react';
import getStyles from './BackButton.styles';
import { Button } from '../common';
import ArrowLeftIcon from '@src/assets/icons/ArrowLeftIcon';
import { useAppNavigation } from '@src/hooks/useAppNavigation';

export default function BackButton() {
  const styles = getStyles();
  const { goBack } = useAppNavigation();

  return (
    <Button style={styles.container} onPress={() => goBack()}>
      <ArrowLeftIcon color={'#fff'} width={20} />
    </Button>
  );
}
