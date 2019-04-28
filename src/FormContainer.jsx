import React, {Component} from 'react';

/* Import Components */
import Input from '../Components/Input';
import Select from '../Components/Select';
import Button from '../Components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newQuery: {
        latitude: '',
        longitude: '',
        radius: '',
        transmitterID: '',
        waveform: '',
        datetime: ''

      },

      radiusOptions: ['5km', '15km', '25km', '50km'],
      waveformOptions: ['WFA', 'WFC', 'WFF', 'WFH', 'WFJ', 'WFK', 'WFM', 'WFN']

    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newQuery :
        {...prevState.newQuery, [name]: value
        }
      }), () => console.log(this.state.newQuery))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let queryData = this.state.newQuery;

    //fetch('http://example.com',{
        //method: "POST",
        //body: JSON.stringify(queryData),
        //headers: {
          //'Accept': 'application/json',
          //'Content-Type': 'application/json'
        //},
      //}).then(response => {
        //response.json().then(data =>{
          //console.log("Successful" + data);
        //})
    //})
  }

  handleClearForm(e) {

      e.preventDefault();
      this.setState({
        newQuery: {
          latitude: '',
          longitude: '',
          radius: '',
          transmitterID: '',
          waveform: '',
          datetime: ''
        },
      })
  }

  render() {
    return (

        <form className="container-fluid" onSubmit={this.handleFormSubmit}>

            <Input
                   inputType={'text'}
                   title= {'Latitude'}
                   name= {'latitude'}
                   value={this.state.newQuery.latitude}
                   placeholder = {'0.0000000'}
                   handleChange = {this.handleInput}

            /> {/* Name of the user */}

            <Input
                   inputType={'text'}
                   title={'Longitude'}
                   name= {'longitude'}
                   value={this.state.newQuery.longitude}
                   placeholder = {'0.0000000'}
                   handleChange={this.handleInput}

            /> {/* Age */}


            <Select
                  title={'Radius'}
                  name={'radius'}
                  options = {this.state.radiusOptions}
                  value = {this.state.newQuery.radius}
                  placeholder = {'Select Radius(km)'}
                  handleChange = {this.handleInput}

            /> {/* Radius Selection */}

            <Input
                   inputType={'text'}
                   title={'TransmitterID'}
                   name= {'transmitterID'}
                   value={this.state.newQuery.transmitterID}
                   placeholder = {'Enter TransmitterID'}
                   handleChange={this.handleInput}

            /> {/* Transmitter ID */}

            <Select
                  title={'Waveform'}
                  name={'waveform'}
                  options = {this.state.waveformOptions}
                  value = {this.state.newQuery.waveform}
                  placeholder = {'Select Waveform Type'}
                  handleChange = {this.handleInput}

            /> {/* Waveform Selection */}

            <Button
                  action = {this.handleFormSubmit}
                  type = {'primary'}
                  title = {'Submit'}
                  style={buttonStyle}

            /> { /*Submit */ }

            <Button
                  action = {this.handleClearForm}
                  type = {'secondary'}
                  title = {'Clear'}
                  style={buttonStyle}

            /> {/* Clear the form */}

        </form>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;