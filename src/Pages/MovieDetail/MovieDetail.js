import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../../API/Movies'
import NavbarComp from '../../Components/Navbar/Navbar'
import SpinnerComp from '../../Components/Spinner/Spinner'
import ReactPlayer from 'react-player'
import { Button, Image } from 'react-bootstrap'

function MovieDetail() {

  const {movieId: selectedMovie} = useParams()
  const [movieDetails, setMovieDetails] = useState(null)

const init =async ()=>{
  const response = await getMovieDetails(selectedMovie)
  setMovieDetails(response.data)
}

useEffect(()=>{
  init()
},[])
  return (
    <div>
      {
        (!movieDetails)?<SpinnerComp/>:
        <div className='container'>
          <NavbarComp />
            <div>
              <ReactPlayer url={movieDetails.trailerUrl} controls={true} width="100%"/>
              </div>
              <div className='row'>
                <div className='col-lg-3 my-2'>
                  <Image src ={movieDetails.posterUrl} alt ="..." width="100%"/>
                </div>
                <div className='col text-start'>
                    <div>
                     <h3 className='fw-bolder text-decoration-underline my-2'> About Movie</h3>
                     <h6>{movieDetails.name}</h6>
                     <h6>{movieDetails.director}</h6>
                     <h6>{movieDetails.releaseDate}</h6>
                     <hr/>
                     <h3 className='fw-bolder text-decoration-underline my-2'>Cast</h3>
                     {
                      movieDetails.casts.map((name)=> <li className='group-list-item'>{name}</li>)
                     }
               
                </div>
                <Button className = 'my-4 text-light'variant = "danger">Book Tickets</Button>
              </div>
                </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail