import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div className={classes.card}>
            {/* so we can show content between <Card></Card> on MeetupItem.js we use props.children */}
            {/* children holds the content between <></> of any component (ex: <Card></Card> */}
            {props.children}
        </div>
    )
}

export default Card;