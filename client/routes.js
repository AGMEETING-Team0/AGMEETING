import React from "react";
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";

import Land from './Land';
import DashboardLayout from './Component/DashBoard/Layout';
import NoMatch from './NoMatch';
import Session from './Component/Session';
import Interactions from './Component/DashBoard/Interactions';
import Table1 from "./Component/Table1";
import Vault from "./Component/Vault";

// // Declarative routing model
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model
const Welcome = <h1>Welcome To AGMEETING</h1>;
const routes = [
  { path: "/", element: <Land /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
          path:"",
          element: Welcome
      },
    //   {
    //     path: "overview",
    //     element: <Overview />,
    //   },
      {
        path: "session",
        element: <Session />,
      },
      {
        path: "agenda",
        element: <Table1 />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
      {
        path: "interactions",
        element: <Interactions />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
