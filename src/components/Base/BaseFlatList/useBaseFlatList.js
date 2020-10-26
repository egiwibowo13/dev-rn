import { useState, useEffect } from 'react';
import { noop, isEmpty, isObjectEmpty } from '../../../utils';

const useBaseFlatList = (onLoadMore = noop, onPullDown = noop, meta) => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const keyExtractor = (_item, index) => index.toString();

  const getItemLayout = (_item, index) => ({ length: 40, offset: 40 * index, index });

  const getShowFooter = () => {
    if (!isEmpty(meta) && !isObjectEmpty(meta)) {
      const { totalData, size } = meta;
      return isLoadMore && totalData > size;
    }
    return false;
  };

  const getIsLastPage = () => {
    if (!isEmpty(meta) && !isObjectEmpty(meta)) {
      const { page, totalPage } = meta;
      return page === totalPage;
    }
    return true;
  };

  const onLoadMoreExecute = async (page) => {
    const isLastPage = getIsLastPage();
    const nextPage = isLastPage ? page : page + 1;
    onLoadMore({ nextPage, isLastPage });
  };

  const onEndReached = async () => {
    if (!isEmpty(meta) && !isObjectEmpty(meta)) {
      const { page, totalPage } = meta;
      if (!isLoadMore && page < totalPage) {
        setIsLoadMore(true);
        onLoadMoreExecute(page);
      }
    }
  };

  const onRefresh = async () => {
    await setIsRefresh(true);
    await onPullDown();
    await setIsRefresh(false);
  };

  useEffect(() => {
    if (!isEmpty(meta) && !isObjectEmpty(meta)) {
      setIsLoadMore(false);
    }
  }, [meta]);

  return {
    isRefresh,
    keyExtractor,
    getItemLayout,
    onEndReached,
    onRefresh,
    showFooter: getShowFooter(),
  };
};

export default useBaseFlatList;
