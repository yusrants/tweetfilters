import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(){  
    super();  
    // assuming we have a list of tweets containing info about companies.
    this.state = {
      tweets: [{desc: "Hello, Im a tweet about Pakistan"},
      {desc: "Hello, Im a tweet about USA"},{desc: "Hello, Im a tweet about Italy"},
      {desc: "Hello, Im a tweet about Spain"},{desc: "Hello, Im a tweet about Turkey"},
      {desc: "News about pakistan"},{desc: "This is news about UAE"}],

      country: "",
      filteredTweets: [],
    }
    }

  handleChange = (event) => {
      this.setState({country: event.target.value});
      this.setState({filteredTweets : []})
    }

  filterTweets = (e) => {
    e.preventDefault();
    const filtered = this.state.tweets.filter((tweet)=>tweet.desc.toLowerCase().indexOf(this.state.country.toLowerCase().replace(/ /g,'')
    ) > -1);
    this.setState({filteredTweets : filtered})
  }

  render() {
    return <div className='App-header'>

        <form >
          <label>
          <h3> Filter Tweets: </h3>
            <input type="text"  value={this.state.country} onChange={(e) => this.handleChange(e)} />
          </label>
          <button type="submit" onClick={this.filterTweets}> Filter</button>
        </form>

        <div className='container'>
          <h2> List of available tweets</h2>
          {this.state.filteredTweets && this.state.filteredTweets.length > 0 ? this.state.filteredTweets.map((tweet)=>{
            return <div className='tweet'> <h4> {tweet.desc}</h4></div>}): this.state.tweets.map((tweet)=>{
              return <div className='tweet'> <h4> {tweet.desc}</h4></div>})}
        </div>
    </div>;
  }
}
