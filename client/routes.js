import React from "react";
// import { BrowserRouter as Router, Route, Switch, useRoutes } from 'react-router-dom';
// import { useRoutes } from 'react-router-dom'; //v5
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";

import Land from "./Land";
import DashboardLayout from "./Component/DashBoard/Layout";
import About from "./About";
import NoMatch from "./NoMatch";
import Testpg from "./anothertestpg";
import Session from "./Component/Session";
import LoadingScreen from "./Component/LoadingScreen";
import Overview from "./Component/DashBoard/Overview";
import Agenda from "../client/Component/Agenda";
import Table1 from "./Component/Table1";
import Interactions from "./Component/DashBoard/Interactions";
import Vault from "../client/Component/Vault";

// // Declarative routing model
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model
const routes = [
  { path: "/", element: <Land /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Land /> },
      {
        path: "overview",
        element: <Overview />,
      },
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

  // {
  //     path: '/dashboard/session',
  //     element: <Session />,
  //     children: [
  //         { index: true, element: <Land /> },
  //         {
  //             path: '/about',
  //             element: <About />,
  //         },
  //         // {
  //         //     path: '/test',
  //         //     element: <Testpg />,
  //         //     // children: [
  //         //     //     { index: true, element: <Testpg/> },
  //         //     // ]
  //         // },
  //         { path: "*", element: <NoMatch /> }
  //     ]
  // },

  // },
  // // {
  //     path: '/about',
  //     element: <About />,

  //     children: [
  //         { index: true, element: <Testpg /> },
  //         {
  //             path: '/about',
  //             element: <About />,
  //             children: [
  //                 { index: true, element: <About /> },
  //             ]
  //         },
  //         { path: "*", element: <NoMatch /> }
  //     ]

  // },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
