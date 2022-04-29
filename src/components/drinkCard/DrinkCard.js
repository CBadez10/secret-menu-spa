import './DrinkCard.css';
import { Card, Button } from 'react-bootstrap';

const DrinkCard = (props) => {

    return (
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={props.imageSource} />
            <Card.Body>
                <Card.Title>{props.drinkName}</Card.Title>
                <Card.Text>{props.drinkDescription}</Card.Text>
                <Button onClick={props.handler} variant="primary">Recipe</Button>
            </Card.Body>
        </Card>
        </>
    );
};

export default DrinkCard;