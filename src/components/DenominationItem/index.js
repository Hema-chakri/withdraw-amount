// Write your code here
const DenominationItem = props => {
  const {eachThing, withDrawAmount} = props
  const {value} = eachThing
  const onWithDrawAmount = () => {
    withDrawAmount(value)
  }

  return (
    <li>
      <button type="button" onClick={onWithDrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
