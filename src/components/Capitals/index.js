import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capital extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  getSelectedCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountryForCapital = () => {
    const {capitalId} = this.state

    const countryDetails = countryAndCapitalsList.find(
      eachDetail => eachDetail.id === capitalId,
    )

    console.log(countryDetails)
    return countryDetails.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountryForCapital()

    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>Countries and Capitals</h1>
          <div className="option-container">
            <select onChange={this.getSelectedCapitalI}>
              {countryAndCapitalsList.map(eachCountry => (
                <option key={eachCountry.id} value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
