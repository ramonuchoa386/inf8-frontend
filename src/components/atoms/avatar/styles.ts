import styled, { css } from 'styled-components';
import { ColorPalette } from '../../../styles/theme';
import Icon from '../icon';

export interface IAvatarTheme {
  avatarTheme?: ColorPalette | 'transparent';
}

export interface IAvatarNotify {
  showNotification?: boolean;
  notificationStatus?: Extract<
    ColorPalette,
    'Cod' | 'positive' | 'negative' | 'warning'
  >;
}

export const AvatarIcon = styled(Icon)``;

export const AvatarWrapper = styled.div<
  IAvatarTheme & Pick<IAvatarNotify, 'showNotification'>
>((props) => {
  const { avatarTheme = 'transparent', showNotification = false } = props;

  return css`
    padding: 4px;
    border-radius: calc(100 * ${props.theme.effects.borderRadius});
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;

    ${avatarTheme == 'transparent' &&
    `
    border: 1px solid ${props.theme.colors.Cod};
  `}

    ${avatarTheme !== 'transparent' &&
    `
    background-color: ${props.theme.colors[avatarTheme]};
  `}

  ${showNotification &&
    `
    position: relative;
  `}

  ${AvatarIcon} {
      color: ${['transparent', 'primary', 'Green'].includes(avatarTheme)
        ? props.theme.colors.Cod
        : props.theme.colors.white};
    }
  `;
});

export const NotificationIconWrapper = styled.div<
  Pick<IAvatarNotify, 'notificationStatus'>
>((props) => {
  const { notificationStatus = 'Cod' } = props;
  return css`
    background-color: ${(props) => props.theme.colors[notificationStatus]};
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 1px;
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: calc(100 * ${(props) => props.theme.effects.borderRadius});
    display: flex;
    align-items: center;
    justify-content: center;
  `;
});

export const NotificationIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.white};
`;
