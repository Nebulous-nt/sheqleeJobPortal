//import { Link } from "react-router-dom";
import "../styles/catagories.css";
import RouterHeader from "../components/RouterHeader";
import catagories from "../data/catagoriesData";
import AllCatagories from "../components/AllCatagories";
import SectionWithImage from "../components/section/SectionWithImage";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
//];

function CategoriesPage() {
  const routeName = "Categories";
  return (
    <>
      <RouterHeader path={routeName} />
      <div className="container">
        <img
          src="/img/categories.svg"
          alt="Categories Icon"
          className="imageIcon"
        />
        <h1 className="header">All Categories</h1>
        <p className="description">
          Job categories along with their respective number of jobs posted and
          number of subscribers.
        </p>
      </div>

      <AllCatagories itemsData={catagories} />
      <SectionWithImage />

      {/*  */}
      {/* <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default CategoriesPage;
