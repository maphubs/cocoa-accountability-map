// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

export default function App ({ Component, pageProps }: {Component: any, pageProps: Object}) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
