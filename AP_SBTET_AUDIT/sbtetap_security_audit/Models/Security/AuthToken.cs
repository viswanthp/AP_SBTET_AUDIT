﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SBTETAP.Models.Security
{
    public class AuthToken
    {
        internal string UserName;

        public int CourseID { get; set; }
        public int InstitutionID { get; set; }
        public string InstitutionCode { get; set; }
        public string InstitutionName { get; set; }

        public int UserTypeID { get; set; }

        public int UserID { get; set; }


        public DateTime ExpiryDate { get; internal set; }
    }
}