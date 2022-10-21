import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
    const [isLoading, setIsLoading] = useState(true); // loading data state
    const [loadedMeetups, setLoadedMeetups] = useState([]); // array of meetups

    // to avoid infinite loop, we use useEffect hook, to get the data only once,
    // when the component is rendered by adding [] empty array to useEffect as second argument
    useEffect(() => {
        setIsLoading(true);
        // get the data form Firebase
        fetch(
            'https://reactjs-firebase-902ff-default-rtdb.firebaseio.com/meetups.json', 
        ).then(response => {
            return response.json();
        }).then((data) => {
            // after we have the data, we set loading to false
            // we want to transform the data from object (from Firebase) to array
            // we got properties on Firebase with nested objects, so we need to transform the data
            const meetups = [];

            // through all keys (random ids from Firebase database)
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key] // we copy all the nested objects into this object with ...
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        }); 
    }, []);


    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}

export default AllMeetupsPage;