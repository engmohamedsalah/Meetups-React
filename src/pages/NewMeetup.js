import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'
function NewMeetupPage(meetupData) {

    const history = useHistory();
  //axios is aternative
  function addMeetupHandler(meetupData) {
    fetch("https://meetups-b82dd-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers:{
          'content-type':'application/json'
      }
    }).then(()=> {
        history.replace('/');
    });
  }
  return (
    <section>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetupDate={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
