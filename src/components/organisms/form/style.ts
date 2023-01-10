import styled from 'styled-components';

/* Form*/

import { Card as C, Button } from '../../atoms';

export const FormContainer = styled.form``;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Card = styled(C)`
  margin: 0rem 11.75rem;
`;

export { Button };

/* FormInput */

import { Paragraph, Input } from '../../atoms';

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

export const Title = styled(Paragraph)`
  font-weight: bold;
  padding-bottom: 8px;
`;

export const Field = styled(Input)`
  width: 100%;
`;
