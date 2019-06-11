import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

let url = `${location.protocol}//${location.hostname}`;
url += location.port ? `:${location.port}`: '';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)