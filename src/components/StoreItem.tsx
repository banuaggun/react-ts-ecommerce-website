import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-50 align-items-center d-flex">
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              <span className="fs-3 mx-2">
                {quantity}
              </span>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            </div>
            <Button className="w-50" variant="danger" onClick={() => removeFromCart(id)}>Remove</Button>
          </div>

          <Button className="w-100 mt-4" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>

        </div>

      </Card.Body>
    </Card>
  )
}