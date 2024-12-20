// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import { createFilterOptions } from '@mui/material/Autocomplete';
// // import Autocomplete , { createFilterOptions } from '@mui/material/Autocomplete';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import { BrowserRouter } from 'react-router-dom';

// const options = ['Option 1', 'Option 2', 'Option 3'];

// const customFilter = (options, state) => {
//   return options.filter(option => option.toLowerCase().includes(state.inputValue.toLowerCase()));
// };

// const MyComponent = () => {
//   return (
//     <Autocomplete
//       options={options}
//       filterOptions={customFilter}
//       renderInput={(params) => <TextField {...params} label="My Autocomplete" />}
//     />
//   );
// };



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();