import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2020 Pizza Application<span role='img' aria-label='pizza'> 🍕🍕🍕 Built by <a href='https://github.com/farrukhehsan90' target="_blank" rel="noopener noreferrer">Farrukh</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
