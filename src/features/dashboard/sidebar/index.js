import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="sidenav__brand">
        <i className="fas fa-feather-alt sidenav__brand-icon"></i>
        <a className="sidenav__brand-link" href="#">
          Ux<span className="text-light">Pro</span>
        </a>
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>
      <div className="sidenav__profile">
        <div className="sidenav__profile-avatar"></div>
        <div className="sidenav__profile-title text-light">Matthew H</div>
      </div>
      <div className="row row--align-v-center row--align-h-center">
        <ul className="navlist">
          <li className="navlist__heading">
            <a href="#">Show Currency</a>
          </li>
          <li className="navlist__heading">
            <a href="#">Compaire Currency</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
