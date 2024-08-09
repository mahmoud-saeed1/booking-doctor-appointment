"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CategoriesIcons } from "@/app/_data";
import IconContainer from "@/app/_components/IconContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./index.css";

const CategoryList = ({ closeAside }: { closeAside?: () => void }) => {
  /*~~~~~~~~$ Global Variables $~~~~~~~~*/
  const params = usePathname();
  const category = params.split("/")[2];

  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const categoryListRenderer = CategoriesIcons.map(
    ({ icon: Icon, label }, index) => (
      <CommandItem key={index} className="data-[]:">
        <Link
          href={`/search/${label}`}
          className={`category ${label === category && "bg-blue-100"}`}
          onClick={closeAside}
        >
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
