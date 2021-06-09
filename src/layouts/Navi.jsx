import React, {useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }


  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated?<SignedIn signOut={handleSignOut} values="1"/>:
            <SignedOut signIn={handleSignIn} values="1"/>}
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
