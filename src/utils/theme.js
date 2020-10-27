const colors = {
    basePrimaryDark: '#B63792',
    basePrimaryMain: '#B31E72',
    basePrimaryLight: 'rgba(179, 30, 114, 0.07)',
    baseSecondaryDark: '#ba000d',
    baseSecondaryMain: '#FCD41C',
    baseSecondaryLight: '#D6D6D6',

    fontPrimaryDark: '#2E434D',
    fontPrimaryLight: '#8D98AA',

    eventSuccess: '#25974C',
    eventError: '#C72037',
    eventInactive: '#DEE3ED',
    eventInformation: '#69A9FD',
    eventWarning: '#f8e71c',

    white: '#ffffff',
    black: '#000000',
    grey: '#bdbdbd',
    greyLight: '#F5F7FA',
    transparent: 'transparent',
};

const fontFamily = {
    fontPrimaryReguler: 'Ubuntu-Regular',
    fontPrimaryMedium: 'Ubuntu-Medium',
    fontPrimaryLight: 'Ubuntu-Light',
    fontPrimaryBold: 'Ubuntu-Bold',
};

const typography = {
    h1: {
        fontSize: 24,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 36,
    },
    h2: {
        fontSize: 20,
        fontFamily: fontFamily.fontPrimaryBold,
        lineHeight: 30,
    },
    subtitle1: {
        fontSize: 16,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 24,
    },
    subtitle2: {
        fontSize: 14,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 21,
    },
    body1: {
        fontSize: 16,
        fontFamily: fontFamily.fontPrimaryReguler,
        lineHeight: 24,
    },
    body2: {
        fontSize: 14,
        fontFamily: fontFamily.fontPrimaryReguler,
        lineHeight: 21,
    },
    caption: {
        fontSize: 12,
        fontFamily: fontFamily.fontPrimaryReguler,
        lineHeight: 18,
    },
    overline1: {
        fontSize: 10,
        fontFamily: fontFamily.fontPrimaryReguler,
        lineHeight: 15,
    },
    overline2: {
        fontSize: 10,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 15,
    },
    button1: {
        fontSize: 14,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 21,
    },
    button2: {
        fontSize: 10,
        fontFamily: fontFamily.fontPrimaryMedium,
        lineHeight: 21,
    },

};

export const theme = {
    colors, fontFamily, typography
};

export {colors, fontFamily, typography};
