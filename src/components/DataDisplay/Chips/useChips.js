import { useState } from 'react';

const useChips = () => {
  const [listItems, setListItems] = useState([]);
  const [value, setValue] = useState({});

  const activateItem = (_data, _index) => {
    const nData = _data.map((item, index) => ({ ...item, isActive: index === _index }));
    return nData;
  };

  const onPressItem = async (_item, _index) => {
    setValue(_item);
    setListItems(activateItem(listItems, _index));
  };

  return {
    value,
    setValue,
    listItems,
    bind: {
      chipsData: {
        listItems
      },
      state: {
        setListItems,
        activateItem
      },
      func: {
        onPressItem
      }
    }
  };
};

export { useChips };
export default { useChips };
