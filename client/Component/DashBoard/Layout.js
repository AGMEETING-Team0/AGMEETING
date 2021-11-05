import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import { experimentalStyled } from "@mui/material";
import {Box} from '@mui/system'

import NavBar from "./NavBar";
import DashboardSidebar from "./DashboardSidebar";
import About from "../../About";
import Session from "../Session";

const DashboardLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const DashboardLayoutWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: "64px",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "280px",
  },
}));

const DashboardLayoutContainer = experimentalStyled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const DashboardLayoutContent = experimentalStyled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch",
});

const DashboardLayout = () => {
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);
  // let { path, url } = useRouteMatch();
  // useEffect(() => {
  //   console.log(path);
  // });

  return (
    <DashboardLayoutRoot>
      <NavBar onSidebarMobileOpen={() => setIsSidebarMobileOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setIsSidebarMobileOpen(false)}
        openMobile={isSidebarMobileOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
           <Outlet></Outlet>
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
