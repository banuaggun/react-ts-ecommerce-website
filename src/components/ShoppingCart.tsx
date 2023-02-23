import { Offcanvas, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function ShoppingCart({isOpen}){
  const {closeCart} = useShoppingCart()
  return (
  <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <OffcanvasTitle>Cart</OffcanvasTitle>
    </Offcanvas.Header>
  </Offcanvas>
  )
}