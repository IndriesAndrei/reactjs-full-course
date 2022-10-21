// MeetupItem.module.css file styles will apply to only this component
import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = ({id, image, title, address, description}) => {
    // connection between this component and the context 
    const favoritesCtx = useContext(FavoritesContext);

    // call our methof from the context (favorites-context.js)
    const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id: id,
                title: title,
                description: description,
                image: image,
                address: address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;