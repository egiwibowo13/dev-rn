
import React from 'react';
import { ViewStyle } from 'react-native';

type SizeType = 'large' | 'medium' | 'small';
type IconNode = React.ReactElement;


interface IconProps {
    icon?: IconNode,
    color?: string,
    testID?: string,
    size? :SizeType,
    onPress: () => void,
    disabled?: boolean
}

export const Icon: React.FC<IconProps>;