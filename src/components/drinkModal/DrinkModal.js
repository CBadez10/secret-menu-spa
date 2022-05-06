// import './DrinkModal.css';
import { useEffect, useState, useRef } from "react";
import { Card, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";

const DrinkModal = (props) => {

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              props.renderDrinkModal();
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
    return (
        <>
        <Card className="drinkmodal" ref={wrapperRef}>
                <Card.Img variant="top" src={props.drink.image} />
                <Card.Body>
                    <Card.Title>{props.drink.title}</Card.Title>
                    <Card.Text>{props.drink.description}</Card.Text>
                    <Tabs defaultActiveKey="grande" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="short" title="Short">
                        <ListGroup>
                            <ListGroup.Item>Milk: {props.drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {props.drink.recipe.espresso.size.short}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {props.drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {props.drink.recipe.syrup.pumps.size.short}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                        <Tab eventKey="tall" title="Tall">
                        <ListGroup>
                            <ListGroup.Item>Milk: {props.drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {props.drink.recipe.espresso.size.tall}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {props.drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {props.drink.recipe.syrup.pumps.size.tall}</ListGroup.Item>

                        </ListGroup>
                        </Tab>
                        <Tab eventKey="grande" title="Grande">
                        <ListGroup>
                            <ListGroup.Item>Milk: {props.drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {props.drink.recipe.espresso.size.grande}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {props.drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {props.drink.recipe.syrup.pumps.size.grande}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                        <Tab eventKey="venti" title="Venti">
                        <ListGroup>
                            <ListGroup.Item>Milk: {props.drink.recipe.milk}</ListGroup.Item>
                            <ListGroup.Item>Espresso Shots: {props.drink.recipe.espresso.size.venti}</ListGroup.Item>
                            <ListGroup.Item>Syrup Flavor: {props.drink.recipe.syrup.flavor}</ListGroup.Item>
                            <ListGroup.Item>Syrup Pumps: {props.drink.recipe.syrup.pumps.size.venti}</ListGroup.Item>
                        </ListGroup>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </>
    );
};

export default DrinkModal;