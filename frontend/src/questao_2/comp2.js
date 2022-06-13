import { useState } from "react";
import {createContext, useContext} from 'react'



export function Comp2() {
  const {texto, setTexto} = useContext(MyTextContext)
    return (
      <div>
        <input value={texto} onChange={event => setTexto(event.target.value)} />
      </div>
    );
  }

  export default Comp2
  


export const MyTextContext = createContext();

export function MyTextProvider({children}) {
  const [texto, setTexto] = useState('')

  return (
    <MyTextContext.Provider value={{texto, setTexto}}>
      {children}
    </MyTextContext.Provider>
  )

}