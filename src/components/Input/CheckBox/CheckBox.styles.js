import { StyleSheet } from 'react-native';

const BOX_SIZE = 16;
const BOX_RADIUS = 2;
const WORD = {
    center: 'center',
    row: 'row',
    spaceBetween: 'space-between',
    flexStart: 'flex-start',
  };
const container = {
  justifyContent: WORD.center,
  alignItems: WORD.center,
};
const boxCore = {
  width: BOX_SIZE,
  height: BOX_SIZE,
  borderRadius: BOX_RADIUS,
  borderWidth: 1,
  ...container,
  marginVertical: 5,
};

export default StyleSheet.create({
  container,
  mainContainer: {
    alignSelf: WORD.flexStart,
    flexDirection: WORD.row,
    paddingHorizontal: 8,
    height: 40,
    width: '100%',
  },
  box: {
    ...boxCore,
  },
  text: {
    marginLeft: 8,
  },
});
