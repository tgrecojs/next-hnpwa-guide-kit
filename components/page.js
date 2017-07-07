import Nav from './nav'
import styled from 'emotion/react'

const Main = styled('main')`
  .stories {
    width: 100%;
    color: #333;
    padding-top: 50px;
  }

  @media (max-width: 600px) {
    .stories {
      padding: 1px;
      padding-top: 50px;
      width: auto;
    }
  }
`

export default ({ children }) =>
  <Main>
    <Nav />
    <div className='stories'>
      {children}
    </div>
  </Main>
