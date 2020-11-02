import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../utils/theme';

const colorBackdrop = 'rgba(52, 52, 52, 0.8)';
export default StyleSheet.create({
  container: {
    height: 16,
    width: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  title: {
    ...typography.subtitle1,
    color: colors.fontPrimaryDark,
    flex: 1,
    padding: 8
  },
  message: {
    ...typography.body2,
    color: colors.fontPrimaryDark,
    flex: 1,
    padding: 8,
    marginBottom: 16
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorBackdrop
  },
  popupContainerModal: {
    width: '100%',
    alignSelf: 'baseline',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 16
  },
  containerButton: {
    flex: 1,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
