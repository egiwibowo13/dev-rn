
import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

type StateType = 'active' | 'disabled' | 'loading';
type SizeType = 'small' | 'medium' | 'large';
type WidhtType = 'sort' | 'almost' | 'long' | 'full-width';
type TypeButton = 'contained' | 'outlined' | 'primary' | 'secondary' | 'nude';
type IconPositionType = 'left' | 'right';
type IconNode = React.ReactElement;


interface ButtonProps {

    state?: StateType,
    title?: string,
    size?: SizeType,
    width?: WidhtType,
    isUpperCase?: boolean,
    type?: TypeButton,
    iconPosition?: IconPositionType,
    icon?:IconNode,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>, 
}

export const Button: React.FC<ButtonProps>;