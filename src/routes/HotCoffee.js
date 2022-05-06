import { useEffect, useState, useRef } from "react";
import { Card, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import api from "../api/api";
import DrinkCard from "../components/drinkCard/DrinkCard"
import $ from 'jquery';
import lattePic from '../images/hot-drinks/latte.jpg';
import './Routes.css'
import DrinkModal from "../components/drinkModal/DrinkModal";

const HotCoffee = (props) => {

    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState();
    const [drink, setDrink] = useState();


  /**
   * Decides to render the drink modal when a recipe is clicked
   * @param {*} drink 
   */
    const renderDrinkModal = (drink) => {
        if(drink != null) {
            $("#drinks").css({filter: "blur(5px)"});
            $("body").css({overflow: "hidden"});
            setDrink(drink);
            setModal(true);
        }
        else {
            $("#drinks").css({filter: "inherit"});
            $("body").css({overflow: "unset"});
            setModal(false);
        }
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
        <div className="container drinks" >
            <div className="inner drinks" id="drinks">
            <div className='row'>
            {drinks.map((drink) => {
                return(
                    <div className='col drink'>
                        <DrinkCard drink={drink} renderDrinkModal={renderDrinkModal} />
                    </div> 
                )
                })}
            </div>
            </div>
        {modal && 
        <>
        <DrinkModal drink={drink} renderDrinkModal={renderDrinkModal} />
        </>
        }
        </div>
        </>

    );
};

export default HotCoffee;