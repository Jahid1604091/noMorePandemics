import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import doctor from '../images/doctor.jpg'

const Home = () => {
  return <Wrapper>


    <div className="outline">
      <img src={doctor} alt="" />

      <div className="overlay">


        <div class="div">
          <div class="centered-element text-center">
            <h2 className='py-2 fw-bold'>The Covid-19 pandemic has been a global disaster. Let's make sure it never happens again. </h2>
            <p className='py-2'>No More Pandemics is a grassroots group of campaigners working to permanently reduce the threat of pandemics</p>
            <Link to='/join-us' className="button my-2">join us <i className="fas fa-angle-double-right"></i> </Link>
          </div>
        </div>


      </div>
    </div>


  </Wrapper>;
};



const Wrapper = styled.section`
  
  
  .outline{
    position: relative;
    

    

    img{
      height:75vh;
      width: 100%;
      object-fit: cover;
    }
    .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            background: rgba(0, 0, 0, .6);
            color: #FFF;


    }
  }
 

`

export default Home;
