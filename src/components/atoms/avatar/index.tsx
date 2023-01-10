import React from 'react';
import * as S from './styles';

const Avatar: React.FunctionComponent<S.IAvatarTheme & S.IAvatarNotify> = (
  props
) => {
  const {
    avatarTheme = 'transparent',
    showNotification = false,
    notificationStatus = 'Cod',
    ...rest
  } = props;

  return (
    <S.AvatarWrapper
      showNotification={showNotification}
      avatarTheme={avatarTheme}
      {...rest}
    >
      <S.AvatarIcon iconName='BiUser' />

      {showNotification && (
        <S.NotificationIconWrapper notificationStatus={notificationStatus}>
          <S.NotificationIcon iconName='BiBell' size='6px' />
        </S.NotificationIconWrapper>
      )}
    </S.AvatarWrapper>
  );
};

export default Avatar;
