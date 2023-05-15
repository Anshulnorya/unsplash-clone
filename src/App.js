import { useState } from "react";
import "./App.css";



// tCYofdmqqB5LJObTUkItA76Q0lpiDrZb8yeapaTKJQM
function App() {
  const [value, setValue] = useState(" ");
  const [results, setResults] = useState([]);
  const fetchImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=tCYofdmqqB5LJObTUkItA76Q0lpiDrZb8yeapaTKJQM&query=${value}&per_page=50&orientation=squarish`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  };
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "60%" }}
        ></input>
        <button onClick={fetchImage}>Send</button>
      </div>
      <div className="gallery">
      {results.map((item) => (
   
          <img className="item" src={item.urls.regular} key={item.id}alt={item.alt_description} />
     
      ))}
    </div>
    </div>
  );
}

export default App;
  