// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import type {Node} from 'React'

export default function App ({ Component, pageProps }: {Component: any, pageProps: Object}): Node {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <style jsx global>{`
      body { overflow: hidden;}
      `}</style>
      <Component {...pageProps} />
    </Provider>
  )
}
