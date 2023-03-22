import { Button, Form, Input, Spin } from 'antd'
import Radio, { RadioChangeEvent } from 'antd/es/radio'
import React, { useState } from 'react'
import Title from 'antd/es/typography/Title'
import { IInputinitalValues, IInputValue, IResult } from '../Interfaces'
import postGameResponse from '../utils/MontyHallService'

type InputProps = {
  saveResults: (data: IResult) => void
}

const InputForm = ({ saveResults }: InputProps) => {
  const [inputValues, setInputValues] =
    useState<IInputValue>(IInputinitalValues)

  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    handleSimulationValue()
    setLoading(true)

    postGameResponse(inputValues)
      .then((resp) => {
        let resultObj: IResult = {
          ...resp.data.getSimulationStats,
          ...inputValues,
        }
        saveResults(resultObj)
        setLoading(false)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | RadioChangeEvent
  ) => {
    const key = e.target.name!
    const value = e.target.value

    setInputValues((prevState) => {
      return {
        ...prevState,
        [key]: value,
      }
    })
  }
  const handleSimulationValue = () => {
    if (inputValues.noOfSimulations <= 10) {
      setInputValues((prevState) => {
        return {
          ...prevState,
          noOfSimulations: 10,
        }
      })
    }
  }

  const form = loading ? (
    <Spin
      size="large"
      tip="Getting Results"
      style={{ marginTop: '50px' }}
    />
  ) : (
    <div>
      <Title level={3}>
        Enter The number of simulations and Either you change the door of
        not
      </Title>{' '}
      <Form
        onFinish={handleSubmit}
        disabled={loading}
        layout="vertical"
        data-testid="game-form"
      >
        <Form.Item
          labelAlign="left"
          labelCol={{ span: 5 }}
          label="Total Simulations"
          rules={[
            { required: true, message: 'Please Enter Simulations Number' },
          ]}
        >
          <Input
            type="number"
            min="1"
            name="noOfSimulations"
            value={inputValues.noOfSimulations}
            onChange={handleChange}
            onBlur={handleSimulationValue}
          />
        </Form.Item>
        <div>
          <Title style={{ fontSize: '15px' }}>
            Select to change Door in play
          </Title>
          <Radio.Group
            name="changeDoor"
            defaultValue={inputValues.changeDoor}
            onChange={handleChange}
          >
            <Radio value={false} key={0}>
              No
            </Radio>
            <Radio value={true} key={1}>
              Yes
            </Radio>
          </Radio.Group>
        </div>
        <br />
        <Button className="text-c" type="primary" htmlType="submit">
          Get Results
        </Button>
      </Form>
    </div>
  )

  return form
}

export default InputForm
