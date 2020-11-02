import { StyleSheet } from 'react-native';
import {
  colors,
} from '../../../utils/theme';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  circleDisable: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.eventInactive,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleEnable: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.basePrimaryMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flContainer: {
    width: 50,
    marginHorizontal: 10,
  },
  flTextInput: {
    width: 48,
    height: 40,
    marginTop: 0,
  },
});
