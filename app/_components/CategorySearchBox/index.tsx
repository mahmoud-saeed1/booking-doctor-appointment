import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IconContainer from "../IconContainer";
import { Search } from "lucide-react";
import "./index.css";

const CategorySearchBox = () => {
  return (
    <div className="category__search">
      <h2>
        search <span>doctors</span>
      </h2>

      <p>search your doctor and book appointment in one click</p>

      <div className="search__box">
        <Input placeholder="search..." className="search__input" />
        <Button className="search__btn">
          <IconContainer className="search__icon">
            <Search />
          </IconContainer>
          search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearchBox;
