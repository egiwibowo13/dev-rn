import React from 'react';


interface BaseFlatListProps {
    data?: Array,
    renderItem?: React.ReactElement,
    onLoadMore?: () => void,
    onPullDown?: () => void
}

export const BaseFlatList: React.FC<BaseFlatListProps>;