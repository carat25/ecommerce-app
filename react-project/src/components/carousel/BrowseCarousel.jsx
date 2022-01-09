import { Carousel } from "react-responsive-carousel";
import vanilla_cupcake from "../../assets/vanilla_cupcake.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import chocolate from "../../assets/chocolate.jpeg";
import greentea from "../../assets/greentea.jpeg";
import triple_choc from "../../assets/triple_choc.jpeg";
import custom from "../../assets/custom.jpeg";
import simple from "../../assets/simple.jpeg";


const BrowseCarousel = () => {

    return (
      <Carousel autoPlay infiniteLoop>
        <div>
          <img
            alt="Sprinkle Party"
            src={vanilla_cupcake}
          />
          <p>"Sprinkle Party"</p>
        </div>
        <div>
          <img alt="Fruit Splash" src={chocolate} />
          <p>"Fruit Splash"</p>
        </div>
        <div>
          <img alt="Taste of Asia" src={greentea} />
          <p>"Taste of Asia"</p>
        </div>
        <div>
          <img
            alt="Chocolate Lovers Dream"
            src={triple_choc}
          />
          <p>"Chocolate Lovers Dream"</p>
        </div>
        <div>
          <img alt="Custom Cupcakes" src={custom} />
          <p>"Custom Cupcakes"</p>
        </div>
        <div>
          <img alt="Naked Cupcakes" src={simple} />
          <p>"Naked Cupcakes"</p>
        </div>
      </Carousel>
    );
}

export default BrowseCarousel;