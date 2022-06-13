import React from "react";
import ReactDOM from "react-dom";



function CompRodape(props) {
    return (
        <div>{props.rodape}</div>
      );    
  }
  
export default CompRodape;

class Root extends React.Component {
  render() {
    return <CompRodape rodape='rodape'/>;
  }
}

ReactDOM.render(
  <Root />,
  document.body.appendChild(document.createElement("div"))
)
