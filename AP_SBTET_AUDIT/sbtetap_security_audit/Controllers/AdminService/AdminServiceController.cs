using Newtonsoft.Json;
using RestSharp;
using SBTETAP.Models.Database;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Http;


namespace SBTETAP.Controllers
{


    public class AdminServiceController : ApiController
    {
        [HttpGet, ActionName("GetColleges")]
        public string GetColleges()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_Colleges";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_Colleges", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetFeedbackList")]
        public string GetFeedbackList()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_FeedBacks";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_FeedBacks", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("GetUsersForPasswordReset")]
        public string GetUsersForPasswordReset()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_UsersforResetPassword";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_UsersforResetPassword", 0, ex.Message);
                throw ex;
            }
        }



        [HttpGet, ActionName("GetLatestNews")]
        public string GetLatestNews()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_LatestNews";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_LatestNews", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminLatestNews")]
        public string GetAdminLatestNews()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_LatestNews";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_LatestNews", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetDigitalClassRooms")]
        public string GetDigitalClassRooms()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_DigitalClassrooms";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_DigitalClassrooms", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetVirtualClassRooms")]
        public string GetVirtualClassRooms()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_VirtualClassrooms";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_VirtualClassrooms", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetCollegeLabs")]
        public string GetCollegeLabs()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_CollegeLabs";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_CollegeLabs", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetEvents")]
        public string GetEvents()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Event";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Event", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminEvents")]
        public string GetAdminEvents()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_Event";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Event", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetCourses")]
        public string GetCourses()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Courses";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Courses", 0, ex.Message);
                throw ex;
            }
        }




        [HttpGet, ActionName("GetStaffList")]
        public string GetStaffList()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_SataffDetails";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_SataffDetails", 0, ex.Message);
                throw ex;
            }
        }




        [HttpGet, ActionName("GetRegions")]
        public string GetRegions()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Regions";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Regions", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetStaffData")]
        public string GetStaffData()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_SataffDetails";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_SataffDetails", 0, ex.Message);
                throw ex;
            }
        }



        [HttpGet, ActionName("GetDistrictsByRegionId")]
        public string GetDistrictsByRegionId(int RegionID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@RegionID", RegionID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Districts", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegeStaffFilter")]
        public string GetCollegeStaffFilter(int DistrictID, int CollegeID = 0)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@DistrictID", DistrictID);
                param[1] = new SqlParameter("@CollegeID", CollegeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetStaffById")]
        public string GetStaffById(int SataffDetailID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@SataffDetailID", SataffDetailID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_SataffDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpPost, ActionName("AddGallery")]
        public string AddGallery(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
               // var path = AppDomain.CurrentDomain.BaseDirectory + @"\GalleryImages\";
                var path = ConfigurationManager.AppSettings["GalleryImage"];
                var livepath = ConfigurationManager.AppSettings["LiveGalleryPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var GalleryPath = string.Empty;
                var filename = data["GalleryImageText"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["GalleryImageFilePath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                 GalleryPath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                //WESCertificate = relativePath;

                //    file += relativePath + ',';
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@GalleryImageText", data["GalleryImageText"]);
                param[1] = new SqlParameter("@GalleryImageFilePath", GalleryPath);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_GalleryImage", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_GalleryImage", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpGet, ActionName("GetGallery")]
        public string GetGallery()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_GalleryImage";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_GalleryImage", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminGallery")]
        public string GetAdminGallery()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_GalleryImage";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_GalleryImage", 0, ex.Message);
                throw ex;
            }
        }



        [HttpGet, ActionName("GetGalleryById")]
        public string GetGalleryById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_GalleryImageById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteGalleryById")]
        public string DeleteGalleryById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_GalleryImageById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }




        [HttpPost, ActionName("UpdateGallery")]
        public string UpdateGallery(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["GalleryImage"];
                var LiveGalleryPath = ConfigurationManager.AppSettings["LiveGalleryPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var imagepath = string.Empty;
                var filename = data["GalleryImageText"] + ".jpg";
                if (data["ImgUploaded"].ToString() == "1")
                {
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["GalleryImagePath"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    imagepath = LiveGalleryPath + filename;
                }
                else
                {
                    imagepath = data["GalleryImagePath"].ToString();
                }
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@GalleryImageText", data["GalleryImageText"]);
                param[1] = new SqlParameter("@GalleryImagePath", imagepath);
                param[2] = new SqlParameter("@Active", data["Active"]);
                param[3] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_GalleryImages", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_GalleryImages", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }



        [HttpGet, ActionName("GetCollegeIndustrialTrainingByUserName")]
        public string GetCollegeIndustrialTrainingByUserName(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegeIndustrialTrainingsByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegeIndustrialTrainingById")]
        public string GetCollegeIndustrialTrainingById(int CollegeIndustrialTrainingID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeIndustrialTrainingID", CollegeIndustrialTrainingID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegeIndustrialTrainings", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetCollegeLabsByUserName")]
        public string GetCollegeLabsByUserName(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegeLabsByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegeLabsById")]
        public string GetCollegeLabsById(int CollegeLabID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeLabID", CollegeLabID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegeLabs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetCollegeDetailsById")]
        public string GetCollegeDetailsById(int CollegeID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeID", CollegeID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegeDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegeList")]
        public string GetCollegeList(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Colleges", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegeListByCourse")]
        public string GetCollegeListByCourse(int RegionID, int DistrictID, int CollegeTypeID, int CourseID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                param[3] = new SqlParameter("@CourseID", CourseID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CourseColleges", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("CollegeTypes")]
        public string CollegeTypes()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_CollegeTypes";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_CollegeTypes", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetActiveCourses")]
        public string GetActiveCourses()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Courses_Active";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Courses_Active", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetCorousels")]
        public string GetCorousels()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_SliderImage";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_SliderImage", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminCorousels")]
        public string GetAdminCorousels()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_SliderImage";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_SliderImage", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetNotifications")]
        public string GetNotifications()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Notifications";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Notifications", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminNotifications")]
        public string GetAdminNotifications()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_Notifications";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Notifications", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("GetBranchs")]
        public string GetBranchs()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Branchs";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Branchs", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAcademicYears")]
        public string GetAcademicYears()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_AcademicYears";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_AcademicYears", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("GetStaffOrder")]
        public string GetStaffOrder()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_GET_PriorityOrder";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_GET_PriorityOrder", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetYears")]
        public string GetYears()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Years";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Years", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetExamMonthYears")]
        public string GetExamMonthYears()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_ExamMonthYears";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_ExamMonthYears", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetSchemes")]
        public string GetSchemes()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Schemes";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Schemes", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetSyllabus")]
        public string GetSyllabus()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Syllabus";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Syllabus", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminSyllabus")]
        public string GetAdminSyllabus()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_Syllabus";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_Syllabus", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetQuestionPaper")]
        public string GetQuestionPaper()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_QuestionPapers";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_QuestionPapers", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminQuestionPaper")]
        public string GetAdminQuestionPaper()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_QuestionPapers";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_QuestionPapers", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetTimeTable")]
        public string GetTimeTable()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_TimeTable";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_TimeTable", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminTimeTable")]
        public string GetAdminTimeTable()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_TimeTable";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_TimeTable", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetCollegeTypes")]
        public string GetCollegeTypes()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_CollegeTypes";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_CollegeTypes", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetWebsiteCounts")]
        public string GetWebsiteCounts()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Website_Counts";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Website_Counts", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAllDistricts")]
        public string GetDistricts()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_Districts";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_Districts", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetCaptchaString10")]
        public string GetCaptchaString10()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                string strCaptchaString = "";
                //if (Captcha == null)
                //{

                int intZero = '0';
                int intNine = '9';
                int intA = 'A';
                int intZ = 'Z';
                int intCount = 0;
                int intRandomNumber = 0;
                //string strCaptchaString = "";

                Random random = new Random(System.DateTime.Now.Millisecond);

                while (intCount < 10)
                {
                    intRandomNumber = random.Next(intZero, intZ);
                    if (((intRandomNumber >= intZero) && (intRandomNumber <= intNine) || (intRandomNumber >= intA) && (intRandomNumber <= intZ)))
                    {
                        strCaptchaString = strCaptchaString + (char)intRandomNumber;
                        intCount = intCount + 1;
                    }
                }

                return strCaptchaString;

            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("USP_SET_ReleaseTcPin", 0, ex.Message);
                return ex.Message;
            }
        }



        [HttpGet, ActionName("GetCaptchaString")]
        public string GetCaptchaString(string SessionId)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string strCaptchaString = "";
                int intZero = '0';
                int intNine = '9';
                int intA = 'A';
                int intZ = 'Z';
                int intCount = 0;
                int intRandomNumber = 0;
                //string strCaptchaString = "";

                Random random = new Random(System.DateTime.Now.Millisecond);

                while (intCount < 5)
                {
                    intRandomNumber = random.Next(intZero, intZ);
                    if (((intRandomNumber >= intZero) && (intRandomNumber <= intNine) || (intRandomNumber >= intA) && (intRandomNumber <= intZ)))
                    {
                        strCaptchaString = strCaptchaString + (char)intRandomNumber;
                        intCount = intCount + 1;
                    }
                }
                SetSessionId(SessionId, strCaptchaString);
                var skyblue = System.Drawing.ColorTranslator.FromHtml("#1F497D");
                //var white = System.Drawing.ColorTranslator.FromHtml("linear-gradient(90deg, rgba(237,245,255,1) 0%, rgba(204,223,247,1) 100%)");
                string str = ConvertTextToImage(strCaptchaString, "sans-serif", 35, Color.White, skyblue, 250, 65).ToString();

                List<person> p = new List<person>();
                person p1 = new person();

                p1.Image = str;
                //p1.Text = strCaptchaString;
                p.Add(p1);

                return JsonConvert.SerializeObject(p);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("USP_SET_ReleaseTcPin", 0, ex.Message);
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetEventsById")]
        public string GetEventsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_EventById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        [HttpGet, ActionName("GetTwshCollegeList")]
        public string GetTwshCollegeList(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_TWSHInsttitutions", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetTwshCoursesList")]
        public string GetTwshCoursesList(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_TWSHCourses", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCCICCollegeList")]
        public string GetCCICCollegeList(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CCICInsttitutions", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCCICCoursesList")]
        public string GetCCICCoursesList(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CCICCourses", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetFilterSyllabus")]
        public string GetFilterSyllabus(int SchemeId, int BranchId)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@SchemeId", SchemeId);
                param[1] = new SqlParameter("@BranchId", BranchId);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Filter_Syllabus", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterJournal")]
        public string FilterJournal(int PublishYear)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@PublishYear", PublishYear);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_Journals", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetFilterQuestionPaper")]
        public string GetFilterQuestionPaper(int SchemeId, int BranchId, int ExamMonthYearId)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@SchemeId", SchemeId);
                param[1] = new SqlParameter("@BranchId", BranchId);
                param[2] = new SqlParameter("@ExamMonthYearId", ExamMonthYearId);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Filter_QuestionPaper", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetFilterTimeTable")]
        public string GetFilterTimeTable(int SchemeId, int ExaminationSpell, int ExamMonthYearId)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@SchemeId", SchemeId);
                param[1] = new SqlParameter("@ExaminationSpell", ExaminationSpell);
                param[2] = new SqlParameter("@ExamMonthYearId", ExamMonthYearId);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Filter_TimeTable", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpPost, ActionName("AddorUpdateCount")]
        public string AddorUpdateCount(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[11];
                param[0] = new SqlParameter("@DataType", data["DataType"]);
                param[1] = new SqlParameter("@CountID", data["CountID"]);
                param[2] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[3] = new SqlParameter("@Faculty", data["Faculty"]);
                param[4] = new SqlParameter("@Courses", data["Courses"]);
                param[5] = new SqlParameter("@Students", data["Students"]);
                param[6] = new SqlParameter("@Institutions", data["Institutions"]);
                param[7] = new SqlParameter("@OnRoll", data["OnRoll"]);
                param[8] = new SqlParameter("@Awarded", data["Awarded"]);
                param[9] = new SqlParameter("@Active", data["Active"]);
                param[10] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Update_Counts", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Update_Counts", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("GetorEditCounts")]
        public string GetorEditCounts(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@DataType", data["DataType"]);
                param[1] = new SqlParameter("@CountID", data["CountID"]);
                param[2] = new SqlParameter("@Active", data["Active"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Counts", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Update_Counts", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
            }
        }

        [HttpGet, ActionName("DeleteEventsById")]
        public string DeleteEventsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_EventById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetLatestNewsById")]
        public string GetLatestNewsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_LatestNewsById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteLatestNewsById")]
        public string DeleteLatestNewsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_LatestNewsById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCourseById")]
        public string GetCourseById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CourseById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteCourseById")]
        public string DeleteCourseById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CourseById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCorouselsById")]
        public string GetCorouselsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_SliderImageById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteCorouselsById")]
        public string DeleteCorouselsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_SliderImageById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetNotificationsById")]
        public string GetNotificationsById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_NotificationById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        
    [HttpGet, ActionName("DeleteNotification")]
    public string DeleteNotification(int Id,string FileName)
    {
        try
        {
                var path1 = ConfigurationManager.AppSettings["NotificationsPath"];

                var path = path1+"/" + FileName;
                if (File.Exists(path))
                {
                    File.Delete(path);
                }
                var dbHandler = new PolycetdbHandler();
            var param = new SqlParameter[1];
            param[0] = new SqlParameter("@Id", Id);

            var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_NotificationById_1", param);
            return JsonConvert.SerializeObject(dt);
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }


    [HttpGet, ActionName("DeleteNotificationById")]
        public string DeleteNotificationById(int Id)
        {
            try
            {
               
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_NotificationById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetSyllabusById")]
        public string GetSyllabusById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_SyllabusById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteSyllabusById")]
        public string DeleteSyllabusById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_SyllabusById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetQuestionPaperById")]
        public string GetQuestionPaperById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_QuestionPaperById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteQuestionPaperById")]
        public string DeleteQuestionPaperById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_QuestionPaperById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetTimeTableById")]
        public string GetTimeTableById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_TimeTableById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteTimeTableById")]
        public string DeleteTimeTableById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_TimeTableById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetDistCoordinatingCenters")]
        public string GetDistCoordinatingCenters(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataSet("SP_Get_DistrictCoordinatingCentres", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }





        [HttpGet, ActionName("AddDistCoordinatingCentre")]
        public string AddDistCoordinatingCentre(string CentreCode, string CentreName, string CentreAddress, int StateID, int DistrictID, string UserName)
        {
            var dbHandler = new PolycetdbHandler();

            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@CentreCode", CentreCode);
                param[1] = new SqlParameter("@CentreName", CentreName);
                param[2] = new SqlParameter("@CentreAddress", CentreAddress);
                param[3] = new SqlParameter("@StateID", StateID);
                param[4] = new SqlParameter("@DistrictID", DistrictID);
                //param[5] = new SqlParameter("@Active", Active);
                param[5] = new SqlParameter("@UserName", UserName);


                var dt = dbHandler.ReturnDataSet("SP_Add_DistrictCoordinatingCentre", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Add_DistrictCoordinatingCentre", 0, ex.Message);
                return ex.Message;
            }

        }

        [HttpGet, ActionName("GetEditDetails")]
        public string GetEditDetails(int CentreID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CentreID", CentreID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_DistrictCoordinatingCentre", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public class UpdateCentresInfo
        {
            public int CentreID { get; set; }
            public string CentreCode { get; set; }
            public string CentreName { get; set; }
            public string CentreAddress { get; set; }
            public int StateID { get; set; }
            public int DistrictID { get; set; }
            public bool Active { get; set; }
            public string UserName { get; set; }
        }

        [HttpPost, ActionName("UpdateDistCoorCentres")]
        public string UpdateDistCoorCentres([FromBody] UpdateCentresInfo data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@CentreID", data.CentreID);
                param[1] = new SqlParameter("@CentreCode", data.CentreCode);
                param[2] = new SqlParameter("@CentreName", data.CentreName);
                param[3] = new SqlParameter("@CentreAddress", data.CentreAddress);
                param[4] = new SqlParameter("@StateID", data.StateID);
                param[5] = new SqlParameter("@DistrictID", data.DistrictID);
                param[6] = new SqlParameter("@Active", data.Active);
                param[7] = new SqlParameter("@UserName", data.UserName);

                var dt = dbHandler.ReturnDataSet("SP_Update_DistrictCoordinatingCentre", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Update_DistrictCoordinatingCentre", 0, ex.Message);
                return ex.Message;
            }
        }

        [HttpGet, ActionName("SetSessionId")]
        public string SetSessionId(string SessionId, string Captcha)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@SessionId", SessionId);
                param[1] = new SqlParameter("@Captcha", Captcha);
                var dt = dbHandler.ReturnDataWithStoredProcedure("USP_SET_ExamsCaptchaSessionLog", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("USP_SET_ExamsCaptchaSessionLog", 0, ex.Message);
                return ex.Message;
            }
        }



        [HttpGet, ActionName("GetCollegeDetails")]
        public string GetCollegeDetails(int UserTypeID, string UserName)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@UserTypeID", UserTypeID);
                param[1] = new SqlParameter("@UserName", UserName);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegesData", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Get_Edit_CollegesData", 0, ex.Message);
                return ex.Message;
            }
        }


        public string ConvertTextToImage(string txt, string fontname, int fontsize, Color bgcolor, Color fcolor, int width, int Height)
        {
            Bitmap bmp = new Bitmap(width, Height);
            using (Graphics graphics = Graphics.FromImage(bmp))
            {

                Font font = new Font(fontname, fontsize);
                graphics.FillRectangle(new SolidBrush(bgcolor), 0, 0, bmp.Width, bmp.Height);
                graphics.DrawString(txt, font, new SolidBrush(fcolor), 0, 0);
                graphics.Flush();
                font.Dispose();
                graphics.Dispose();


            }
            Bitmap bImage = bmp;  // Your Bitmap Image
            System.IO.MemoryStream ms = new MemoryStream();
            bImage.Save(ms, ImageFormat.Jpeg);
            byte[] byteImage = ms.ToArray();
            var SigBase64 = Convert.ToBase64String(byteImage);
            return SigBase64;

        }

        private string GetWebAppRoot()
        {
            var env = ConfigurationManager.AppSettings["SMS_ENV"].ToString();
            string host = (HttpContext.Current.Request.Url.IsDefaultPort) ?
               HttpContext.Current.Request.Url.Host :
               HttpContext.Current.Request.Url.Authority;
            if (env == "PROD")
            {
                host = String.Format("{0}://{1}", HttpContext.Current.Request.Url.Scheme, host);
                return host + "/";
            }
            else if (env == "DEV")
            {

                host = String.Format("{0}://{1}", HttpContext.Current.Request.Url.Scheme, host);
                return host + HttpContext.Current.Request.ApplicationPath;
            }
            return host + "/";
        }



        [HttpPost, ActionName("UpdateCollegeData")]
        public string UpdateCollegeData(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["CollegePhotos"];
                var livepath = ConfigurationManager.AppSettings["LiveCollegePhotosPath"];
                string relativePath = string.Empty;
                string imagepath = string.Empty;
                var file = string.Empty;
                if(data["CollegePhoto"].ToString() == "") {
                    imagepath = null;
                }
                else
                {
                    var filename = data["CollegeCode"] + ".jpg";
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["CollegePhoto"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    imagepath = livepath + filename;
                    relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                var param = new SqlParameter[31];
                param[0] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[1] = new SqlParameter("@CollegeCode", data["CollegeCode"]);
                param[2] = new SqlParameter("@CollegeName", data["CollegeName"]);
                param[3] = new SqlParameter("@Village_Town", data["Village_Town"]);
                param[4] = new SqlParameter("@CollegeTypeID", data["CollegeTypeID"]);
                param[5] = new SqlParameter("@RegionID", data["RegionID"]);
                param[6] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[7] = new SqlParameter("@YearofEstablishment", data["YearofEstablishment"]);
                param[8] = new SqlParameter("@CollegeAddress", data["CollegeAddress"]);
                param[9] = new SqlParameter("@PrinciaplName", data["PrinciaplName"]);
                param[10] = new SqlParameter("@PhoneNumber", data["PhoneNumber"]);
                param[11] = new SqlParameter("@Email", data["Email"]);
                param[12] = new SqlParameter("@CollegeWebSite", data["CollegeWebSite"]);
                param[13] = new SqlParameter("@HostelAvailable", data["HostelAvailable"]);
                param[14] = new SqlParameter("@BoysHostel", data["BoysHostel"]);
                param[15] = new SqlParameter("@GirlsHostel", data["GirlsHostel"]);
                param[16] = new SqlParameter("@BoysHostelCapacity", data["BoysHostelCapacity"]);
                param[17] = new SqlParameter("@GirlsHostelCapacity", data["GirlsHostelCapacity"]);
                param[18] = new SqlParameter("@NoOfDigitalClassrooms", data["NoOfDigitalClassrooms"]);
                param[19] = new SqlParameter("@DCMajorEquipment", data["DCMajorEquipment"]);
                param[20] = new SqlParameter("@DigitalClassromRemarks", data["DigitalClassromRemarks"]);
                param[21] = new SqlParameter("@NoOfVirtualClassrooms", data["NoOfVirtualClassrooms"]);
                param[22] = new SqlParameter("@VCMajorEquipment", data["VCMajorEquipment"]);
                param[23] = new SqlParameter("@VirtualClassromRemarks", data["VirtualClassromRemarks"]);
                param[24] = new SqlParameter("@AntiRaggingCommitee", data["AntiRaggingCommitee"]);
                param[25] = new SqlParameter("@ParentsCommitee", data["ParentsCommitee"]);
                param[26] = new SqlParameter("@GrievanceCellCommitee", data["GrievanceCellCommitee"]);
                param[27] = new SqlParameter("@WomenEmpowermentCellCommitee", data["WomenEmpowermentCellCommitee"]);
                param[28] = new SqlParameter("@IndustryConnectandPlacementCell", data["IndustryConnectandPlacementCell"]);
                param[29] = new SqlParameter("@CollegePhoto", imagepath);
                param[30] = new SqlParameter("@UserName", data["UserName"]);
                //param[31] = new SqlParameter("@NBAAffiliated", data["NBAAffiliated"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegeData", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegeData", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddCollegeData")]
        public string AddCollegeData(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["CollegePhotos"];
                var livepath = ConfigurationManager.AppSettings["LiveCollegePhotosPath"];
                string relativePath = string.Empty;
                string imagepath = string.Empty;
                var file = string.Empty;
                if(data["CollegePhoto"].ToString() == "") {
                    imagepath = null;
                }
                else
                {
                    var filename = data["CollegeCode"] + ".jpg";
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["CollegePhoto"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    imagepath = livepath + filename;
                    relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                var param = new SqlParameter[30];
                param[0] = new SqlParameter("@CollegeCode", data["CollegeCode"]);
                param[1] = new SqlParameter("@CollegeName", data["CollegeName"]);
                param[2] = new SqlParameter("@Village_Town", data["Village_Town"]);
                param[3] = new SqlParameter("@CollegeTypeID", data["CollegeTypeID"]);
                param[4] = new SqlParameter("@RegionID", data["RegionID"]);
                param[5] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[6] = new SqlParameter("@YearofEstablishment", data["YearofEstablishment"]);
                param[7] = new SqlParameter("@CollegeAddress", data["CollegeAddress"]);
                param[8] = new SqlParameter("@PrinciaplName", data["PrinciaplName"]);
                param[9] = new SqlParameter("@PhoneNumber", data["PhoneNumber"]);
                param[10] = new SqlParameter("@Email", data["Email"]);
                param[11] = new SqlParameter("@CollegeWebSite", data["CollegeWebSite"]);
                param[12] = new SqlParameter("@HostelAvailable", data["HostelAvailable"]);
                param[13] = new SqlParameter("@BoysHostel", data["BoysHostel"]);
                param[14] = new SqlParameter("@GirlsHostel", data["GirlsHostel"]);
                param[15] = new SqlParameter("@BoysHostelCapacity", data["BoysHostelCapacity"]);
                param[16] = new SqlParameter("@GirlsHostelCapacity", data["GirlsHostelCapacity"]);
                param[17] = new SqlParameter("@NoOfDigitalClassrooms", data["NoOfDigitalClassrooms"]);
                param[18] = new SqlParameter("@DCMajorEquipment", data["DCMajorEquipment"]);
                param[19] = new SqlParameter("@DigitalClassromRemarks", data["DigitalClassromRemarks"]);
                param[20] = new SqlParameter("@NoOfVirtualClassrooms", data["NoOfVirtualClassrooms"]);
                param[21] = new SqlParameter("@VCMajorEquipment", data["VCMajorEquipment"]);
                param[22] = new SqlParameter("@VirtualClassromRemarks", data["VirtualClassromRemarks"]);
                param[23] = new SqlParameter("@AntiRaggingCommitee", data["AntiRaggingCommitee"]);
                param[24] = new SqlParameter("@ParentsCommitee", data["ParentsCommitee"]);
                param[25] = new SqlParameter("@GrievanceCellCommitee", data["GrievanceCellCommitee"]);
                param[26] = new SqlParameter("@WomenEmpowermentCellCommitee", data["WomenEmpowermentCellCommitee"]);
                param[27] = new SqlParameter("@IndustryConnectandPlacementCell", data["IndustryConnectandPlacementCell"]);
                param[28] = new SqlParameter("@CollegePhoto", imagepath);
                param[29] = new SqlParameter("@UserName", data["UserName"]);
                //param[30] = new SqlParameter("@NBAAffiliated", data["NBAAffiliated"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegesData", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegesData", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetLabs")]
        public string GetLabs()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Labs";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Labs", 0, ex.Message);
                throw ex;
            }
        }

                

        [HttpGet, ActionName("GetPublishData")]
        public string GetPublishData()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_PublishResults";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_PublishResults", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAdminLabs")]
        public string GetAdminLabs()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Admin_Labs";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Admin_Labs", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetLabById")]
        public string GetLabById(int LabID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@LabID", LabID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Labs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("LaunchWebsite")]
        public string LaunchWebsite(int Publish)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Publish", Publish);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_update_PublishResults", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        


        [HttpPost, ActionName("AddLab")]
        public string AddLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@LabName", data["LabName"]);
                param[1] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Labs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Labs", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("UpdateLab")]
        public string UpdateLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@LabID", data["LabID"]);
                param[1] = new SqlParameter("@LabName", data["LabName"]);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Lab", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Lab", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetWinningPlaces")]
        public string GetWinningPlaces()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_WinningPlaces";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_WinningPlaces", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetSports")]
        public string GetSports()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Sports";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Sports", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAllAcademicCalenders")]
        public string GetAllAcademicCalenders()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_AC";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_AC", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetSportById")]
        public string GetSportById(int SportID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@SportID", SportID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Sports", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        [HttpGet, ActionName("EditDiplomaAC")]
        public string EditDiplomaAC(int ACDiplomaID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACDiplomaID", ACDiplomaID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_Diploma", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("EditDPharmAC")]
        public string EditDPharmAC(int ACDPharmacyID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACDPharmacyID", ACDPharmacyID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_DPharmacy", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("EditHolidays")]
        public string EditHolidays(int ACHolidaysID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACHolidaysID", ACHolidaysID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_Holidays", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("EditIndustrialTraining")]
        public string EditIndustrialTraining(int ACIndTrainingID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACIndTrainingID", ACIndTrainingID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_Holidays", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("EditNotes")]
        public string EditNotes(int ACNotesID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACNotesID", ACNotesID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_Notes", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("EditUnitTests")]
        public string EditUnitTests(int ACUnitTestsID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACUnitTestsID", ACUnitTestsID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_UnitTests", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("EditActivities")]
        public string EditActivities(int ACActivitiesID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@ACActivitiesID", ACActivitiesID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AC_Activities", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetAcademicCalendersById")]
        public string GetAcademicCalendersById(int AcademicYearID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("Get_Academiccalender_by_AcademicYear", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }





        [HttpPost, ActionName("AddSport")]
        public string AddSport(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@SportName", data["SportName"]);
                param[1] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Sports", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Sports", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("UpdateSport")]
        public string UpdateSport(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@SportID", data["SportID"]);
                param[1] = new SqlParameter("@SportName", data["SportName"]);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Sport", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Sport", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddCollegeLab")]
        public string AddCollegeLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[1] = new SqlParameter("@LabID", data["LabID"]);
                param[2] = new SqlParameter("@MajorEquipment", data["MajorEquipment"]);
                param[3] = new SqlParameter("@Remarks", data["Remarks"]);
                param[4] = new SqlParameter("@LabTotalCost", data["LabTotalCost"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegeLabs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegeLabs", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("DeleteCollegeLab")]
        public string DeleteCollegeLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeLabID", data["CollegeLabID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegeLabs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegeLabs", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteIndustryConnect")]
        public string DeleteIndustryConnect(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@IndustryConnectID", data["IndustryConnectID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_IndustryConnect", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_IndustryConnect", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteCollegeIndustrialTraining")]
        public string DeleteCollegeIndustrialTraining(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeIndustrialTrainingID", data["CollegeIndustrialTrainingID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegeIndustrialTrainings", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegeIndustrialTrainings", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteCollegePlacement")]
        public string DeleteCollegePlacement(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegePlacementID", data["CollegePlacementID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegePlacements", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegePlacements", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("DeleteTestimonial")]
        public string DeleteTestimonial(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@TestimonialID", data["TestimonialID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_Testimonials", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_Testimonials", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("ChangeInteractionStatus")]
        public string ChangeInteractionStatus(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeIndustryInteractionID", data["CollegeIndustryInteractionID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Change_IndustryInteractions_Status", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Change_IndustryInteractions_Status", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteCollegeStaffDetails")]
        public string DeleteCollegeStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeStaffID", data["CollegeStaffID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegeStaff", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("DeleteCollegeStaff")]
        public string DeleteCollegeStaff(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeStaffID", data["CollegeStaffID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegeStaff_1", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegeStaff_1", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteLab")]
        public string DeleteLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@LabID", data["LabID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_Labs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_Labs", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteAdminFeedBackList")]
        public string DeleteAdminFeedBackList(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@FeedBackID", data["FeedBackID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_FeedBacks", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_FeedBacks", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteCollegeJournal")]
        public string DeleteCollegeJournal(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@JournalID", data["JournalID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_Journals", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_Journals", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteAdminStaff")]
        public string DeleteAdminStaff(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@SataffDetailID", data["SataffDetailID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_SataffDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_SataffDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("DeleteIPSGM")]
        public string DeleteIPSGM(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@IPSGMID", data["IPSGMID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_IPSGMDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_IPSGMDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

          [HttpPost, ActionName("DeleteIPSGMMasterById")]
        public string DeleteIPSGMMasterById(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@IPSGMID", data["IPSGMID"]);
                param[1] = new SqlParameter("@active", data["active"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_IPSGM", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }



        [HttpPost, ActionName("DeleteAdminCollegeStaffDetails")]
        public string DeleteAdminCollegeStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeStaffID", data["CollegeStaffID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_CollegeStaff", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddJournal")]
        public string AddJournal(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["Journals"];
                var livepath = ConfigurationManager.AppSettings["LiveJournalsPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var filename = data["Eidition"] + ".pdf";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["JournalPath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@PublishYear", data["PublishYear"]);
                param[1] = new SqlParameter("@Eidition", data["Eidition"]);
                param[2] = new SqlParameter("@MajorTopics", data["MajorTopics"]);
                param[3] = new SqlParameter("@JournalPath", imagepath);
                param[4] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Journal", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Journal", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddAcademicCalender")]
        public string AddAcademicCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["AcademicCalender"];
                var livepath = ConfigurationManager.AppSettings["LiveAcademicCalender"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var filename = data["CalendarName"] + ".pdf";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["CalendarDownloadPath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@CalendarName", data["CalendarName"]);
                param[1] = new SqlParameter("@CalendarDownloadPath", imagepath);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                param[3] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AcademicCalendar", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Journal", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateAcademicCalender")]
        public string UpdateAcademicCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["AcademicCalender"];
                var livepath = ConfigurationManager.AppSettings["LiveAcademicCalender"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var filename = data["CalendarName"] + ".pdf";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["CalendarDownloadPath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@CalendarID", data["CalendarID"]);
                param[1] = new SqlParameter("@CalendarName", data["CalendarName"]);
                param[2] = new SqlParameter("@CalendarDownloadPath", imagepath);
                param[3] = new SqlParameter("@UserName", data["UserName"]);
                param[4] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_AcademicCalendar", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_AcademicCalendar", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddUpdateDiplomaCalender")]
        public string AddUpdateDiplomaCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Courses", data["Courses"]);
                param[2] = new SqlParameter("@CommencementofClassWork", data["CommencementofClassWork"]);
                param[3] = new SqlParameter("@LastWorkingDay", data["LastWorkingDay"]);
                param[4] = new SqlParameter("@CommencementofExaminations", data["CommencementofExaminations"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                param[6] = new SqlParameter("@DataType", data["DataType"]);
                param[7] = new SqlParameter("@ACDiplomaID", data["ACDiplomaID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_Diploma", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_Diploma", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddUpdateDpharmCalender")]
        public string AddUpdateDpharmCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Courses", data["Courses"]);
                param[2] = new SqlParameter("@CommencementofClassWork", data["CommencementofClassWork"]);
                param[3] = new SqlParameter("@LastWorkingDay", data["LastWorkingDay"]);
                param[4] = new SqlParameter("@CommencementofExaminations", data["CommencementofExaminations"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                param[6] = new SqlParameter("@DataType", data["DataType"]);
                param[7] = new SqlParameter("@ACDPharmacyID", data["ACDPharmacyID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_DPharmacy", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_DPharmacy", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }



        [HttpPost, ActionName("AddUpdateHolidaysCalender")]
        public string AddUpdateHolidaysCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Courses", data["Courses"]);
                param[2] = new SqlParameter("@HolidayFrom", data["HolidayFrom"]);
                param[3] = new SqlParameter("@HolidayTo", data["HolidayTo"]);
                param[4] = new SqlParameter("@UserName", data["UserName"]);
                param[5] = new SqlParameter("@DataType", data["DataType"]);
                param[6] = new SqlParameter("@ACHolidaysID", data["ACHolidaysID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_Holidays", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_Holidays", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddUpdateIndustryCalender")]
        public string AddUpdateIndustryCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Remarks", data["Remarks"]);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                param[3] = new SqlParameter("@DataType", data["DataType"]);
                param[4] = new SqlParameter("@ACIndTrainingID", data["ACIndTrainingID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_IndTraining", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_IndTraining", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddUpdateCalendarNotes")]
        public string AddUpdateCalendarNotes(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Remarks", data["Remarks"]);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                param[3] = new SqlParameter("@DataType", data["DataType"]);
                param[4] = new SqlParameter("@ACNotesID", data["ACNotesID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_Notes", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_Notes", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddUpdateUnitTest")]
        public string AddUpdateUnitTest(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Courses", data["Courses"]);
                param[2] = new SqlParameter("@UnitTest", data["UnitTest"]);
                param[3] = new SqlParameter("@UnitTestFrom", data["UnitTestFrom"]);
                param[4] = new SqlParameter("@UnitTestTo", data["UnitTestTo"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                param[6] = new SqlParameter("@DataType", data["DataType"]);
                param[7] = new SqlParameter("@ACUnitTestsID", data["ACUnitTestsID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_UnitTests", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_UnitTests", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddUpdateCalenderActivities")]
        public string AddUpdateCalenderActivities(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@ActivitySubject", data["ActivitySubject"]);
                param[2] = new SqlParameter("@Remarks", data["Remarks"]);
                param[3] = new SqlParameter("@UserName", data["UserName"]);
                param[4] = new SqlParameter("@DataType", data["DataType"]);
                param[5] = new SqlParameter("@ACActivitiesID", data["ACActivitiesID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_AC_Activities", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_AC_Activities", 0, ex.Message);
                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateJournal")]
        public string UpdateJournal(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["Journals"];
                var livepath = ConfigurationManager.AppSettings["LiveJournalsPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                string imagepath = "";
                var filename = data["Eidition"] + ".pdf";
               // var CircularName = data["FileName"].ToString();
                if (data["FileUpload"].ToString() == "1")
                {
                    bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                var imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["JournalPath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                 imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                else
                {
                    imagepath = data["JournalPath"].ToString();

                }
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@JournalID", data["JournalID"]);
                param[1] = new SqlParameter("@PublishYear", data["PublishYear"]);
                param[2] = new SqlParameter("@Eidition", data["Eidition"]);
                param[3] = new SqlParameter("@MajorTopics", data["MajorTopics"]);
                param[4] = new SqlParameter("@JournalPath", imagepath);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Journal", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Journal", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetJournals")]
        public string GetJournals()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Journals";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Journals", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAcademicCalenders")]
        public string GetAcademicCalenders()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_AcademicCalendar ";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_AcademicCalendar ", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAcademicCalenderById")]
        public string GetAcademicCalenderById(int CalendarID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CalendarID", CalendarID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_AcademicCalendar", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetJournalById")]
        public string GetJournalById(int JournalID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@JournalID", JournalID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Journal", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public class person1
        {
            public string file { get; set; }
            public string ResponceCode { get; set; }
            public string ResponceDescription { get; set; }
        }



        [HttpPost, ActionName("SubmitFeedback")]
        public string SubmitFeedback(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            List<person1> p = new List<person1>();
            person1 p1 = new person1();

            try
            {
                Regex r = new Regex("^[a-zA-Z0-9]*$");
                var pattern = @"^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

                var regex = new Regex(pattern);

                Regex r1 = new Regex("^(?:-(?:[1-9](?:\\d{0,2}(?:,\\d{3})+|\\d*))|(?:0|(?:[1-9](?:\\d{0,2}(?:,\\d{3})+|\\d*))))(?:.\\d+|)$");
                if ( regex.IsMatch(data["Email"].ToString()) && r1.IsMatch(data["MobileNumber"].ToString()))
                {
                    var param = new SqlParameter[5];
                    param[0] = new SqlParameter("@FeedBackDescription", data["FeedBackDescription"]);
                    param[1] = new SqlParameter("@FromType", data["FromType"]);
                    param[2] = new SqlParameter("@Name", data["Name"]);
                    param[3] = new SqlParameter("@MobileNumber", data["MobileNumber"]);
                    param[4] = new SqlParameter("@Email", data["Email"]);
                    var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_FeedBacks", param);
                    return JsonConvert.SerializeObject(dt);

                }
                else
                {
                    p1.file = "";
                    p1.ResponceCode = "400";
                    p1.ResponceDescription = "Characters Not Allowed";
                    p.Add(p1);

                    return JsonConvert.SerializeObject(p);
                }
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_FeedBacks", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCollegesByDistrictId")]
        public string GetCollegesByDistrictId(int DistrictID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@DistrictID", DistrictID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegesbyDistrict", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        [HttpPost, ActionName("AddIndustryInteraction")]
        public string AddIndustryInteraction(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[1] = new SqlParameter("@NoofMOUS", data["NoofMOUS"]);
                param[2] = new SqlParameter("@ComitteMembers", data["ComitteMembers"]);
                param[3] = new SqlParameter("@SupportActivitiesfromIndustry", data["SupportActivitiesfromIndustry"]);
                param[4] = new SqlParameter("@MOUValidFromDate", data["MOUValidFromDate"]);
                param[5] = new SqlParameter("@MOUValidToDate", data["MOUValidToDate"]);
                param[6] = new SqlParameter("@Remarks", data["Remarks"]);
                param[7] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegeIndustryInteractions", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegeIndustryInteractions", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateIndustryInteraction")]
        public string UpdateIndustryInteraction(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@CollegeIndustryInteractionID", data["CollegeIndustryInteractionID"]);
                param[1] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[2] = new SqlParameter("@NoofMOUS", data["NoofMOUS"]);
                param[3] = new SqlParameter("@ComitteMembers", data["ComitteMembers"]);
                param[4] = new SqlParameter("@SupportActivitiesfromIndustry", data["SupportActivitiesfromIndustry"]);
                param[5] = new SqlParameter("@MOUValidFromDate", data["MOUValidFromDate"]);
                param[6] = new SqlParameter("@MOUValidToDate", data["MOUValidToDate"]);
                param[7] = new SqlParameter("@Remarks", data["Remarks"]);
                param[8] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegeIndustryInteractions", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegeIndustryInteractions", 0, ex.Message);
                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetIndustryInteractionById")]
        public string GetIndustryInteractionById(int CollegeIndustryInteractionID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeIndustryInteractionID", CollegeIndustryInteractionID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegeIndustryInteractions", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetIndustryInteractionByUsername")]
        public string GetIndustryInteractionByUsername(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName ", UserName);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegeIndustryInteractionsByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpPost, ActionName("AddTestimonial")]
        public string AddTestimonial(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var path = ConfigurationManager.AppSettings["Testimonials"];
                var livepath = ConfigurationManager.AppSettings["TestimonialLivePath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var filename = data["Name"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["Photo"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[12];
                param[0] = new SqlParameter("@PIN", data["PIN"]);
                param[1] = new SqlParameter("@Name", data["Name"]);
                param[2] = new SqlParameter("@YearOfAppointment", data["YearOfAppointment"]);
                param[3] = new SqlParameter("@ModeOfAppointment", data["ModeOfAppointment"]);
                param[4] = new SqlParameter("@FromYear", data["FromYear"]);
                param[5] = new SqlParameter("@ToYear", data["ToYear"]);
                param[6] = new SqlParameter("@CompanyNameAddress", data["CompanyNameAddress"]);
                param[7] = new SqlParameter("@PackageAmount", data["PackageAmount"]);
                param[8] = new SqlParameter("@TestimonialDetails", data["TestimonialDetails"]);
                param[9] = new SqlParameter("@CollegeAddress", data["CollegeAddress"]);
                param[10] = new SqlParameter("@Photo", imagepath);
                param[11] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Testimonials", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Testimonials", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateTestimonial")]
        public string UpdateTestimonial(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var livepath = ConfigurationManager.AppSettings["TestimonialLivePath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var imagepath = string.Empty;
                var filename = data["Name"] + ".jpg";
                if (data["ImgUploaded"].ToString() == "1")
                {
                    var path = ConfigurationManager.AppSettings["Testimonials"];
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["Photo"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    imagepath = livepath + filename;
                }
                else
                {
                    imagepath = data["Photo"].ToString();
                }


                //var path = ConfigurationManager.AppSettings["Testimonials"];
                //var livepath = ConfigurationManager.AppSettings["TestimonialLivePath"];
                //string relativePath = string.Empty;
                //var file = string.Empty;
                //var filename = data["Name"] + ".jpg";
                //bool folderExists = Directory.Exists(path);
                //if (!folderExists)
                //    Directory.CreateDirectory(path);
                //string imgPath = Path.Combine(path, filename);
                //byte[] imageBytes = Convert.FromBase64String(data["Photo"].ToString());
                //File.WriteAllBytes(imgPath, imageBytes);
                //var imagepath = livepath + filename;
                //relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[13];
                param[0] = new SqlParameter("@TestimonialID", data["TestimonialID"]);
                param[1] = new SqlParameter("@PIN", data["PIN"]);
                param[2] = new SqlParameter("@Name", data["Name"]);
                param[3] = new SqlParameter("@YearOfAppointment", data["YearOfAppointment"]);
                param[4] = new SqlParameter("@ModeOfAppointment", data["ModeOfAppointment"]);
                param[5] = new SqlParameter("@FromYear", data["FromYear"]);
                param[6] = new SqlParameter("@ToYear", data["ToYear"]);
                param[7] = new SqlParameter("@CompanyNameAddress", data["CompanyNameAddress"]);
                param[8] = new SqlParameter("@PackageAmount", data["PackageAmount"]);
                param[9] = new SqlParameter("@TestimonialDetails", data["TestimonialDetails"]);
                param[10] = new SqlParameter("@CollegeAddress", data["CollegeAddress"]);
                param[11] = new SqlParameter("@Photo", imagepath);
                param[12] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Testimonials", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Testimonials", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        public class Testimonials
        {
            public string Name { get; set; }
            public string ApplicationNumber { get; set; }
            public string PIN { get; set; }
            public string YearOfAppointment { get; set; }
            public string FromYear { get; set; }
            public string ToYear { get; set; }
            public string ModeOfAppointment { get; set; }
            public string CompanyNameAddress { get; set; }
            public string PackageAmount { get; set; }
            public string TestimonialDetails { get; set; }
            public string CollegeAddress { get; set; }
            public string Photo { get; set; }
            public string UserName { get; set; }
        }

        //[HttpPost, ActionName("UpdateTestimonial")]
        //public string UpdateTestimonial([FromBody] Testimonials TestimonialsAtt)
        //{
        //    try
        //    {
        //        var dir = AppDomain.CurrentDomain.BaseDirectory + @"\TestimonialLivePath\";
        //        var photo_url = dir + "Photo" + TestimonialsAtt.ApplicationNumber + ".JPG";
        //        var StdPhoto = "Photo_" + TestimonialsAtt.ApplicationNumber + ".JPG";

        //        var path = string.Empty;
        //        string relativePath = string.Empty;
        //        var StudentPhotopath = string.Empty;


        //        if (TestimonialsAtt.Photo != "")
        //        {
        //            StdPhoto = TestimonialsAtt.ApplicationNumber + ".JPG";
        //            path = dir;
        //            bool foldrExists = Directory.Exists(dir);
        //            if (!foldrExists)
        //                Directory.CreateDirectory(dir);
        //            string imgPath = Path.Combine(path, StdPhoto);
        //            byte[] Bytes = Convert.FromBase64String(TestimonialsAtt.Photo);
        //            File.WriteAllBytes(imgPath, Bytes);
        //            relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
        //            photo_url = relativePath;
        //        }
        //        else
        //        {
        //            photo_url = "";
        //        }



        //        var dbHandler = new PolycetdbHandler();
        //        var param = new SqlParameter[13];
        //        param[0] = new SqlParameter("@ApplicationNumber", TestimonialsAtt.ApplicationNumber);
        //        param[1] = new SqlParameter("@PIN", TestimonialsAtt.PIN);
        //        param[2] = new SqlParameter("@Name", TestimonialsAtt.Name);
        //        param[3] = new SqlParameter("@YearOfAppointment", TestimonialsAtt.YearOfAppointment);
        //        param[4] = new SqlParameter("@ModeOfAppointment", TestimonialsAtt.ModeOfAppointment);
        //        param[5] = new SqlParameter("@FromYear", TestimonialsAtt.FromYear);
        //        param[6] = new SqlParameter("@ToYear", TestimonialsAtt.ToYear);
        //        param[7] = new SqlParameter("@CompanyNameAddress", TestimonialsAtt.CompanyNameAddress);
        //        param[8] = new SqlParameter("@PackageAmount", TestimonialsAtt.PackageAmount);
        //        param[9] = new SqlParameter("@TestimonialDetails", TestimonialsAtt.TestimonialDetails);
        //        param[10] = new SqlParameter("@CollegeAddress", TestimonialsAtt.CollegeAddress);
        //        param[11] = new SqlParameter("@Photo", photo_url);
        //        param[12] = new SqlParameter("@UserName", TestimonialsAtt.UserName);


        //        var dt = dbHandler.ReturnDataWithStoredProcedureTable("SP_Update_Testimonials", param);
        //        return JsonConvert.SerializeObject(dt);
        //    }
        //    catch (Exception ex)
        //    {

        //        //dbHandler.SaveErorr("SP_Update_Testimonials", 0, ex.Message);
        //        return ex.Message;
        //    }

        //}



        [HttpGet, ActionName("GetTestimonialByUserName")]
        public string GetTestimonialByUserName(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_TestimonialsByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetTestimonialById")]
        public string GetTestimonialById(int TestimonialID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@TestimonialID", TestimonialID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Testimonials", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpPost, ActionName("AddMasterIPSGM")]
        public string AddMasterIPSGM(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@IPSGMLevel", data["IPSGMLevel"]);
                param[2] = new SqlParameter("@Venue", data["Venue"]);
                param[3] = new SqlParameter("@FromDate", data["FromDate"]);
                param[4] = new SqlParameter("@ToDate", data["ToDate"]);
                param[5] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_IPSGMDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddCollegeStaffDetails")]
        public string AddCollegeStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[10];
                param[0] = new SqlParameter("@EmployeeID", data["EmployeeID"]);
                param[1] = new SqlParameter("@CFMSID", data["CFMSID"]);
                param[2] = new SqlParameter("@StaffName", data["StaffName"]);
                param[3] = new SqlParameter("@DesignationID", data["DesignationID"]);
                param[4] = new SqlParameter("@CourseID", data["CourseID"]);
                param[5] = new SqlParameter("@Email", data["Email"]);
                param[6] = new SqlParameter("@Mobile", data["Mobile"]);
                param[7] = new SqlParameter("@DeputedTo", data["DeputedTo"]);
                param[8] = new SqlParameter("@Remarks", data["Remarks"]);
                param[9] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegeStaf", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateCollegeStaffDetails")]
        public string UpdateCollegeStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[11];
                param[0] = new SqlParameter("@CollegeStaffID", data["CollegeStaffID"]);
                param[1] = new SqlParameter("@EmployeeID", data["EmployeeID"]);
                param[2] = new SqlParameter("@CFMSID", data["CFMSID"]);
                param[3] = new SqlParameter("@StaffName", data["StaffName"]);
                param[4] = new SqlParameter("@DesignationID", data["DesignationID"]);
                param[5] = new SqlParameter("@CourseID", data["CourseID"]);
                param[6] = new SqlParameter("@Email", data["Email"]);
                param[7] = new SqlParameter("@Mobile", data["Mobile"]);
                param[8] = new SqlParameter("@DeputedTo", data["DeputedTo"]);
                param[9] = new SqlParameter("@Remarks", data["Remarks"]);
                param[10] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegeStaff", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }



        [HttpGet, ActionName("GetCollegeStaffDetailsById")]
        public string GetCollegeStaffDetailsById(int CollegeStaffID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegeStaffID", CollegeStaffID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetCollegeStaffDetails")]
        public string GetCollegeStaffDetails(string UserName)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegeStaff", param);
                return JsonConvert.SerializeObject(dt);

            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_CollegeStaff ", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("GetDesignations")]
        public string GetDesignations()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Designations ";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Designations ", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetFDPCalenderById")]
        public string GetFDPCalenderById(int FDPID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@FDPID", FDPID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_FacultyDevelopmentProgram", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetFDPCalenders")]
        public string GetFDPCalenders()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_FacultyDevelopmentProgram ";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_FacultyDevelopmentProgram ", 0, ex.Message);
                throw ex;
            }
        }

        [HttpPost, ActionName("AddFDPCalender")]
        public string AddFDPCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@ProgramName", data["ProgramName"]);
                param[2] = new SqlParameter("@Venue", data["Venue"]);
                param[3] = new SqlParameter("@PlannedStrength", data["PlannedStrength"]);
                param[4] = new SqlParameter("@OfferedBy", data["OfferedBy"]);
                param[5] = new SqlParameter("@MentorName", data["MentorName"]);
                param[6] = new SqlParameter("@PlannedFrom", data["PlannedFrom"]);
                param[7] = new SqlParameter("@PlannedTo", data["PlannedTo"]);
                param[8] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_FacultyDevelopmentProgram", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_FacultyDevelopmentProgram", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetFDPProgramsByAcademicYear")]
        public string GetFDPProgramsByAcademicYear(int AcademicYearID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_FDPProgramName", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetFDPAcademicYears")]
        public string GetFDPAcademicYears()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_FDPAcademicYears ";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_FDPAcademicYears ", 0, ex.Message);
                throw ex;
            }
        }

        [HttpPost, ActionName("UpdateFDPCalender")]
        public string UpdateFDPCalender(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[10];
                param[0] = new SqlParameter("@FDPID", data["FDPID"]);
                param[1] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[2] = new SqlParameter("@ProgramName", data["ProgramName"]);
                param[3] = new SqlParameter("@Venue", data["Venue"]);
                param[4] = new SqlParameter("@PlannedStrength", data["PlannedStrength"]);
                param[5] = new SqlParameter("@OfferedBy", data["OfferedBy"]);
                param[6] = new SqlParameter("@MentorName", data["MentorName"]);
                param[7] = new SqlParameter("@PlannedFrom", data["PlannedFrom"]);
                param[8] = new SqlParameter("@PlannedTo", data["PlannedTo"]);
                param[9] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_FacultyDevelopmentProgram", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_FacultyDevelopmentProgram", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddFDPTraining")]
        public string AddFDPTraining(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@FDPID", data["FDPID"]);
                param[1] = new SqlParameter("@ActualStrength", data["ActualStrength"]);
                param[2] = new SqlParameter("@ConductedFrom", data["ConductedFrom"]);
                param[3] = new SqlParameter("@ConductedTo", data["ConductedTo"]);
                param[4] = new SqlParameter("@Remarks", data["Remarks"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_FDPDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_FDPDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetFDPTrainingById")]
        public string GetFDPTrainingById(int FDPDetailsID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@FDPDetailsID", FDPDetailsID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_FDPDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetFDPTrainings")]
        public string GetFDPTrainings()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_FDPDetails ";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Get_FDPDetails ", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetWebSiteVisiterCount")]
        public string GetWebSiteVisiterCount()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                //string tinyUrl = "https://sbtet.telangana.gov.in/Reports/SignedCert/a8d4b9f7-ce57-4872-9524-45bc14af02d1.pdf";
                //string api = "https://sbtet.telangana.gov.in";

                //    var request = WebRequest.Create(api + tinyUrl);
                //    var res = request.GetResponse();
                //    using (var reader = new StreamReader(res.GetResponseStream()))
                //    {
                //        tinyUrl = reader.ReadToEnd();
                //    }


                //System.Uri address = new System.Uri("http://tinyurl.com/api-create.php?url=" + "https://sbtet.telangana.gov.in/Reports/SignedCert/a8d4b9f7-ce57-4872-9524-45bc14af02d1.pdf");
                //System.Net.WebClient client1 = new System.Net.WebClient();
                //string tinyUrl1 = client1.DownloadString(address);

                
                var param = new SqlParameter[1];

                string clientIpAddress = System.Web.HttpContext.Current.Request.UserHostAddress;
                //string clientIpAddress = System.Web.HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                param[0] = new SqlParameter("@clientIpAddress", clientIpAddress);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_GET_WebSiteVisiterCount", param);
                return JsonConvert.SerializeObject(dt);

            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_GET_WebSiteVisiterCount", 0, ex.Message);
                return JsonConvert.SerializeObject(ex.Message);
            }
        }




        [HttpPost, ActionName("UpdateFDPTraining")]
        public string UpdateFDPTraining(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@FDPDetailsID", data["FDPDetailsID"]);
                param[1] = new SqlParameter("@FDPID", data["FDPID"]);
                param[2] = new SqlParameter("@ActualStrength", data["ActualStrength"]);
                param[3] = new SqlParameter("@ConductedFrom", data["ConductedFrom"]);
                param[4] = new SqlParameter("@ConductedTo", data["ConductedTo"]);
                param[5] = new SqlParameter("@Remarks", data["Remarks"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_FDPDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_FDPDetails", 0, ex.Message);
                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddIPSGM")]
        public string AddIPSGM(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@IPSGMID", data["IPSGMID"]);
                param[1] = new SqlParameter("@NameofSport", data["NameofSport"]);
                param[2] = new SqlParameter("@TeamMembers", data["TeamMembers"]);
                param[3] = new SqlParameter("@WinningPlace", data["WinningPlace"]);
                param[4] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_IPSGMDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_IPSGMDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateIPSGM")]
        public string UpdateIPSGM(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@IPSGMDetailsID", data["IPSGMDetailsID"]);
                param[1] = new SqlParameter("@NameofSport", data["NameofSport"]);
                param[2] = new SqlParameter("@TeamMembers", data["TeamMembers"]);
                param[3] = new SqlParameter("@WinningPlace", data["WinningPlace"]);
                param[4] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_IPSGMDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_IPSGMDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateMasterIPSGM")]
        public string UpdateMasterIPSGM(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@IPSGMID", data["IPSGMID"]);
                param[1] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[2] = new SqlParameter("@IPSGMLevel", data["IPSGMLevel"]);
                param[3] = new SqlParameter("@Venue", data["Venue"]);
                param[4] = new SqlParameter("@FromDate", data["FromDate"]);
                param[5] = new SqlParameter("@ToDate", data["ToDate"]);
                param[6] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[7] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_IPSGM", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetMasterIPSGM")]
        public string GetMasterIPSGM()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_IPSGM";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_IPSGM", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetAllIPSGMDetails")]
        public string GetAllIPSGMDetails()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_IPSGMDetails";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_IPSGMDetails", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetIPSGM")]
        public string GetIPSGM()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_IPSGM";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_IPSGM", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("GetIPSGMDetails")]
        public string GetIPSGMDetails(int AcademicYearID, string IPSGMLevel, int DistrictID = 0)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);
                param[1] = new SqlParameter("@IPSGMLevel", IPSGMLevel);
                param[2] = new SqlParameter("@DistrictID", DistrictID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        [HttpGet, ActionName("GetMasterIPSGMById")]
        public string GetMasterIPSGMById(int IPSGMID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@IPSGMID", IPSGMID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetIPSGMById")]
        public string GetIPSGMById(int IPSGMDetailsID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@IPSGMDetailsID", IPSGMDetailsID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_IPSGMDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetTechFestDetails")]
        public string GetTechFestDetails(int AcademicYearID, string TechFestLevel, int DistrictID = 0)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);
                param[1] = new SqlParameter("@TechFestLevel", TechFestLevel);
                param[2] = new SqlParameter("@DistrictID", DistrictID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_TechFest", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }



        [HttpPost, ActionName("AddMasterTechFest")]
        public string AddMasterTechFest(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@TechFestLevel", data["TechFestLevel"]);
                param[2] = new SqlParameter("@Venue", data["Venue"]);
                param[3] = new SqlParameter("@FromDate", data["FromDate"]);
                param[4] = new SqlParameter("@ToDate", data["ToDate"]);
                param[5] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_TechFest", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_TechFest", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddIndustryConnect")]
        public string AddIndustryConnect(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[1] = new SqlParameter("@ServicesOffered", data["ServicesOffered"]);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_IndustryConnect", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_IndustryConnect", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("UpdateIndustryConnect")]
        public string UpdateIndustryConnect(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@IndustryConnectID", data["IndustryConnectID"]);
                param[1] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[2] = new SqlParameter("@ServicesOffered", data["ServicesOffered"]);
                param[3] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_IndustryConnect", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_IndustryConnect", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetIndustryConnectById")]
        public string GetIndustryConnectById(int IndustryConnectID)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@IndustryConnectID", IndustryConnectID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_IndustryConnect", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Get_Edit_IndustryConnect", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpGet, ActionName("GetIndustryConnectByUsername")]
        public string GetIndustryConnectByUsername(string UserName)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_IndustryConnectByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Get_IndustryConnectByUsername", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddTechFest")]
        public string AddTechFest(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@TechFestID", data["TechFestID"]);
                param[1] = new SqlParameter("@NameofProject", data["NameofProject"]);
                param[2] = new SqlParameter("@TeamMembers", data["TeamMembers"]);
                param[3] = new SqlParameter("@WinningPlace", data["WinningPlace"]);
                param[4] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_TechFestDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_TechFestDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateMasterTechFest")]
        public string UpdateMasterTechFest(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@TechFestID", data["TechFestID"]);
                param[1] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[2] = new SqlParameter("@TechFestLevel", data["TechFestLevel"]);
                param[3] = new SqlParameter("@Venue", data["Venue"]);
                param[4] = new SqlParameter("@FromDate", data["FromDate"]);
                param[5] = new SqlParameter("@ToDate", data["ToDate"]);
                param[6] = new SqlParameter("@DistrictID", data["DistrictID"]);
                param[7] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_TechFest", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_TechFest", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("UpdateTechFest")]
        public string UpdateTechFest(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@TechFestDetailsID", data["TechFestDetailsID"]);
                param[1] = new SqlParameter("@NameofProject", data["NameofProject"]);
                param[2] = new SqlParameter("@TeamMembers", data["TeamMembers"]);
                param[3] = new SqlParameter("@WinningPlace", data["WinningPlace"]);
                param[4] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_TechFestDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_TechFestDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpGet, ActionName("GetMasterTechFest")]
        public string GetMasterTechFest()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_TechFest";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_TechFest", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetTechFest")]
        public string GetTechFest()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_All_TechFestDetails";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_All_TechFestDetails", 0, ex.Message);
                throw ex;
            }
        }

        [HttpGet, ActionName("GetTestimonial")]
        public string GetTestimonial()
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                string StrQuery = "";
                StrQuery = "exec SP_Get_Testimonials";
                var res = dbHandler.ReturnDataSet(StrQuery);
                return JsonConvert.SerializeObject(res);
            }
            catch (Exception ex)
            {

                dbHandler.SaveErorr("SP_Get_Testimonials", 0, ex.Message);
                throw ex;
            }
        }


        [HttpGet, ActionName("FilterTechFest")]
        public string FilterTechFest(int AcademicYearID, string TechFestLevel, int DistrictID = 0)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);
                param[1] = new SqlParameter("@TechFestLevel", TechFestLevel);
                param[2] = new SqlParameter("@DistrictID", DistrictID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_TechFest", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterIndustryConnect")]
        public string FilterIndustryConnect(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_IndustryConnect", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterCollegeLabs")]
        public string FilterCollegeLabs(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_CollegeLabs", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterIndustrialTraining")]
        public string FilterIndustrialTraining(int RegionID, int DistrictID, int CollegeTypeID, int AcademicYear)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                param[3] = new SqlParameter("@AcademicYear", AcademicYear);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_IndustryTraining", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        [HttpGet, ActionName("FilterIndustryInteract")]
        public string FilterIndustryInteract(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_IndustryInteract", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterDigitalClassRooms")]
        public string FilterDigitalClassRooms(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_DigitalClassrooms", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterVirtualClassRooms")]
        public string FilterVirtualClassRooms(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_VirtualClassrooms", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterPlacements")]
        public string FilterPlacements(int RegionID, int DistrictID, int CollegeTypeID)
        {
            try
            {

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@RegionID", RegionID);
                param[1] = new SqlParameter("@DistrictID", DistrictID);
                param[2] = new SqlParameter("@CollegeTypeID", CollegeTypeID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_CollegePlacements", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("FilterIPSGM")]
        public string FilterIPSGM(int AcademicYearID, string IPSGMLevel, int DistrictID = 0)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@AcademicYearID", AcademicYearID);
                param[1] = new SqlParameter("@IPSGMLevel", IPSGMLevel);
                param[2] = new SqlParameter("@DistrictID", DistrictID);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Filter_IPSGM", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("GetMasterTechFestById")]
        public string GetMasterTechFestById(int TechFestID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@TechFestID", TechFestID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_TechFest", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetTechFestById")]
        public string GetTechFestById(int TechFestDetailsID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@TechFestDetailsID", TechFestDetailsID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_TechFestDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpPost, ActionName("AddPlacements")]
        public string AddPlacements(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@CourseID", data["CourseID"]);
                param[2] = new SqlParameter("@NoofPlaced", data["NoofPlaced"]);
                param[3] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[4] = new SqlParameter("@MinimumPackage", data["MinimumPackage"]);
                param[5] = new SqlParameter("@MaximumPackage", data["MaximumPackage"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegePlacements", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegePlacements", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdatePlacements")]
        public string UpdatePlacements(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@CollegePlacementID", data["CollegePlacementID"]);
                param[1] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[2] = new SqlParameter("@CourseID", data["CourseID"]);
                param[3] = new SqlParameter("@NoofPlaced", data["NoofPlaced"]);
                param[4] = new SqlParameter("@IndustryName", data["IndustryName"]);
                param[5] = new SqlParameter("@MinimumPackage", data["MinimumPackage"]);
                param[6] = new SqlParameter("@MaximumPackage", data["MaximumPackage"]);
                param[7] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegePlacements", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegePlacements", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }



        [HttpGet, ActionName("GetPlacementsByUserName")]
        public string GetPlacementsByUserName(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CollegePlacementByUsername", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetCoursesByUserName")]
        public string GetCoursesByUserName(string UserName)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@UserName", UserName);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CourseByColleges", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetPlacementsById")]
        public string GetPlacementsById(int CollegePlacementID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@CollegePlacementID", CollegePlacementID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_CollegePlacements", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpPost, ActionName("AddIndustrialTraining")]
        public string AddIndustrialTraining(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[1] = new SqlParameter("@Spell", data["Spell"]);
                param[2] = new SqlParameter("@CourseID", data["CourseID"]);
                param[3] = new SqlParameter("@NoofTrained", data["NoofTrained"]);
                param[4] = new SqlParameter("@MinimumStipend", data["MinimumStipend"]);
                param[5] = new SqlParameter("@MaximumStipend", data["MaximumStipend"]);
                param[6] = new SqlParameter("@TrainingOfferedIndustries", data["TrainingOfferedIndustries"]);
                param[7] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_CollegeIndustrialTrainings", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_CollegeIndustrialTrainings", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateIndustrialTraining")]
        public string UpdateIndustrialTraining(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@CollegeIndustrialTrainingID", data["CollegeIndustrialTrainingID"]);
                param[1] = new SqlParameter("@AcademicYearID", data["AcademicYearID"]);
                param[2] = new SqlParameter("@Spell", data["Spell"]);
                param[3] = new SqlParameter("@CourseID", data["CourseID"]);
                param[4] = new SqlParameter("@NoofTrained", data["NoofTrained"]);
                param[5] = new SqlParameter("@MinimumStipend", data["MinimumStipend"]);
                param[6] = new SqlParameter("@MaximumStipend", data["MaximumStipend"]);
                param[7] = new SqlParameter("@TrainingOfferedIndustries", data["TrainingOfferedIndustries"]);
                param[8] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegeIndustrialTrainings", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegeIndustrialTrainings", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateCollegeLab")]
        public string UpdateCollegeLab(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@CollegeLabID", data["CollegeLabID"]);
                param[1] = new SqlParameter("@CollegeID", data["CollegeID"]);
                param[2] = new SqlParameter("@LabID", data["LabID"]);
                param[3] = new SqlParameter("@MajorEquipment", data["MajorEquipment"]);
                param[4] = new SqlParameter("@Remarks", data["Remarks"]);
                param[5] = new SqlParameter("@LabTotalCost", data["LabTotalCost"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_CollegeLab", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_CollegeLab", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddCorousel")]
        public string AddCorousel(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["WebsiteSlides"];
                var livepath = ConfigurationManager.AppSettings["LivePath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var filename = data["SliderImageText"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["SliderImageFilePath"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var imagepath = livepath + filename;
                relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                //WESCertificate = relativePath;

                //    file += relativePath + ',';
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@SliderImageText", data["SliderImageText"]);
                param[1] = new SqlParameter("@SliderImageFilePath", imagepath);
                param[2] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_SliderImage", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_SliderImage", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateStaffDetails")]
        public string UpdateStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var dir = AppDomain.CurrentDomain.BaseDirectory + @"\Staff\";
                var filename = data["StaffDesignation"] + ".jpg";
                var CoursesPath = string.Empty;
                var path = ConfigurationManager.AppSettings["StaffImages"];
                var LiveCoursesPath = ConfigurationManager.AppSettings["LiveStaffPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                //var filename = data["CourseName"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["StaffPhoto"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var StaffPath = LiveCoursesPath + filename;
                relativePath = StaffPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[10];
                param[0] = new SqlParameter("@StaffDetailID", data["StaffDetailID"]);
                param[1] = new SqlParameter("@StaffName", data["StaffName"]);
                param[2] = new SqlParameter("@StaffDesignation", data["StaffDesignation"]);
                param[3] = new SqlParameter("@StaffPhone", data["StaffPhone"]);
                param[4] = new SqlParameter("@StaffEmail", data["StaffEmail"]);
                param[5] = new SqlParameter("@StaffPhotoPath", StaffPath);
                param[6] = new SqlParameter("@StaffPriorityOrder", data["StaffPriorityOrder"]);
                param[7] = new SqlParameter("@StaffDetailedDescription", data["StaffDetailedDescription"]);
                param[8] = new SqlParameter("@Qualification", data["Qualification"]);
                param[9] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_SataffDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_SataffDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddStaffDetails")]
        public string AddStaffDetails(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                //    var UpdateStatus = data["UpdateStatus"].ToString();
                var dir = AppDomain.CurrentDomain.BaseDirectory + @"\Staff\";
                var filename = data["StaffDesignation"] + ".jpg";
                var CoursesPath = string.Empty;
                var path = ConfigurationManager.AppSettings["StaffImages"];
                var LiveCoursesPath = ConfigurationManager.AppSettings["LiveStaffPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                //var filename = data["CourseName"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["StaffPhoto"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var StaffPath = LiveCoursesPath + filename;
                relativePath = StaffPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@StaffName", data["StaffName"]);
                param[1] = new SqlParameter("@StaffDesignation", data["StaffDesignation"]);
                param[2] = new SqlParameter("@StaffPhone", data["StaffPhone"]);
                param[3] = new SqlParameter("@StaffEmail", data["StaffEmail"]);
                param[4] = new SqlParameter("@StaffPhotoPath", StaffPath);
                param[5] = new SqlParameter("@StaffPriorityOrder", data["StaffPriorityOrder"]);
                param[6] = new SqlParameter("@StaffDetailedDescription", data["StaffDetailedDescription"]);
                param[7] = new SqlParameter("@Qualification", data["Qualification"]);
                param[8] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_SataffDetails", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_SataffDetails", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }




        [HttpPost, ActionName("AddCourse")]
        public string AddCourse(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                //    var UpdateStatus = data["UpdateStatus"].ToString();
                var dir = AppDomain.CurrentDomain.BaseDirectory + @"\Courses\";
                var filename = data["CourseName"] + ".jpg";
                var CoursesPath = string.Empty;
                var path = ConfigurationManager.AppSettings["CourseImages"];
                var LiveCoursesPath = ConfigurationManager.AppSettings["LiveCoursesPath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                //var filename = data["CourseName"] + ".jpg";
                bool folderExists = Directory.Exists(path);
                if (!folderExists)
                    Directory.CreateDirectory(path);
                string imgPath = Path.Combine(path, filename);
                byte[] imageBytes = Convert.FromBase64String(data["CoursePhoto"].ToString());
                File.WriteAllBytes(imgPath, imageBytes);
                var CoursePath = LiveCoursesPath + filename;
                relativePath = CoursePath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@CourseCode", data["CourseCode"]);
                param[1] = new SqlParameter("@CourseName", data["CourseName"]);
                param[2] = new SqlParameter("@CourseShortDescription", data["CourseShortDescription"]);
                param[3] = new SqlParameter("@CourseDetailedDescription", data["CourseDetailedDescription"]);
                param[4] = new SqlParameter("@CoursePhoto", CoursePath);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Course", param);
                return JsonConvert.SerializeObject(dt);

            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Course", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddNotifications")]
        public string AddNotifications([FromBody] JsonObject data)
        {
            // var path = string.Empty;
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                var path = ConfigurationManager.AppSettings["NotificationsPath"];
                var LiveNotificationsPath = ConfigurationManager.AppSettings["LiveNotificationsPath"];
                var CircularName = data["FileName"].ToString();
                var path1 = path + "\\" + CircularName;
                
                    var CoursePath = "";
                if (File.Exists(path1))
                {
                    CoursePath = "1";
                }
                else { 
                bool folder = Directory.Exists(path);
                if (!folder)
                    Directory.CreateDirectory(path);
                string CircularPath = Path.Combine(path, CircularName);

                byte[] PrincipalimageBytes = Convert.FromBase64String(data["NotificationFilePath"].ToString());
                File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                 CoursePath = LiveNotificationsPath + CircularName;
                relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    CircularUrl = relativePath;
                }
               

                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@NotificationText", data["NotificationText"]);
                param[1] = new SqlParameter("@NotificationFilePath", CoursePath);
                param[2] = new SqlParameter("@NotificationDate", data["NotificationDate"]);
                param[3] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Notification", param);
                return JsonConvert.SerializeObject(dt);
                //  }
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_SliderImage", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddSyllabus")]
        public string AddSyllabus([FromBody] JsonObject data)
        {
            // var path = string.Empty;
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                var path = ConfigurationManager.AppSettings["SyllabusPath"];
                var LiveSyllabusPath = ConfigurationManager.AppSettings["LiveSyllabusPath"];
                var CircularName = data["FileName"].ToString();
                bool folder = Directory.Exists(path);
                if (!folder)
                    Directory.CreateDirectory(path);
                string CircularPath = Path.Combine(path, CircularName);
                var SyllabusPath = LiveSyllabusPath + CircularName;
                byte[] PrincipalimageBytes = Convert.FromBase64String(data["SyllabusFilePath"].ToString());
                File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                CircularUrl = relativePath;
                var param = new SqlParameter[6];
                param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                param[1] = new SqlParameter("@CourseID", data["CourseID"]);
                param[2] = new SqlParameter("@SyllabusText", data["SyllabusText"]);
                param[3] = new SqlParameter("@SyllabusFilePath", SyllabusPath);
                param[4] = new SqlParameter("@SyllabusDate", data["SyllabusDate"]);
                param[5] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Syllabus", param);
                return JsonConvert.SerializeObject(dt);
                //  }
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Syllabus", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddQuestionPaper")]
        public string AddQuestionPaper([FromBody] JsonObject data)
        {
            // var path = string.Empty;
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                var LiveQuestionPaperPath = ConfigurationManager.AppSettings["LiveQuestionPaperPath"];
                var path = ConfigurationManager.AppSettings["QuestionPaperPath"];
                var CircularName = data["FileName"].ToString();
                var QuestionPaperPath = LiveQuestionPaperPath + CircularName;
                bool folder = Directory.Exists(path);
                if (!folder)
                    Directory.CreateDirectory(path);
                string CircularPath = Path.Combine(path, CircularName);

                byte[] PrincipalimageBytes = Convert.FromBase64String(data["QuestionPaperFilePath"].ToString());
                File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                CircularUrl = relativePath;
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                param[1] = new SqlParameter("@CourseID", data["CourseID"]);
                param[2] = new SqlParameter("@ExaminationSpell", data["ExaminationSpell"]);
                param[3] = new SqlParameter("@QuestionPaperText", data["QuestionPaperText"]);
                param[4] = new SqlParameter("@QuestionPaperFilePath", QuestionPaperPath);
                param[5] = new SqlParameter("@QuestionPaperDate", data["QuestionPaperDate"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_QuestionPaper", param);
                return JsonConvert.SerializeObject(dt);
                //  }
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_SliderImage", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddTimeTable")]
        public string AddTimeTable([FromBody] JsonObject data)
        {
            // var path = string.Empty;
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                var path = ConfigurationManager.AppSettings["TimeTablePath"];
                var CircularName = data["FileName"].ToString();
                var LiveTimeTablePath = ConfigurationManager.AppSettings["LiveTimeTablePath"];
                var TimeTablePath = LiveTimeTablePath + CircularName;
                bool folder = Directory.Exists(path);
                if (!folder)
                    Directory.CreateDirectory(path);
                string CircularPath = Path.Combine(path, CircularName);

                byte[] PrincipalimageBytes = Convert.FromBase64String(data["TimeTableFilePath"].ToString());
                File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                CircularUrl = relativePath;
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                param[1] = new SqlParameter("@ExaminationYear", data["ExaminationYear"]);
                param[2] = new SqlParameter("@ExaminationSpell", data["ExaminationSpell"]);
                param[3] = new SqlParameter("@TimeTableText", data["TimeTableText"]);
                param[4] = new SqlParameter("@TimeTableFilePath", TimeTablePath);
                param[5] = new SqlParameter("@TimeTableDate", data["TimeTableDate"]);
                param[6] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_TimeTable", param);
                return JsonConvert.SerializeObject(dt);
                //  }
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_SliderImage", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("AddLatestNews")]
        public string AddLatestNews(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@LatestNewsText", data["LatestNewsText"]);
                param[1] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_LatestNews", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_LatestNews", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("AddEvents")]
        public string AddLaEvents(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@EventSubject", data["EventSubject"]);
                param[1] = new SqlParameter("@EventText", data["EventText"]);
                param[2] = new SqlParameter("@EventDate", data["EventDate"]);
                param[3] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Event", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Add_Event", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateEvents")]
        public string UpdateEvents(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@EventSubject", data["EventSubject"]);
                param[1] = new SqlParameter("@EventText", data["EventText"]);
                param[2] = new SqlParameter("@EventDate", data["EventDate"]);
                param[3] = new SqlParameter("@Active", data["Active"]);
                param[4] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Event", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Event", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateLatestNews")]
        public string UpdateLatestNews(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[3];
                param[0] = new SqlParameter("@LatestNewsText", data["LatestNewsText"]);
                param[1] = new SqlParameter("@Active", data["Active"]);
                param[2] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_LatestNews", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_LatestNews", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateCorousels")]
        public string UpdateCorousels(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var path = ConfigurationManager.AppSettings["WebsiteSlides"];
                var LiveCoursesPath = ConfigurationManager.AppSettings["LivePath"];
                string relativePath = string.Empty;
                var file = string.Empty;
                var imagepath = string.Empty;
                var filename = data["SliderImageText"] + ".jpg";
                if (data["ImgUploaded"].ToString() == "1")
                {
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["SliderImagePath"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    imagepath = LiveCoursesPath + filename;
                   // CoursePath = imagepath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                else
                {
                    imagepath = data["SliderImagePath"].ToString();
                }
                var param = new SqlParameter[4];
                param[0] = new SqlParameter("@SliderImageText", data["SliderImageText"]);
                param[1] = new SqlParameter("@SliderImagePath", imagepath);
                param[2] = new SqlParameter("@Active", data["Active"]);
                param[3] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_SliderImages", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_SliderImages", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }




        public class LinksData
        {
            public int DataType { get; set; }
            public int LinkID { get; set; }
            public string LinkName { get; set; }
            public string LinkText { get; set; }
            public string LinkDate { get; set; }
            public bool Active { get; set; }
            public string UserName { get; set; }
            public string LinkFilePath { get; set; }
            public string LinkFileName { get; set; }


        }

        [HttpPost, ActionName("AddorUpdateLink")]
        public HttpResponseMessage AddorUpdateLink([FromBody] LinksData LinksData)
        {
            try
            {

                var LinkFilePath = string.Empty;
                if (LinksData.DataType == 1)
                {
                    string relativePath = string.Empty;
                    var path = ConfigurationManager.AppSettings["LinksPath"];
                    var LinkName = LinksData.LinkFileName;
                    bool folder = Directory.Exists(path);
                    if (!folder)
                        Directory.CreateDirectory(path);
                    string LinkPath = Path.Combine(path, LinkName);

                    byte[] PrincipalimageBytes = Convert.FromBase64String(LinksData.LinkFilePath);
                    File.WriteAllBytes(LinkPath, PrincipalimageBytes);
                    relativePath = LinkPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    LinkFilePath = relativePath;
                }
                else if (LinksData.DataType == 2 && LinksData.LinkFilePath != "Empty")
                {
                    string relativePath = string.Empty;
                    var path = ConfigurationManager.AppSettings["LinksPath"];
                    var LinkName = LinksData.LinkFileName;
                    bool folder = Directory.Exists(path);
                    if (!folder)
                        Directory.CreateDirectory(path);
                    string LinkPath = Path.Combine(path, LinkName);

                    byte[] PrincipalimageBytes = Convert.FromBase64String(LinksData.LinkFilePath);
                    File.WriteAllBytes(LinkPath, PrincipalimageBytes);
                    relativePath = LinkPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    LinkFilePath = relativePath;
                }
                else
                {
                    LinkFilePath = LinksData.LinkFilePath;
                }

                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@DataType", LinksData.DataType);
                param[1] = new SqlParameter("@LinkID", LinksData.LinkID);
                param[2] = new SqlParameter("@LinkName", LinksData.LinkName);
                param[3] = new SqlParameter("@LinkText", LinksData.LinkText);
                param[4] = new SqlParameter("@LinkDate", LinksData.LinkDate);
                param[5] = new SqlParameter("@LinkFile", LinkFilePath);
                param[6] = new SqlParameter("@Active", LinksData.Active);
                param[7] = new SqlParameter("@UserName", LinksData.UserName);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Update_Links", param);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, dt);
                return response;

            }
            catch (Exception ex)
            {
                //dbHandler.SaveErorr("SP_Add_Update_Links", 0, ex.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost, ActionName("AddorUpdatePopup")]
        public HttpResponseMessage AddorUpdatePopup(JsonObject data)
        {
            try
            {

                var imagepath = string.Empty;
                if (data["DataType"].ToString() == "1")

                {

                    var path = ConfigurationManager.AppSettings["PopupsPath"];
                    var livepath = ConfigurationManager.AppSettings["PopupsLivePath"];
                    string relativePath = string.Empty;
                    var file = string.Empty;
                    var filename = data["Name"].ToString() ;
                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["PopupImage"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                     imagepath = livepath + filename;
                    relativePath = imgPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                else if (data["DataType"].ToString() == "2")
                {
                    var livepath = ConfigurationManager.AppSettings["PopupsLivePath"];
                    string relativePath = string.Empty;
                    var file = string.Empty;
                     imagepath = string.Empty;
                    var filename = data["Name"].ToString();
                    if (data["ImgUploaded"].ToString() == "1")
                    {
                        var path = ConfigurationManager.AppSettings["PopupsPath"];
                        bool folderExists = Directory.Exists(path);
                        if (!folderExists)
                            Directory.CreateDirectory(path);
                        string imgPath = Path.Combine(path, filename);
                        byte[] imageBytes = Convert.FromBase64String(data["PopupImage"].ToString());
                        File.WriteAllBytes(imgPath, imageBytes);
                        imagepath = livepath + filename;
                    }
                    else
                    {
                        imagepath = data["PopupImage"].ToString();
                    }

                }
                else
                {
                    imagepath = data["PopupImage"].ToString();
                }
   
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@DataType", data["DataType"].ToString());
                param[1] = new SqlParameter("@PopupID", data["PopupID"].ToString());
                param[2] = new SqlParameter("@PopupImage", imagepath);
                param[3] = new SqlParameter("@PopupText", data["PopupText"].ToString());
                param[4] = new SqlParameter("@PopupDate", data["PopupDate"].ToString());
                param[5] = new SqlParameter("@Active", data["Active"].ToString());
                param[6] = new SqlParameter("@UserName", data["UserName"].ToString());
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Update_Popup", param);
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, dt);
                return response;

            }
            catch (Exception ex)
            {
                //dbHandler.SaveErorr("SP_Add_Update_Links", 0, ex.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet, ActionName("GetorEditorDeleteLinks")]
        public string GetorEditorDeleteLinks(int DataType, int LinkID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@DataType", DataType);
                param[1] = new SqlParameter("@LinkID", LinkID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Links", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("GetOrEditOrDeletePopup")]
        public string GetOrEditOrDeletePopup(int DataType, int PopupID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[2];
                param[0] = new SqlParameter("@DataType", DataType);
                param[1] = new SqlParameter("@PopupID", PopupID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_Edit_Popups", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateCourses")]
        public string UpdateCourses(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CoursePath = "";
                string UpdateStatus = data["UpdateStatus"].ToString();
                var dir = AppDomain.CurrentDomain.BaseDirectory + @"\Courses\";
                var filename = data["CourseName"] + ".jpg";
                if (UpdateStatus == "0")
                {
                    var CoursesPath = string.Empty;
                    var path = ConfigurationManager.AppSettings["CourseImages"];
                    var LiveCoursesPath = ConfigurationManager.AppSettings["LiveCoursesPath"];
                    string relativePath = string.Empty;
                    string path1 = string.Empty;
                    var file = string.Empty;

                    bool folderExists = Directory.Exists(path);
                    if (!folderExists)
                        Directory.CreateDirectory(path);
                    string imgPath = Path.Combine(path, filename);
                    byte[] imageBytes = Convert.FromBase64String(data["CoursePhoto"].ToString());
                    File.WriteAllBytes(imgPath, imageBytes);
                    path1 = dir + filename;
                    CoursePath = path1.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                }
                else
                {
                    CoursePath = data["CoursePhoto"].ToString();
                    // using (WebClient client = new WebClient())
                    // {
                    //     string relativePath = string.Empty;
                    //     client.DownloadFile(new Uri(data["CoursePhoto"].ToString()), photo_url);
                    //     var path = dir;
                    //     bool foldrExists = Directory.Exists(dir);
                    //     if (!foldrExists)
                    //         Directory.CreateDirectory(dir);
                    //     //string imgPath = Path.Combine(path, photo_url);
                    //     //byte[] Bytes = Convert.FromBase64String(data.StudentPhoto);
                    //     //File.WriteAllBytes(imgPath, Bytes);
                    //     relativePath = dir.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    //var     CoursePath = relativePath + StdPhoto;
                    //     // OR   
                    // }
                }


                var param = new SqlParameter[9];
                param[0] = new SqlParameter("@CourseCode", data["CourseCode"]);
                param[1] = new SqlParameter("@CourseName", data["CourseName"]);
                param[2] = new SqlParameter("@CourseShortDescription", data["CourseShortDescription"]);
                param[3] = new SqlParameter("@CourseDetailedDescription", data["CourseDetailedDescription"]);
                param[4] = new SqlParameter("@CoursePhoto", CoursePath);
                param[5] = new SqlParameter("@Active", data["Active"]);
                param[6] = new SqlParameter("@CourseID", data["CourseID"]); 
                param[7] = new SqlParameter("@IsDisplayinWebsite", data["IsDisplayinWebsite"]);
                param[8] = new SqlParameter("@UserName", data["UserName"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Course", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Course", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpPost, ActionName("UpdateNotifications")]
        public string UpdateNotifications(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                var NotificationPath = "";
                var path = ConfigurationManager.AppSettings["NotificationsPath"];
                var LiveNotificationsPath = ConfigurationManager.AppSettings["LiveNotificationsPath"];
                var CircularName = data["FileName"].ToString();
                var path1 = path + "\\" + CircularName;
                if (data["FileUpload"].ToString() == "1")
                {
                    if (File.Exists(path1) && data["SameFile"].ToString()=="0")
                    {
                        NotificationPath = "1";
                    }
                    else
                    {
                        bool folder = Directory.Exists(path);
                        if (!folder)
                            Directory.CreateDirectory(path);
                        string CircularPath = Path.Combine(path, CircularName);

                        byte[] PrincipalimageBytes = Convert.FromBase64String(data["NotificationFilePath"].ToString());
                        File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                        NotificationPath = LiveNotificationsPath + CircularName;
                        relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                        CircularUrl = relativePath;
                    }
                }
                else
                {
                    NotificationPath = data["NotificationFilePath"].ToString();

                }

                var param = new SqlParameter[5];
                param[0] = new SqlParameter("@NotificationText", data["NotificationText"]);
                param[1] = new SqlParameter("@NotificationFilePath", NotificationPath);
                param[2] = new SqlParameter("@NotificationDate", data["NotificationDate"]);
                param[3] = new SqlParameter("@Active", data["Active"]);
                param[4] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Notification", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Notification", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateSyllabus")]
        public string UpdateSyllabus(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var SyllabusUrl = string.Empty;
                string relativePath = string.Empty;
                var SyllabusPath = "";
                var path = ConfigurationManager.AppSettings["SyllabusPath"];
                var LiveSyllabusPath = ConfigurationManager.AppSettings["LiveSyllabusPath"];
                var SyllabusName = data["FileName"].ToString();
                if (data["FileUpload"].ToString() == "1")
                {
                    bool folder = Directory.Exists(path);
                    if (!folder)
                        Directory.CreateDirectory(path);
                    SyllabusPath = Path.Combine(path, SyllabusName);

                    byte[] PrincipalimageBytes = Convert.FromBase64String(data["SyllabusFilePath"].ToString());
                    File.WriteAllBytes(SyllabusPath, PrincipalimageBytes);
                    SyllabusPath = LiveSyllabusPath + SyllabusName;
                    relativePath = SyllabusPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    SyllabusUrl = relativePath;
                }
                else
                {
                    SyllabusPath = data["SyllabusFilePath"].ToString();

                }

                var param = new SqlParameter[7];
                param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                param[1] = new SqlParameter("@CourseID", data["CourseID"]);
                param[2] = new SqlParameter("@SyllabusText", data["SyllabusText"]);
                param[3] = new SqlParameter("@SyllabusFilePath", SyllabusPath);
                param[4] = new SqlParameter("@SyllabusDate", data["SyllabusDate"]);
                param[5] = new SqlParameter("@Active", data["Active"]);
                param[6] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_Syllabus", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_Syllabus", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateQuestionPaper")]
        public string UpdateQuestionPaper(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var CircularUrl = string.Empty;
                string relativePath = string.Empty;
                string QPPath = string.Empty;
                string CircularPath = string.Empty;
                var LiveQuestionPaperPath = ConfigurationManager.AppSettings["LiveQuestionPaperPath"];
                var path = ConfigurationManager.AppSettings["QuestionPaperPath"];
                var CircularName = data["FileName"].ToString();
                if (data["FileUpload"].ToString() == "1")
                {
                    bool folder = Directory.Exists(path);
                    if (!folder)
                        Directory.CreateDirectory(path);
                    CircularPath = Path.Combine(path, CircularName);

                    byte[] PrincipalimageBytes = Convert.FromBase64String(data["QuestionPaperFilePath"].ToString());
                    File.WriteAllBytes(CircularPath, PrincipalimageBytes);
                    QPPath = LiveQuestionPaperPath + CircularName;
                    relativePath = CircularPath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    CircularUrl = relativePath;
                }
                else
                {
                    QPPath = data["QuestionPaperFilePath"].ToString();
                }
                    var param = new SqlParameter[8];
                    param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                    param[1] = new SqlParameter("@CourseID", data["CourseID"]);
                    param[2] = new SqlParameter("@ExaminationSpell", data["ExaminationSpell"]);
                    param[3] = new SqlParameter("@QuestionPaperText", data["QuestionPaperText"]);
                    param[4] = new SqlParameter("@QuestionPaperFilePath", QPPath);
                    param[5] = new SqlParameter("@QuestionPaperDate", data["QuestionPaperDate"]);
                    param[6] = new SqlParameter("@Active", data["Active"]);
                    param[7] = new SqlParameter("@Id", data["Id"]);
                    var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_QuestionPaper", param);
                    return JsonConvert.SerializeObject(dt);
                }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_QuestionPaper", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }

        [HttpPost, ActionName("UpdateTimeTable")]
        public string UpdateTimeTable(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var TimeTableName = data["FileName"].ToString();
                string relativePath = string.Empty;
                string TimeTablePath = string.Empty;
                var TimeTableUrl = string.Empty;
                if (data["FileUpload"].ToString() == "1")
                {
                 
                //string TimeTablePath = string.Empty;
                var path = ConfigurationManager.AppSettings["TimeTablePath"];
                    TimeTableName = data["FileName"].ToString();
                var LiveTimeTablePath = ConfigurationManager.AppSettings["LiveTimeTablePath"];
                 TimeTablePath = LiveTimeTablePath + TimeTableName;
                bool folder = Directory.Exists(path);
                if (!folder)
                    Directory.CreateDirectory(path);
                 TimeTablePath = Path.Combine(path, TimeTableName);

                byte[] PrincipalimageBytes = Convert.FromBase64String(data["TimeTableFilePath"].ToString());
                File.WriteAllBytes(TimeTablePath, PrincipalimageBytes);
                relativePath = TimeTablePath.Replace(HttpContext.Current.Request.PhysicalApplicationPath, GetWebAppRoot()).Replace(@"\", "/");
                    TimeTableUrl = relativePath;
                }
                else
                {
                    TimeTablePath = data["TimeTableFilePath"].ToString();
                }

                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@SchemeID", data["SchemeID"]);
                param[1] = new SqlParameter("@ExaminationYear", data["ExaminationYear"]);
                param[2] = new SqlParameter("@ExaminationSpell", data["ExaminationSpell"]);
                param[3] = new SqlParameter("@TimeTableText", data["TimeTableText"]);
                param[4] = new SqlParameter("@TimeTableFilePath", TimeTablePath);
                param[5] = new SqlParameter("@TimeTableDate", data["TimeTableDate"]);
                param[6] = new SqlParameter("@Active", data["Active"]);
                param[7] = new SqlParameter("@Id", data["Id"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Update_TimeTable", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Update_TimeTable", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        internal class Output
        {
            public string ResponceCode { get; internal set; }
            public string ResponceDescription { get; internal set; }
            public string Captcha { get; internal set; }
        }


        //        [HttpPost, ActionName("GetCasteDetails")]
        //        public async Task<HttpResponseMessage> GetCasteDetails([FromBody] SscDetails ReqData)
        //        {

        //            var url = ConfigurationManager.AppSettings["MEESEVA_API"].ToString();
        //            var urlwithparam = url + "?Applno=" + ReqData.Applno + "&Aadhar_no=" + ReqData.Aadhar_no;
        //            using (HttpClient client = new HttpClient())
        //            {
        //                try
        //                {
        //                    HttpResponseMessage response = new HttpResponseMessage();
        //                    var resMsg = await client.GetAsync(urlwithparam);
        //                    var content = await resMsg.Content.ReadAsStringAsync();
        //                    XmlDocument PIDResponseXML = new XmlDocument();
        //                    PIDResponseXML.LoadXml(content);

        //                    if (PIDResponseXML.InnerXml.Length != 22)
        //{
        //                        XDocument d = XDocument.Parse(content);
        //                        d.Root.Descendants().Attributes().Where(x => x.IsNamespaceDeclaration).Remove();

        //                        foreach (var elem in d.Descendants())
        //                            elem.Name = elem.Name.LocalName;

        //                        var xmlDocument = new XmlDocument();
        //                        xmlDocument.Load(d.CreateReader());
        //                         var res =xmlDocument.InnerText.ToString();
        //                        //return xmlDocument;
        //                        try
        //                        {
        //                          //  var json = JsonConvert.SerializeXmlNode(PIDResponseXML, Formatting.None, true);
        //                            var jsonData = JsonConvert.SerializeXmlNode(PIDResponseXML, Newtonsoft.Json.Formatting.None, true);
        //                            return Request.CreateResponse(HttpStatusCode.OK, res);
        //                        }
        //                        catch (Exception ex)
        //                        {
        //                            var jsonData = JsonConvert.SerializeXmlNode(PIDResponseXML, Newtonsoft.Json.Formatting.None, true);
        //                            return Request.CreateResponse(HttpStatusCode.OK, jsonData);
        //                        }

        //                        //if (RESULT == "PASS")
        //                        //{
        //                        //    response = Request.CreateResponse(HttpStatusCode.OK);
        //                        //    response.Content = new StringContent(JsonConvert.SerializeObject("{\"Status\" : \"200\",\"RollNo\":\"" + ROLLNO + "\",\"Name\" : \"" + NAME + "\",\"FatherName\" : \"" + FNAME + "\",\"MotherName\" : \"" + MNAME + "\",\"DateOfBirth\" : \"" + DOB + "\",\"Sex\" : \"" + SEX + "\"}"), System.Text.Encoding.UTF8, "application/json");
        //                        //    return response;
        //                        //}
        //                        //else
        //                        //{
        //                        //    response = Request.CreateResponse(HttpStatusCode.OK);
        //                        //    response.Content = new StringContent(JsonConvert.SerializeObject("{\"Status\" : \"404\",\"RollNo\":\"" + ROLLNO + "\",\"Name\" : \"" + NAME + "\",\"FatherName\" : \"" + FNAME + "\",\"MotherName\" : \"" + MNAME + "\",\"DateOfBirth\" : \"" + DOB + "\",\"Sex\" : \"" + SEX + "\"}"), System.Text.Encoding.UTF8, "application/json");
        //                        //    return response;
        //                        //}
        //                    }
        //                    else
        //                    {
        //                        response = Request.CreateResponse(HttpStatusCode.OK);
        //                        response.Content = new StringContent(JsonConvert.SerializeObject("{\"Status\" : \"404\",\"Response\" : \"No Data Found\" }"), System.Text.Encoding.UTF8, "application/json");
        //                        return response;
        //                    }

        //                }
        //                catch (Exception ex)
        //                {
        //                    var response = Request.CreateResponse(HttpStatusCode.NotFound);
        //                    response.Content = new StringContent(JsonConvert.SerializeObject("{\"Status\" : \"404\",\"Response\" : \"" + ex + "\" }"), System.Text.Encoding.UTF8, "application/json");
        //                    return response;
        //                }

        //            }
        //        }

        public class SscDetails
        {
            public string Applno { get; set; }
            public string Aadhar_no { get; set; }
        }


        [HttpPost, ActionName("DeleteAcademicCalenderSettings")]
        public string DeleteAcademicCalenderSettings(JsonObject data)
        {
            var dbHandler = new PolycetdbHandler();
            try
            {
                var param = new SqlParameter[8];
                param[0] = new SqlParameter("@datatype", data["datatype"]);
                param[1] = new SqlParameter("@ACDiplomaID", data["ACDiplomaID"]);
                param[2] = new SqlParameter("@ACDPharmacyID", data["ACDPharmacyID"]);
                param[3] = new SqlParameter("@ACHolidaysID", data["ACHolidaysID"]);
                param[4] = new SqlParameter("@ACIndTrainingID   ", data["ACIndTrainingID"]);
                param[5] = new SqlParameter("@ACNotesID", data["ACNotesID"]);
                param[6] = new SqlParameter("@ACUnitTestsID", data["ACUnitTestsID"]);
                param[7] = new SqlParameter("@ACActivitiesID", data["ACActivitiesID"]);
                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_AcademicCalendarSettings", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                dbHandler.SaveErorr("SP_Delete_AcademicCalendarSettings", 0, ex.Message);

                return JsonConvert.SerializeObject(ex.Message);
                //return ex.Message;
            }
        }


        [HttpGet, ActionName("DeleteTechFestById")]
        public string DeleteTechFestById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_TechFestById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteTechFestMasterById")]
        public string DeleteTechFestMasterById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_TechFestMasterById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }


        [HttpGet, ActionName("DeleteFDPCalenderById")]
        public string DeleteFDPCalenderById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_FDPById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteFDPTrainingById")]
        public string DeleteFDPTrainingById(int Id)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@Id", Id);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_FDPAttendeeById", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [HttpGet, ActionName("DeleteSportsMaster")]
        public string DeleteSportsMaster(int SportID)
        {
            try
            {
                var dbHandler = new PolycetdbHandler();
                var param = new SqlParameter[1];
                param[0] = new SqlParameter("@SportID", SportID);

                var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Delete_SportsMaster", param);
                return JsonConvert.SerializeObject(dt);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }






    //[HttpGet, ActionName("GetCourses")]
    //public string GetCourses()
    //{
    //    var dbHandler = new PolycetdbHandler();
    //    try
    //    {
    //        string StrQuery = "";
    //        StrQuery = "exec SP_Get_Courses";
    //        var res = dbHandler.ReturnDataSet(StrQuery);
    //        return JsonConvert.SerializeObject(res);
    //    }
    //    catch (Exception ex)
    //    {

    //        dbHandler.SaveErorr("SP_Get_Courses", 0, ex.Message);
    //        throw ex;
    //    }
    //}


    public class CollegeCourses
    {

        public int DataType { get; set; }
        public int CollegeWiseCourseID { get; set; }
        public int CourseID { get; set; }
        public int CollegeID { get; set; }
        public string Intake { get; set; }
        public bool NBA { get; set; }
        public bool Active { get; set; }
        public string UserName { get; set; }
    }

    [HttpPost, ActionName("AddorUpdateCollegewiseCourses")]
    public string AddorUpdateCollegewiseCourses([FromBody] CollegeCourses data)
    {
        try
        {

            var dbHandler = new PolycetdbHandler();
            var param = new SqlParameter[8];
            param[0] = new SqlParameter("@DataType", data.DataType);
            param[1] = new SqlParameter("@CollegeWiseCourseID", data.CollegeWiseCourseID);
            param[2] = new SqlParameter("@CollegeID", data.CollegeID);
            param[3] = new SqlParameter("@CourseID", data.CourseID);
            param[4] = new SqlParameter("@Intake", data.Intake);
            param[5] = new SqlParameter("@NBA", data.NBA);
            param[6] = new SqlParameter("@Active", data.Active);
            param[7] = new SqlParameter("@UserName", data.UserName);


            var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Add_Update_CollegeWiseCourses", param);
            return JsonConvert.SerializeObject(dt);
        }
        catch (Exception ex)
        {

            //dbHandler.SaveErorr("SP_Update_Testimonials", 0, ex.Message);
            return ex.Message;
        }

    }




    [HttpGet, ActionName("GetCoursesById")]
    public string GetCoursesById(int CollegeID, int CourseID)
    {
        try
        {
            var dbHandler = new PolycetdbHandler();
            var param = new SqlParameter[2];
            param[0] = new SqlParameter("@CollegeID", CollegeID);
            param[1] = new SqlParameter("@CourseID", CourseID);

            var dt = dbHandler.ReturnDataWithStoredProcedure("SP_Get_CoursesByID", param);
            return JsonConvert.SerializeObject(dt);
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }


    

   

    }
}