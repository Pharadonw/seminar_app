import { useState } from "react";
import boy from "../assets/boy.svg"
import girl from "../assets/girl.svg"
function Personlist() {
  const [data, setData] = useState([
    { id: 1, name: "north ", gender: "man" },
    { id: 2, name: "note ", gender: "man" },
    { id: 3, name: "new ", gender: "woman" },
    { id: 4, name: "nam ", gender: "woman" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน </h1>
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
             <img src={item.gender=="man" ? boy : girl} width={50} height={50}/>  
            
              {item.id} | {item.name} | {item.gender}
            </li>
          ))}
      </ul>
    </>
  );
}
export default Personlist;
