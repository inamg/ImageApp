import React, { createContext } from 'react'

const DataContext = createContext({})

export const DataProvider = DataContext.Provider

export const DataConsumer = DataContext.Consumer

export const withDataHOC = Component => props => (
  <DataConsumer>
    {state => <Component {...props} data={state} />}
  </DataConsumer>
)