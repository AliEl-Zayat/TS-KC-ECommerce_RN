import React from 'react';
import { View,Text } from 'react-native';
import getStyles from './CartSubtotalPrice.styles';

const CartSubtotalPrice = () => {
    const styles = getStyles();

    return (
        <View style={styles.container}>
            <Text>CartSubtotalPrice</Text>
        </View>
    );
}

export default CartSubtotalPrice;
