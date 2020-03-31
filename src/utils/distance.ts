import * as RNLocalize from 'react-native-localize';

export const beautifyDistance = (meters: number) => {
  if (typeof meters !== 'number') {
    return null;
  }

  const km = meters / 1000;

  if (RNLocalize.usesMetricSystem()) {
    return `${km.toFixed(1)}km`;
  }

  const miles = km * 0.62137;

  return `${miles.toFixed(1)}mi`;
};
