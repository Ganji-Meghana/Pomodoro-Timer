import React from 'react'
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";
import Contactus from "../Contactus";
import Userprofile from "../Userprofile/UserProfile"
import Pomodoro from '../Pomodoro';
import ShortBreak from '../ShortBreak'
import LongBreak from '../LongBreak'
import Userdashboard from '../Userdashboard/Userdashboard';
import { Routes, Route, NavLink , Navigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { clearLoginStatus } from '../../Slices/userSlice'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {SiAlgolia} from 'react-icons/si'

function Header() {
  let {userObj, isSuccess}=useSelector(
    state=>state.user
  )

  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><SiAlgolia className='me-3 ' size={40}/>Pomodoro Timer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="/contactus">
                      ContactUs
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown title={userObj.username} id="collasible-nav-dropdown" 
                  >
           

                    
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
       
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path='pomodoro' element={<Pomodoro/>} />
          <Route path='shortBreak' element={<ShortBreak/>} />
          <Route path='longBreak' element={<LongBreak/>} />
          <Route path="" element={<Navigate to="pomodoro" replace={true}/>}></Route>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/userdashboard" element={<Userdashboard/>}>
        {/* <Route path="profile" element={<Userprofile />} /> */}
          {/* <Route path="" element={<Navigate to="profile" replace={true}/>}></Route> */}
          <Route path='pomodoro' element={<Pomodoro/>} />
          <Route path='shortBreak' element={<ShortBreak/>} />
          <Route path='longBreak' element={<LongBreak/>} />
          <Route path="" element={<Navigate to="pomodoro" replace={true}/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Header