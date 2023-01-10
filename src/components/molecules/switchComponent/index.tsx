import React from 'react';
import { ColorPalette } from '../../../styles/theme';
import { ToggleComponent, FieldLabel } from '../../atoms';
import { IToggleComponentProps } from '../../atoms/toggleComponent';

interface ISwitchComponentProps
  extends Pick<IToggleComponentProps, 'toggle' | 'borderColor' | 'switchColor'>,
    React.HTMLAttributes<HTMLElement> {
  disabled: boolean;
  labels: string[] | React.ReactNode[];
  labelColor?: ColorPalette;
}

const SwitchComponent: React.FunctionComponent<ISwitchComponentProps> = (
  props
): React.ReactElement => {
  const {
    labelColor = 'Cod',
    labels,
    disabled,
    toggle,
    borderColor = 'Cod',
    switchColor = 'Cod',
    ...rest
  } = props;

  return (
    <section
      style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
      {...rest}
    >
      {typeof labels[0] === 'string' ? (
        <FieldLabel
          color={toggle && !disabled ? labelColor : 'celeste'}
          style={{ fontSize: '16px' }}
        >
          {labels[0]}
        </FieldLabel>
      ) : (
        labels[0]
      )}

      <ToggleComponent
        toggle={toggle}
        borderColor={disabled ? 'celeste' : borderColor}
        switchColor={disabled ? 'celeste' : switchColor}
      />

      {typeof labels[1] === 'string' ? (
        <FieldLabel
          color={!toggle && !disabled ? labelColor : 'celeste'}
          style={{ fontSize: '16px' }}
        >
          {labels[1]}
        </FieldLabel>
      ) : (
        labels[1]
      )}
    </section>
  );
};

export default SwitchComponent;
