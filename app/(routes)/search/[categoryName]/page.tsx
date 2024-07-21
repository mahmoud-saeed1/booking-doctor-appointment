"use client"
import { useEffect } from "react";

const Search = ({ params }: any) => {
  useEffect(() => {
    console.log(params);
  }, [params]);
  return <div>Search</div>;
};

export default Search;
