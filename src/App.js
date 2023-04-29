// import logo from './logo.svg';

import './App.css';

import { Side_Navbar, Signup, Nav, Topcard, Linechart, Piechart } from './Components';

function App() {
  return (
    <div className="App">
      <Signup />
      <div className="dashContainer">

        <div className="sidenav-Cntnr">
          <Side_Navbar />
        </div>

        <div className="dash-Cntnr" style={{width:"100%",}}>
          <Nav />
          <Topcard/>
          <Linechart/>
          <Piechart/>
        </div>

      </div>
    </div>
  );
}

export default App;
