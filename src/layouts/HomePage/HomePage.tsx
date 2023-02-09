import { Carousel } from "./components/Carousel";
import { BookServices } from "./components/BookServices";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";

export const HomePage = () => {
    return(
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <BookServices />
        </>
    );
}