import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

  const quantity = 0

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
              <Button>+</Button>
              <span className="fs-3 mx-2">
                {quantity}
              </span>
              <Button>-</Button>
            </div>
            <Button className="w-50" variant="danger">Remove</Button>
          </div>

          <Button className="w-100 mt-4">Add To Cart</Button>

        </div>

      </Card.Body>
    </Card>
  )
}