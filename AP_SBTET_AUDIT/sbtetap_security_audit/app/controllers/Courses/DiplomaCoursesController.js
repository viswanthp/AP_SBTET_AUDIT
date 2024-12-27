define(['app'], function (app) {
    app.controller("DiplomaCoursesController", function ($scope, $state, AdminService, $filter, $localStorage) {
        const $ctrl = this;
        $ctrl.$onInit = () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            $scope.GetCourses()
        }

        $scope.GetCourses = function () {
            $scope.Loading = true;
            var GetCourses = AdminService.GetActiveCourses();
            GetCourses.then(function (response) {
                try {
                    $scope.Loading = false;
                    var res = JSON.parse(response);
                }
                catch (err) {
                    $scope.Loading = false;
                }
                $scope.GetCoursesList = res.Table;

            },
                function (error) {
                    $scope.Loading = false;
                    alert("error while loading Slides");
                    var err = JSON.parse(error);
                    var err = JSON.parse(error);

                });
        }

        $scope.Courses = [
            {
                "Course_Name": "AUTOMOBILE ENGINEERING",
                "Course_Description": "Automobile engineering is a branch study of engineering which teaches manufacturing, designing, mechanical mechanisms as well as operations of automobiles.",
                "src": "/CourseImages/Automobile.jpg"
            },
            {
                "Course_Name": "ARCHITECTURAL ASSISTANTSHIP",
                "Course_Description": "The Diploma in Architectural Assistantship programme was created with the fundamentals of civil engineering, architecture and interior design in mind.",
                "src": "/CourseImages/Architectural.jpg"
            },
            {
                "Course_Name": "CIVIL ENGINEERING",
                "Course_Description": "Diploma in Civil Engineering is a course for students to plan, design, execute and maintain structural works like bridges, buildings, roads and other infrastructural projects."
                , "src": "/CourseImages/Civil.jpg"
            },
            {
                "Course_Name": "CHEMICAL ENGINEERING",
                "Course_Description": "Chemical engineering is an engineering field which deals with the study of operation and design of chemical plants as well as methods of improving production."
                , "src": "/CourseImages/Cheical.jpg"
            },
            {
                "Course_Name": "COMPUTER ENGINEERING",
                "Course_Description": "Computer engineering is defined as the discipline that embodies the science and technology of design, construction, implementation, and maintenance of software and hardware components."
                , "src": "/CourseImages/Computers.jpg"
            },
            {
                "Course_Name": "ELECTRONICS & COMMUNICATION ENGINEERING",
                "Course_Description": "Electronics and Communications Engineering involves researching, designing, developing, and testing of electronic equipment used in various systems."
                , "src": "/CourseImages/Electronics.jpg"
            },
            {
                "Course_Name": "ELECTRICAL & ELECTRONICS ENGINEERING",
                "Course_Description": "Electrical engineering is the branch dealing with “heavy current” that is, electric light and power systems and whereas electronics engineering deals with such “light current” applications."
                , "src": "/CourseImages/Electrical.jpg"
            },
            {
                "Course_Name": "INFORMATION TECHNOLOGY",
                "Course_Description": "This engineering field utilizes computers, networks, storage, and other technological infrastructure, both software & hardware, to deal with and use information/data."
                , "src": "/CourseImages/InformationTechnology.jpg"
            },
            {
                "Course_Name": "MECHANICAL ENGINEERING",
                "Course_Description": "Mechanical engineering is the study of physical machines that may involve force and movement. It is an engineering branch to design, analyze, manufacture, and maintain mechanical systems."
                , "src": "/CourseImages/Mechanical.jpg"
            },
            {
                "Course_Name": "METALLURGICAL ENGINEERING",
                "Course_Description": "Metallurgical engineering is the study of metals and how metals can be safely transformed into products that benefit humanity such as surgical implants, computer chips, and more."
                , "src": "/CourseImages/Metallurgical.jpg"
            },
            {
                "Course_Name": "MINING ENGINEERING",
                "Course_Description": "Diploma in Mining Engineering is a course that involves the science and technology of processing and extracting minerals."
                , "src": "/CourseImages/Mining.jpg"
            },
            {
                "Course_Name": "PHARMACY",
                "Course_Description": "Diploma in Pharmacy covers fundamental Pharmacy Education including the application of chemistry in the pharma industry, theoretical & practical concepts of biochemistry."
                , "src": "/CourseImages/Pharmacy.jpg"
            }
        ]


        $scope.OpenPage = function (image, Title, DetailedDescription, CourseID) {
            $localStorage.CourseData = {
                "image": image,
                "Title": Title,
                "DetailedDescription": DetailedDescription,
                "Id": CourseID
            }
            $state.go('index.CourseDetails')
        }

     


    })
})