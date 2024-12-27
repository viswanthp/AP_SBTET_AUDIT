using Newtonsoft.Json;
using RestSharp;
using SBTETAP.Controllers.Common;
using SBTETAP.Models;
using SBTETAP.Models.Database;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web.Http;



namespace SBTETAP.Controllers
{

    public class StudentRegistrationController : ApiController
    {

        [HttpPost, ActionName("SendSms")]
        public async Task<HttpResponseMessage> SendSms([FromBody] SendSmsInfo data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@CandidateMobile", data.CandidateMobile);
                param[1] = new SqlParameter("@CandidateName", data.CandidateName);
                DataSet dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_RegistrationMobileOTP", param);
                if (dt.Tables[0].Rows[0]["StatusCode"].ToString() == "200")
                {
                    var com = new CommunicationController();
                    var msg = dt.Tables[1].Rows[0]["MobileOTP"].ToString() + " is your otp for validating your Mobile no on" + data.CandidateMobile.ToString().Substring(0, 2) + "xxxxx" + data.CandidateMobile.ToString().Substring(6, 4) + ", SBTET TS";
                    var test = await com.SendSms(data.CandidateMobile.ToString(), msg, "1007161770830309481");
                };

                HttpResponseMessage HttpResponse = Request.CreateResponse(HttpStatusCode.OK, dt.Tables[0].DataTableToList<HttpResponse>());
                return HttpResponse;
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Get_RegistrationMobileOTP", 0, ex.Message);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, ex.Message);
                return response;
            }
        }

