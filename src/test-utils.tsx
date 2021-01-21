import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { MemoryRouter } from 'react-router-dom'

function render(
  ui: React.ReactElement,
  {
    initialState = {},
    router = false,
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    if (router) {
      return <Provider store={store}><MemoryRouter>{children}</MemoryRouter></Provider>
    }
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }