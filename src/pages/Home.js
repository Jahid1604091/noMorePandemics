import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import doctor from '../images/doctor.jpg'

const Home = () => {
  return <Wrapper className=''>

    <section class="showcase page-100">
      <div class="showcase-inner">
        <div className="section">
          <div className="section-center text-center">
            <h2>The Covid-19 pandemic has been a global disaster. Let's make sure it never happens again. </h2>
            <p>No More Pandemics is a grassroots group of campaigners working to permanently reduce the threat of pandemics</p>
            <Link to="/join-us" class="btn">join us</Link>
          </div>

        </div>

      </div>
    </section>


  </Wrapper>;
};



const Wrapper = styled.section`
  
  
  /* .outline{
    position: relative;
    
    img{
      height:calc(100vh - 10rem);
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
  } */
  
  
  .container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}

.showcase {
  background: var(--overlay-color);
  color: #fff;
  /* min-height: calc(100vh - 10rem); */
  position: relative;
}

.showcase:before {
  content: '';
  background: url(${doctor}) no-repeat center center/cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.showcase .showcase-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.showcase h1 {
  font-size: 4rem;
}

.showcase p {
  font-size: 1.3rem;
}

`

export default Home;
