import { useEffect, useState, useRef } from "react";
import { Card, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import api from "../api/api";
import DrinkCard from "../components/drinkCard/DrinkCard"
import $ from 'jquery';
import lattePic from '../images/hot-drinks/latte.jpg';
import './Routes.css'

const HotCoffee = (props) => {

    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState();
    const [drink, setDrink] = useState();

    const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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

    /**
     * Used to detect clicks outside a modal
     * @param {*} ref 
     */
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              renderDrinkModal();
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
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
            <Card className="drinkmodal" ref={wrapperRef}>
                <Card.Img variant="top" src={drink.image} />
                <Card.Body>
                    <Card.Title>{drink.title}</Card.Title>
                    <Card.Text>{drink.description}</Card.Text>
                    <Tabs defaultActiveKey="grande" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="short" title="Short">
                        <ListGroup>
                            <ListGroup.Item>Milk: {drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {drink.recipe.espresso.size.short}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {drink.recipe.syrup.pumps.size.short}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                        <Tab eventKey="tall" title="Tall">
                        <ListGroup>
                            <ListGroup.Item>Milk: {drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {drink.recipe.espresso.size.tall}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {drink.recipe.syrup.pumps.size.tall}</ListGroup.Item>

                        </ListGroup>
                        </Tab>
                        <Tab eventKey="grande" title="Grande">
                        <ListGroup>
                            <ListGroup.Item>Milk: {drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {drink.recipe.espresso.size.grande}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {drink.recipe.syrup.pumps.size.grande}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                        <Tab eventKey="venti" title="Venti">
                        <ListGroup>
                            <ListGroup.Item>Milk: {drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {drink.recipe.espresso.size.venti}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {drink.recipe.syrup.pumps.size.venti}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </>
        }
        </div>
        </>

    );
};

export default HotCoffee;