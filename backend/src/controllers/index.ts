import { Response, Request } from 'express'
import MontyHall from '../Class/MontyHall'
import { validateMontyHallData } from '../middleware/validation'
import { CustomError } from '../middleware/errorHandler'

export const getResults = async (req: Request, res: Response) => {
  try {
    const validate = await validateMontyHallData(req.body)

    if (validate.data == null) {
      return res.status(500).send('Input values are not correct')
    }

    let { noOfSimulations, changeDoor } = req.body

    let monthy = new MontyHall(noOfSimulations, changeDoor)
    monthy.startSimulations()
    let results = monthy.getSimulationResult()

    res.status(200).send(results)
  } catch (e) {
    res.status(500).send(e)
    throw new Error(e)
  }
}
