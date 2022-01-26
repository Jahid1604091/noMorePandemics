import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import vaccine from '../images/vaccine.jpg'


const VaccineCampaign = () => {


  return <Wrapper className=''>
    <section class="showcase">
      <div class="container showcase-inner">
        <h2 className='fw-bold'>Vaccines For All </h2>
        <p className='p-2 fw-bold lead'>Contact your MP Today: Vaccine Access is a Human Right</p>
        <small className="py-2"><span>/</span> A patent waiver, also called a ‘TRIPS waiver’, would temporarily suspend the laws which block factories from making more vaccines. This would allow factories all around the world, especially in developing countries, to produce and distribute Covid-19 vaccines.</small><br /> <br />
        <small className="py-2"><span>/</span> Those laws are there to protect the intellectual property and profit of private companies, but a system was set up to allow for waivers in special circumstances. We believe that Covid-19 counts as special circumstances. Over 100 countries have supported the waiver, but some, including the UK, have denied it. We need the UK government to support the waiver, to ensure that everyone across the globe can get the Covid-19 vaccine.</small>
        <strong>fill out the survey to email your MP</strong><br /><br />
        <Link to='/join-us' className="button">survey <i className="fas fa-angle-double-right"></i> </Link>
        <br /><br />
        <small className='py-2'>[ We will draft an email based on your survey responses, written to have the maximum impact on your MP ]</small>
        <a href="#" class="btn">Read More</a>
      </div>
    </section>

  </Wrapper>;
};


const Wrapper = styled.section`
  
  .container {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 0 3rem;
}

.showcase {
  background: var(--overlay-color);
  color: #fff;
  height: 100vh;
  position: relative;
}

.showcase:before {
  content: '';
  background: url(${vaccine}) no-repeat center center/cover;
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

/* .showcase h1 {
  font-size: 4rem;
}

.showcase p {
  font-size: 1.3rem;
} */

  
 

`

export default VaccineCampaign;
