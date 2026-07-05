import Link from "next/link"
import Image from "next/image"
import { SearchIcon, Sparkles, Clock3, ShieldCheck, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const categories = [
  { name: "Pizza", image: "/pizza.png" },
  { name: "Burger", image: "/burger.png" },
  { name: "Dessert", image: "/cake.png" },
  { name: "Rolls", image: "/rolls.png" },
]

const restaurants = [
  {
    name: "Spice Garden",
    rating: "4.8",
    time: "25 mins",
    image: "/restro1.png",
  },
  {
    name: "Curry House",
    rating: "4.6",
    time: "30 mins",
    image: "/restro2.png",
  },
  {
    name: "Bites & Bytes",
    rating: "4.9",
    time: "20 mins",
    image: "/restro3.png",
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-sm font-medium text-orange-600">
              <Sparkles className="h-4 w-4" />
              Fresh meals, delivered fast
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Discover your next favorite food spot.
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Browse curated restaurants, explore trending dishes, and enjoy a smooth ordering experience in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Explore restaurants
              </Button>
              <Button variant="outline">View menu</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-orange-500" />
                Fast delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                Safe & reliable
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-orange-100 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="rounded-[20px] bg-gradient-to-br from-orange-500 to-amber-400 p-5 text-white">
              <p className="text-sm font-medium">Today’s special</p>
              <h2 className="mt-2 text-2xl font-semibold">Crispy wraps & sizzling burgers</h2>
              <p className="mt-2 text-sm text-white/90">Enjoy comfort food with a premium touch.</p>
              <Button className="mt-4 bg-white text-orange-600 hover:bg-orange-50">
                Order now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Find what you crave</h2>
            <p className="text-sm text-muted-foreground">Search by cuisine, dish, or restaurant</p>
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <InputGroup>
            <InputGroupInput placeholder="Search for restaurants, dishes, or cuisines" />
            <InputGroupAddon>
              <SearchIcon className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular categories</h2>
          <Link href="/menu" className="text-sm font-medium text-orange-500 hover:underline">
            See all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <div className="relative h-28 w-full">
                <Image src={category.image} alt={category.name} fill className="object-cover" />
              </div>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-medium">{category.name}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Top restaurants</h2>
          <Link href="/about" className="text-sm font-medium text-orange-500 hover:underline">
            Learn more
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.name} className="overflow-hidden">
              <div className="relative h-40 w-full">
                <Image src={restaurant.image} alt={restaurant.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{restaurant.name}</CardTitle>
                <CardDescription>
                  ★ {restaurant.rating} • {restaurant.time}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0">
                <span className="text-sm text-muted-foreground">Best seller: Tandoori Wrap</span>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
