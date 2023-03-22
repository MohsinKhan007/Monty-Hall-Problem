import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Results from '../Components/Results'
import { IInputValue, IResponseType, IResult } from '../Interfaces'
import Home from '../Components/Layout'

// Couldn't handle the api response as the value changes and can't mock it

describe('Testing the Results Component', () => {
  const WinningProps: IResponseType = {
    winningCount: 7,
    losingCount: 3,
    noOfSimulations: 10,
    changeDoor: true,
    resetMain: function (): void {},
  }

  const LosingProps: IResponseType = {
    winningCount: 3,
    losingCount: 7,
    noOfSimulations: 10,
    changeDoor: false,
    resetMain: function (): void {},
  }

  it('should display the winning statment', () => {
    render(<Results {...WinningProps} />)
    const resultTitle = screen.getByTestId('result-title')
    const resultCount = screen.getByTestId('result-count')
    expect(resultTitle).toHaveTextContent(
      `Results Details: ${WinningProps.noOfSimulations} Simulations Entered, Change Door ${WinningProps.changeDoor}`
    )

    expect(resultCount).toHaveTextContent(
      `winning count: ${WinningProps.winningCount} losing count: ${WinningProps.losingCount}`
    )
  })
  it('should display the losing statment', () => {
    render(<Results {...LosingProps} />)
    const resultTitle = screen.getByTestId('result-title')
    const resultCount = screen.getByTestId('result-count')
    expect(resultTitle).toHaveTextContent(
      `Results Details: ${LosingProps.noOfSimulations} Simulations Entered, Change Door ${LosingProps.changeDoor}`
    )

    expect(resultCount).toHaveTextContent(
      `winning count: ${LosingProps.winningCount} losing count: ${LosingProps.losingCount}`
    )
  })
})

describe('Testing Main Page component rendering', () => {
  afterAll(() => {
    jest.resetAllMocks()
  })
  render(<Home />)
  it('should display the initial Layout Title', () => {
    screen.findByTestId('layout-title').then((Element) => {
      expect(Element).toHaveTextContent('MontyHall Game!')
    })
  })
  it('should display the form on intial render exists', async () => {
    screen.findByTestId('game-form').then((Element) => {
      expect(Element).toBeTruthy()
    })
  })
})
