import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://meetups-b82dd-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          const meetups = [];
          for(const key in data)
          {
              const meetup ={
                  id:key,
                  ...data[key]
              };
              meetups.push(meetup);

          }

        setIsLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
}

export default AllMeetupsPage;
