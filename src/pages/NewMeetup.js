import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        // http request with default fetch function built-in in JS
        // Firebase create new project and copy url from Realtime Database
        // we can add a meetups collection table in database adding it to the URL of the database
        fetch(
            'https://reactjs-firebase-902ff-default-rtdb.firebaseio.com/meetups.json', 
            {
                method: 'POST',
                // data we want to store
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;