// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import { users } from './user/fakeData';
// import { Card } from './components/Card/Card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const Pippo = () => {

//   // const products = ['apple', 'android', 'lg', 'samsung'];
//   // const products: string[] = [];

//   return (
//     <>

//       {users
//         .map(({ name, surname, currentWork, openToWork }, index) =>
//           <Card
//             key={index}
//             title={`${name} ${surname}`}
//             subtitle={currentWork}
//             placeholder={openToWork} />)
//       }


//       {/* {products.length > 0 ? 
//     products.map(item=> <p>{item}</p> ) 
//     : "Non ci sono elementi"} */}

//       {/* {products.map(item => <p>{item}</p>)}
//       {products.length === 0 && <p>Non ci sono elementi</p>} */}


//       {/* <div className="card">
//         <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
//         <div className="container">
//           <h4><b>John Doe</b></h4>
//           <p>Architect & Engineer</p>
//         </div>
//       </div> */}

//     </>
//   )
// }



root.render(
  // <React.StrictMode>
  <App /> 
  // </React.StrictMode>
  // Pippo()
  // <Pippo />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
