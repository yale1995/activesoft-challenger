import { useContext } from "react";
import  {MyTextContext}  from "./comp2";

function Comp1() {
  const { texto } = useContext(MyTextContext);
  return <div>{texto}</div>;
}

export default Comp1;
