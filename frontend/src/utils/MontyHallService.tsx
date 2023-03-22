import { IInputValue } from '../Interfaces'
import API from './API'

const postGameResponse = (data: IInputValue) => {
  return API.post(`/monty/`, data)
}
export default postGameResponse
