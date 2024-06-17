import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } =
      this.props;
    return (
      <div className="my-3">
        <div className="card center">
          {/* news source badge  */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {/* <span class="badge text-bg-primary">{sourceName}</span> */}
            <span className="badge rounded-pill bg-danger">{sourceName}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://img.freepik.com/free-vector/breaking-news-live-streaming-concept_23-2148500721.jpg?w=740&t=st=1712853133~exp=1712853733~hmac=6bc5b9ad2a75eeacca7edbb043bfa950188855b7b34b9f391b441ea62711488d"
                : imageUrl
            }
            className="card-img-top img-fluid"
            alt="sorry..."
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {!description
                ? "wait for some time new are read on the process and fetch news Headlines and wait for some time"
                : description}
              ...{" "}
            </p>

            <p className="card-text" style={{ fontSize: ".875rem" }}>
              <small>
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>

            <a
              href={newsUrl}
              // target="_blank"
              className="btn btn-sm btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
