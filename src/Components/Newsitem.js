import React from 'react';

const Newsitem = (props) => {

    let { title, description, imageurl, newsurl, author, date } = props;
    return (
        <div>
            <div className="card my-2" style={{ height: "23rem" }}>
                <img src={imageurl ? imageurl : "https://thumbs.dreamstime.com/z/breaking-news-live-tv-label-logo-vector-template-design-illustration-166710329.jpg"} className="card-img-top" style={{ height: "150px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>

                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    );

}

export default Newsitem;
