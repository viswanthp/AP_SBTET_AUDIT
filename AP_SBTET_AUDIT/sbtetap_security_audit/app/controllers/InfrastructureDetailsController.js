define(['app'], function (app) {
    app.controller("InfrastructureDetailsController", function ($scope, $state, AdminService, $filter, $localStorage) {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        $scope.Courses = [
            {
                "Course_Name": "Digital Class Rooms",
                "Course_Description": "Digital Classroom brings technology into the classroom the real world and helps to learn to become alive and real in time.",
                "src": "/contents/images/infracture/DigitalClassRoom.png",
                "uisref":"index.DigitalClassRooms"
            },
            {
                "Course_Name": "Virtual Class Rooms",
                "Course_Description": "Virtual classrooms are online learning environments that simulate traditional classrooms in a digital format. They provide a platform for remote teaching and learning, enabling students and teachers to interact and collaborate in real-time regardless of their physical locations.",
                "src": "/contents/images/infracture/VirtualClassroom.png",
                "uisref": "index.VirtualClassRooms"
            },
            {
                "Course_Name": "Labs",
                "Course_Description": "Labs in Diploma colleges are specialized facilities where students can engage in hands-onlearning and practical application of knowledge in various fields of study."
                , "src": "/contents/images/infracture/Lab.png",
                "uisref": "index.Labs"
            },
            {
                "Course_Name": "Industry Interaction",
                "Course_Description": "Industry interaction refers to the collaboration and engagement between Diploma Colleges , and various industries or businesses. It involves establishing and maintaining connections, partnerships, and activities that bridge the gap between academia and the professional world."
                , "src": "/contents/images/infracture/IndustryInteraction.png",
                "uisref": "index.IndustryInteraction"
            },
            {
                "Course_Name": "Industrial Training",
                "Course_Description": "Industrial training, , refers to a period of practical work experience that students or individuals undertake in an industrial or professional setting related to their field of study or career aspirations. As a part of Diploma course 6 months Industrial Training is Mandatory which helps in building professional career."
                , "src": "/contents/images/infracture/IndustrialTraining.png",
                "uisref": "index.IndustrialTraining"
            },
            {
                "Course_Name": "Industry Connect",
                "Course_Description": "Collaboration with Industries allows polytechnics to facilitate internships,  apprenticeships, and placement opportunities for students. "
                , "src": "/contents/images/infracture/Industryconnect.jpg",
                "uisref": "index.IndustryConnect"
            },
            {
                "Course_Name": "Journal",
                "Course_Description": "Journals, are periodical publications that serve as a primary source of scholarly information and research in various Diploma  disciplines. They are typically published on a regular basis, Half yearly ,  and contain articles."
                , "src": "/contents/images/infracture/Journal.png",
                "uisref": "index.Journal"
            },
            {
                "Course_Name": "LMS (Learning Management System)",
                "Course_Description": "Learning management system (LMS) is a software application or web-based technology used to plan, implement and assess a specific learning process."
                , "src": "/contents/images/infracture/LMS.png",
                "uisref": "index.LMS"
            },
            {
                "Course_Name": "IPSGM",
                "Course_Description": "The Department of Technical Education recognizes and understands the crucial importance of sports and games in the students’ life."
                , "src": "/contents/images/infracture/IPSGM.png",
                "uisref": "index.IPSGM"
            },
            {
                "Course_Name": "TECH Fest",
                "Course_Description": "In consonance with the vision of ‘Make in India’ initiative and in line with the vision of the Government to empower the students with a scientific temperament and innovative spirit to address societal problems  a  platform  with the name TECHFEST is designed."
                , "src": "/contents/images/infracture/TECHFEST.png",
                "uisref": "index.TechFest"
            },
           
            {
                "Course_Name": "FDP (Faculty Development Program)",
                "Course_Description": "A faculty development program refers to arrange of initiatives, activities, and opportunities designed to support and enhance the professional growth and development of faculty members in POLYTECHNICS."
                , "src": "/contents/images/infracture/FDP.png",
                "uisref": "index.FDP"
            },
            {
                "Course_Name": "Academic Calendar",
                "Course_Description": "Academic calendars are schedules or calendars that outline the important dates, events, and milestones within an academic year or semester in Polytechnics across the state of Andhra Pradesh to show the starting and ending time periods of various activities like  Class work, Examinations and other extracurricular activities."
                , "src": "/contents/images/infracture/AcademicCalander.png",
                "uisref": "index.AcademicYear"
            }
           
        ]


        $scope.OpenPage = function (image, Title) {
            $localStorage.CourseData = {
                "image": image,
                "Title": Title,
            }
            $state.go('index.CourseDetails')
        }




    })
})