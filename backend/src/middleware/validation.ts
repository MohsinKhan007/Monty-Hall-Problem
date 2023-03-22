import Joi from 'joi'

interface IMontyHall {
  noOfSimulations: number
  changeDoor: boolean
}

export const validateMontyHallData = async (
  createSimulations: IMontyHall
) => {
  const MontyHallSchema = Joi.object({
    noOfSimulations: Joi.number().integer().required(),
    changeDoor: Joi.boolean().required(),
  })

  return MontyHallSchema.validateAsync(createSimulations)
    .then((data) => {
      return { data, error: null }
    })
    .catch((err) => {
      return { data: null, error: err }
    })
}
