import React from 'react'
import PouchDBChanges from 'react-pouchdb-changes'
import Layout from '../components/layout'

export default class CouchdbChanges extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = { doc: null }
  }

  render () {
    return (
      <PouchDBChanges
        dbUrl='http://localhost:5993/nd1'
        changesOpts={{
          live: true,
          include_docs: true
        }}
        onChange={(change) => this.setState({ doc: change.doc })}
      >
        <Layout title='About us' pathname='/about'>
          <div>
            <p>
              id: {this.state.doc && this.state.doc._id} and rev: {this.state.doc && this.state.doc._rev}
            </p>
          </div>
        </Layout>
      </PouchDBChanges>
    )
  }
}
