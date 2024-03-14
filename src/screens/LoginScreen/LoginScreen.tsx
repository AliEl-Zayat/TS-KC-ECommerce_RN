import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import getStyles from './LoginScreen.styles';

type TLoginScreenProps = {};

const LoginScreen = ({}:TLoginScreenProps) => {
    const styles = getStyles();
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
};

export default LoginScreen;
