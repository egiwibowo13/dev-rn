import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';


interface ChipsProps {

    data?: Array,
    onPress?: () => void
    defaultSelected?: number,
    customTextStyle?: StyleProp<ViewStyle>
    bind: object
}

export const Chips: React.FC<ChipsProps>;