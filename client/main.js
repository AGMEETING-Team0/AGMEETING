import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch, DefaultRoute } from 'react-router-dom';

// import App from './App';
// import DashboardLayout from './Component/DashBoard/Layout';
// import Land from './Land';
// // import "./styles.scss";

// const routes = (
//     /*Main.js will server as the "base" compoent for the rest of the application, Route components can be added in here to specify which components should be rendered for different routes 
//     https://reactrouter.com/web/guides/quick-start the documentation for react router is pretty good*/
//     <Router>
//         <Switch>
//             <Route exact path="/" component={App}>
//             </Route>
//             <Route path="/dashboard" component={DashboardLayout}>
//             </Route>
//             <Route path="/landing">
//                 {/*what a route renders can also be specified like this, allowing you to pass props etc*/}
//                 <Land testProp={"test"}></Land>
//             </Route>
//             {/* <Route path='/session'>
//             </Route> */}
//         </Switch>
//     </Router>
// );
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import App from './App';
import Land from './Land';

// import "./styles.scss";

import { StrictMode } from 'react'
// import LocalizationProvider from '@material'
import { SettingsProvider } from './contexts/SettingsContext';
import { StyledEngineProvider } from '@mui/styled-engine';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <SettingsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SettingsProvider>
    </StyledEngineProvider>
    , document.getElementById("root"));