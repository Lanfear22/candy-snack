import React, { Component } from 'react';
// import {Helmet} from "react-helmet";
// import Banner from 'react-banner';
//import logo from './logo.svg';
import './App.css';
//import Form from './Form';
import 'react-banner/dist/style.css';
import Select from 'react-select';
import DateTimePicker from 'react-datetime-picker';






class App extends Component {



    constructor(props) {
      super(props);
      this.state = {value: ''};


      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Date-time : ' + this.state.datetime)
      event.preventDefault();
    }

    state = {
               datetime: new Date(),
             }

             onChange = datetime => this.setState({ datetime })









    render() {



      return (

      <div className="App">


      <Helmet>
        <title>CRAFFT-PROTOTYPE</title>
      </Helmet>
        <form onSubmit={this.handleSubmit}>
        <label>Latitude:</label>
        <input
          name = "Latitude"
          placeholder = "0.0000000"
          value = {this.state.Latitude}
          onChange={this.handleChange}
        />
        <br />
        <label>Longitude:</label>
        <input
          name = "Longitude"
          placeholder = "0.0000000"
          value = {this.state.Longitude}
          onChange={this.handleChange}
        />
        <br />
          <label>
            Radius:
            <select value={this.state.Radius} onChange={this.handleChange}>
              <option value="5km">5km</option>
              <option value="10km">10km</option>
              <option value="20km">20km</option>
              <option value="25km">25km</option>
            </select>
          </label>
          <br />
          <label>
           Waveform:
            <select value={this.state.Waveform} onChange={this.handleChange}>
              <option value="WaveformAll">All</option>
              <option value="WFA">WFA</option>
              <option value="WFC">WFC</option>
              <option value="WFF">WFF</option>
              <option value="WFH">WFH</option>
              <option value="WFJ">WFJ</option>
              <option value="WFK">WFK</option>
              <option value="WFM">WFM</option>
              <option value="WFN">WFN</option>
            </select>
           </label>
           <br />
            <label>Transmitter ID:</label>
             <input
               name = "TransmitterID"
               placeholder = "00000000"
               value = {this.state.TransmitterID}
               onChange={this.handleChange}
             />
          <br />
          <label>Date-Time:</label>
             <DateTimePicker onChange={this.onChange} value={this.state.datetime}/>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      );
    }
  }

export default App;
