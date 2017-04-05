import React from 'react'
import PouchDBChanges from 'react-pouchdb-changes'
import Layout from '../components/layout'

export default class MyLuckNo extends React.Component {
  constructor (...args) {
    super(...args)
    // this.state = { randomNo: null, doc: null, cnt: 0 }
    this.state = { doc: null, cnt: 0 }
  }

/*
  componentDidMount () {
    this.recalculate()
  }

  recalculate () {
    this.setState({
      randomNo: Math.ceil(Math.random() * 100)
    })
  }
*/

  render () {
    // const { randomNo, doc, cnt } = this.state
    const { doc, cnt } = this.state

/*
    if (randomNo === null) {
      return (<p>Please wait..</p>)
    }
    // This is an experimental JavaScript feature we can get
    // using babel-preset-stage-0
    const message = do {
      if (randomNo < 30) {
        // eslint-disable-next-line no-unused-expressions
        'Do not give up. Try again.'
      } else if (randomNo < 60) {
        // eslint-disable-next-line no-unused-expressions
        'You are a lucky guy'
      } else {
        // eslint-disable-next-line no-unused-expressions
        'You are soooo lucky!'
      }
    }
*/

    return (
      <PouchDBChanges
        dbUrl='http://localhost:5993/nd1'
        changesOpts={{
          // since: 'now',
          live: true,
          include_docs: true
        }}
        onChange={(change) => {
          this.setState({doc: change.doc, cnt: cnt + 1})
        }}
        onError={(err) => console.log(err)}
      >

        <Layout title='About us' pathname='/about'>

          <div>
            <p>Count! {cnt}</p>
            <pre>{JSON.stringify(doc, null, '  ')}</pre>
          </div>

        </Layout>
      </PouchDBChanges>
    )
  }
}
