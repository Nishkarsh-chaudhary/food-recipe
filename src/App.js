import React , {useState , useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Reciepes from './components/Recipes/Reciepes'
import Axios  from 'axios'

const App = () => {

  const [search, setSearch] = useState("salad");
  const [recipes, setrecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const APP_ID = "7aa92077";
  const APP_KEY = "832233f24e582aec1bc99104e6e5999f	";

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await Axios.get(`https://api.edamam.com/search?r=${search}http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setrecipes(response.data.hits);
        setLoading(false);
        console.log(response);
      }catch (error){
        setError(error);
        setLoading(false);
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  },[search]);

  const onInputChange  = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <Header  search={search} onInputChange={onInputChange}/>
      {loading ?(
        <p>Loading...</p>
      ):(
        <Reciepes recipes={recipes}/>
      )}
    </div>
  );
};

export default App
