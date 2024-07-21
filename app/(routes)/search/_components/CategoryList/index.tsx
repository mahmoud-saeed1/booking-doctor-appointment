import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CategoriesIcons } from "@/app/_data";
import IconContainer from "@/app/_components/IconContainer";
import "./index.css";
import Link from "next/link";

const CategoryList = () => {
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const categoryListRenderer = CategoriesIcons.map(
    ({ icon: Icon, label }, index) => (
      <CommandItem key={index} className="data-[]:">
        <Link href="/" className="category">
          <IconContainer className="icon__container--category">
            <Icon />
          </IconContainer>
          <p>{label}</p>
        </Link>
      </CommandItem>
    )
  );

  return (
    <div className="categoires__section">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions" className="text-gray-400">
            <div className="categoreis__container">{categoryListRenderer}</div>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
