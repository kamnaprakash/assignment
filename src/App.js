// // // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// }

// export default App;


import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Destinations from './components/Destinations';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      {/* <div>
        <h1>Amazing Flight To Switzerland</h1>
        <p>Find and book a great experience</p>
      </div> */}
      <div>
        <SearchForm />
        <Destinations />
      </div>
    </div>
  </Provider>
);

export default App;
