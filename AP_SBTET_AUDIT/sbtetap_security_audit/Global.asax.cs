﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace SBTETAP
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
          //  GlobalConfiguration.Configure(WebAPIConfig.Register);
            GlobalConfiguration.Configure(WebAPIConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

       
    }
}