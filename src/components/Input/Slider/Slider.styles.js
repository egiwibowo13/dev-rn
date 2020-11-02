import { StyleSheet, Platform } from 'react-native';

const WIDTH = '100%';

export default StyleSheet.create({
  mainContainer: {
    width: WIDTH,
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  labelSliderContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH,
    flexDirection: 'row',
  },
  labelStyle: {
    marginTop: 15,
    marginBottom: 7,
  },
  valueLabelStyle: {
    marginBottom: 10,
    paddingLeft: Platform.OS === 'ios' ? 0 : 10,
  },
  slider: {
    height: 10,
  },
});
