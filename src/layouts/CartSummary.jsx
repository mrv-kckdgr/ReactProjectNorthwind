import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {

  // Şu an redux a abone oldun
  const {cartItems} = useSelector(state=>state.cart)

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {
            cartItems.map((cartItem)=>(
              <Dropdown.Item>
                {cartItem.product.productName}
                <Label>
                  {cartItem.quantity}
                </Label>
              </Dropdown.Item>
            ))
          }
          {/* <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item> */}
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
          Sepete Git
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
