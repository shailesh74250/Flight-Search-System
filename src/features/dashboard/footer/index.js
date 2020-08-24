import React from 'react';

function Footer() {
  return (
    <>
      <p>
        <span class="footer__copyright">&copy;</span> 2018 MTH
      </p>
      <p>
        Crafted with <i class="fas fa-heart footer__icon"></i> by{' '}
        <a
          href="https://www.linkedin.com/in/matt-holland/"
          target="_blank"
          class="footer__signature"
        >
          Matt H
        </a>
      </p>
    </>
  );
}

export default Footer;
