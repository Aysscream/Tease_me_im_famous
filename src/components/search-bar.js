import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeHolder: "tapez vôtre film..", intervalBeforeRequest: 1000, lockRequest: false };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input onChange={this.handleChange.bind(this)}className=" box_shado form-control input-lg" type="text"placeholder={this.state.placeHolder}/>
          <span className='input-group-btn'>
            <button className='box_shado btn btn-secondary' onClick={this.handleCOnClick.bind(this)}>Go</button>
          </span>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
    if(!this.state.lockRequest){
      this.setState({lockRequest:true});
      setTimeout(() => {this.search()}, this.state.intervalBeforeRequest)
    }
  }
  handleCOnClick(e){
    this.search();
  }
  search(){
    this.props.callback(this.state.searchText)
    this.setState({lockRequest:false})
  }
}

export default SearchBar;


