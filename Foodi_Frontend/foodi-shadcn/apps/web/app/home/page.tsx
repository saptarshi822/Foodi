
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@workspace/ui/components/carousel"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@workspace/ui/components/input-group"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <div className="lg:w-3/4 w-full ">
                <InputGroup>
                    <InputGroupInput placeholder="Search....." />
                    <InputGroupAddon >
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <Carousel className="lg:w-2/3 w-full">
                <CarouselContent>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/rolls.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/burger.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/cake.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/chinese.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/dessert.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/northindian.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/southindian.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/tea.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                    <CarouselItem className="basis-1/4 md:basis-1/6 lg:basis-1/8"><Image src="/pizza.png" alt="rolls" width={100} height={100}/> </CarouselItem>
                </CarouselContent>                                                                            
            </Carousel>
        </div>
    )
}