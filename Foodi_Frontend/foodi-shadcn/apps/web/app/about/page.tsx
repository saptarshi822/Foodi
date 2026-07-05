import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const highlights = [
  {
    title: "Fast Delivery",
    description: "Fresh meals delivered quickly to your doorstep.",
  },
  {
    title: "Great Quality",
    description: "Carefully prepared dishes made with premium ingredients.",
  },
  {
    title: "Easy Ordering",
    description: "Browse restaurants and place orders in just a few taps.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[28px] border border-border/70 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-sm sm:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">About Foodi</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Bringing delicious food closer to you.
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Foodi helps you discover local restaurants, explore menus, and enjoy fast delivery from the comfort of your home.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Making everyday meals simple, joyful, and satisfying.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            We believe great food should be easy to find and even easier to enjoy. That is why Foodi brings together favorite restaurants, mouthwatering dishes, and a smooth ordering experience in one place.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Customers Love Us</CardTitle>
            <CardDescription>Reliable service with a personal touch.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>• Curated local restaurant choices</p>
            <p>• Easy-to-follow menus and ratings</p>
            <p>• Secure and quick checkout experience</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
