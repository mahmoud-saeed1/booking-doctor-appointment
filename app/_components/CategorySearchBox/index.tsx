import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IconContainer from "../IconContainer";
import { Search } from "lucide-react";
import { ISearch } from "@/app/_interfaces";
import { motion } from "framer-motion";
import "./index.css";

const CategorySearchBox = ({ searchTerm, setSearchTermHandler }: ISearch) => {
  const [error, setError] = useState<string>("");

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]+$/;

    if (regex.test(value) || value === "") {
      setSearchTermHandler(value);
      setError("");
    } else {
      setError("Please enter only letters.");
    }
  };

  return (
    <div className="category__search">
      <h2>
        search <span>doctors</span>
      </h2>

      <p>search your doctor and book appointment in one click</p>

      <div className="search__box">
        <Input
          placeholder="search..."
          className="search__input"
          onChange={handleInputChange}
          value={searchTerm}
        />

        <Button className="search__btn">
          <IconContainer className="search__icon">
            <Search />
          </IconContainer>
          search
        </Button>
      </div>

      {error && (
        <motion.p
          className="error__message text-red-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, color:"red" }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default CategorySearchBox;
