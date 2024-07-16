import Categories from "../Categories";
import CategorySearchBox from "../CategorySearchBox";
import "./index.css";

const GategorySearch = () => {
  return (
    <section className="container">
      <CategorySearchBox />

      <Categories />
    </section>
  );
};

export default GategorySearch;
