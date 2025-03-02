// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateSearch } from '../features/searchSlice';
// import './SearchForm.css';

// const SearchForm = () => {
//   const dispatch = useDispatch();
//   const { leavingFrom, goingTo, checkIn, checkOut, passengers, tripType } = useSelector((state) => state.search);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateSearch({ [name]: value }));
//   };

//   return (
//     <div>
//       <div className='search-container'>
//         <input
//           name="leavingFrom"
//           value={leavingFrom}
//           onChange={handleChange}
//           placeholder="Leaving From"
//           // className="border p-2 rounded-lg w-full"
//         />

//          <span className="divider">⇄</span>

//         <input
//           name="goingTo"
//           value={goingTo}
//           onChange={handleChange}
//           placeholder="Going To"
//           // className="border p-2 rounded-lg w-full"
//         />

//          <span className="divider">⇄</span>

//         <input
//           type="date"
//           name="checkIn"
//           value={checkIn}
//           onChange={handleChange}
//           // className="border p-2 rounded-lg w-full"
//         />

//         <span className="divider">⇄</span>

//         <input
//           type="date"
//           name="checkOut"
//           value={checkOut}
//           onChange={handleChange}
//           // className="border p-2 rounded-lg w-full"
//         />
//         <select
//           name="passengers"
//           value={passengers}
//           onChange={handleChange}
//           // className="border p-2 rounded-lg w-full"
//         >
//           {[1, 2, 3, 4, 5].map((num) => (
//             <option key={num} value={num}>
//               {num} Passenger{num > 1 ? 's' : ''}
//             </option>
//           ))}
//         </select>
//         <select
//           name="tripType"
//           value={tripType}
//           onChange={handleChange}
//           // className="border p-2 rounded-lg w-full"
//         >
//           <option value="Round trip">Round trip</option>
//           <option value="One way">One way</option>
//         </select>
//         <button>Search</button>
      // </div>
//     </div>
//   );
// };

// export default SearchForm;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateSearch } from '../features/searchSlice';
// import './SearchForm.css';
// import backgroundImage from './assets/background.jpeg';

// const SearchForm = () => {
//   const dispatch = useDispatch();
//   const { leavingFrom, goingTo, checkIn, checkOut, passengers, tripType } = useSelector((state) => state.search);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateSearch({ [name]: value }));
//   };

//   return (
//     <div className="search-wrapper">
//       {/* Background Image Section */}
//       <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
//         <h1>Amazing Flight To Switzerland</h1>
//         <p>Find and book a great experience</p>
//       </div>

//       <div className="search-container">
//         <div className="search-header">
//           <button className="tab active">Flight</button>
//           <button className="tab">Hotel</button>
//           <button className="tab">Car Rental</button>
//           <div className='info'>
//         <select name="passengers" value={passengers} onChange={handleChange}>
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
//             ))}
//           </select>
//           <select name="tripType" value={tripType} onChange={handleChange}>
//             <option value="Round trip">Round trip</option>
//             <option value="One way">One way</option>
//           </select>

//         </div>
//         </div>


//         {/* <div className='info'>
//         <select name="passengers" value={passengers} onChange={handleChange}>
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
//             ))}
//           </select>
//           <select name="tripType" value={tripType} onChange={handleChange}>
//             <option value="Round trip">Round trip</option>
//             <option value="One way">One way</option>
//           </select>

//         </div> */}
        
        

