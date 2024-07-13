import { Input } from "@/components/ui/input";
import "./index.css";
import { Button } from "@/components/ui/button";
import IconContainer from "../IconContainer";
import { Search } from "@/app/_icons";

const GategorySearch = () => {
  return (
    <div className="category__search">
      <h2>
        search <span>doctors</span>
      </h2>

      <h3>search your doctor and book appointment in one click</h3>

      <div className="search__box">
        <Input placeholder="search..." className="search__input" />
        <Button className="search__btn">
          {" "}
          <IconContainer className="mr-1">
            <Search />
          </IconContainer>{" "}
          search
        </Button>
      </div>
    </div>
  );
};

export default GategorySearch;
