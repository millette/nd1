import React from 'react'
import PouchDBChanges from 'react-pouchdb-changes'
import Layout from '../components/layout'

export default class CouchdbChanges extends React.Component {
  constructor (...args) {
    super(...args)
    this.state = { docs: [] }
  }

  render () {
    const docs = this.state.docs.slice()
      .map((doc) => Object.assign(
        {
          title: 'Untitled',
          content: '<i>No content available.</i>'
        },
        doc
      ))

    return (
      <PouchDBChanges
        dbUrl='https://millette.cloudant.com/nd1'
        changesOpts={{
          live: true,
          include_docs: true
        }}
        onChange={(change) => {
          docs.unshift(Object.assign(change.doc, { now: new Date().toISOString() }))
          if (docs.length > 5) { docs.pop() }
          return this.setState({ docs })
        }}
      >
        <Layout title='About us' pathname='/about'>
          <h1>Last {docs.length} changes</h1>
          {docs.map((cur) =>
            <div style={{clear: 'both'}}>
              <div style={{float: 'right'}}>
                <h3>Meta</h3>
                <dl>
                  <dt>id</dt>
                  <dd>{cur._id}</dd>
                  <dt>rev</dt>
                  <dd>{cur._rev}</dd>
                  <dt>date</dt>
                  <dd>{cur.now}</dd>
                </dl>
              </div>
              <h2>
                {cur.title} <small>{cur.smallTitle}</small>
              </h2>
              <div dangerouslySetInnerHTML={{__html: cur.content}} />
            </div>
          )}
          <hr style={{ clear: 'both' }} />
        </Layout>
      </PouchDBChanges>
    )
  }
}
