
const Card = (props) => {
    return (
        <div> 
        <h2>Destination: {props.destination}</h2>
        <p>Country: {props.country} </p>
        <p>Best Month: {props.bestMonth}</p>
        </div>

    );

};

export default Card;