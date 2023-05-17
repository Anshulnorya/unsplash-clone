import { useState } from "react";
import "./App.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


// tCYofdmqqB5LJObTUkItA76Q0lpiDrZb8yeapaTKJQM
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});
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
    <h1 style={{color:"rgb(181, 122, 230)"}}>Search Images</h1>
      <div className="mydiv">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={fetchImage}>Search</button>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto p-10">
        {results.map((item) => (

          <a data-fancybox="gallery" href={item.urls.regular}>
            <img class="rounded" src={item.urls.regular}    key={item.id}
            alt={item.alt_description} />
          </a>
     
        ))}
      </div>
    </div>
  );
}

export default App;
