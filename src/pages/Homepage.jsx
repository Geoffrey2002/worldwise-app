import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <div>
      <PageNav />
      <h1>Worldwise</h1>
      <Link to="/product">Product</Link>
    </div>
  );
};

export default Homepage;
