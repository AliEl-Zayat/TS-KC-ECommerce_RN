import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import getStyles from './Button.styles';

type TButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
} & TouchableOpacityProps;

const Button = ({ children, onPress, ...rest }: TButtonProps) => {
  const styles = getStyles();
  return (
    <TouchableOpacity
      {...rest}
      style={[rest.disabled && styles.disabled, rest.style]}
      activeOpacity={0.8}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
