import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import Nav from './nav'

// NProgress.configure({ showSpinner: true })

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  console.log(`Done loading`)
  NProgress.done()
}

Router.onRouteChangeError = () => {
  console.log(`Error loading`)
  NProgress.done()
}

export default ({ pathname, children, title = 'This is the default title' }) => (
  <div style={{ marginBottom: 20 }} className={pathname && pathname.slice(1) && `page-${pathname.slice(1) || '0'}`}>
    <Head>
      <meta charSet='utf-8' />
      <title>{ title }</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* Import CSS for nprogress */}
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
    <header>
      <Nav pathname={pathname} />
    </header>

    { children }

    <footer>
      I`m here to stay
    </footer>
  </div>
)
