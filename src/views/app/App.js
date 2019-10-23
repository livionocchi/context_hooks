import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'

import BookList from '../../components/BookList'
import { Button } from 'react-bootstrap'

import BookContextProvider from '../../contexts/BookContext'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Provider store={ store }>
          <Route
            exact path="/"
            component={(routeProps) => (
              <BookList {...routeProps} />
          )} />
        </Provider>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
