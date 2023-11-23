import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
  };

  static propTypes = {};

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalArticles: 0,
      loading: false, // This is for spinner.
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d8147c998c5c4b4ba2fb0371556d2acb&pageSize=${this.props.pageSize}`; // This is the URL to fetch the NEWS

    {
      this.setState({ loading: true });
    }

    let data = await fetch(url); //fetch function in JS is used to make HTTP requests and it takes URL as an input and returns a promise as an output that will be resolved. A promise has 3 different states: Pending, Fulfilled and Rejected. The componentDidMount waits for the fetch function to resolve the promise!

    let parsedData = await data.json(); //Parsing the data into JSON. The componentDidMount function waits for the parsing of data into JSON!

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    }); //Changing the state of a class component.
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=d8147c998c5c4b4ba2fb0371556d2acb&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    {
      this.setState({ loading: true });
    }

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      Math.ceil(this.state.totalArticles / this.props.pageSize) >=
      this.state.page + 1
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=d8147c998c5c4b4ba2fb0371556d2acb&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      {
        this.setState({ loading: true });
      }
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">
            NewsMonkey - Top headlines of the day!
          </h2>
          <div className="row my-5">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageURL={element.urlToImage}
                      newsURL={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container my-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          {this.state.loading && <Spinner />}
          <button
            disabled={
              Math.ceil(this.state.totalArticles / this.props.pageSize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;{" "}
          </button>
        </div>
      </>
    );
  }
}
