﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SBTETAP.Models.Security;
using SBTETAP.Models.Database;
using SBTETAP.Services;
using System.Data;
using Newtonsoft.Json;
using SBTETAP.BLL;
using SBTETAP.Models;
using SBTETAP.Models;
using SBTETAP.Models;

namespace SBTETAP.BLL
{
    public class SystemUserBLL
    {
        public SystemUserAuth GetUserLogin(string UserName, string UserPassword, string IPAddress, string SessionID)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataSet tblUsersList = new DataSet();
                tblUsersList = SystemUserService.GetUserLogin(dbHandler, UserName, UserPassword, IPAddress, SessionID);
                var ds = JsonConvert.SerializeObject(tblUsersList);
                List<SystemUser> User = tblUsersList.Tables[1].DataTableToList<SystemUser>();
                List<UserAuth> Userstat = tblUsersList.Tables[0].DataTableToList<UserAuth>();
                SystemUserAuth SystemUserAuthData = new SystemUserAuth()
                {
                    SystemUser = User,
                    UserAuth = Userstat,
                };

                //  branchWiseReportDataList.Add(branchWiseReportData);
                return SystemUserAuthData;

                //  return User;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public class logoutResp
        {
            public string responseDesc { get; set; }
            public string responseCode { get; set; }
        }
        public logoutResp GetUserLogout(string UserName, string IPAddress, string SessionID)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataSet tblUsersList = new DataSet();
                tblUsersList = SystemUserService.GetUserLogout(dbHandler, UserName, IPAddress, SessionID);
                var ds = JsonConvert.SerializeObject(tblUsersList);
                logoutResp rs = new logoutResp();
                rs.responseCode = "200";
                rs.responseDesc = "logout successful.";
                return rs;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }






        public class SystemRes
        {
            public String ResponceCode;
            public String ResponceDescription;
            public String UserPassword;

        }

        public SystemRes GetForgotPassword(string UserName, Int64 UserMobile)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                tblUsersList = SystemUserService.GetForgotPassword(dbHandler, UserName, UserMobile);
                // return JsonConvert.SerializeObject(tblUsersList);  
                string status = Convert.ToString(tblUsersList.Rows[0]["ResponceCode"]);
                if (status == "200")
                {
                    SystemRes res = new SystemRes();
                    res.UserPassword = Convert.ToString(tblUsersList.Rows[0]["UserPassword"]);
                    res.ResponceCode = Convert.ToString(tblUsersList.Rows[0]["ResponceCode"]);
                    res.ResponceDescription = Convert.ToString(tblUsersList.Rows[0]["ResponceDescription"]);
                    return res;
                }
                else
                {
                    SystemRes res = new SystemRes();
                    res.UserPassword = Convert.ToString(tblUsersList.Rows[0]["UserPassword"]);
                    res.ResponceCode = Convert.ToString(tblUsersList.Rows[0]["ResponceCode"]);
                    res.ResponceDescription = Convert.ToString(tblUsersList.Rows[0]["ResponceDescription"]);
                    return res;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public SystemRes GetChangePassword(Int32 UserID, string OldPassword, string NewPassword)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                tblUsersList = SystemUserService.GetChangePassword(dbHandler, UserID, OldPassword, NewPassword);
                SystemRes res = new SystemRes();
                res.ResponceCode = Convert.ToString(tblUsersList.Rows[0]["ResponceCode"]);
                res.ResponceDescription = Convert.ToString(tblUsersList.Rows[0]["ResponceDescription"]);
                return res;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public SystemRes ResetUserPassword(Int32 UserID, string NewPassword)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                tblUsersList = SystemUserService.ResetUserPassword(dbHandler, UserID, NewPassword);
                SystemRes res = new SystemRes();
                res.ResponceCode = Convert.ToString(tblUsersList.Rows[0]["ResponceCode"]);
                res.ResponceDescription = Convert.ToString(tblUsersList.Rows[0]["ResponceDescription"]);
                return res;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public object GetCheckOldPassword(string OldPassword, int LoggedUserId)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                return SystemUserService.GetCheckOldPassword(dbHandler, OldPassword, LoggedUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public IEnumerable<SystemModules> GetUserModules(Int32 UserTypeID)
        {

            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                tblUsersList = SystemUserService.GetUserModules(dbHandler, UserTypeID);
                List<SystemModules> SystemGroups = tblUsersList.DataTableToList<SystemModules>();
                return SystemGroups;
            }
            catch (Exception ex)
            {
                return null;
                // throw ex;
            }
        }


        public IEnumerable<SystemSubModules> GetUserSubModules(int UserTypeID, Int32 ModuleID)
        {
            try
            {
                SystemUserService SystemUserService = new SystemUserService();
                PolycetdbHandler dbHandler = new PolycetdbHandler();
                DataTable tblUsersList = new DataTable();
                tblUsersList = SystemUserService.GetUserSubModules(dbHandler, UserTypeID, ModuleID);
                List<SystemSubModules> SystemGroups = tblUsersList.DataTableToList<SystemSubModules>();
                return SystemGroups;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


    }
}
