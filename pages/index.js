import Layout from '../components/layout'

// Markdown makes the client bundle.js huge!
// 233KiB vs 1KiB for the other pages.
// Haven't yet figure out how to output <Link...><a>...</a></Link>
// to replace anchors.
import Markdown from 'react-markdown-it'

// import Markdown from 'react-remarkable'
// import Markdown from 'babel-plugin-markdown-react/markdown'

import Nav from '../components/nav'

const opts = {
  html: true,
  linkify: true,
  typographer: true
}

export default (props) => (
  <Layout pathname={props.url.pathname}>
      <Markdown options={opts}>{`
        # Hello World

        ## Needs a subtitle
        Some text as a paragraph... and more text as a paragraph...
        and more text as a paragraph... and more  text as a
        paragraph... and more text as a paragraph... and more text as
        a paragraph... and more.

        Some text as a *paragraph*... and more text as a paragraph...
        and more text as a **paragraph**... and more  text as a
        paragraph... and more text as a paragraph... and more text as
        a paragraph... and more.

        ## Another section

        Like "that" he's saying to himself.

        ## The end?
        Yup. with an http://example.com/link so there. Did you know?
      `}</Markdown>
  </Layout>
)
