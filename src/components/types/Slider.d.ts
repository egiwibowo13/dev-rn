
import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

interface SliderProps {
    value: number,
    minimum: number,
    maximum: number,
    step: number,
    label: string,
    required: boolean,
    onValueChange: () => void,
    error: string,
    formatter: () => string,
    onValidate: () => void,
    testID: string,
    labelStyle?: StyleProp<TextStyle>,
    errorStyle?: StyleProp<TextStyle>
}

export const Slider: React.FC<SliderProps>;
