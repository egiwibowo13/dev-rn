import React from 'react';


interface ListProps {
    data?: Array,
    renderItem?: React.ReactElement,
    onLoadMore?: () => void,
    onPullDown?: () => void
}

export const List: React.FC<ListProps>;