import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = bands => bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    const { renderBands } = this
    const { bands, addBand } = this.props
    return(
      <div>
        <BandInput addBand={addBand}/>
        <ul>
          {renderBands(bands)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addBand: band => dispatch({type: "ADD_BAND", payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
