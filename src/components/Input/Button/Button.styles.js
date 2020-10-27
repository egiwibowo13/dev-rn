import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';

const buttonSize = {
  'small': 28,
  'medium': 38,
  'large': 48,
};

const buttonWidht = {
  'sort': 110,
  'almost': 136,
  'long': 205,
  'full-width': '100%',
};

export const getContainerStyle = ({ size, width, type, theme }) => {
  const widthContainer = buttonWidht[width];
  const heightContainer = buttonSize[size];
  const buttonStyle = { width: widthContainer, height: heightContainer, borderRadius: 25 };
  const containerStyle = [styles.container];
  const containerDisabled = [styles.container];
  if (type === 'contained' || type === 'primary') {
    containerStyle.push({
      ...styles.shadow,
      ...buttonStyle,
      backgroundColor: theme.colors.basePrimaryMain,
    });
    containerDisabled.push({
      ...styles.shadow,
      ...buttonStyle,
      backgroundColor: theme.colors.eventInactive,
    });
  } else if (type === 'outlined' || type === 'secondary') {
    const styleOutline = {
      ...styles.shadow,
      ...buttonStyle,
      backgroundColor: theme.colors.white,
      borderWidth: type === 'outlined' ? 1 : 0,
    };
    containerStyle.push({
      ...styleOutline,
      borderColor: theme.colors.basePrimaryMain,
    });
    containerDisabled.push({
      ...styleOutline,
      borderColor: theme.colors.eventInactive,
    });
  } else {
    const styleNude = {
      backgroundColor: theme.colors.transparent,
      paddingVertical: 4,
      alignSelf: 'flex-start',
      paddingHorizontal: 3,
    };
    containerStyle.push(styleNude);
    containerDisabled.push(styleNude);
  }
  return { containerStyle, containerDisabled };
};


export const getTextStyle = ({ type, theme }) => {
  const textStyle = [styles.title];
  const textStyleDisabled = [styles.title];
  if (type === 'contained' || type === 'primary') {
    textStyle.push({
      color: theme.colors.white,
    });
  } else {
    textStyle.push({
      color: theme.colors.basePrimaryMain,
    });
    textStyleDisabled.push({
      color: theme.colors.eventInactive,
    });
  }
  return { textStyle, textStyleDisabled };
};


export const getIconColor = ({ type, theme }) => {
  let icColor = theme.colors.basePrimaryMain;
  let icColorDisabled = theme.colors.eventInactive;
  if (type === 'contained' || type === 'primary') {
    icColor = theme.colors.white;
    icColorDisabled = theme.colors.white;
  }
  return { icColor, icColorDisabled };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  iconStyle: {
    paddingHorizontal: 5,
  },
  shadow: {
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});

export default styles;
