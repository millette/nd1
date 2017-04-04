import Link from 'next/link'

export default ({ pathname }) => (
  <nav>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link> |

    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link> |

    <Link prefetch href='/contact?who=us' as='/contact'>
      <a className={pathname === '/contact' && 'is-active'}>Contact</a>
    </Link> |

    <Link prefetch href='/nowhere'>
      <a className={pathname === '/bla' && 'is-active'}>No where to go...</a>
    </Link>

    <style jsx>{`
        a {
          color: yellow;
        }
        a.is-active {
          color: purple;
        }
        nav {
          background: red;
        }
        @media (max-width: 600px) {
          nav {
            background: blue;
          }
        }
      `}</style>

  </nav>
)
