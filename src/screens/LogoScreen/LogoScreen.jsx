import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import getStyles from './LogoScreen.styles';

const LogoScreen = ({}) => {
    const styles = getStyles();
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
};

export default LogoScreen;
