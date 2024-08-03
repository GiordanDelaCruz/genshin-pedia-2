import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// React Components
import App from './App.jsx';
import CharacterProfile from "./pages/CharacterProfile.jsx";

// Test Data
import ganyu_data from "./../test-data/character-info.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "characters/ganyu",
    element:  <CharacterProfile 
                name = {ganyu_data.name}
                title = {ganyu_data.title}
                vision = {ganyu_data.vision.toLowerCase()}
                weapon = {ganyu_data.weapon.toLowerCase()}
                gender = {ganyu_data.gender}
                nation = {ganyu_data.nation}
                affiliation = {ganyu_data.affiliation}
                rarity = {ganyu_data.rarity}
                release = {ganyu_data.release}
                constellation = {ganyu_data.constellation}
                birthday = {ganyu_data.birthday}
                description = {ganyu_data.description}
                imageName = {ganyu_data.name}
                skillTalents = {ganyu_data.skillTalents}
                passiveTalents = {ganyu_data.passiveTalents} 
                constellations = {ganyu_data.constellations}
              />,
  },
  // {
  //   path:"characters/=characterName",
  //   // Need to add axios request to get data
  //   element: <CharacterProfile 
  //               name = {props.name}
  //               title = {props.title}
  //               vision = {props.vision.toLowerCase()}
  //               weapon = {props.weapon.toLowerCase()}
  //               gender = {props.gender}
  //               nation = {props.nation}
  //               affiliation = {props.affiliation}
  //               rarity = {props.rarity}
  //               release = {props.release}
  //               constellation = {props.constellation}
  //               birthday = {props.birthday}
  //               description = {props.description}
  //               imageName = {character}
  //               skillTalents = {props.skillTalents}
  //               passiveTalents = {props.passiveTalents} 
  //               constellations = {props.constellations}
  //             />,
  // }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// rarity = {ganyu_data.rarity}
// name = {ganyu_data.name}
// gender = {ganyu_data.gender}
// nation = {ganyu_data.nation}
// affiliation = {ganyu_data.affiliation}
// constellation = {ganyu_data.constellation}
// birthday = {ganyu_data.birthday}
// release = {ganyu_data.release}
