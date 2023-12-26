import { useContext } from "react"
import "./Navbar.css"
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {ThemeContext} from "../../App"

function NavbarComp() {

  const {theme, setTheme} = useContext(ThemeContext)
  const isLightTheme = theme==="light"
  const token =  localStorage.getItem("accessToken")
  const isLoggedIn = token!==null
  const navigate  =useNavigate()

  const onToggleTheme=()=>{
    (isLightTheme)?setTheme("dark"):setTheme("light")
  }
  const onAuthBtnClick=()=>{
    if (isLoggedIn){
      localStorage.clear()
      navigate("/")
    }
    else{
      navigate("/login")
    }
  }

  return (
  <div>
    <Navbar className={(isLightTheme)?"bg-dark text-light":"bg-light text-dark"}>
  <Container>
    <Navbar.Brand href="#home" className='fw-bolder text-black'><i>ShowTime</i></Navbar.Brand>
    <Nav className="me-auto">
    </Nav>
    <Button variant='light' className="py-2 bg-danger text-light" onClick={onAuthBtnClick}> 
    {
      (isLoggedIn)?"Logout":"Login"
    }</Button>
    <Button variant='light' className="mx-2 py-2 bg-primary text-light" onClick={onToggleTheme}> 
    {
      (isLightTheme)?"Dark Mode":"Light Mode"
    }</Button>
  </Container>
</Navbar>
</div>
    
   
  )
}

export default NavbarComp