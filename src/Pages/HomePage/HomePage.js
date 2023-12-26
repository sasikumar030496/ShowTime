import React, { useContext, useEffect, useState } from 'react'
import NavbarComp from '../../Components/Navbar/Navbar'
import SpinnerComp from '../../Components/Spinner/Spinner'
import SliderComp from '../../Components/Slider/Slider'
import { getAllMovies } from '../../API/Movies'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import {ThemeContext} from "../../App"

function HomePage() {

    const {theme}  = useContext(ThemeContext);
    const isDarkTheme = theme==="dark"
    const [isLoading, setIsLoading] = useState(true)
    const [movieList, setMovieList] = useState([])

    const init = async ()=>{
      const result = await getAllMovies();
      setMovieList(result.data)
      setIsLoading(false)
    }
    useEffect(()=>{
      init()
    },[])
  return ( 
  <div className={(isDarkTheme)?"bg-light text-dark":"bg-dark text-light"}>
    <NavbarComp/>
    {
      (isLoading) ?<SpinnerComp/>:<><SliderComp/>
      <div className='container my-4 text-center'>
        <p className='fw-bolder'>Recommended Movies</p>
        <div className='row'>
          {
          movieList.map((movie) => {
            return <div className='col-lg-3 my-2'>
              <Link to={`movie/${movie._id}/details`}>
            <div className="d-flex" style={{height :"100%"}}>
              <div className='card bg-dark'style={{width:"100%"}}>
              <Image src={movie.posterUrl} alt="..." style={{height:"100%"}}/>
              <i className="bi bi-hand-thumbs-up-fill text-success">20K</i>
              
              <p className='text-white fw-bolder px-2'>{movie.name}</p>
              </div>
            </div>
            </Link>
          </div>
          })}
        </div>

      </div></>
    }
  </div>
    )
}

export default HomePage