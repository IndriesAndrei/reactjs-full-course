// import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
        {/* <h1>My Todos</h1>
        <Todo title="Learn React" />
        <Todo title="Master React" />
        <Todo title="Practice React" /> */}

        {/* Routing in React */}
        <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetup" element={<NewMeetupPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    </Layout>
  );
}

export default App;
