import React from 'react';
import { useSelector } from "react-redux";
import './Destinations.css';
// import image1 from './assets/images2.jpeg';

// const Destinations = () => {
//   const destinations = [
//     'Batu, East Java',
//     'Kuta',
//     'Surabaya, East Java',
//     'Malang, East Java',
//     'Dieng, Central Java',
//     'Nusa Dua, Lombok',
//     'Bandung, West Java',
//     'Wakatobi, Sumatera',
//   ];

//   return (
//     <div>
//       <h2>Search a Best Place in the World</h2>
//       <p>
//         Whether you're looking for places for a vacation, we are here to guide you.
//       </p>
//       <div className='griding'>
//         {destinations.map((place) => (
//           <div key={place}>
//             <h3>{place}</h3>
//             <h5>86 Destinations</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Destinations = () => {
  
  const isVisible = useSelector((state) => state.search.isSuggestionsVisible);


  const destinations = [
    { name: 'Batu, East Java', img: '/assets/images2.jpg' },
    { name: 'Kuta', img: 'kuta.jpg' },
    { name: 'Surabaya, East Java', img: 'surabaya.jpg' },
    { name: 'Malang, East Java', img: 'malang.jpg' },
    { name: 'Dieng, Central Java', img: 'dieng.jpg' },
    { name: 'Nusa Dua, Lombok', img: 'nusadua.jpg' },
    { name: 'Bandung, West Java', img: 'bandung.jpg' },
    { name: 'Wakatobi, Sumatera', img: 'wakatobi.jpg' },
  ];

  if (isVisible) return null;

  return (
    <div className='container'>
      <h2>Search a Best Place in the World</h2>
      <p>Whether you're looking for places for a vacation, we are here to guide you.</p>

      <div className='griding'>
        {destinations.map((place) => (
          <div className='card' key={place.name}>
            <img src={place.img} alt={place.name} />
            <h3>{place.name}</h3>
            <p>86 Destinations</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
