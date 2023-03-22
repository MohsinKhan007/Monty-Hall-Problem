import { Button } from 'antd'
import { IResponseType } from '../Interfaces'

function Results(result: IResponseType) {
  let { winningCount, losingCount, noOfSimulations, changeDoor } = result

  const reset = () => {
    result.resetMain()
  }

  const displayPara = () => {
    let stats: string
    if (winningCount > losingCount) {
      stats =
        'Winning Ratio is increased when player changes the Door As Per Paradox'
    } else {
      stats =
        'Winning Ratio is decreased when player sticks to initial door As Per Paradox'
    }
    return stats
  }
  const selectedValuesDisplay = () => {
    let display: string
    display = `${noOfSimulations} Simulations Entered, Change Door ${
      changeDoor ? 'true' : 'false'
    }`
    return display
  }

  return (
    <>
      <h2 data-testid="result-title" className="fontWeight-7 text-l">
        Results Details: {selectedValuesDisplay()}
      </h2>

      <p data-testid="result-count" className="text-md fontWeight-5">
        winning count: {winningCount} losing count: {losingCount}
      </p>

      <p className="text-md fontWeight-5">{displayPara()}</p>
      <Button type="primary" onClick={reset}>
        Reset
      </Button>
    </>
  )
}

export default Results
