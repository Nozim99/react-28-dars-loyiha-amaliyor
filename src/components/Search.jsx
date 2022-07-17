import React from "react";

export default class Search extends React.Component {
  // constructor(props){
  // super(props)
  state = {
    search: "panda",
    type: 'all'
  };
  // }

  handleKey = e => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(()=>({type: e.target.dataset.type}), ()=>{
      this.props.searchMovies(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              placeholder="Search"
              className="validate"
              onChange={(e) => this.setState({ search: e.target.value })}
              value={this.state.search}
              onKeyDown={this.handleKey}
            // Klaviaturadan biror tugmaga hodisa qo'shadi
            />
            <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search movies</button>
          </div>
        </div>
        <div>
          <label>
            <input type="radio" className="with-gap" name="type" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
            <span>All</span>
          </label>
          <label className="label">
            <input type="radio" className="with-gap" name="type" data-type="movie" onChange={this.handleFilter} />
            <span>Movies only</span>
          </label>
          <label>
            <input type="radio" className="with-gap" name="type" data-type="series" onChange={this.handleFilter} />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
