import React,{useState , useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [news, setNews] = useState([]);

useEffect (()=>{
 axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=23f85ee6401c411291800f5ebd9cf544').then((Response)=>{
  setNews(Response.data.articles)
 })
 .catch((error) => {
  console.error(error)})
},[])
  return (
    <>
      <div className='contanier m-6'>
        <div className='row text=center'>
          { news.map((val)=>{
            return(
              <>
             <div className='col y-7'>
           <div className="card" style={{width:"18rem"}}>
  <img src={val.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">{val.description}</p>
    <a href={val.url} className="btn btn-primary">Read More </a>
             </div>
            </div>
           </div>
              </>
            )}
            )}</div>
      </div>
    </>
  )
}

export default App