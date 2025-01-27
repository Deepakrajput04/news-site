import React from 'react'

const Card = ({data}) => {
   console.log("data",data)
   
   if ( data.length === 0){
    return <p>No record Found</p>;
   }

   return (
    <div className='cardContainer'>
      {data.map((curItem,index)=> {
        if(!curItem.urlToImage){
          return null
        }else{
          return(
            <div className='card' key={curItem.id || index}>
              <img src={curItem.urlToImage} alt="" />
              <div className='Content'>
              <a className='title' onClick={()=>window.open(curItem.url)}>{curItem.title}</a>
              <p>{curItem.description}</p>
              <button onClick={()=>window.open(curItem.url)}>Read More</button>
            </div>
            </div>
          )
        }
        
      })}
    </div>
);
   
  
}

export default Card