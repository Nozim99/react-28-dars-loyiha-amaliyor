import React from "react"
import Loader from "../components/Loader";
import Movies from "../components/Movies"
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    if (this.fetchPromise) {
      return;
    }

    this.fetchPromise = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f9337567&s=panda`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = (mv, type) => {
    this.setState({loading: true})
    this.fetchPromise = fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f9337567&s=${mv}${type !== 'all'? `&type=${type}` :""}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }


  render() {
    return (
      <div className="content container">
        <Search searchMovies={this.searchMovies} />
        {this.state.loading ? <Loader /> : (<Movies movies={this.state.movies} />)}
      </div>
    )
  }
}