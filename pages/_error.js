import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <Layout>
        <p>{
          this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'
        }</p>
        <p>
          <Link prefetch href='/'>
            <a>Home</a>
          </Link>
        </p>
      </Layout>
    )
  }
}
