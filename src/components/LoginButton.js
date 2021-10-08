import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <>
      <p>Welcome to Weeb!</p> <p>There is a vast amount of anime to watch out there and Weeb is here to help you manage it.</p>
      {!isAuthenticated && <Button variant="warning" onClick={loginWithRedirect}>Log in</Button>}
    </>
  );
}
export default LoginButton;
