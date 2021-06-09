import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://miro.medium.com/fit/c/262/262/1*zV7G_bMnQJ4Z_VMwFVvWBg.jpeg"
        ></Image>
        <Dropdown pointing="top left" text="Merve">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
