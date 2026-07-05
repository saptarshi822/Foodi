import Link from "next/link"
import Image from "next/image"
import { SearchIcon, Sparkles, ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const featuredCategories = [
  { name: "Pizza", image: "/pizza.png" },
  { name: "Burger", image: "/burger.png" },
  { name: "Cake", image: "/cake.png" },
  { name: "Rolls", image: "/rolls.png" },
  { name: "Chinese", image: "/chinese.png" },
  { name: "Dessert", image: "/dessert.png" },
  { name: "southindian", image: "/southindian.png" },
]

const menuItems = [
  { id: 1, name: "Garden Bistro", image: "/restro1.png", tag: "Trending" },
  { id: 2, name: "Curry House", image: "/restro2.png", tag: "Best Seller" },
  { id: 3, name: "Tandoor Spot", image: "/restro3.png", tag: "Top Rated" },
  { id: 4, name: "Sizzle Grill", image: "/restro4.png", tag: "New" },
  { id: 5, name: "Bites & Bytes", image: "/restro5.png", tag: "Popular" },
  { id: 6, name: "Flavour Lane", image: "/restro6.png", tag: "Comfort Food" },
]

export default function MenuPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-3 py-4 sm:gap-8 sm:px-6 sm:py-6 lg:px-8">
      <section className="overflow-hidden rounded-[24px] border border-border/70 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 shadow-sm sm:rounded-[28px] sm:p-6 lg:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-sm font-medium text-orange-600">
              <Sparkles className="h-4 w-4" />
              Menu curated for you
            </div>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Explore dishes from your favorite restaurants.
            </h1>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Discover comfort food, desserts, and quick bites all in one place.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <InputGroup>
              <InputGroupInput placeholder="Search restaurants or food items" />
              <InputGroupAddon>
                <SearchIcon className="h-4 w-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold sm:text-xl">Popular categories</h2>
          <Link href="/home" className="text-sm font-medium text-orange-500 hover:underline">
            Back home
          </Link>
        </div>

        <div className="hidden sm:block">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredCategories.map((category) => (
                <CarouselItem key={category.name} className="basis-1/3 lg:basis-1/6">
                  <Card className="overflow-hidden">
                    <div className="relative h-30 w-full">
                      <Image src={category.image} alt={category.name} fill className="object-cover" />
                    </div>
                    <CardContent className="flex items-center justify-between p-3">
                      <span className="text-sm font-medium">{category.name}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {featuredCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <div className="relative h-24 w-full">
                <Image src={category.image} alt={category.name} fill className="object-cover" />
              </div>
              <CardContent className="p-2 text-center">
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold sm:text-xl">Restaurants & menus</h2>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-40 w-full">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>{item.name}</CardTitle>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[11px] font-medium text-orange-600">
                    {item.tag}
                  </span>
                </div>
                <CardDescription>Delicious meals, quick service, and fresh flavors.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-0">
                <span className="text-sm text-muted-foreground">Open now</span>
                <Button size="sm">View menu</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}