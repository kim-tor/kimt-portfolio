import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

function Card(props) {
    console.log(props);
    return (
    
        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong> Description:</strong> {props.description}
                    </li>
                    <li>
                        <Button variant="dark" href={props.deployed}> Check out App</Button> 
                    </li>
                    <li>
                        <Button variant="dark" href={props.github}> Check out Github</Button> 
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Card;