import { useState } from "react";
import data from "./data"
export default function Accordian() {
  const [selected, setselected] = useState(null);
  const handleSingleSelection = (id) => {
    setselected(selected === id ? null : id); // Toggle the selected state
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (  
          data.map((dataItem) => (
            <div key={dataItem.id} className="item"> 
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}
