import React from "react"
import { Carousel } from "react-bootstrap"
import hotCoffeePic from '../../images/coffee-shop.jpg';
import icedCoffeePic from '../../images/iced.jpg';
import frappePic from '../../images/frappe.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
            <img
            className="imaget"
            src={hotCoffeePic}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Hot Coffee Drinks</h3>
            <p>Coffee, lattes, and espresso drinks, all served hot</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="imaget"
            src={icedCoffeePic}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Iced Coffee Drinks</h3>
            <p>Coffee, lattes, and espresso drinks, all served over ice</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="imaget"
            src={frappePic}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Frappuccinos</h3>
            <p>Starbuck's signature blended ice drinks</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;