import 'reset.css'
import './styles.css'
import React from 'react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