//         <div className="search-fields">
//           <input name="leavingFrom" value={leavingFrom} onChange={handleChange} placeholder="Leaving From" />
//           <span className="divider">⇄</span>
//           <input name="goingTo" value={goingTo} onChange={handleChange} placeholder="Going To" />
//           <span className="divider">⇄</span>
//           <input
//             type={checkIn ? "date" : "text"}
//             name="checkIn"
//             value={checkIn}
//             placeholder="Check-in"
//             onFocus={() => dispatch(updateSearch({ checkIn: "" }))}
//             onChange={handleChange}
//             onBlur={(e) => {
//               if (!e.target.value) dispatch(updateSearch({ checkIn: "" }));
//             }}
//           />
//           <span className="divider">⇄</span>
//           {/* Check-out Field */}
//           <input
//             type={checkOut ? "date" : "text"}
//             name="checkOut"
//             value={checkOut}
//             placeholder="Check-out"
//             onFocus={() => dispatch(updateSearch({ checkOut: "" }))}
//             onChange={handleChange}
//             onBlur={(e) => {
//               if (!e.target.value) dispatch(updateSearch({ checkOut: "" }));
//             }}
//           />
//           <button className="search-btn">Search</button>
//           {/* <select name="passengers" value={passengers} onChange={handleChange}>
//             {[1, 2, 3, 4, 5].map((num) => (
//               <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
//             ))}
//           </select>
//           <select name="tripType" value={tripType} onChange={handleChange}>
//             <option value="Round trip">Round trip</option>
//             <option value="One way">One way</option>
//           </select> */}
//           {/* <button className="search-btn">Search</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch, showSuggestions, hideSuggestions } from '../features/searchSlice';
import './SearchForm.css';
import backgroundImage from './assets/background2.jpeg';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { leavingFrom, goingTo, checkIn, checkOut, passengers, tripType, isSuggestionsVisible } = useSelector((state) => state.search);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateSearch({ [name]: value }));
    if (name === 'leavingFrom') dispatch(showSuggestions());
  };

  const handleSuggestionClick = (city) => {
    dispatch(updateSearch({ leavingFrom: city }));
    dispatch(hideSuggestions());
  };

  return (
    <div className="search-wrapper">
      {/* Background Image Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Amazing Flight To Switzerland</h1>
        <h5>Find and book a great experience</h5>
      </div>

      <div className="search-container">
        <div className="search-header">
          <button className="tab active">Flight</button>
          <button className="tab">Hotel</button>
          <button className="tab">Car Rental</button>

          {/* <div className='info'>
         <select name="passengers" value={passengers} onChange={handleChange}>
             {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
            ))}
          </select>
          <select name="tripType" value={tripType} onChange={handleChange}>
            <option value="Round trip">Round trip</option>
            <option value="One way">One way</option>
          </select>

        </div> */}
        </div>
        <div className='info'>
         <select name="passengers" value={passengers} onChange={handleChange}>
             {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
            ))}
          </select>
          <select name="tripType" value={tripType} onChange={handleChange}>
            <option value="Round trip">Round trip</option>
            <option value="One way">One way</option>
          </select>

        </div>

        <div className="search-fields">
        <div style={{ position: "relative" }}>
    <input
      name="leavingFrom"
      value={leavingFrom}
      onChange={handleChange}
      placeholder="Leaving From"
    />
    {isSuggestionsVisible && (
      <div className="suggestions">
        <p onClick={() => handleSuggestionClick('New York')}>New York</p>
        <p onClick={() => handleSuggestionClick('Los Angeles')}>Los Angeles</p>
        <p onClick={() => handleSuggestionClick('Chicago')}>Chicago</p>
      </div>
    )}
  </div>

          <span className="divider">⇄</span>
          <input name="goingTo" value={goingTo} onChange={handleChange} placeholder="Going To" />
          <span className="divider">⇄</span>
          <input
            type={checkIn ? "date" : "text"}
            name="checkIn"
            value={checkIn}
            placeholder="Check-in"
            onFocus={() => dispatch(updateSearch({ checkIn: "" }))}
            onChange={handleChange}
          />
          <span className="divider">⇄</span>
          <input
            type={checkOut ? "date" : "text"}
            name="checkOut"
            value={checkOut}
            placeholder="Check-out"
            onFocus={() => dispatch(updateSearch({ checkOut: "" }))}
            onChange={handleChange}
          />
          <button className="search-btn">Search</button>
        </div>

        {/* {!isSuggestionsVisible && (
          <div className="bottom-content">
            <select name="passengers" value={passengers} onChange={handleChange}>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
              ))}
            </select>
            <select name="tripType" value={tripType} onChange={handleChange}>
              <option value="Round trip">Round trip</option>
              <option value="One way">One way</option>
            </select>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SearchForm;


