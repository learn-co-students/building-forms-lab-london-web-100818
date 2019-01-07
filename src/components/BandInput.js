// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ""})
  }
   
  render() {
    const { handleChange, handleSubmit } = this
    const { name } = this.state
    return(
      <div>
        <form onSubmit={handleSubmit}>
          <label>Band Name:</label>
          <input onChange={handleChange} 
            value={name}
            type="text">
          </input><br></br>
          <button>Submit</button>
        </form>
        Band Input
      </div>
    )
  }
}



export default BandInput
