import React from "react";

import Sidebar from "../components/sidebar"

const Layout = ({children}) => (
      
      <div className = "container-fluid">
        <div className = "container">
          <div className = "row">
            <div className = "col-xs-4 col-md-4 col-lg-3"><Sidebar /></div>
            <div className = "col-xs-8 col-md-8 col-lg-9">{children}</div>
          </div>
        </div>
        </div>

)

export default Layout