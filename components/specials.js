import { useEffect } from "react";

const Specials = (props) => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <>Specials</>;
};

export default Specials;
