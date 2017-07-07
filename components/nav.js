import Link from 'next/link'
import styled from 'emotion/react'
import { css } from 'emotion'

const links = [
  { href: '/', label: '▲' },
  { href: '/top', label: 'Top' },
  { href: '/new', label: 'New' },
  { href: '/best', label: 'Best' },
  { href: '/ask', label: 'Ask' },
  { href: '/show', label: 'Show' },
  { href: '/job', label: 'Job' }
]

const fixedTop = css`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
`

const header = css`
  header {
    display: flex;
    padding: 0;
    margin: 0;
  }
  
  @media (max-width: 600px) {
    header {
      justify-content: none;
    }
  }
`

const linkBlock = css`
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`

const Nav = styled.nav`
  composes: ${fixedTop} ${header} ${linkBlock};
  text-align: center;
  background-color: black;
  color: white;
  padding: 12px;
 
  span {
    padding: 6px 8px;
  }
`

export default () =>
  <Nav>
    <header>
      {links.map((link, i) =>
        <span key={`nav-link-${i}`}>
          <Link href={link.href}>
            <a>
              {link.label}
            </a>
          </Link>
        </span>
      )}
    </header>
  </Nav>
