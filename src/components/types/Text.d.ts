
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

interface TextProps {
    style?: StyleProp<TextStyle>,
    testID?: string
}

export const Text: React.FC<TextProps>;
