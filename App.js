import React, {useState} from 'react';


const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

const KEY ="ebe74c83744f9f39f8a55b830a60afd1c1"


function App() {
  const [city,setCity] = useState ('');
  const[result, setResult] = useState('')
 
  
const Weather = async(e)=>{
  e.preventDefault();

const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat= ${city}&lon={lon}&exclude={part}&appid=${KEY} & units= metric`); 



const container = await res.json();
setResult(container);
 
};

  return (
    <div className="App">
      <h1> Wetter App</h1>
    <form onSubmit={Weather}>
      <label>Stadt</label>
      <input value={city} onChange={(e)=> setCity(e.target.value)}/>
      <button type='submit'> Hier drücken</button>
    </form>

    <div>Tempratur:{result && result.main.temp}</div>
    </div>
  );
}

export default App;
