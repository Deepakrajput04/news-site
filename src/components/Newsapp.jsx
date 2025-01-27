import React, { useState, useEffect } from 'react'
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const API_KEY = "8a4f6310f35443c6bdec0e703e752541";
    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
       
        const jsonData = await response.json();
        // console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }

    const handleInput = (e) =>{
        setSearch(e.target.value)
    }
    useEffect(()=>{
        getData()
    },[search])
    const userInput = (e) =>{
        setSearch(e.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>

            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with trendy</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={(userInput) => setSearch('sports')}>Sports</button>
            <button onClick={(userInput) => setSearch('politics')}>Politics</button>
            <button onClick={(userInput) => setSearch('entertainment')}>Entertainment</button>
            <button onClick={(userInput) => setSearch('health')}>Health</button>
            <button onClick={(userInput) => setSearch('fitness')}>Fitness</button>
        </div>
        <div>
            {newsData? <Card data={newsData} /> : []}
            
        </div>
    </div>
  )
}

export default Newsapp