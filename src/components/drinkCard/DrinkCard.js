import './DrinkCard.css';
import lattePic from '../../images/hot-drinks/latte.jpg'

const DrinkCard = (props) => {
    return (
        <>
        <div class="card" style={{width: '20rem'}}>
            <img src={props.imageSource} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{props.drinkName}</h5>
                <p class="card-text">{props.drinkDescription}</p>
                <a href="#" class="btn btn-primary">Recipe</a>
            </div>
        </div>
        </>
    );
};

export default DrinkCard;