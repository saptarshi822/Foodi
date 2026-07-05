import Image from "next/image"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"

const menuItems = [
  {
    name: "Spicy Paneer Wrap",
    description: "Crispy paneer, fresh herbs, and house sauce.",
    price: "$12",
    image: "/rolls.png",
  },
  {
    name: "Loaded Burger",
    description: "Double patty, cheddar melt, and roasted garlic mayo.",
    price: "$14",
    image: "/burger.png",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm cake with molten center and vanilla gelato.",
    price: "$8",
    image: "/cake.png",
  },
  {
    name: "Tandoori Pizza",
    description: "Bold spices, mozzarella, and charred peppers.",
    price: "$16",
    image: "/pizza.png",
  },
]

type RestaurentPageProps = {
  params: Promise<{ id: string }>
}

export default async function RestaurentPage({ params }: RestaurentPageProps) {
  const { id } = await params
  const restaurantName = `Restaurant ${id}`

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[28px] border border-border/70 bg-background shadow-sm">
        <Image src="/restro1.png" alt={restaurantName} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative flex min-h-[320px] flex-col justify-end gap-4 p-6 sm:p-8 lg:p-10">
          <div className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
            Open now • 4.8 ★
          </div>

          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{restaurantName}</h1>
            <p className="mt-2 text-sm text-white/80 sm:text-base">
              Cozy vibes, handcrafted dishes, and fast delivery for your next meal.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600">Reserve</Button>
            <Button variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              View Reviews
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Popular Menu</h2>
              <p className="text-sm text-muted-foreground">Handpicked favorites for today</p>
            </div>
            <Button variant="outline" size="sm">
              See all
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {menuItems.map((item) => (
              <Card key={item.name} className="overflow-hidden">
                <div className="relative h-36 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between pt-0">
                  <span className="text-sm font-semibold text-foreground">{item.price}</span>
                  <Button size="sm">Add</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Restaurant Info</CardTitle>
            <CardDescription>Everything you need before ordering</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Address</p>
              <p>12, Market Street, Downtown</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Timing</p>
              <p>Mon-Sun • 11:00 AM - 11:00 PM</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Delivery</p>
              <p>20-35 mins • Free over $25</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}