import React from "react";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         Google Books Search    Search - Saved
//       </a>
//     </nav>
//   );
// }

function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 


  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/savedbooks">Saved Books <span className="sr-only">(current)</span></a>
      </li>
    </ul>

  </div>
</nav>
);
}
 
export default Nav;
