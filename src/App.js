import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./App.css";
import Home from "./Home";

import logo from "./img/logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Style.css";
import Service from "./Service";

export default function App() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Contact</Tab>
          <img className="Logo" src={logo} alt="logo" />
          <Tab>Service</Tab>
        </TabList>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <Service />
        </TabPanel>
      </Tabs>
    </div>
  );
}
