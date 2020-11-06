
import React from 'react';

type IconProps = {
    color: string,
    width: string | number,
    height: string | number,
}

interface TooltipProps {
    icon: React.ReactElement,
    title: string,
    message: string,
    iconProps?: IconProps,
    onOpenModal?: () => void,
    onCloseModal?: () => void
}

export const Tooltip: React.FC<TooltipProps>;
