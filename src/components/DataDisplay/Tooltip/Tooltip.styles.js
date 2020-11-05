import { StyleSheet } from 'react-native';

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
    flex: 1,
    padding: 8
  },
  message: {
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
