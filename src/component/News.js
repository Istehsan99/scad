import React, {useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'
const News = (props)=> {

  const [articles,setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

const updatePage = async ()=>{
  // props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7ea98788c6694a9aa7a84f4d7b9cfaa6&page=${page}&pageSize=${props.pageSize}`
  // this.setState({loading: true})
  setLoading(true)
    let data = await fetch(url)
    // props.setProgress(20);
    let parsedData = await data.json()
    // props.setProgress(60);
    setArticles(parsedData.articles);
    setLoading(false);
    settotalResults(parsedData.totalResults);
  // props.setProgress(100);
}
useEffect(() => {
  document.title = `${props.category}-NewsFlasher`
    updatePage();
}, [])
const handlePrevClick = async () => {
  setPage(page => page - 1); // update page state
  await updatePage(); // call updatePage with the new page state
};

const handleNextClick = async () => {
  setPage(page => page + 1); // update page state
  await updatePage(); // call updatePage with the new page state
  

};
    return (
      <div className="container mainNews">
        <h2 className="text-center mt-5 pt-5">Top Headlines from {props.category}</h2>
      {loading && <Spinner/>}
        <div className="row">
          {!loading && articles.map((element) => (
            <div className="col-md-4 my-4" key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description ? element.description.slice(0, 88) : ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        {!loading && <div className="d-flex justify-content-between">
        <button type="button" disabled={page<=1} className="btn btn-success buttons-bottom" onClick={handlePrevClick}>&larr; Previous Page</button>
        <button type="button" disabled={page +1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-success buttons-bottom" onClick={handleNextClick}>Next Page &rarr;</button>
        </div>}
      </div>
    );
  }

  News.defaultProps ={
    country: 'us',
    pageSize: 6,
    category: 'general'
  }
  
  News.propTypes = {
    country: propTypes.string,
    pageSize:propTypes.number,
    category:propTypes.string
  }

export default News;
