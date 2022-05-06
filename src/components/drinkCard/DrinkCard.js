import './DrinkCard.css';
import { Card, Button } from 'react-bootstrap';

const DrinkCard = (props) => {

    return (
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={props.drink.image} />
            <Card.Body>
                <Card.Title>{props.drink.title}</Card.Title>
                <Card.Text>{props.drink.description}</Card.Text>
                <Button onClick={() => props.renderDrinkModal(props.drink)} variant="primary">Recipe</Button>
            </Card.Body>
        </Card>
        </>
    );
};

export default DrinkCard;