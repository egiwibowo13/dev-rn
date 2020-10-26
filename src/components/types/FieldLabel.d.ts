
import React from 'react';
import { ViewStyle, StyleProp, TextInputProps, TextStyle } from 'react-native';

type StateType = 'disabled' | 'active';
type TypeFieldLabel = 'outlined' | 'ghost'
type IconNode = React.ReactElement;


interface FieldLabelProps {
    label?: string,
    subLabel?: string,
    placeholder?: string,
    required?: boolean,
    bind?: Object,
    error?: string,
    leftIcon?: IconNode,
    rightIcon?: IconNode,
    prefix?: string,
    suffix?: string,
    type?: TypeFieldLabel,
    state?: StateType,
    onPressIcon: () => void,
    style?: StyleProp<ViewStyle>,
    textInputStyle?: StyleProp<TextStyle>,
    labelStyle?: StyleProp<TextStyle>,
    errorStyle?: StyleProp<TextStyle>
}

export const FieldLabel: React.FC<FieldLabelProps, TextInputProps>;