        [HttpPost, ActionName("VerifyMobileOtp")]
        public HttpResponseMessage VerifyMobileOtp([FromBody] VerifySmsInfo data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@CandidateMobile", data.CandidateMobile);
                param[1] = new SqlParameter("@CandidateName", data.CandidateName);
                param[2] = new SqlParameter("@MobileOTP", data.MobileOTP);
                DataTable dt = dbHandler.ReturnDataSet("SP_Verify_RegistrationMobileOTP", param);
                List<HttpResponse> Resp = dt.DataTableToList<HttpResponse>();
                HttpResponseMessage HttpResponse = Request.CreateResponse(HttpStatusCode.OK, Resp);
                return HttpResponse;

            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Verify_RegistrationMobileOTP", 0, ex.Message);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, ex.Message);
                return response;
            }
        }

        [HttpPost, ActionName("VerifyCaste")]
        public HttpResponseMessage VerifyCaste([FromBody] VerifyCasteInfo data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@AadharNumber", data.AadharNumber);
                param[1] = new SqlParameter("@CasteCertificateNumber", data.CasteCertificateNumber);
                param[2] = new SqlParameter("@CasteCategoryID", data.CasteCategoryID);
                DataTable dt = dbHandler.ReturnDataSet("TempSP_Verify_CasteCertificate", param);
                List<HttpResponse> Resp = dt.DataTableToList<HttpResponse>();
                HttpResponseMessage HttpResponse = Request.CreateResponse(HttpStatusCode.OK, Resp);
                return HttpResponse;

            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("TempSP_Verify_CasteCertificate", 0, ex.Message);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, ex.Message);
                return response;
            }
        }


        //[HttpPost, ActionName("StdRegistration")]
        //public async Task<HttpResponseMessage> StdRegistration([FromBody] StdDetails data)
        //{
        //    var dbHandler = new PolycetdbHandler();
        //    try
        //    {
        //        var test = string.Empty;
        //        var param = new SqlParameter[4];
        //        param[0] = new SqlParameter("@StudentName", data.StudentName);
        //        param[1] = new SqlParameter("@RegistrationMobile", data.RegistrationMobile);
        //        param[2] = new SqlParameter("@RegistrationEmail", data.RegistrationEmail);
        //        param[3] = new SqlParameter("@RegistrationPassword", data.RegistrationPassword);
        //        DataSet dt = dbHandler.ReturnDataWithStoredProcedure("SP_Temp_Set_Registration", param);
        //        if (dt.Tables[0].Rows[0]["StatusCode"].ToString() == "200")
        //        {
        //            var com = new CommunicationController();
        //            //var msg = "KIQRZA is your otp for validating your Mobile no on" + data.RegistrationMobile.ToString().Substring(0, 2) + "xxxxx" + data.RegistrationMobile.ToString().Substring(6, 4) + ", SBTET TS";
        //            //var tmp = await com.SendSms(data.RegistrationMobile.ToString(), msg, "1007161770830309481");
        //            var msg = "Polycet6789124561 is Your provisional registration No for POLYCET 2023 and 123456 password. Login and complete Application, SBTET TS";
        //            var tmp = await com.SendSms(data.RegistrationMobile.ToString(), msg, "1007166857328053980");
        //        }


        //        if (dt.Tables[0].Rows[0]["StatusCode"].ToString() == "200" && data.RegistrationEmail != "")
        //        {

        //            var msgbdy = new MailRequest()
        //            {
        //                From = "sbtet-helpdesk[at]telangana[dot]gov[dot]in",
        //                To = data.RegistrationEmail.ToString(),
        //                Subject = "test mail",
        //                Message = "Your have provisionally registered for POLYCET-2023.Your provisional Registration Number is " + dt.Tables[1].Rows[0]["ApplicationNumber"].ToString() + "RegistrationPassword",
        //                attachmentdata = "Attachment"
        //            };
        //            var com = new CommunicationController();
        //            test = await com.SendMail(msgbdy);
        //        }




        //        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, dt);
        //        return response;



        //    }

        //    catch (Exception ex)
        //    {
        //        dbHandler.SaveErorr("SP_Temp_Set_Registration", 0, ex.Message);
        //        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, ex.Message);
        //        return response;
        //    }

        //}

        private RijndaelManaged myRijndael = new RijndaelManaged();
        private int iterations;
        private byte[] salt;

        public string ClsCrypto(string strPassword)
        {
            myRijndael.BlockSize = 128;
            myRijndael.KeySize = 128;
            myRijndael.IV = HexStringToByteArray("a5s8d2e9c1721ae0e84ad660c472y1f3");

            myRijndael.Padding = PaddingMode.PKCS7;
            myRijndael.Mode = CipherMode.CBC;
            iterations = 1000;
            salt = System.Text.Encoding.UTF8.GetBytes("cryptography123example           myRijndael.Key = GenerateKey(strPassword)");
            byte[] strText = new System.Text.UTF8Encoding().GetBytes(strPassword);
            ICryptoTransform transform = myRijndael.CreateEncryptor();
            byte[] cipherText = transform.TransformFinalBlock(strText, 0, strText.Length);
            return Convert.ToBase64String(cipherText);
        }

        public string Encrypt(string strPlainText)
        {
            byte[] strText = new System.Text.UTF8Encoding().GetBytes(strPlainText);
            ICryptoTransform transform = myRijndael.CreateEncryptor();
            byte[] cipherText = transform.TransformFinalBlock(strText, 0, strText.Length);
            return Convert.ToBase64String(cipherText);
        }

        public string Decrypt(string encryptedText)
        {
            var encryptedBytes = Convert.FromBase64String(encryptedText);
            ICryptoTransform transform = myRijndael.CreateDecryptor();
            byte[] cipherText = transform.TransformFinalBlock(encryptedBytes, 0, encryptedBytes.Length);
            return System.Text.Encoding.UTF8.GetString(cipherText);
        }

        public static byte[] HexStringToByteArray(string strHex)
        {
            dynamic r = new byte[strHex.Length / 2];
            for (int i = 0; i <= strHex.Length - 1; i += 2)
            {
                r[i / 2] = Convert.ToByte(Convert.ToInt32(strHex.Substring(i, 2), 16));
            }
            return r;
        }

        private byte[] GenerateKey(string strPassword)
        {
            Rfc2898DeriveBytes rfc2898 = new Rfc2898DeriveBytes(System.Text.Encoding.UTF8.GetBytes(strPassword), salt, iterations);
            return rfc2898.GetBytes(128 / 8);
        }

        [HttpPost, ActionName("StdRegistration")]
        public async Task<HttpResponseMessage> StdRegistration([FromBody] StdDetails data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@StudentName", data.StudentName);
                param[1] = new SqlParameter("@RegistrationMobile", data.RegistrationMobile);
                param[2] = new SqlParameter("@CasteCategoryID", data.CasteCategoryID);
                param[3] = new SqlParameter("@AadharNumber", data.AadharNumber);
                param[4] = new SqlParameter("@CasteCertificateNumber", data.CasteCertificateNumber);
                param[5] = new SqlParameter("@CasteVerified", data.CasteVerified);
                param[6] = new SqlParameter("@RegistrationEmail", data.RegistrationEmail);
                param[7] = new SqlParameter("@RegistrationPassword", data.RegistrationPassword);
                param[8] = new SqlParameter("@RegistrationAmount", data.RegistrationAmount);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Set_Registration", param);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, dt);
                return response;
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr(" SP_Set_Registration", 0, ex.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }





        [HttpGet, ActionName("GetCategories")]
        public string GetCategories()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_CasteCategories";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_CasteCategories", 0, ex.Message);
                throw ex;
            }
        }

    }
}

