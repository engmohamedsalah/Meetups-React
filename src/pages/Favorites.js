import MeetupList from "../components/Meetups/MeetupList";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
function FavoritesPage() {
  const favoritContext = useContext(FavoritesContext);

  let content;

  if (favoritContext.totalFavorites === 0) {
    content = <p>you do not have favorities yet. Start to add</p>;
  } else {
    content = <MeetupList meetups={favoritContext.favorites} />;
  }
  return (
    <section>
      <h1> My Favorites </h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
