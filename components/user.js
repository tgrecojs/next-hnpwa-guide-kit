import styled from 'emotion/react'

const ListItem = styled('li')({
  margin: '10px 0',
  listStyleType: 'none',
  paddingLeft: 10,
  display: 'flex',
  marginTop: 5
})

export default ({ user }) =>
  <div>
    <ul>
      <h1>
        {user.id}
      </h1>
      <ListItem>
        Created: {user.created}
      </ListItem>
      <ListItem>
        Karma: {user.karma}
      </ListItem>
      <ListItem>
        Delay: {user.delay}
      </ListItem>
      <ListItem>
        About: {user.about}
      </ListItem>
    </ul>
  </div>
