﻿using Newtonsoft.Json;
using RestSharp;
using SBTETAP.BLL;
using SBTETAP.Models;
using SBTETAP.Models.Security;
using System;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using static SBTETAP.BLL.SystemUserBLL;

namespace SBTETAP.Controllers
{
    public class SystemUserController : ApiController
    {


        public string GetEKey()
        {
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch;
            for (int i = 0; i < 10; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
                builder.Append(ch);
            }
            return builder.ToString().ToLower();
        }

        public string GetSessionEkey()
        {
            StringBuilder builder = new StringBuilder();
            Random random = new Random();
            char ch;
            for (int i = 0; i < 30; i++)
            {
                ch = Convert.ToChar(Convert.ToInt32(Math.Floor(26 * random.NextDouble() + 65)));
                builder.Append(ch);
            }
            return builder.ToString().ToLower();
        }

        public class SystemUserencypass
        {
            public int id { get; set; }
            public string UserName { get; set; }
            public string UserPassword { get; set; }
            public string EncriptedPassword { get; set; }
        }


        [HttpPost, ActionName("GetUserLogin")]
        public async Task<HttpResponseMessage> GetUserLogin()
        {
            string token = "";
            //var data = await Request.Content.ReadAsStringAsync();
            //var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            //var crypt = new HbCrypt(res[2]);
            //var passcrypt = new HbCrypt();
            //string UserName = crypt.AesDecrypt(res[1]);
            //string UserPassword = crypt.AesDecrypt(res[0]).Replace("'", "''");
            //string encrypassword = passcrypt.Encrypt(UserPassword);
            //string SessionID = res[3];
            var data = await Request.Content.ReadAsStringAsync();
            var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            var crypt = new HbCrypt(res[2]);
            var passcrypt = new HbCrypt();
            string UserName = crypt.AesDecrypt(res[1]);
            string UserPassDecrypt1 = crypt.AesDecrypt(res[0]).Replace("'", "''");
            string UserPassword = passcrypt.AesDecrypt(UserPassDecrypt1);
            string encrypassword = passcrypt.Encrypt(UserPassword);
            string SessionID = res[3];
            string clientIPAddress = System.Web.HttpContext.Current.Request.UserHostAddress;
            SystemUserBLL SystemUserBLL = new SystemUserBLL();
            SystemUserAuth User;
            User = SystemUserBLL.GetUserLogin(UserName.Replace("'", "''"), encrypassword, clientIPAddress, SessionID);

            if (User.SystemUser.Count > 0 && User.UserAuth[0].ResponceCode == "200")
            {
                var u = User.SystemUser[0];
                AuthToken t = new AuthToken { CourseID = u.CourseID, InstitutionID = u.InstitutionID, InstitutionCode = u.InstitutionCode, InstitutionName = u.InstitutionName, UserTypeID = u.UserTypeID, UserID = u.UserID, UserName = u.UserName, ExpiryDate = DateTime.Now.AddHours(1) };

                token = crypt.Encrypt(JsonConvert.SerializeObject(t));
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, new { token, data = User, clientIPAddress });
                return response;

            }
            else
            {
                var u = User.SystemUser[0];
                AuthToken t = new AuthToken { CourseID = u.CourseID, InstitutionID = u.InstitutionID, InstitutionCode = u.InstitutionCode, InstitutionName = u.InstitutionName, UserTypeID = u.UserTypeID, UserID = u.UserID, ExpiryDate = DateTime.Now.AddHours(1) };

                token = crypt.Encrypt(JsonConvert.SerializeObject(t));
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, new { token, data = User });
                return response;

            }

        }


        [HttpPost, ActionName("GetUserLogout")]
        public HttpResponseMessage GetUserLogout([FromBody] JsonObject data)
        {
            try
            {
                string UserName = data["UserName"].ToString();
                string clientIPAddress = System.Web.HttpContext.Current.Request.UserHostAddress;
                string SessionID = data["SessionID"].ToString();
                SystemUserBLL SystemUserBLL = new SystemUserBLL();
                var User = SystemUserBLL.GetUserLogout(UserName.Replace("'", "''"), clientIPAddress, SessionID);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, User);
                return response;

            }
            catch (Exception ex)
            {
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NotFound, ex.Message);
                return response;
            }





        }




        [HttpPost]
        public async Task<bool> ValidateReCaptcha(string encodedResponse)
        {
            var secretkey = ConfigurationManager.AppSettings["ReCaptcha_Secret_Key"];
            if (string.IsNullOrEmpty(encodedResponse))
            {
                return false;
            }
            if (string.IsNullOrEmpty(secretkey))
            {
                return false;
            }
            using (HttpClient client = new HttpClient())
            {
                var url = "https://www.google.com/recaptcha/api/siteverify";
                try
                {
                    string IpAddress = System.Web.HttpContext.Current.Request.UserHostAddress;

                    var googleReply = await client.GetAsync(string.Format(url + "?secret={0}&response={1}&remoteip={2}", secretkey, encodedResponse, IpAddress));
                    var resContent = await googleReply.Content.ReadAsStringAsync();
                    var res = JsonConvert.DeserializeObject<ReCaptcha>(resContent);
                    if (res.score > 0.5)
                    {
                        return res.Success;
                    }
                    else
                    {
                        return false;
                    }

                }
                catch (Exception ex)
                {
                    return false;
                }
            }



        }



        [HttpPost, ActionName("GetForgotPassword")]
        public async Task<HttpResponseMessage> GetForgotPassword()
        {

            var data = await Request.Content.ReadAsStringAsync();
            var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            var crypt = new HbCrypt(res[2]);
            string UserName = crypt.AesDecrypt(res[0]);
            long UserMobile = Convert.ToInt64(crypt.AesDecrypt(res[1]));
            string mobile = crypt.AesDecrypt(res[1]);
            SystemUserBLL SystemUserBLL = new SystemUserBLL();
            SystemRes ForgetRes = new SystemRes();
            var passcrypt = new HbCrypt();
            ForgetRes = SystemUserBLL.GetForgotPassword(UserName.Replace("'", "''"), UserMobile);
            string retMsg = string.Empty;
            if (ForgetRes.ResponceCode == "200")
            {
                try
                {
                    string decryptpassword = passcrypt.Decrypt(ForgetRes.UserPassword);
                    string url = ConfigurationManager.AppSettings["SMS_API"].ToString();
                    //string smsusername = ConfigurationManager.AppSettings["SMS_Service_Username"].ToString();
                    //string smspassword = ConfigurationManager.AppSettings["SMS_Service_Password"].ToString();
                    string Msg = "SBTET Portal Login Credentials, UserName = {0}, UserPassword = {1} , Secretary,SBTET TS.";
                    var Message = string.Format(Msg, UserName.Replace("'", "''"), decryptpassword);
                    string urlParameters = "?mobile=" + mobile + "&message=" + Message + "&templateid=1007161786891783450";
                    HttpClient client = new HttpClient();
                    client.BaseAddress = new Uri(url);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = client.GetAsync(urlParameters).Result;
                    retMsg = "{\"status\":\"" + ForgetRes.ResponceCode + "\",\"statusdesc\": \"" + ForgetRes.ResponceDescription + "\"}";
                    return Request.CreateResponse(HttpStatusCode.OK, retMsg);
                }
                catch (Exception ex)
                {
                    retMsg = "{\"status\":\"400\",\"statusdesc\": \"" + ex.Message + "\"}";
                    return Request.CreateResponse(HttpStatusCode.OK, retMsg);
                }
            }
            else if (ForgetRes.ResponceCode == "200")
            {
                try
                {
                    // string decryptpassword = passcrypt.Decrypt(ForgetRes.Password);
                    string url = ConfigurationManager.AppSettings["SMS_API"].ToString();
                    //string smsusername = ConfigurationManager.AppSettings["SMS_Service_Username"].ToString();
                    //string smspassword = ConfigurationManager.AppSettings["SMS_Service_Password"].ToString();
                    string Msg = "SBTET Portal Login Credentials, UserName = {0}, UserPassword = {1} SBTETTS.";
                    var Message = string.Format(Msg, UserName.Replace("'", "''"), ForgetRes.UserPassword);
                    string urlParameters = "?mobile=" + mobile + "&message=" + Message + "&templateid=1007161786891783450";
                    HttpClient client = new HttpClient();
                    client.BaseAddress = new Uri(url);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    HttpResponseMessage response = client.GetAsync(urlParameters).Result;
                    retMsg = "{\"status\":\"" + ForgetRes.ResponceCode + "\",\"statusdesc\": \"" + ForgetRes.ResponceDescription + "\"}";
                    return Request.CreateResponse(HttpStatusCode.OK, retMsg);
                }
                catch (Exception ex)
                {
                    retMsg = "{\"status\":\"400\",\"statusdesc\": \"" + ex.Message + "\"}";
                    return Request.CreateResponse(HttpStatusCode.OK, retMsg);

                }
            }
            else
            {
                retMsg = "{\"status\":\"" + ForgetRes.ResponceCode + "\",\"statusdesc\": \"" + ForgetRes.ResponceDescription + "\"}";
                return Request.CreateResponse(HttpStatusCode.OK, retMsg);

            }

        }


        [HttpPost]
        public async Task<HttpResponseMessage> GetChangePassword()
        {
            var data = await Request.Content.ReadAsStringAsync();
            var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            var crypt = new HbCrypt(res[4]);
            string NewPassword = crypt.AesDecrypt(res[0]).Replace("'", "''");
            string OldPassword = crypt.AesDecrypt(res[1]).Replace("'", "''");
            int UserID = Int32.Parse(crypt.AesDecrypt(res[2]));
            int DataType = Int32.Parse(crypt.AesDecrypt(res[3]));
            var passcrypt = new HbCrypt();
            SystemUserBLL SystemUserBLL = new SystemUserBLL();
            SystemRes SystemRes = new SystemRes();
            var encOldpass = passcrypt.Encrypt(OldPassword);
            var encNewpass = passcrypt.Encrypt(NewPassword);
            SystemRes = SystemUserBLL.GetChangePassword(UserID, encOldpass, encNewpass);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, SystemRes);
            return response;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> ResetUserPassword()
        {
            var data = await Request.Content.ReadAsStringAsync();
            var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            var crypt = new HbCrypt(res[3]);
            string NewPassword = crypt.AesDecrypt(res[0]).Replace("'", "''");
            //string OldPassword = crypt.AesDecrypt(res[1]).Replace("'", "''");
            int UserID = Int32.Parse(crypt.AesDecrypt(res[1]));
            int DataType = Int32.Parse(crypt.AesDecrypt(res[2]));
            int old = Int32.Parse(crypt.AesDecrypt(res[3]));
            var passcrypt = new HbCrypt();
            SystemUserBLL SystemUserBLL = new SystemUserBLL();
            SystemRes SystemRes = new SystemRes();
            //var encOldpass = passcrypt.Encrypt(OldPassword);
            var encNewpass = passcrypt.Encrypt(NewPassword);
            SystemRes = SystemUserBLL.ResetUserPassword(UserID, encNewpass);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, SystemRes);
            return response;
        }


        [HttpPost]
        public async Task<HttpResponseMessage> GetCheckOldPassword()
        {
            var data = await Request.Content.ReadAsStringAsync();
            var res = data.Split(new string[] { "$$@@$$" }, StringSplitOptions.None);
            var crypt = new HbCrypt(res[2]);
            int LoggedUserId = Int32.Parse(crypt.AesDecrypt(res[1]));
            string OldPassword = crypt.AesDecrypt(res[0]).Replace("'", "''");
            var passcrypt = new HbCrypt();
            string decryptpassword = passcrypt.Decrypt(OldPassword);

            var encOldpass = passcrypt.Encrypt(OldPassword);
            //string OldPassword = crypt.AesDecrypt(res[0]);
            SystemUserBLL SystemUserBLL = new SystemUserBLL();
            var dt = SystemUserBLL.GetCheckOldPassword(decryptpassword, LoggedUserId);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, dt);
            return response;
        }



    }
}
