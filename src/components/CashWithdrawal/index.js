// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  withDrawAmount = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div>
        <div>
          <div>
            <p>s</p>
            <p>Sarah Williams</p>
          </div>
          <div>
            <p>Your Balance</p>
            <div>
              <p>{count}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachValue => (
              <DenominationItem
                eachThing={eachValue}
                key={eachValue.id}
                withDrawAmount={this.withDrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
