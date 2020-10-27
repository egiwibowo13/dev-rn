import {StyleSheet} from 'react-native';
import {useThemeContext} from '../../../utils/ThemeContext';

const WIDTH = '100%';

/**
 *
 * @param {{
 *    type: 'outlined' | 'ghost',
 * }} props
 */
const FieldLabelStyle = ({type}) => {
  const context = useThemeContext();

  let typeStyle = {};
  if (type === 'outlined') {
    typeStyle = {
      borderRadius: 5,
      borderWidth: 0.5,
      backgroundColor: context.colors.white,
    };
  } else {
    typeStyle = {
      borderBottomWidth: 0.8,
      backgroundColor: context.colors.transparent,
    };
  }

  const containerStyleBase = {
    ...typeStyle,
    width: WIDTH,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  };

  const style = StyleSheet.create({
    container: {
      width: WIDTH,
    },
    containerStyle: {
      ...containerStyleBase,
      borderColor: context.colors.eventInactive,
    },
    disabledContainerStyle: {
      ...containerStyleBase,
      borderColor: context.colors.eventInactive,
      backgroundColor: context.colors.eventInactive,
    },
    errContainerStyle: {
      ...containerStyleBase,
      borderColor: context.colors.eventError,
    },
    textInputStyle: {
      flex: 1,
      ...context.typography.body1,
      color: context.colors.fontPrimaryDark,
      paddingLeft: 8,
    },
    required: {
      color: context.colors.basePrimaryMain,
    },
    iconWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
      height: '100%',
      paddingHorizontal: 16,
    },
    textExtWrapper: {
      height: '100%',
      minWidth: 50,
      paddingHorizontal: 16,
      backgroundColor: context.colors.greyLight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textExt: {
      paddingHorizontal: 2,
      color: context.colors.fontPrimaryDark,
    },
    textError: {
      color: context.colors.eventError,
    },
  });

  return {
    ...style,
    placeholderTextColor: context.colors.grey,
    iconColor: context.colors.basePrimaryMain,
  };
};

export default FieldLabelStyle;
