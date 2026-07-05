import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const cartItems = [
  {
    name: "Spicy Paneer Wrap",
    description: "Crispy paneer, herbs, house sauce",
    price: "$12",
    qty: 1,
  },
  {
    name: "Loaded Burger",
    description: "Double patty, cheddar, garlic mayo",
    price: "$14",
    qty: 2,
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm cake with molten center",
    price: "$8",
    qty: 1,
  },
]

export default function CartPage() {
  const subtotal = 12 + 14 * 2 + 8

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Your Cart</h1>
          <p className="text-sm text-muted-foreground">3 items ready to checkout</p>
        </div>
        <Button variant="outline">Continue Shopping</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.name}>
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:min-w-[180px]">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">-</Button>
                    <span className="min-w-6 text-center">{item.qty}</span>
                    <Button size="sm" variant="outline">+</Button>
                  </div>
                  <span className="font-semibold">{item.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Taxes and delivery will be calculated at checkout.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>$4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$2</span>
            </div>
            <div className="border-t pt-3 font-semibold">
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>${subtotal + 4 + 2}</span>
              </div>
            </div>
            <Button className="mt-2 w-full">Checkout</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
