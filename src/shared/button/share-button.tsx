import React, { memo, FC } from 'react';
import Share from 'react-native-share';

import { StyleProp, ViewStyle } from 'react-native';
import { Button } from './button';
import { useTranslation } from 'react-i18next';

interface ShareButtonProps {
  url: string;
  style: StyleProp<ViewStyle>;
}

export const ShareButton: FC<ShareButtonProps> = memo(({ url, style }) => {
  const { t } = useTranslation();
  const share = () => {
    Share.open({
      url,
    });
  };

  return (
    <Button style={style} size="big" onPress={share}>
      {t('ACTIONS_SHARE_APP')}
    </Button>
  );
});
