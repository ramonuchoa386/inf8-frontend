import React, { PropsWithChildren } from 'react';
import AuthContext from '../../context/auth';
import { MOCK_KEEP_ALIVE_RESPONSE } from '../../context/auth/auth.mock';

const mock_OP_VTAL = {
  email: 'mock@email.com',
  firstName: 'Slim',
  lastName: 'Shady',
  orgName: 'Test Org',
  organizationUuid: '12345678-1234-1234-1234-123456789012',
  username: 'slimShady',
  uuid: '87654321-4321-4321-4321-210987654321',
  developer: false,
  orgAdmin: false,
  portalAdmin: true,
};

const mock_APIHUB_ADMIN = {
  email: 'mock@email.com',
  firstName: 'Slim',
  lastName: 'Shady',
  orgName: 'Test Org',
  organizationUuid: '12345678-1234-1234-1234-123456789012',
  username: 'slimShady',
  uuid: '87654321-4321-4321-4321-210987654321',
  developer: false,
  orgAdmin: true,
  portalAdmin: false,
};

const mock_APIHUB_DEV = {
  email: 'mock@email.com',
  firstName: 'Slim',
  lastName: 'Shady',
  orgName: 'Test Org',
  organizationUuid: '12345678-1234-1234-1234-123456789012',
  username: 'slimShady',
  uuid: '87654321-4321-4321-4321-210987654321',
  developer: true,
  orgAdmin: false,
  portalAdmin: false,
};

const TestAuthComponent: React.FunctionComponent<
  PropsWithChildren & { usermock: any }
> = (props) => {
  const { usermock, children } = props;
  const { signIn } = React.useContext(AuthContext);
  const [run, setRun] = React.useState(false);

  React.useEffect(() => {
    if (!run) signIn(MOCK_KEEP_ALIVE_RESPONSE);
    setRun(true);
  }, [usermock, signIn, setRun, run]);

  return <div {...props}>{children}</div>;
};

export default TestAuthComponent;

export { mock_OP_VTAL, mock_APIHUB_ADMIN, mock_APIHUB_DEV };
