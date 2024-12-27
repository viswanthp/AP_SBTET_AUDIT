define([], function () {

    return {

        routes: {

            'index': {
                url: "/index",
                templateUrl: 'app/views/index.html',
                dependencies: ['controllers/IndexController', 'services/AdminService/AdminService']
            },

            //'default': {
            //    url: "/default",
            //    templateUrl: 'app/views/Default.html',
            //    dependencies: ['controllers/DefaultController']
            //},



            'index.Registration': {
                url: "/Registration",
                templateUrl: 'app/views/Register/Registration.html',
                dependencies: ['controllers/Register/RegistrationController', 'services/StudentRegistration/StudentRegistrationService', 'services/AdminService/AdminService', 'services/BillDesk/paymentService', 'services/SystemAdministrator/SystemUserService','services/PreExamination/PreExaminationService']
            },

            'index.TeachingStaff': {
                url: "/TeachingStaff",
                templateUrl: 'app/views/TeachingStaff.html',
                dependencies: ['controllers/TeachingStaffController', 'services/StudentRegistration/StudentRegistrationService', 'services/AdminService/AdminService', 'services/BillDesk/paymentService', 'services/SystemAdministrator/SystemUserService', 'services/PreExamination/PreExaminationService']
            },

            'index.StaffDuties': {
                url: "/StaffDuties",
                templateUrl: 'app/views/StaffDuties.html',
                dependencies: ['controllers/StaffDutiesController', 'services/StudentRegistration/StudentRegistrationService', 'services/AdminService/AdminService', 'services/BillDesk/paymentService', 'services/SystemAdministrator/SystemUserService', 'services/PreExamination/PreExaminationService']
            },

            'index.Application': {
                url: "/Application",
                templateUrl: 'app/views/Application.html',
                dependencies: ['controllers/ApplicationController', 'services/StudentRegistration/StudentRegistrationService']
            },

            'index.Login': {
                url: "/Login",
                templateUrl: 'app/views/Login.html',
                dependencies: ['controllers/LoginController', 'services/SystemAdministrator/SystemUserService', 'services/AdminService/AdminService']
            },

            'index.Feedback': {
                url: "/Feedback",
                templateUrl: 'app/views/Feedback.html',
                dependencies: ['controllers/FeedbackController', 'services/SystemAdministrator/SystemUserService', 'services/AdminService/AdminService']
            },

            'index.OfficialsLogin': {
                url: "/OfficialsLogin",
                templateUrl: 'app/views/OfficialsLogin.html',
                dependencies: ['controllers/OfficialsLoginController', 'services/SystemAdministrator/SystemUserService', 'services/AdminService/AdminService']
            },


            'index.ForgotPage': {
                url: "/ForgotPage",
                templateUrl: 'app/views/ForgotPage.html',
                dependencies: ['controllers/ForgotPageController', 'services/StudentRegistration/StudentRegistrationService', 'services/AdminService/AdminService']
            },

            'Dashboard': {
                url: "/Dashboard",
                templateUrl: 'app/views/Dashboard.html',
                dependencies: ['controllers/DashboardController', 'services/StudentRegistration/StudentRegistrationService', 'services/SystemAdministrator/SystemUserService']
            },

            'Dashboard.SubDashboard': {
                url: "/SubDashboard",
                templateUrl: 'app/views/SubDashboard.html',
                dependencies: ['controllers/SubDashboardController', 'services/StudentRegistration/StudentRegistrationService', 'services/SystemAdministrator/SystemUserService']
            },

            'Dashboard.SubDashboard.LatestNews': {
                url: "/LatestNews",
                templateUrl: 'app/views/LatestNews.html',
                dependencies: ['controllers/LatestNewsController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.CourseSetting': {
                url: "/CourseSetting",
                templateUrl: 'app/views/MasterPages/CourseSetting.html',
                dependencies: ['controllers/MasterPages/CourseSettingController', 'services/AdminService/AdminService']
            },



            'Dashboard.SubDashboard.AdminFeedbackList': {
                url: "/AdminFeedbackList",
                templateUrl: 'app/views/MasterPages/AdminFeedbackList.html',
                dependencies: ['controllers/MasterPages/AdminFeedbackListController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.StaffDetails': {
                url: "/StaffDetails",
                templateUrl: 'app/views/MasterPages/StaffDetails.html',
                dependencies: ['controllers/MasterPages/StaffDetailsController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.AdminFDP': {
                url: "/AdminFDP",
                templateUrl: 'app/views/MasterPages/AdminFDP.html',
                dependencies: ['controllers/MasterPages/AdminFDPController', 'services/AdminService/AdminService']
            },
            
            'Dashboard.SubDashboard.LabSettings': {
                url: "/LabSettings",
                templateUrl: 'app/views/MasterPages/LabSettings.html',
                dependencies: ['controllers/MasterPages/LabSettingsController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.IPSGMSettings': {
                url: "/IPSGMSettings",
                templateUrl: 'app/views/MasterPages/IPSGMSettings.html',
                dependencies: ['controllers/MasterPages/IPSGMSettingsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.IPSGMMaster': {
                url: "/IPSGMMaster",
                templateUrl: 'app/views/MasterPages/IPSGMMaster.html',
                dependencies: ['controllers/MasterPages/IPSGMMasterController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.TechFest': {
                url: "/TechFest",
                templateUrl: 'app/views/MasterPages/TechFest.html',
                dependencies: ['controllers/MasterPages/TechFestController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.TechFestMaster': {
                url: "/TechFestMaster",
                templateUrl: 'app/views/MasterPages/TechFestMaster.html',
                dependencies: ['controllers/MasterPages/TechFestMasterController', 'services/AdminService/AdminService']
            },

            'index.HomeEvents': {
                url: "/HomeEvents",
                templateUrl: 'app/views/HomeEvents.html',
                dependencies: ['controllers/HomeEventsController', 'services/AdminService/AdminService']
            },
            
              'index.HomeLatestNews': {
                  url: "/HomeLatestNews",
                  templateUrl: 'app/views/HomeLatestNews.html',
                  dependencies: ['controllers/HomeLatestNewsController', 'services/AdminService/AdminService']
            },

            'index.HomeNotifications': {
                url: "/HomeNotifications",
                templateUrl: 'app/views/HomeNotifications.html',
                dependencies: ['controllers/HomeNotificationsController', 'services/AdminService/AdminService']
            },

         

            'index.AboutUs': {
                url: "/AboutUs",
                templateUrl: 'app/views/Pages/AboutUs.html',
                dependencies: ['controllers/Pages/AboutUsController', 'services/AdminService/AdminService']
            },

            'index.AboutStaff': {
                url: "/AboutStaff",
                templateUrl: 'app/views/AboutStaff.html',
                dependencies: ['controllers/AboutStaffController', 'services/AdminService/AdminService']
            },

            'index.RefundPolicy': {
                url: "/RefundPolicy",
                templateUrl: 'app/views/Pages/RefundPolicy.html',
                dependencies: ['controllers/Pages/RefundPolicyController', 'services/AdminService/AdminService']
            },


            'index.PrivacyPolicy': {
                url: "/PrivacyPolicy",
                templateUrl: 'app/views/Pages/PrivacyPolicy.html',
                dependencies: ['controllers/Pages/PrivacyPolicyController', 'services/AdminService/AdminService']
            },

            'index.Terms': {
                url: "/Terms",
                templateUrl: 'app/views/Pages/Terms.html',
                dependencies: ['controllers/Pages/TermsController', 'services/AdminService/AdminService']
            },

            'index.AntiRagging': {
                url: "/AntiRagging",
                templateUrl: 'app/views/Pages/AntiRagging.html',
                dependencies: ['controllers/Pages/AntiRaggingController', 'services/AdminService/AdminService']
            },

            'index.CoursesList': {
                url: "/CoursesList",
                templateUrl: 'app/views/Courses/CoursesList.html',
                dependencies: ['controllers/Courses/CoursesListController', 'services/AdminService/AdminService']
            },

            'index.CourseDetails': {
                url: "/CoursesList/CourseDetails",
                templateUrl: 'app/views/Courses/CourseDetails.html',
                dependencies: ['controllers/Courses/CourseDetailsController', 'services/AdminService/AdminService']
            },

            'index.DiplomaCourses': {
                url: "/CoursesList/DiplomaCourses",
                templateUrl: 'app/views/Courses/DiplomaCourses.html',
                dependencies: ['controllers/Courses/DiplomaCoursesController', 'services/AdminService/AdminService']
            },

            'index.InfrastructureDetails': {
                url: "/InfrastructureDetails",
                templateUrl: 'app/views/InfrastructureDetails.html',
                dependencies: ['controllers/InfrastructureDetailsController', 'services/AdminService/AdminService']
            },

            'index.DigitalClassRooms': {
                url: "/InfrastructureDetails/DigitalClassRooms",
                templateUrl: 'app/views/Infracture/DigitalClassRooms.html',
                dependencies: ['controllers/Infracture/DigitalClassRoomsController', 'services/AdminService/AdminService']
            },

            'index.VirtualClassRooms': {
                url: "/InfrastructureDetails/VirtualClassRooms",
                templateUrl: 'app/views/Infracture/VirtualClassRooms.html',
                dependencies: ['controllers/Infracture/VirtualClassRoomsController', 'services/AdminService/AdminService']
            },

            'index.Labs': {
                url: "/InfrastructureDetails/Labs",
                templateUrl: 'app/views/Infracture/Labs.html',
                dependencies: ['controllers/Infracture/LabsController', 'services/AdminService/AdminService']
            },

            'index.SportsMaster': {
                url: "/SportsMaster",
                templateUrl: 'app/views/MasterPages/SportsMaster.html',
                dependencies: ['controllers/MasterPages/SportsMasterController', 'services/AdminService/AdminService']
            },
            'index.IndustryInteraction': {
                url: "/InfrastructureDetails/IndustryInteraction",
                templateUrl: 'app/views/Infracture/IndustryInteraction.html',
                dependencies: ['controllers/Infracture/IndustryInteractionController', 'services/AdminService/AdminService']
            },

            'index.IndustryConnect': {
                url: "/InfrastructureDetails/IndustryConnect",
                templateUrl: 'app/views/Infracture/IndustryConnect.html',
                dependencies: ['controllers/Infracture/IndustryConnectController', 'services/AdminService/AdminService']
            },

            'index.Journal': {
                url: "/InfrastructureDetails/Journal",
                templateUrl: 'app/views/Infracture/Journal.html',
                dependencies: ['controllers/Infracture/JournalController', 'services/AdminService/AdminService']
            },

            'index.AcademicCalenderFilter': {
                url: "/AcademicCalenderFilter",
                templateUrl: 'app/views/Infracture/AcademicCalenderFilter.html',
                dependencies: ['controllers/Infracture/AcademicCalenderFilterController', 'services/AdminService/AdminService']
            },

            'index.LMS': {
                url: "/InfrastructureDetails/LMS",
                templateUrl: 'app/views/Infracture/LMS.html',
                dependencies: ['controllers/Infracture/LMSController', 'services/AdminService/AdminService']
            },

            'index.IPSGM': {
                url: "/InfrastructureDetails/IPSGM",
                templateUrl: 'app/views/Infracture/IPSGM.html',
                dependencies: ['controllers/Infracture/IPSGMController', 'services/AdminService/AdminService']
            },

            'index.TechFest': {
                url: "/InfrastructureDetails/TechFest",
                templateUrl: 'app/views/Infracture/TechFest.html',
                dependencies: ['controllers/Infracture/TechFestController', 'services/AdminService/AdminService']
            },

            'index.IndustrialTraining': {
                url: "/InfrastructureDetails/IndustrialTraining",
                templateUrl: 'app/views/Infracture/IndustrialTraining.html',
                dependencies: ['controllers/Infracture/IndustrialTrainingController', 'services/AdminService/AdminService']
            },

            'index.FDP': {
                url: "/InfrastructureDetails/FDP",
                templateUrl: 'app/views/Infracture/FDP.html',
                dependencies: ['controllers/Infracture/FDPController', 'services/AdminService/AdminService']
            },

            'index.AcademicYear': {
                url: "/InfrastructureDetails/AcademicYear",
                templateUrl: 'app/views/Infracture/AcademicYear.html',
                dependencies: ['controllers/Infracture/AcademicYearController', 'services/AdminService/AdminService']
            },

            'index.AffiliationList': {
                url: "/AffiliationList",
                templateUrl: 'app/views/AffiliationList.html',
                dependencies: ['controllers/AffiliationListController', 'services/AdminService/AdminService']
            },

            
            
            'index.TypewritingAffiliationList': {
                url: "/TypewritingAffiliationList",
                templateUrl: 'app/views/Typewriting/TypewritingAffiliationList.html',
                dependencies: ['controllers/Typewriting/TypewritingAffiliationListController', 'services/AdminService/AdminService']
            },

            'index.TypewritingProcess': {
                url: "/TypewritingProcess",
                templateUrl: 'app/views/Typewriting/TypewritingProcess.html',
                dependencies: ['controllers/Typewriting/TypewritingProcessController', 'services/AdminService/AdminService']
            },

            'index.CCICAffiliationList': {
                url: "/CCICAffiliationList",
                templateUrl: 'app/views/CCIC/CCICAffiliationList.html',
                dependencies: ['controllers/CCIC/CCICAffiliationListController', 'services/AdminService/AdminService']
            },

            'index.CCICProcess': {
                url: "/CCICProcess",
                templateUrl: 'app/views/CCIC/CCICProcess.html',
                dependencies: ['controllers/CCIC/CCICProcessController', 'services/AdminService/AdminService']
            },

            'index.PharmacyAffiliationList': {
                url: "/PharmacyAffiliationList",
                templateUrl: 'app/views/Pharmacy/PharmacyAffiliationList.html',
                dependencies: ['controllers/Pharmacy/PharmacyAffiliationListController', 'services/AdminService/AdminService']
            },

            'index.PharmacyProcess': {
                url: "/PharmacyProcess",
                templateUrl: 'app/views/Pharmacy/PharmacyProcess.html',
                dependencies: ['controllers/Pharmacy/PharmacyProcessController', 'services/AdminService/AdminService']
            },

            'index.AffiliationDetails': {
                url: "/AffiliationDetails",
                templateUrl: 'app/views/AffiliationDetails.html',
                dependencies: ['controllers/AffiliationDetailsController', 'services/AdminService/AdminService']
            },

            'index.Placements': {
                url: "/Placements",
                templateUrl: 'app/views/Placements.html',
                dependencies: ['controllers/PlacementsController', 'services/AdminService/AdminService']
            },

            'index.InstituteWisePlacements': {
                url: "/Placements/InstituteWisePlacements",
                templateUrl: 'app/views/Placements/InstituteWisePlacements.html',
                dependencies: ['controllers/Placements/InstituteWisePlacementsController', 'services/AdminService/AdminService']
            },

            'index.Testimonial': {
                url: "/Placements/Testimonial",
                templateUrl: 'app/views/Placements/Testimonial.html',
                dependencies: ['controllers/Placements/TestimonialController', 'services/AdminService/AdminService']
            },
            
            'index.TypewritingCourses': {
                url: "/CoursesList/TypewritingCourses",
                templateUrl: 'app/views/Courses/TypewritingCourses.html',
                dependencies: ['controllers/Courses/TypewritingCoursesController', 'services/AdminService/AdminService']
            },

            'index.CCICCourses': {
                url: "/CoursesList/CCICCourses",
                templateUrl: 'app/views/Courses/CCICCourses.html',
                dependencies: ['controllers/Courses/CCICCoursesController', 'services/AdminService/AdminService']
            },

            'index.CollegesList': {
                url: "/CollegesList",
                templateUrl: 'app/views/Colleges/CollegesList.html',
                dependencies: ['controllers/Colleges/CollegesListController', 'services/AdminService/AdminService']
            },
           

            'index.DiplomaColleges': {
                url: "/CollegesList/DiplomaColleges",
                templateUrl: 'app/views/Colleges/DiplomaColleges.html',
                dependencies: ['controllers/Colleges/DiplomaCollegesController', 'services/AdminService/AdminService']
            },

            'index.CollegeDetails': {
                url: "/CollegesList/Colleges/CollegeDetails",
                templateUrl: 'app/views/Colleges/CollegeDetails.html',
                dependencies: ['controllers/Colleges/CollegeDetailsController', 'services/AdminService/AdminService']
            },

         

            'index.TypewritingColleges': {
                url: "/CollegesList/TypewritingColleges",
                templateUrl: 'app/views/Colleges/TypewritingColleges.html',
                dependencies: ['controllers/Colleges/TypewritingCollegesController', 'services/AdminService/AdminService']
            },

            'index.CCICColleges': {
                url: "/CollegesList/CCICColleges",
                templateUrl: 'app/views/Colleges/CCICColleges.html',
                dependencies: ['controllers/Colleges/CCICCollegesController', 'services/AdminService/AdminService']
            },

            'index.ServicesList': {
                url: "/ServicesList",
                templateUrl: 'app/views/Services/ServicesList.html',
                dependencies: ['controllers/Services/ServicesListController', 'services/AdminService/AdminService']
            },
            'index.SubServicesList': {
                url: "/ServicesList/SubServicesList",
                templateUrl: 'app/views/Services/SubServicesList.html',
                dependencies: ['controllers/Services/SubServicesListController', 'services/AdminService/AdminService']
            },

            'index.DiplomaService': {
                url: "/ServicesList/SubServicesList/DiplomaService",
                templateUrl: 'app/views/Services/DiplomaService.html',
                dependencies: ['controllers/Services/DiplomaServiceController', 'services/AdminService/AdminService']
            },

            'index.QuestionPapers': {
                url: "/ServicesList/SubServicesList/DiplomaService/QuestionPapers",
                templateUrl: 'app/views/QuestionPapers.html',
                dependencies: ['controllers/QuestionPapersController', 'services/AdminService/AdminService']
            },

            'index.Syllabus': {
                url: "/ServicesList/SubServicesList/DiplomaService/Syllabus",
                templateUrl: 'app/views/Services/Syllabus.html',
                dependencies: ['controllers/Services/SyllabusController', 'services/AdminService/AdminService']
            },

            'index.TimeTables': {
                url: "/ServicesList/SubServicesList/DiplomaService/TimeTables",
                templateUrl: 'app/views/Services/TimeTables.html',
                dependencies: ['controllers/Services/TimeTablesController', 'services/AdminService/AdminService']
            },

            'index.ServiceDetails': {
                url: "/ServicesList/SubServicesList/DiplomaService/ServiceDetails",
                templateUrl: 'app/views/Services/ServiceDetails.html',
                dependencies: ['controllers/Services/ServiceDetailsController', 'services/AdminService/AdminService']
            },


            'index.TypewritingService': {
                url: "/ServicesList/SubServicesList/TypewritingService",
                templateUrl: 'app/views/Services/TypewritingService.html',
                dependencies: ['controllers/Services/TypewritingServiceController', 'services/AdminService/AdminService']
            },

            'index.CCICService': {
                url: "/ServicesList/SubServicesList/CCICService",
                templateUrl: 'app/views/Services/CCICService.html',
                dependencies: ['controllers/Services/CCICServiceController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CorouselSettings': {
                url: "/CorouselSettings",
                templateUrl: 'app/views/CorouselSettings.html',
                dependencies: ['controllers/CorouselSettingsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.SyllabusSettings': {
                url: "/SyllabusSettings",
                templateUrl: 'app/views/MasterPages/SyllabusSettings.html',
                dependencies: ['controllers/MasterPages/SyllabusSettingsController', 'services/AdminService/AdminService']
            },
            

            'Dashboard.SubDashboard.QuestionPapersSettings': {
                url: "/QuestionPapersSettings",
                templateUrl: 'app/views/MasterPages/QuestionPapersSettings.html',
                dependencies: ['controllers/MasterPages/QuestionPapersSettingsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.TimeTableSettings': {
                url: "/TimeTableSettings",
                templateUrl: 'app/views/MasterPages/TimeTableSettings.html',
                dependencies: ['controllers/MasterPages/TimeTableSettingsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegeDetails': {
                url: "/CollegeDetails",
                templateUrl: 'app/views/CollegePages/CollegeDetails.html',
                dependencies: ['controllers/CollegePages/CollegeDetailsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegeStaffDetails': {
                url: "/CollegeStaffDetails",
                templateUrl: 'app/views/CollegePages/CollegeStaffDetails.html',
                dependencies: ['controllers/CollegePages/CollegeStaffDetailsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegeStaffList': {
                url: "/CollegeStaffList",
                templateUrl: 'app/views/MasterPages/CollegeStaffList.html',
                dependencies: ['controllers/MasterPages/CollegeStaffListController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegeLabs': {
                url: "/CollegeLabs",
                templateUrl: 'app/views/CollegePages/CollegeLabs.html',
                dependencies: ['controllers/CollegePages/CollegeLabsController', 'services/AdminService/AdminService']
            },
            'Dashboard.SubDashboard.SportsMaster': {
                url: "/SportsMaster",
                templateUrl: 'app/views/MasterPages/SportsMaster.html',
                dependencies: ['controllers/MasterPages/SportsMasterController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegeJournal': {
                url: "/CollegeJournal",
                templateUrl: 'app/views/CollegePages/CollegeJournal.html',
                dependencies: ['controllers/CollegePages/CollegeJournalController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.AcademicCalenderSettings': {
                url: "/AcademicCalenderSettings",
                templateUrl: 'app/views/MasterPages/AcademicCalenderSettings.html',
                dependencies: ['controllers/MasterPages/AcademicCalenderSettingsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.TestimonialSettings': {
                url: "/TestimonialSettings",
                templateUrl: 'app/views/MasterPages/TestimonialSettings.html',
                dependencies: ['controllers/MasterPages/TestimonialSettingsController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.IndustryInteractions': {
                url: "/IndustryInteractions",
                templateUrl: 'app/views/CollegePages/IndustryInteractions.html',
                dependencies: ['controllers/CollegePages/IndustryInteractionsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.IndustryConnect': {
                url: "/IndustryConnect",
                templateUrl: 'app/views/CollegePages/CollegeIndustryConnect.html',
                dependencies: ['controllers/CollegePages/CollegeIndustryConnectController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.CollegePlacements': {
                url: "/CollegePlacements",
                templateUrl: 'app/views/CollegePages/CollegePlacements.html',
                dependencies: ['controllers/CollegePages/CollegePlacementsController', 'services/AdminService/AdminService']
            },


            'Dashboard.SubDashboard.CollegeIndustrialTraining': {
                url: "/CollegeIndustrialTraining",
                templateUrl: 'app/views/CollegePages/CollegeIndustrialTraining.html',
                dependencies: ['controllers/CollegePages/CollegeIndustrialTrainingController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.Events': {
                url: "/Events",
                templateUrl: 'app/views/Events.html',
                dependencies: ['controllers/EventsController', 'services/AdminService/AdminService']
            },

            'Dashboard.SubDashboard.Notifications': {
                url: "/Notifications",
                templateUrl: 'app/views/Notifications.html',
                dependencies: ['controllers/NotificationsController', 'services/AdminService/AdminService']
            },
        }
    }
});