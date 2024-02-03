import React from "react";
import CircledMenu from '../assets/Circled Menu.png';
import Help from '../assets/Help.png';
import Support from '../assets/Support.png';
import Pluggins from '../assets/Puzzle.png';

const Navbar = () => {
  return (
    <>
      <li>
        <img src={CircledMenu} alt="Dashboard" />
        Dashboard
      </li>
      <li>
        <img src={Support} alt="Support" />
        Support
      </li>
      <li>
        <img src={Pluggins} alt="Pluggins" />
        Pluggins
      </li>
      <li>
        <img src={Help} alt="Help" />
        Help
      </li>
    </>
  );
};

export default Navbar;
