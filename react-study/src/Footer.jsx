import { FooterDiv, FooterBig, FooterSmall } from './styledComponent';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Footer>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2022. by yubin</FooterSmall>
    </Footer>
  );
}

export default Footer;
