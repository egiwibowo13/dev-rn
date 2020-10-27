
import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';


interface CheckBoxProps {

    disabled?: StateType,
    label?: string,
    onPress?: () => void,
    checked: boolean,
    readOnly: boolean,
    containerStyle:  StyleProp<ViewStyle>
}

export const CheckBox: React.FC<CheckBoxProps>;