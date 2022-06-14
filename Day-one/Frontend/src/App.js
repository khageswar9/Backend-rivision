import { Select } from '@chakra-ui/react'
import { useEffect, useState} from 'react';
import './App.css';
import { useSearchParams } from "react-router-dom";


function App() {
  const  [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('Source');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(Number(searchParams.get("page")||1));
  const [ totalPages, setTotalPages] = useState(0);
  useEffect(() => {
      async function fetchData() {
          const response = await fetch(`http://localhost:5000/movies?page=${page}&sort=${sort}&filter=${filter}`);
          const data = await response.json();
          setData(data.movies);
          setTotalPages(Math.ceil(data.totalPages/10));
      }
      fetchData();
      setSearchParams({
        page,sort,
        filter
    })
  }, [page, sort, filter]); 
  return (
    <div className="App">
     <h2>khageswar Movie app</h2>
     
         <div id='selectbtn'>
         <Select placeholder='Sort High to Low' onChange={(e)=>{setSort(e.target.value)}}>
          <option value='IMDB Rating'>IMDB Rating</option>
          <option value='IMDB Votes'>IMDB Votes</option>
          <option value='Production Budget'>Production Budget</option>
          </Select>
          <Select placeholder='Filter' onChange={(e)=>{setFilter(e.target.value)}}>
          <option value='Drama'>Drama</option>
          <option value='Horror'>Horror</option>
          <option value='Comedy'>Comedy</option>
          <option value='Action'>Action</option>
          </Select>
         </div>
<div className='flexbox'>
  {data.map((movie) => {
    return (
      <div key={movie._id} className="moviediv">
        <span>Title : {movie.Title}</span><br/>
        <span>Type : {movie["Creative Type"]}</span><br/>
        <span>Genre : {`${movie["Major Genre"]}`? `${movie["Major Genre"]}` : "N/A"}</span><br/>
        <span>Rating : {`${movie["IMDB Rating"]}`? `${movie["IMDB Rating"]}` : "N/A"}</span><br/>
        <span>IMDB Votes : {movie["IMDB Votes"]}</span><br/>
        <span>Production Budget : {movie["Production Budget"]}</span><br/>
        </div>
    )
  })}
</div>
    <div>
      <button onClick={()=>{setPage(page-1)}}>previous</button><button onClick={()=>{setPage(page+1)}}>next</button>
    </div>
    </div>
  );
}

export default App;
