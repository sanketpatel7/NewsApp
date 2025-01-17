import React from "react";

const NewsItems = (props) => {
  return (
    <>
      <div className="card" style={{}}>
        <img
          src={props.img}
          style={{ height: "15rem" }}
          // className="card-img-top mt-3"
          alt="..."
        />
        <div className="card-body">
          <p>auther : {props.other}</p>
          <h5 className="card-title">{props.title} ...</h5>
          <p className="card-text">{props.descriptions} ...</p>
          <a
            href={props.newsurl}
            target="blank"
            className="btn btn-sm btn-primary px-4 py-1"
          >
            Read more...
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
