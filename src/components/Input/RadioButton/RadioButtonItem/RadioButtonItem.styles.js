import { StyleSheet } from 'react-native';

const CIRCLE_SIZE = 20;
const INNER_CIRCLE_SIZE = 15;
const text = {
  lineHeight: CIRCLE_SIZE,
  paddingHorizontal: 5,
};
const container = {
  justifyContent: 'center',
  alignItems: 'center',
};
const circle = {
  width: CIRCLE_SIZE,
  height: CIRCLE_SIZE,
  borderRadius: CIRCLE_SIZE / 2,
  borderWidth: 1,
  ...container,
};
const innerCircle = {
  width: INNER_CIRCLE_SIZE,
  height: INNER_CIRCLE_SIZE,
  padding: 5 / 2,
  borderRadius: INNER_CIRCLE_SIZE / 2,
};

export default StyleSheet.create({
  container,
  mainContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    ...text,
    textAlign: 'center',
  },
  circle: {
    ...circle,
  },
  innerCircle: {
    ...innerCircle,
  },
});
