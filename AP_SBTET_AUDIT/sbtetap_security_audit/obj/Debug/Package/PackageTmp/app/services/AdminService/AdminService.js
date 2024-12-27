define(['app'], function (app) {
    app.service("AdminService", function (DataAccessService) {
        this.GetStates = function () {
            return DataAccessService.getDataAll('api/AdminService/GetStates');
        };

        this.GetCaptchaString10 = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCaptchaString10');
        };
        this.AddGallery = function (GalleryImageText, GalleryImageFilePath, UserName) {
            var paramObject = { "GalleryImageText": GalleryImageText, "GalleryImageFilePath": GalleryImageFilePath, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddGallery', paramObject);
        };

        this.GetGallery = function () {
            return DataAccessService.getDataAll('api/AdminService/GetGallery');
        };

        this.GetAdminGallery = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminGallery');
        };


        this.GetGalleryById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetGalleryById', paramObject);
        };

        this.DeleteGalleryById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteGalleryById', paramObject);
        };

        this.UpdateGallery = function (GalleryImageText, GalleryImagePath, Active, Id, ImgUploaded) {
            var paramObject = { "GalleryImageText": GalleryImageText, "GalleryImagePath": GalleryImagePath, "Active": Active, "Id": Id, "ImgUploaded": ImgUploaded };
            return DataAccessService.postData('api/AdminService/UpdateGallery', paramObject);
        };

        
        this.GetPublishStatus = function () {
            return DataAccessService.getDataAll('api/AdminService/GetPublishStatus');
        };       

        this.GetUsersForPasswordReset = function () {
            return DataAccessService.getDataAll('api/AdminService/GetUsersForPasswordReset');
        };

        
        this.GetPublishData = function () {
            return DataAccessService.getDataAll('api/AdminService/GetPublishData');
        };

        this.GetWebSiteVisiterCount = function () {
            var promise = DataAccessService.getDataWithPara('api/AdminService/GetWebSiteVisiterCount');
            return promise;
        }

        this.GetRegions = function () {
            return DataAccessService.getDataAll('api/AdminService/GetRegions');
        };

        
        this.GetFeedbackList = function () {
            return DataAccessService.getDataAll('api/AdminService/GetFeedbackList');
        };

        this.GetYears = function () {
            return DataAccessService.getDataAll('api/AdminService/GetYears');
        };

        
        this.GetTestimonial = function () {
            return DataAccessService.getDataAll('api/AdminService/GetTestimonial');
        };

        this.AddLink = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddorUpdateLink', Obj);
        };

        this.AddorUpdatePopup = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddorUpdatePopup', Obj);
        };

        this.AddLink = function (DataType, LinkID, LinkName, LinkText, LinkDate, LinkFilePath, FileName, Active, UserName) {
            var paramObject = {
                "DataType": DataType,
                "LinkID": LinkID,
                "LinkName": LinkName,
                "LinkText": LinkText,
                "LinkDate": LinkDate,
                "LinkFilePath": LinkFilePath,
                "LinkFileName": FileName,
                "Active": Active,
                "UserName": UserName
            };
            return DataAccessService.postData('api/AdminService/AddorUpdateLink', paramObject);
        };


        this.UpdateLink = function (DataType, LinkID, LinkName, LinkText, LinkDate, LinkFilePath, FileName, Active, UserName) {
            var paramObject = {
                "DataType": DataType,
                "LinkID": LinkID,
                "LinkName": LinkName,
                "LinkText": LinkText,
                "LinkDate": LinkDate,
                "LinkFilePath": LinkFilePath,
                "LinkFileName": FileName,
                "Active": Active,
                "UserName": UserName
            };
            return DataAccessService.postData('api/AdminService/AddorUpdateLink', paramObject);
        };



        this.GetLinks = function (DataType, LinkID) {
            var paramObject = {
                "DataType": DataType,
                "LinkID": LinkID
            };
            return DataAccessService.getDataWithPara('api/AdminService/GetorEditorDeleteLinks', paramObject);
        };

        this.GetOrEditOrDeletePopup = function (DataType, PopupID) {
            var paramObject = {
                "DataType": DataType,
                "PopupID": PopupID
            };
            return DataAccessService.getDataWithPara('api/AdminService/GetOrEditOrDeletePopup', paramObject);
        };


        this.GetLinksById = function (DataType, LinkID) {
            var paramObject = {
                "DataType": DataType,
                "LinkID": LinkID
            };
            return DataAccessService.getDataWithPara('api/AdminService/GetorEditorDeleteLinks', paramObject);
        };


        this.DeleteLinkById = function (DataType, LinkID) {
            var paramObject = {
                "DataType": DataType,
                "LinkID": LinkID
            };
            return DataAccessService.getDataWithPara('api/AdminService/GetorEditorDeleteLinks', paramObject);
        };


        
        this.GetStaffOrder = function () {
            return DataAccessService.getDataAll('api/AdminService/GetStaffOrder');
        };
        
        this.SubmitFeedback = function (Obj) {
            return DataAccessService.postData('api/AdminService/SubmitFeedback', Obj);
        };

        
        this.ChangePassword = function (Obj) {
            return DataAccessService.postData('api/AdminService/ChangePassword', Obj);
        };

        this.AddStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddStaffDetails', Obj);
        };

        this.UpdateStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateStaffDetails', Obj);
        };

        this.AddJournal = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddJournal', Obj);
        };
        

        this.UpdateJournal = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateJournal', Obj);
        };

        this.GetJournals = function () {
            return DataAccessService.getDataAll('api/AdminService/GetJournals');
        };

        this.GetJournalById = function (JournalID) {
            var paramObject = { "JournalID": JournalID };
            return DataAccessService.getDataWithPara('api/AdminService/GetJournalById', paramObject);
        };

        this.LaunchWebsite = function (Publish) {
            var paramObject = { "Publish": Publish };
            return DataAccessService.getDataWithPara('api/AdminService/LaunchWebsite', paramObject);
        };
        

        this.GetFDPAcademicYears = function () {
            return DataAccessService.getDataAll('api/AdminService/GetFDPAcademicYears');
        };


        this.AddCollegeStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddCollegeStaffDetails', Obj);
        };


        this.UpdateCollegeStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateCollegeStaffDetails', Obj);
        };

        this.GetCollegeStaffDetails = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeStaffDetails', paramObject);
        };

        this.GetCollegeStaffFilter = function (DistrictID, CollegeID) {
            var paramObject = { "DistrictID": DistrictID, "CollegeID": CollegeID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeStaffFilter', paramObject);
        };
        

        this.GetDesignations = function () {
            return DataAccessService.getDataAll('api/AdminService/GetDesignations');
        };

        this.GetCollegeStaffDetailsById = function (CollegeStaffID) {
            var paramObject = { "CollegeStaffID": CollegeStaffID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeStaffDetailsById', paramObject);
        };


        this.GetFDPProgramsByAcademicYear = function (AcademicYearID) {
            var paramObject = { "AcademicYearID": AcademicYearID };
            return DataAccessService.getDataWithPara('api/AdminService/GetFDPProgramsByAcademicYear', paramObject);
        };

        this.EditDiplomaAC = function (ACDiplomaID) {
            var paramObject = { "ACDiplomaID": ACDiplomaID };
            return DataAccessService.getDataWithPara('api/AdminService/EditDiplomaAC', paramObject);
        };

        this.EditDPharmAC = function (ACDPharmacyID) {
            var paramObject = { "ACDPharmacyID": ACDPharmacyID };
            return DataAccessService.getDataWithPara('api/AdminService/EditDPharmAC', paramObject);
        };

        this.EditHolidays = function (ACHolidaysID) {
            var paramObject = { "ACHolidaysID": ACHolidaysID };
            return DataAccessService.getDataWithPara('api/AdminService/EditHolidays', paramObject);
        };

        this.GetAcademicCalendersById = function (AcademicYearID) {
            var paramObject = { "AcademicYearID": AcademicYearID };
            return DataAccessService.getDataWithPara('api/AdminService/GetAcademicCalendersById', paramObject);
        };
        

        this.EditIndustrialTraining = function (ACIndTrainingID) {
            var paramObject = { "ACIndTrainingID": ACIndTrainingID };
            return DataAccessService.getDataWithPara('api/AdminService/EditIndustrialTraining', paramObject);
        };

        this.EditNotes = function (ACNotesID) {
            var paramObject = { "ACNotesID": ACNotesID };
            return DataAccessService.getDataWithPara('api/AdminService/EditNotes', paramObject);
        };

        this.EditUnitTests = function (ACUnitTestsID) {
            var paramObject = { "ACUnitTestsID": ACUnitTestsID };
            return DataAccessService.getDataWithPara('api/AdminService/EditUnitTests', paramObject);
        };

        this.EditActivities = function (ACActivitiesID) {
            var paramObject = { "ACActivitiesID": ACActivitiesID };
            return DataAccessService.getDataWithPara('api/AdminService/EditActivities', paramObject);
        };

        this.GetFDPAcademicYears = function () {
            return DataAccessService.getDataAll('api/AdminService/GetFDPAcademicYears');
        };


        this.AddFDPCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddFDPCalender', Obj);
        };


        this.UpdateFDPCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateFDPCalender', Obj);
        };

        this.GetFDPCalenders = function () {
            return DataAccessService.getDataAll('api/AdminService/GetFDPCalenders');
        };

        
        this.GetAllAcademicCalenders = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAllAcademicCalenders');
        };

        this.GetFDPCalenderById = function (FDPID) {
            var paramObject = { "FDPID": FDPID };
            return DataAccessService.getDataWithPara('api/AdminService/GetFDPCalenderById', paramObject);
        };


        this.AddFDPTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddFDPTraining', Obj);
        };


        this.UpdateFDPTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateFDPTraining', Obj);
        };

        this.GetFDPTrainings = function () {
            return DataAccessService.getDataAll('api/AdminService/GetFDPTrainings');
        };

        this.GetFDPTrainingById = function (FDPDetailsID) {
            var paramObject = { "FDPDetailsID": FDPDetailsID };
            return DataAccessService.getDataWithPara('api/AdminService/GetFDPTrainingById', paramObject);
        };


        this.AddAcademicCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddAcademicCalender', Obj);
        };

        this.AddUpdateDiplomaCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateDiplomaCalender', Obj);
        };
        
        
        this.AddUpdateDpharmCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateDpharmCalender', Obj);
        };

        this.AddUpdateHolidaysCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateHolidaysCalender', Obj);
        };

        this.AddUpdateIndustryCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateIndustryCalender', Obj);
        };
        
        this.AddUpdateCalendarNotes = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateCalendarNotes', Obj);
        };
        
        this.AddUpdateUnitTest = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateUnitTest', Obj);
        };

        
        this.AddUpdateCalenderActivities = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddUpdateCalenderActivities', Obj);
        };

        this.UpdateAcademicCalender = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateAcademicCalender', Obj);
        };

        this.GetAcademicCalenders = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAcademicCalenders');
        };

        this.GetAcademicCalenderById = function (CalendarID) {
            var paramObject = { "CalendarID": CalendarID };
            return DataAccessService.getDataWithPara('api/AdminService/GetAcademicCalenderById', paramObject);
        };
        
        this.FilterTechFest = function (AcademicYearID, TechFestLevel, DistrictID) {
            var paramObject = { "AcademicYearID": AcademicYearID, "TechFestLevel": TechFestLevel, "DistrictID": DistrictID};
            return DataAccessService.getDataWithPara('api/AdminService/FilterTechFest', paramObject);
        };

        
        this.FilterJournal = function (PublishYear) {
            var paramObject = { "PublishYear": PublishYear};
            return DataAccessService.getDataWithPara('api/AdminService/FilterJournal', paramObject);
        };

        this.FilterCollegeLabs = function (RegionID,DistrictID,CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterCollegeLabs', paramObject);
        };

        this.FilterIndustryConnect = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterIndustryConnect', paramObject);
        };

        this.FilterIndustrialTraining = function (RegionID, DistrictID, CollegeTypeID, AcademicYear) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID, "AcademicYear": AcademicYear };
            return DataAccessService.getDataWithPara('api/AdminService/FilterIndustrialTraining', paramObject);
        };

        this.FilterIndustryInteract = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterIndustryInteract', paramObject);
        };

        this.FilterDigitalClassRooms = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterDigitalClassRooms', paramObject);
        };

        this.FilterVirtualClassRooms = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterVirtualClassRooms', paramObject);
        };


        this.FilterPlacements = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterPlacements', paramObject);
        };
        
        this.GetIndustryConnectById = function (IndustryConnectID) {
            var paramObject = { "IndustryConnectID": IndustryConnectID };
            return DataAccessService.getDataWithPara('api/AdminService/GetIndustryConnectById', paramObject);
        };

        this.GetIndustryConnectByUser = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetIndustryConnectByUsername', paramObject);
        };

        this.AddIndustryConnect = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddIndustryConnect', Obj);
        };

        this.UpdateIndustryConnect = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateIndustryConnect', Obj);
        };

        this.AddTestimonial = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddTestimonial', Obj);
        };

        this.UpdateTestimonial = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateTestimonial', Obj);
        };

        this.GetTestimonialByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetTestimonialByUserName',paramObject);
        };

        this.GetTestimonialById = function (TestimonialID) {
            var paramObject = { "TestimonialID": TestimonialID };
            return DataAccessService.getDataWithPara('api/AdminService/GetTestimonialById', paramObject);
        };

        this.GetStaffList = function () {
            return DataAccessService.getDataAll('api/AdminService/GetStaffList');
        };

        this.GetStaffById = function (SataffDetailID) {
            var paramObject = { "SataffDetailID": SataffDetailID };
            return DataAccessService.getDataWithPara('api/AdminService/GetStaffById', paramObject);
        };

        this.AddIPSGM = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddIPSGM', Obj);
        };

        
        this.AddMasterTechFest = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddMasterTechFest', Obj);
        };

        this.AddMasterIPSGM = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddMasterIPSGM', Obj);
        };
        

        this.UpdateIPSGM = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateIPSGM', Obj);
        };

        this.GetIPSGM = function () {

            return DataAccessService.getDataAll('api/AdminService/GetIPSGM');
        };

        this.FilterIPSGM = function (AcademicYearID, IPSGMLevel, DistrictID) {
            var paramObject = { "AcademicYearID": AcademicYearID, "IPSGMLevel": IPSGMLevel, "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/FilterIPSGM', paramObject);
        };



        this.GetAllIPSGMDetails = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAllIPSGMDetails');
        };

        this.GetIPSGMById = function (IPSGMDetailsID) {
            var paramObject = { "IPSGMDetailsID": IPSGMDetailsID };
            return DataAccessService.getDataWithPara('api/AdminService/GetIPSGMById', paramObject);
        };

        
        this.GetIPSGMDetails = function (AcademicYearID, IPSGMLevel, DistrictID) {
            var paramObject = { "AcademicYearID": AcademicYearID, "IPSGMLevel": IPSGMLevel, "DistrictID": DistrictID};
            return DataAccessService.getDataWithPara('api/AdminService/GetIPSGMDetails', paramObject);
        };

        this.GetTechFestDetails = function (AcademicYearID, TechFestLevel, DistrictID) {
            var paramObject = { "AcademicYearID": AcademicYearID, "TechFestLevel": TechFestLevel, "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetTechFestDetails', paramObject);
        };

        this.UpdateMasterIPSGM = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateMasterIPSGM', Obj);
        };

        this.GetMasterIPSGM = function () {

            return DataAccessService.getDataAll('api/AdminService/GetMasterIPSGM');
        };

        this.GetMasterIPSGMById = function (IPSGMID) {
            var paramObject = { "IPSGMID": IPSGMID };
            return DataAccessService.getDataWithPara('api/AdminService/GetMasterIPSGMById', paramObject);
        };


        this.AddTechFest = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddTechFest', Obj);
        };

        this.UpdateTechFest = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateTechFest', Obj);
        };

        
        this.UpdateMasterTechFest = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateMasterTechFest', Obj);
        };

        this.GetMasterTechFest = function () {

            return DataAccessService.getDataAll('api/AdminService/GetMasterTechFest');
        };

        this.GetTechFest = function () {

            return DataAccessService.getDataAll('api/AdminService/GetTechFest');
        };

        this.GetTechFestById = function (TechFestDetailsID) {
            var paramObject = { "TechFestDetailsID": TechFestDetailsID };
            return DataAccessService.getDataWithPara('api/AdminService/GetTechFestById', paramObject);
        };

        

        this.GetMasterTechFestById = function (TechFestID) {
            var paramObject = { "TechFestID": TechFestID };
            return DataAccessService.getDataWithPara('api/AdminService/GetMasterTechFestById', paramObject);
        };

        this.AddPlacements = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddPlacements', Obj);
        };

        this.UpdatePlacements = function (Obj) {
            console.log(Obj)
            return DataAccessService.postData('api/AdminService/UpdatePlacements', Obj);
        };

        this.GetPlacementsByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetPlacementsByUserName', paramObject);
        };

        
        this.GetCoursesByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCoursesByUserName', paramObject);
        };

        this.GetPlacementsById = function (CollegePlacementID) {
            var paramObject = { "CollegePlacementID": CollegePlacementID };
            return DataAccessService.getDataWithPara('api/AdminService/GetPlacementsById', paramObject);
        };


        this.AddIndustryInteraction = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddIndustryInteraction', Obj);
        };

        this.UpdateIndustryInteraction = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateIndustryInteraction', Obj);
        };

        this.GetIndustryInteractionByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetIndustryInteractionByUserName', paramObject);
        };

        this.GetIndustryInteractionById = function (CollegeIndustryInteractionID) {
            var paramObject = { "CollegeIndustryInteractionID": CollegeIndustryInteractionID };
            return DataAccessService.getDataWithPara('api/AdminService/GetIndustryInteractionById', paramObject);
        };

        this.AddLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddLab', Obj);
        };

        this.UpdateLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateLab', Obj);
        };

        this.GetLabs = function () {
            return DataAccessService.getDataAll('api/AdminService/GetLabs');
        };

        this.GetAdminLabs = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminLabs');
        };
        

        this.GetLabById = function (LabID) {
            var paramObject = { "LabID": LabID };
            return DataAccessService.getDataWithPara('api/AdminService/GetLabById', paramObject);
        };

        this.GetCollegesByDistrictId = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegesByDistrictId', paramObject);
        };
        

        this.AddSport = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddSport', Obj);
        };

        this.UpdateSport = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateSport', Obj);
        };

        this.GetSports = function () {
            return DataAccessService.getDataAll('api/AdminService/GetSports');
        };

        this.GetSportById = function (SportID) {
            var paramObject = { "SportID": SportID };
            return DataAccessService.getDataWithPara('api/AdminService/GetSportById', paramObject);
        };


        this.GetStaffData = function () {
            return DataAccessService.getDataAll('api/AdminService/GetStaffData');
        };

        this.GetDigitalClassRooms = function () {
            return DataAccessService.getDataAll('api/AdminService/GetDigitalClassRooms');
        };

        this.GetWinningPlaces = function () {
            return DataAccessService.getDataAll('api/AdminService/GetWinningPlaces');
        };
        

        this.GetVirtualClassRooms = function () {
            return DataAccessService.getDataAll('api/AdminService/GetVirtualClassRooms');
        };
        this.GetCollegeLabs = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCollegeLabs');
        };
        
        this.GetDistrictsByRegionId = function (RegionID) {
            var paramObject = { "RegionID": RegionID };
            return DataAccessService.getDataWithPara('api/AdminService/GetDistrictsByRegionId', paramObject);
        };

        
        this.GetCollegeIndustrialTrainingByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeIndustrialTrainingByUserName', paramObject);
        };


        this.GetCollegeIndustrialTrainingById = function (CollegeIndustrialTrainingID) {
            var paramObject = { "CollegeIndustrialTrainingID": CollegeIndustrialTrainingID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeIndustrialTrainingById', paramObject);
        };


        this.GetCollegeLabsByUserName = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeLabsByUserName', paramObject);
        };

        
        this.GetCollegeLabsById = function (CollegeLabID) {
            var paramObject = { "CollegeLabID": CollegeLabID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeLabsById', paramObject);
        };

        this.GetCollegeDetailsById = function (CollegeID) {
            var paramObject = { "CollegeID": CollegeID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeDetailsById', paramObject);
        };

        
        
        this.GetCollegeList = function (RegionID, DistrictID, CollegeTypeID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeList', paramObject);
        };

        this.GetCollegeListByCourse = function (RegionID, DistrictID, CollegeTypeID, CourseID) {
            var paramObject = { "RegionID": RegionID, "DistrictID": DistrictID, "CollegeTypeID": CollegeTypeID, "CourseID": CourseID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeListByCourse', paramObject);
        };

        this.CollegeTypes = function () {
            return DataAccessService.getDataAll('api/AdminService/CollegeTypes');
        };

        

        this.GetColleges = function () {
            return DataAccessService.getDataAll('api/AdminService/GetColleges');
        };

        this.GetCaptchaString = function (SessionId) {
            var paramObject = { "SessionId": SessionId };
            return DataAccessService.getDataWithPara('api/AdminService/GetCaptchaString', paramObject);
        };

        
        this.GetCollegeDetails = function (UserTypeID, UserName) {
            var paramObject = { "UserTypeID": UserTypeID, "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCollegeDetails', paramObject);
        };


        this.AddLatestNews = function (LatestNewsText,UserName) {
            var paramObject = { "LatestNewsText": LatestNewsText, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddLatestNews', paramObject);
        };

        
        this.AddCollegeLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddCollegeLab', Obj);
        };
        this.DeleteCollegeLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegeLab', Obj);
        };

        this.DeleteIndustryConnect = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteIndustryConnect', Obj);
        };

        this.DeleteCollegeIndustrialTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegeIndustrialTraining', Obj);
        };

        this.DeleteCollegePlacement = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegePlacement', Obj);
        };

        this.DeleteTestimonial = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteTestimonial', Obj);
        };

        this.ChangeInteractionStatus = function (Obj) {
            return DataAccessService.postData('api/AdminService/ChangeInteractionStatus', Obj);
        };

        this.DeleteCollegeStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegeStaffDetails', Obj);
        };

        this.DeleteCollegeStaff = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegeStaff', Obj);
        };

        this.DeleteLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteLab', Obj);
        };

        this.DeleteAdminFeedBackList = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAdminFeedBackList', Obj);
        };

        this.DeleteCollegeJournal = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteCollegeJournal', Obj);
        };

        this.DeleteAdminStaff = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAdminStaff', Obj);
        };

        this.DeleteIPSGM = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteIPSGM', Obj);
        };

        
        this.DeleteIPSGMMasterById = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteIPSGMMasterById', Obj);
        };

        this.DeleteAdminCollegeStaffDetails = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAdminCollegeStaffDetails', Obj);
        };

        

        this.AddIndustrialTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddIndustrialTraining', Obj);
        };

        this.UpdateIndustrialTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateIndustrialTraining', Obj);
        };
        
        this.UpdateCollegeLab = function (Obj) {
            return DataAccessService.postData('api/AdminService/UpdateCollegeLab', Obj);
        };
        
        
        this.AddCollegeData = function (obj) {
            //var paramObject = { "LatestNewsSubject": LatestNewsSubject, "LatestNewsText": LatestNewsText, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddCollegeData', obj);
        };

        this.UpdateCollegeData = function (obj) {
            //var paramObject = { "LatestNewsSubject": LatestNewsSubject, "LatestNewsText": LatestNewsText, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/UpdateCollegeData', obj);
        };
        

        this.GetLatestNews = function () {
            return DataAccessService.getDataAll('api/AdminService/GetLatestNews');
        };

        this.GetAdminLatestNews = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminLatestNews');
        };

        
        this.GetLatestNewsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetLatestNewsById', paramObject);
        };

        this.DeleteLatestNewsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteLatestNewsById', paramObject);
        };

        

        this.UpdateLatestNews = function ( LatestNewsText, Active,Id) {
            var paramObject = { "LatestNewsText": LatestNewsText, "Active": Active, "Id": Id };
            return DataAccessService.postData('api/AdminService/UpdateLatestNews', paramObject);
        };


        this.AddEvents = function (EventSubject, EventText, EventDate,UserName) {
            var paramObject = { "EventSubject": EventSubject, "EventText": EventText, "EventDate": EventDate, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddEvents', paramObject);
        };
 

        this.AddCourse = function (CourseCode, CourseName, CourseShortDescription, CourseDetailedDescription, CoursePhoto, UserName) {
        var paramObject = {
        "CourseCode": CourseCode, "CourseName": CourseName, "CourseShortDescription": CourseShortDescription, "CourseDetailedDescription": CourseDetailedDescription,
        "CoursePhoto": CoursePhoto, "UserName": UserName
            };
            return DataAccessService.postData('api/AdminService/AddCourse', paramObject);
        };

        this.GetCourseById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetCourseById', paramObject);
        };

        this.DeleteCourseById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteCourseById', paramObject);
        };



        this.UpdateCourses = function (CourseCode, CourseName, CourseShortDescription, CourseDetailedDescription, CoursePhoto, Active, CourseID, IsDisplayinWebsite, UserName,UpdateStatus) {
            var paramObject = {
                "CourseCode": CourseCode, "CourseName": CourseName, "CourseShortDescription": CourseShortDescription, "CourseDetailedDescription": CourseDetailedDescription
                , "CoursePhoto": CoursePhoto, "Active": Active, "CourseID": CourseID, "IsDisplayinWebsite": IsDisplayinWebsite, "UserName": UserName, "UpdateStatus": UpdateStatus            };
            console.log(paramObject)
            return DataAccessService.postData('api/AdminService/UpdateCourses', paramObject);
        };

        this.GetEvents = function () {
            return DataAccessService.getDataAll('api/AdminService/GetEvents');
        };

        this.GetAdminEvents = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminEvents');
        };

        this.GetCourses = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCourses');
        };

        this.GetActiveCourses = function () {
            return DataAccessService.getDataAll('api/AdminService/GetActiveCourses');
        };
        

        this.GetEventsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetEventsById', paramObject);
        };

        this.DeleteEventsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteEventsById', paramObject);
        };



        this.UpdateEvents = function (EventSubject, EventText, EventDate ,Active, Id) {
            var paramObject = { "EventSubject": EventSubject, "EventText": EventText, "EventDate": EventDate, "Active": Active, "Id": Id };
            console.log(paramObject)
            return DataAccessService.postData('api/AdminService/UpdateEvents', paramObject);
        };

        this.AddCorousel = function (SliderImageText, SliderImageFilePath, UserName) {
            var paramObject = { "SliderImageText": SliderImageText, "SliderImageFilePath": SliderImageFilePath, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddCorousel', paramObject);
        };

        this.GetCorousels = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCorousels');
        };

        this.GetAdminCorousels = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminCorousels');
        };
        

        this.GetCorouselsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetCorouselsById', paramObject);
        };

        this.DeleteCorouselsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteCorouselsById', paramObject);
        };



        this.UpdateCorousels = function (SliderImageText, SliderImagePath, Active, Id, ImgUploaded) {
            var paramObject = { "SliderImageText": SliderImageText, "SliderImagePath": SliderImagePath, "Active": Active, "Id": Id, "ImgUploaded": ImgUploaded };
            return DataAccessService.postData('api/AdminService/UpdateCorousels', paramObject);
        };

        this.AddNotifications = function (NotificationText, NotificationFilePath,FileName, NotificationDate, UserName) {
            var paramObject = { "NotificationText": NotificationText, "NotificationFilePath": NotificationFilePath, "FileName": FileName, "NotificationDate": NotificationDate, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddNotifications', paramObject);
        };

        this.GetNotifications = function () {
            return DataAccessService.getDataAll('api/AdminService/GetNotifications');
        };

        this.GetAdminNotifications = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminNotifications');
        };

        this.GetNotificationsById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetNotificationsById', paramObject);
        };

        this.DeleteNotificationById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteNotificationById', paramObject);
        };

        
        this.DeleteNotification = function (Id, FileName) {
            var paramObject = { "Id": Id, "FileName": FileName };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteNotification', paramObject);
        };

        this.UpdateNotifications = function (NotificationText, FileName, NotificationFilePath, NotificationDate, Active, Id, FileUpload, SameFile) {
            var paramObject = {
                "NotificationText": NotificationText, "NotificationFilePath": NotificationFilePath, "NotificationDate": NotificationDate, "Active": Active, "Id": Id,
                "FileUpload": FileUpload, "FileName": FileName, "SameFile": SameFile          };
            return DataAccessService.postData('api/AdminService/UpdateNotifications', paramObject);
        };

        this.AddSyllabus = function (SchemeID, CourseID,SyllabusText, SyllabusFilePath, FileName, SyllabusDate, UserName) {
            var paramObject = { "SchemeID": SchemeID, "CourseID": CourseID, "SyllabusText": SyllabusText, "SyllabusFilePath": SyllabusFilePath, "FileName": FileName, "SyllabusDate": SyllabusDate, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddSyllabus', paramObject);
        };


        this.GetBranchs = function () {
            return DataAccessService.getDataAll('api/AdminService/GetBranchs');
        };

        this.GetAcademicYears = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAcademicYears');
        };
        

        this.GetExamMonthYears = function () {
            return DataAccessService.getDataAll('api/AdminService/GetExamMonthYears');
        };

        this.GetSchemes = function () {
            return DataAccessService.getDataAll('api/AdminService/GetSchemes');
        };


        this.GetSyllabus = function () {
            return DataAccessService.getDataAll('api/AdminService/GetSyllabus');
        };

        this.GetAdminSyllabus = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminSyllabus');
        };

        this.GetSyllabusById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetSyllabusById', paramObject);
        };

        this.DeleteSyllabusById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteSyllabusById', paramObject);
        };

        this.GetFilterSyllabus = function (SchemeId,  BranchId) {
            var paramObject = { "SchemeId": SchemeId, "BranchId": BranchId };
            return DataAccessService.getDataWithPara('api/AdminService/GetFilterSyllabus', paramObject);
        };

        this.UpdateSyllabus = function (SchemeID, CourseID,SyllabusText, SyllabusFilePath, SyllabusDate, Active, Id,FileName,FileUpload) {
            var paramObject = {
                "SchemeID": SchemeID, "CourseID": CourseID, "SyllabusText": SyllabusText, "SyllabusFilePath": SyllabusFilePath, "SyllabusDate": SyllabusDate, "Active": Active, "Id": Id,
                "FileName": FileName, "FileUpload": FileUpload            };
            return DataAccessService.postData('api/AdminService/UpdateSyllabus', paramObject);
        };

        this.GetQuestionPaper = function () {
            return DataAccessService.getDataAll('api/AdminService/GetQuestionPaper');
        };

        this.GetAdminQuestionPaper = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminQuestionPaper');
        };
        
        
        this.GetCollegeTypes = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCollegeTypes');
        };

        this.GetRegions = function () {
            return DataAccessService.getDataAll('api/AdminService/GetRegions');
        };
      

        this.GetQuestionPaperById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetQuestionPaperById', paramObject);
        };

        this.DeleteQuestionPaperById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteQuestionPaperById', paramObject);
        };

        this.GetFilterQuestionPaper = function (SchemeId, BranchId,ExamMonthYearId) {
            var paramObject = { "SchemeId": SchemeId, "BranchId": BranchId,"ExamMonthYearId": ExamMonthYearId};
            return DataAccessService.getDataWithPara('api/AdminService/GetFilterQuestionPaper', paramObject);
        };

        this.UpdateQuestionPaper = function (SchemeID, CourseID, ExaminationSpell, QuestionPaperText, FileName, QuestionPaperFilePath, QuestionPaperDate, Active, Id, FileUpload) {
            var paramObject = { "SchemeID": SchemeID, "CourseID": CourseID, "ExaminationSpell": ExaminationSpell, "QuestionPaperText": QuestionPaperText, "FileName": FileName, "QuestionPaperFilePath": QuestionPaperFilePath, "QuestionPaperDate": QuestionPaperDate, "Active": Active, "Id": Id, "FileUpload": FileUpload };
            return DataAccessService.postData('api/AdminService/UpdateQuestionPaper', paramObject);
        };

        this.DeleteSportsMaster = function (SportID) {
            var paramObject = { "SportID": SportID };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteSportsMaster', paramObject);
        };

        this.AddQuestionPaper = function (SchemeID, CourseID, ExaminationSpell, QuestionPaperText, QuestionPaperFilePath, FileName, QuestionPaperDate, UserName) {
            var paramObject = { "SchemeID": SchemeID, "CourseID": CourseID, "ExaminationSpell": ExaminationSpell ,"QuestionPaperText": QuestionPaperText, "QuestionPaperFilePath": QuestionPaperFilePath, "FileName": FileName, "QuestionPaperDate": QuestionPaperDate, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddQuestionPaper', paramObject);
        };


        this.GetTimeTable = function () {
            return DataAccessService.getDataAll('api/AdminService/GetTimeTable');
        };

        this.GetAdminTimeTable = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAdminTimeTable');
        };

        this.GetAllDistricts = function () {
            return DataAccessService.getDataAll('api/AdminService/GetAllDistricts', );
        };

        this.GetTimeTableById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/GetTimeTableById', paramObject);
        };

        
        this.GetTwshCollegeList = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetTwshCollegeList', paramObject);
        };

        this.GetTwshCoursesList = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetTwshCoursesList', paramObject);
        };
        
        this.GetCCICCollegeList = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCCICCollegeList', paramObject);
        };

        this.GetCCICCoursesList = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCCICCoursesList', paramObject);
        };


        this.DeleteTimeTableById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteTimeTableById', paramObject);
        };

        this.GetFilterTimeTable = function (SchemeId, ExaminationSpell, ExamMonthYearId) {
            var paramObject = { "SchemeId": SchemeId, "ExaminationSpell": ExaminationSpell, "ExamMonthYearId": ExamMonthYearId };
            return DataAccessService.getDataWithPara('api/AdminService/GetFilterTimeTable', paramObject);
        };

        this.UpdateTimeTable = function (SchemeID, ExaminationYear, ExaminationSpell, TimeTableText, TimeTableFilePath, TimeTableDate, Active, Id, FileName, FileUpload) {
            alert(FileUpload)
            console.log(SchemeID, ExaminationYear, ExaminationSpell, TimeTableText, TimeTableFilePath, TimeTableDate, Active, Id, FileName, FileUpload)
            var paramObject = {
                "SchemeID": SchemeID, "ExaminationYear": ExaminationYear, "ExaminationSpell": ExaminationSpell, "TimeTableText": TimeTableText, "TimeTableFilePath": TimeTableFilePath, "TimeTableDate": TimeTableDate, "Active": Active, "Id": Id
                , "FileName": FileName, "FileUpload": FileUpload
            };
            console.log(paramObject)
            return DataAccessService.postData('api/AdminService/UpdateTimeTable', paramObject);
        };

        this.AddTimeTable = function (SchemeID, ExaminationYear, ExaminationSpell, TimeTableText, TimeTableFilePath, FileName, TimeTableDate, UserName) {
            var paramObject = { "SchemeID": SchemeID, "ExaminationYear": ExaminationYear, "ExaminationSpell": ExaminationSpell, "TimeTableText": TimeTableText, "TimeTableFilePath": TimeTableFilePath, "FileName": FileName, "TimeTableDate": TimeTableDate, "UserName": UserName };
            return DataAccessService.postData('api/AdminService/AddTimeTable', paramObject);
        };

        //this.GetDistricts = function (StateID) {
        //    var paramObject = { "StateID": StateID };
        //    return DataAccessService.getDataWithPara('api/AdminService/GetDistricts', paramObject);
        //};

        this.GetDistCoordinatingCenters = function (DistrictID) {
            var paramObject = { "DistrictID": DistrictID };
            return DataAccessService.getDataWithPara('api/AdminService/GetDistCoordinatingCenters', paramObject);
        };

        this.AddDistCoordinatingCentre = function (CentreCode,CentreName,CentreAddress,StateID,DistrictID,UserName) {
            var paramObject = {
                "CentreCode": CentreCode,
                "CentreName": CentreName,
                "CentreAddress": CentreAddress,
                "StateID": StateID,
                "DistrictID": DistrictID,
                //"Active": Active,
                "UserName": UserName
            };
            return DataAccessService.getDataWithPara('api/AdminService/AddDistCoordinatingCentre', paramObject);
        };

        this.GetEditDetails = function (CentreID) {
            var paramObject = { "CentreID": CentreID };
            return DataAccessService.getDataWithPara('api/AdminService/GetEditDetails', paramObject);
        };

        //this.UpdateDistCoorCentres = function (CentreID, CentreCode, CentreName, CentreAddress, StateID, DistrictID, Active, UserName) {
        //    var paramObject = {
        //        "CentreID": CentreID, "CentreCode": CentreCode,
        //        "CentreName": CentreName, "CentreAddress": CentreAddress,
        //        "StateID": StateID, "DistrictID": DistrictID,
        //        "Active": Active, "UserName": UserName
        //    };
        //    return DataAccessService.postData('api/AdminService/UpdateDistCoorCentres', paramObject);
        //};

        this.UpdateDistCoorCentres = function (paramObject) {
           
            return DataAccessService.postData('api/AdminService/UpdateDistCoorCentres', paramObject);
        };

        this.DeleteDiplomaAC = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteDPharmAC = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteHolidays = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteIndustrialTraining = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteNotes = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteUnitTests = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteActivities = function (Obj) {
            return DataAccessService.postData('api/AdminService/DeleteAcademicCalenderSettings', Obj);
        };

        this.DeleteTechFestById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteTechFestById', paramObject);
        };

        this.DeleteTechFestMasterById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteTechFestMasterById', paramObject);
        };

        this.DeleteFDPCalenderById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteFDPCalenderById', paramObject);
        };

        this.DeleteFDPTrainingById = function (Id) {
            var paramObject = { "Id": Id };
            return DataAccessService.getDataWithPara('api/AdminService/DeleteFDPTrainingById', paramObject);
        };


        this.GetColleges = function () {
            return DataAccessService.getDataAll('api/AdminService/GetColleges');
        };


        this.GetCourses = function () {
            return DataAccessService.getDataAll('api/AdminService/GetCourses');
        };

        this.GetWebsiteCounts = function () {
            return DataAccessService.getDataAll('api/AdminService/GetWebsiteCounts');
        };

        this.GetCoursesById = function (CollegeID, CourseID) {
            var paramObject = { "CollegeID": CollegeID, "CourseID": CourseID };
            return DataAccessService.getDataWithPara('api/AdminService/GetCoursesById', paramObject);
        };
        this.GetCollegeWiseCourses = function (UserName) {
            var paramObject = { "UserName": UserName };
            return DataAccessService.getDataWithPara('api/AdminService/GetCoursesByUserName', paramObject);
        };


        this.AddCollegewiseCourses = function (DataType, CollegeWiseCourseID, CollegeID, CourseID, Intake, NBA, Active, UserName) {
            var paramObject = {
                "DataType": DataType,
                "CollegeWiseCourseID": CollegeWiseCourseID,
                "CollegeID": CollegeID,
                "CourseID": CourseID,
                "Intake": Intake,
                "NBA": NBA,
                "Active": Active,
                "UserName": UserName
            };
            return DataAccessService.postData('api/AdminService/AddorUpdateCollegewiseCourses', paramObject);
        };

        this.UpdateCollegewiseCourses = function (DataType, CollegeWiseCourseID, CollegeID, CourseID, Intake, NBA, Active, UserName) {
            var paramObject = {
                "DataType": DataType,
                "CollegeWiseCourseID": CollegeWiseCourseID,
                "CollegeID": CollegeID,
                "CourseID": CourseID,
                "Intake": Intake,
                "NBA": NBA,
                "Active": Active,
                "UserName": UserName
            };
            return DataAccessService.postData('api/AdminService/AddorUpdateCollegewiseCourses', paramObject);
        };

        this.GetCounts = function (Obj) {
            return DataAccessService.postData('api/AdminService/GetorEditCounts', Obj);
        };

        this.GetCountsById = function (Obj) {
            return DataAccessService.postData('api/AdminService/GetorEditCounts', Obj);
        };

        this.AddCount = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddorUpdateCount', Obj);
        };

        this.UpdateCount = function (Obj) {
            return DataAccessService.postData('api/AdminService/AddorUpdateCount', Obj);
        };

        this.DeleteCount = function (Obj) {
            return DataAccessService.postData('api/AdminService/GetorEditCounts', Obj);
        };

    })
})