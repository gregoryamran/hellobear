import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: '', value3: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

    handleChange2(event) {
        this.setState({value2: event.target.value});
      }

    handleChange3(event) {

      this.state.value3 = this.state.value1;
      //alert('A name was submitted: ' + this.state.value3);
      var h = +this.state.value1 + +this.state.value2;
      this.setState({value3: h});


      }

  handleSubmit(event) {
  //  alert('A name was submitted: ' + this.state.value1);
  //  alert('A age was submitted: ' + this.state.value2);
    this.state.value3 = this.state.value1;
    event.preventDefault();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.handleSubmit}>
        <label>
          Number 1 :
          <input   type="text" value={this.state.value1} onChange={this.handleChange1} />
        </label>
          <br />
        <label>
          Number 2 :
          <input  type="text" value={this.state.value2} onChange={this.handleChange2} />
        </label>
          <br />
        <label>
          Total :
          <input  type="text"  value={this.state.value3}  />
        </label>
        <br />
        {/*

         sfdsfsdf sfsfsasddsada

        <label>
          Age:
          <input type="text" value={this.state.value2} onChange={this.handleChange2} />
        </label>

        */}

          <input type="button" value="Welcome" onClick={this.handleChange3} />

            <br />
            <input type="submit" value="Submit" />
      </form>

        </header>
      </div>
    );
  }
}

export default App;
