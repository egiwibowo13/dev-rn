import { noop } from '@helper/';
import React, { useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Chips.styles';

/**
 *
 * @param {{
 *    data: Array,
 *    onPress: Function,
 *    defaultSelected: number - Base on Index of data,
 *    bind: object,
 *    customTextStyle: StylesProps - For customing Text inside chip
 */
const Chips = props => {
  const { data, bind, onPress, defaultSelected, customTextStyle } = props;

  const {
    chipsData: { listItems = [] } = {},
    state: { setListItems = noop, activateItem = noop } = {},
    func: { onPressItem } = {}
  } = bind;

  useEffect(() => {
    setListItems(activateItem(data, defaultSelected));
  }, []);

  const containerItem = _isActive => (_isActive ? styles.containerActive : styles.containerNormal);

  const _onPressItem = (item, index) => {
    onPressItem(item, index);
    onPress(item);
  };

  return (
    <FlatList
      data={listItems}
      renderItem={({ item, index }) => (
        <TouchableOpacity style={containerItem(item.isActive)} onPress={() => _onPressItem(item, index)}>
          <Text style={[styles.text, customTextStyle]} numberOfLines={1} adjustsFontSizeToFit>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      numColumns={1}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};
export default Chips;

Chips.propTypes = {
  data: PropTypes.array,
  bind: PropTypes.object,
  onPress: PropTypes.func,
  defaultSelected: PropTypes.number,
  customTextStyle: PropTypes.object
};

Chips.defaultProps = {
  data: [],
  bind: {},
  onPress: noop,
  defaultSelected: 0,
  customTextStyle: {}
};
