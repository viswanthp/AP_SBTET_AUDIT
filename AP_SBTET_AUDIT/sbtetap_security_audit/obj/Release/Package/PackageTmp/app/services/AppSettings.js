﻿define(['app'], function (app) {
    app.service('AppSettings', function () {
        return {

            //  WebApiUrl: 'https://sbtet.telangana.gov.in',
            WebApiUrl: '/',
            // WebApiUrl: 'http://sbptest.hebeon.com/API/',
            SMSApiUrl: 'https://api.smscountry.com/SMSCwebservice_bulk.aspx',
            ExportToExcelUrl: '',
            ExportToWordUrl: '',
            ExportToPdfUrl: '',
            LoggedUserId: 0,
            UserRights: [],
            CompanyId: 0,
            CompanyName: 'State Board of Technical Education and Training, AP',
            CollegeID: 0,
            AcdYrID: 0,
            applicationno: "",
            PrevAdmNo: 0,
            StudentApprovalData: [],
            YrName: 2019,
            CollegeCatName: '',
            college_name1: '',
            MngtTypID: 0,
            ExamInstID: 0,
            SysUsrGrpID: 0,
            SeqNo: 0,
            Semid: '',
            AcademicYear: '',
            AcademicId: '',
            Scheme: '',
            DistrictIDs: '',
            College_Code: '',
            College_Name: '',
            BranchCode: '',
            //PaymentUrl: 'http://202.62.85.194:82/frmPaymentService',
            PaymentUrl: 'http://localhost:25490/frmPaymentService',
            QRString: 'http://192.168.1.98/#!/StudentOnlineRequest/VerifySign/',
            DigiSign: 'http://192.168.1.98:84/sign/Index?PDFFileName=',
            NRApproval: 'http://localhost:53254/sign/Index1?prnno=',
            PreZoneDigiSign: 'http://localhost:53254/sign/PreZone?',
            LoadingImage: '../../../contents/img/loading2.gif',
            QPpwd: 'TSBIE@321',
            QPUname: 'admin',
            QPEnPwd: '123456'
        };
    });
});
