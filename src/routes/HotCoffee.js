import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import api from "../api/api";
import DrinkCard from "../components/drinkCard/DrinkCard"
import $ from 'jquery';
import lattePic from '../images/hot-drinks/latte.jpg';
import './Routes.css'

const HotCoffee = (props) => {

    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState();

    const handler = () => {
        setModal(true)
        console.log("Clicasdasd");
        $("#drinks").css({filter: "blur(5px)"});
    }

    useEffect(() => {
        api.get().then((response) => {
            setDrinks(response.data);
        });
        setModal(false);
    }, []);   

    return(
        <>
        <div className="container spacer"></div>
        <div className="container drinks">
            <div className="inner drinks" id="drinks">
            <div className='row'>
            {drinks.map((drink) => {
                return(
                    <div className='col drink'>
                        <DrinkCard imageSource={drink.image} drinkName={drink.title} drinkDescription={drink.description} handler={handler} />
                    </div> 
                )
                })}
            </div>
            </div>
        {modal && 
        <>
            <Card className="drinkmodal" style={{ width: '40rem' }}>
                <Card.Img variant="top" src={props.imageSource} />
                <Card.Body>
                    <Card.Title>asdfasdfas</Card.Title>
                    <Card.Text>{props.drinkDescription}</Card.Text>
                </Card.Body>
            </Card>
        </>
        }
        </div>
        </>

    );
};

export default HotCoffee;