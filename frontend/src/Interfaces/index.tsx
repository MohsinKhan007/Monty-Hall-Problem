export interface IInputValue {
  noOfSimulations: number
  changeDoor: boolean
}

export interface IDisplay {
  winningCount: number
  losingCount: number
  noOfSimulations: number
  changeDoor: boolean
  resetMain: () => void
}

export interface IResult {
  winningCount: number
  losingCount: number
  noOfSimulations: number
  changeDoor: boolean
}

export const IResultInitialValues: IResult = {
  winningCount: 0,
  losingCount: 0,
  changeDoor: false,
  noOfSimulations: 0,
}

export interface IInputValue {
  noOfSimulations: number
  changeDoor: boolean
}

export const IInputinitalValues: IInputValue = {
  noOfSimulations: 10,
  changeDoor: true,
}

export interface IResponseType {
  winningCount: number
  losingCount: number
  noOfSimulations: number
  changeDoor: boolean
  resetMain: () => void
}
