import classes from "./MeetupItem.module.css";
import Card from "../Ui/Card";
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const isFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler()
    {
        if(isFavorite)
        {
            favoriteCtx.removeFavorite(props.id);
        }
        else 
        {
            favoriteCtx.addFavorite({
                id : props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address: props.address
            });
        }


    }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions} onClick={toggleFavoriteStatusHandler}>
          <button>{isFavorite?'remove from favorite':'add from favorite'} </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
