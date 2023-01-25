import React, { useState,useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    

     const updates=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(30);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)        
        
        document.title = `NewsMonkey - ${props.category} News`
        props.setProgress(100);

    }
    
    useEffect(() => {
        updates()
    }, [])
    

    
    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults( parsedData.totalResults)
        
        document.title = `NewsMonkey - ${props.category} News`
    };

    
        return (
            <>
                <h1 className='my-5 text-center' >NewsMonkey Top headlines on {props.category}</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>

                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4 ' key={element.url} >
                                <Newsitem author={element.author ? element.author : " Unknown "} date={element.publishedAt.slice(0, 10)} title={element.title ? element.title.slice(0, 35) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageurl={element.urlToImage} newsurl={element.url} />
                            </div>

                        })}


                    </div>
                    </div>
                </InfiniteScroll>

            </>
        );

}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "sports"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}



export default News;
