import { useEffect, useState } from "react";
import api from "../api/api";
import DrinkCard from "../components/drinkCard/DrinkCard"
import lattePic from '../images/hot-drinks/latte.jpg';
import './Routes.css'

const HotCoffee = (props) => {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        api.get().then((response) => {
            setDrinks(response.data);
        });
    }, []);   

    return(
        <>
        <div className="container spacer"></div>
        <div className="container drinks">
            <div className='row'>
            {drinks.map((drink) => {
                return(
                    <div className='col drink'>
                        <DrinkCard imageSource={drink.image} drinkName={drink.title} drinkDescription={drink.description}/>
                    </div> 
                )
                })}
            </div>
        </div>
        </>
    );
};

export default HotCoffee;