import color from 'color';
import {TouchableNativeFeedback} from 'react-native';

export const primaryColor = '#00BCD4';

export const darkenPrimaryColor = color(primaryColor).darken(0.2);

export const lightenPrimaryColor = color(primaryColor).lighten(0.1);

export const accentColor = '#ffeb3b';

export const textColor = 'rgba(0, 0, 0, 0.541176)';

export const disabledTextColor = 'rgba(0, 0, 0, 0.34)';

export const defaultRippleColor = TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.11)', true);

export const defaultRippleColorRGBA = 'rgba(0, 0, 0, 0.11)'

export const additionalColors = [
  '#80deea',
  '#80cbc4',
  '#a5d6a7',
  '#e57373'
];
