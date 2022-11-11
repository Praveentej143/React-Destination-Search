// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-parent-container">
            <div className="search-input-container">
              <input
                className="search-input"
                type="search"
                placeholder="search"
                onChange={this.onSearch}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
          </div>

          {/* //destinations list */}

          <ul className="list-container">
            {searchResults.map(each => (
              <DestinationItem destinationList={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
