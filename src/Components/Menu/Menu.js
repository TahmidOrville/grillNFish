import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css';


const Menu = (props) => {
    const { name,img,description,id,price,category } = props.food;
    
    
    return (

        <div className="food-card">
        <div className="food-card-inner">
        <Link to={`/${category}/${id}`} className="frontLink">
            <div className="food-card-front">
                <img src={img} alt="poster" style={{height:"200px"}}/>
                <p>{name}</p>
                <h5>${price}</h5>
                 <p id="clickMore">{`Dish details >>`}</p>
            </div></Link>
            <div className="food-card-back">
            
                <Button variant="warning" size="lg" className="mt-5"><Link to={`/${category}/${id}`} className="backBtn"> Dish details...</Link></Button>
            </div>
            
        </div>
    </div>
    );
};

export default Menu;


