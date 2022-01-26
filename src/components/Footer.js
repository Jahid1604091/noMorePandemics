import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return <Wrapper>
        <footer className="text-center bg-dark text-light p-4">
            <p className='m-0 text-center'>NO MORE PANDEMICS LTD is a registered company limited by guarantee (13590459) in England and Wales
            </p>
        </footer>

    </Wrapper>;
};

const Wrapper = styled.section`
    min-height:5rem;
    position:static;
   
    
`
export default Footer;
