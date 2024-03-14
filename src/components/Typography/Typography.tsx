import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import getStyles from './Typography.styles';

interface ITypography extends TextProps {
  children: string;
  size?: number;
  style?: TextStyle;
}

export default function Typography({ children, size, style }: ITypography) {
  const styles = getStyles();

  const styledText = {
    fontSize: size,
    color: '#fff',
    ...style,
  };

  return <Text style={[styles.text, styledText]}>{children}</Text>;
}
