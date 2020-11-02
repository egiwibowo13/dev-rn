
import { bool } from 'prop-types';
import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

type DirectionType = 'column' | 'row';
type OptionItemType = {
    key: string,
    title: string,
    disabled: boolean,
}
type ChangeMapType = {
    key: string,
    title: string,
}

interface RadioButtonProps {
    options: Array<OptionItemType>,
    activeKey: string,
    label: string,
    required: boolean,
    direction: DirectionType,
    onPressItem: () => void,
    error: string,
    changeMap: ChangeMapType,
}

export const RadioButton: React.FC<RadioButtonProps>;


interface RadioButtonItemProps {
    disabled: boolean,
    customContainer: StyleProp<ViewStyle>,
    customText: StyleProp<TextStyle>,
    title: string,
    onPress: () => void,
    selected: boolean,
    error: boolean,
}

export const RadioButtonItem: React.FC<RadioButtonItemProps>;
