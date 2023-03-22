interface IMontyHall {
  changeDoor: boolean
  simulationNumber: number
}
class MontyHall implements IMontyHall {
  private simulationResult: boolean[]
  changeDoor: boolean
  simulationNumber: number
  private selectedDoor: number
  private doorArray: boolean[]

  constructor(simulationNumber: number, changeDoor: boolean) {
    this.simulationResult = new Array<boolean>(simulationNumber)
    this.changeDoor = changeDoor
    this.simulationNumber = simulationNumber
  }

  public startSimulations() {
    try {
      for (let i = 0; i < this.simulationNumber; i++) {
        this.createInitialArray()
        this.getSelectedRandom()
        let openedDoorIndex = this.openGoatDoor()
        this.simulationResult[i] = this.switchOrStick(openedDoorIndex)
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  public getSimulationResult() {
    let simulationStats = this.getSimulationStats()
    return {
      winningArray: this.simulationResult,
      getSimulationStats: simulationStats,
    }
  }

  public getSimulationStats = () => {
    let winningResults: number
    winningResults = this.simulationResult.filter(
      (gameResult) => gameResult
    ).length

    return {
      winningCount: winningResults,
      losingCount: this.simulationResult.length - winningResults,
    }
  }

  private switchOrStick(openedDoorindex: number) {
    let winOrLose: boolean
    if (this.changeDoor) {
      for (let i = 0; i < this.doorArray.length; i++) {
        if (i !== openedDoorindex && i !== this.selectedDoor) {
          winOrLose = this.doorArray[i]
        }
      }
    } else {
      winOrLose = this.doorArray[this.selectedDoor]
    }

    return winOrLose
  }
  private createInitialArray = () => {
    this.doorArray = [true, false, false]
    const array = this.doorArray
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    this.doorArray = array
  }

  private getSelectedRandom(): void {
    this.selectedDoor = Math.floor(Math.random() * 3)
  }
  private openGoatDoor() {
    let openedDoorIndex: number
    for (let i = 0; i < this.doorArray.length; i++) {
      if (i !== this.selectedDoor && this.doorArray[i] == false) {
        openedDoorIndex = i
      }
    }
    return openedDoorIndex
  }
}

export default MontyHall
