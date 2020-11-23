import { StyleSheet } from 'react-native';
import {
  COLOR_BACKGROUND_INACTIVE,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_WHITE,
  FONT_OVERLINE_PRIMARY_MEDIUM
} from '@styles';

export default StyleSheet.create({
  containerActive: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 5,
    marginRight: 12,
    borderColor: COLOR_BASE_PRIMARY_DARK,
    borderWidth: 1,
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT
  },
  containerNormal: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 5,
    marginRight: 12,
    borderColor: COLOR_BACKGROUND_INACTIVE,
    borderWidth: 0.5,
    backgroundColor: COLOR_WHITE
  },
  text: {
    ...FONT_OVERLINE_PRIMARY_MEDIUM,
    textAlign: 'center',
    color: COLOR_BASE_PRIMARY_MAIN
  }
});
