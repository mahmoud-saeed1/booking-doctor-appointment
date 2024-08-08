import Categories from "../Categories";
import CategorySearchBox from "../CategorySearchBox";
import "./index.css";
import { ISearch } from "@/app/_interfaces";

const GategorySearch = ({ searchTerm, setSearchTermHandler }: ISearch) => {
  return (
    <section className="container" id="search__box">
      <CategorySearchBox
        searchTerm={searchTerm}
        setSearchTermHandler={setSearchTermHandler}
      />

      <Categories />
    </section>
  );
};

export default GategorySearch;
