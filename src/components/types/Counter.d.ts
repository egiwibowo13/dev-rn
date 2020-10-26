
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface CounterProps {
    value?: number,
    minValue?: number,
    maxValue?: number,
    label?: string,
    onChangeValue?: () => void,
    customContainerStyle?: StyleProp<ViewStyle>
}

export const Counter: React.FC<CounterProps>;
