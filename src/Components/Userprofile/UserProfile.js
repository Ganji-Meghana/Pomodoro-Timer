import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function UserProfile() {
  let {userObj} = useSelector(state=>state.user)
  console.log(userObj)
  return (
    <div>
      <Card style={{ width: '10rem' }} className="ms-auto mt-5 ">
    <Card.Img variant="top" src={userObj.profileImg} />
  <Card.Body>
    <Card.Title>{userObj.username}</Card.Title>
    <Card.Text>
      {userObj.email}
      { userObj.city} 
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default UserProfile