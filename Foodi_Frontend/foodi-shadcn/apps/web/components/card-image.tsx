import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card,CardAction,CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from "@workspace/ui/components/card"
import Link from "next/link"

type propType = {
  
  id: number,
  url:string,
}
export function CardImage(prop: propType) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Link href={`restaurent/${prop.id}`}>
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={prop.url}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      </Link>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}
