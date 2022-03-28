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
            <h3>Hot coffees</h3>
            <p>Coffee, Lattes anything hot and </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="imaget"
            src={icedCoffeePic}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Iced Coffees</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;