// import React from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Counter } from './components/Counter/Counter';
// import { Counter } from './components/Counter/Counter';
import { Frame } from './components/Frame/Frame';
import { Reverser } from './components/Reverser/Reverser';
import { users } from './user/fakeData';
import { Container } from './components/Container/Container';
import { Characters } from './components/Characters/Characters';
import { Link, Outlet } from 'react-router-dom';

function App() {

  const paragraphs = [];

  for (let i = 1; i <= 10; i++) {
    paragraphs.push(<p key={i}>Paragrafo {i}</p>);
  }

  const [numbers, setNumbers] = useState([3, 5, 6, 7])

  return (


    <div className="App">
      <h1>App - Homepage</h1>

      <p>Prima di Outlet</p>
      <Frame>
        <Outlet />
      </Frame>
      <p>Dopo di Outlet</p>

      <Link to="/">Link alla Home</Link>
      <br />
      <Link to="/episodes">Link agli episodi</Link>
      <br />
      <Link to="/episodesChildren">Link agli episodi - Children</Link>


      <Characters />


      <ul>
        {numbers.map((item, index) => <Container key={index} value={item} />)}
      </ul>
      <button onClick={() => setNumbers(numbers.map(item => item + 1))}>Incrementa</button>
      <Reverser></Reverser>

      <Counter />



      <Frame>
        <>
          <p>Ciao</p>
          <p>Ciao2</p>
          {paragraphs}


        </>
      </Frame>

      {
        users
          .map(({ name, surname, imageUrl, currentWork, openToWork }, index) =>
            <Card
              key={index}
              imgURL={imageUrl}
              title={`${name} ${surname}`}
              subtitle={currentWork}
              placeholder={openToWork} />)
      }




      {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    </div>





  );
}

export default App;
