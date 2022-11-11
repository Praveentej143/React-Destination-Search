// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationList} = props
  const {name, imgUrl} = destinationList
  return (
    <li className="item-container">
      <div>
        <img src={imgUrl} className="avatar" alt={name} />
      </div>
      <p className="desc">{name}</p>
    </li>
  )
}
export default DestinationItem
