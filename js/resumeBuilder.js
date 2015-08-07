
var name = "Nathan Bateman";
var role = "Front-End Web Developer";
var pic = "images/nathan.jpg";
var email = 'nathan.bateman.jr@gmail.com';
var git = 'Nathan-Bateman';
var phone = '229-638-0708';
var locale = 'Kansas City, MO';
var git = 'Nathan-Bateman';
var formattedname = HTMLheaderName.replace("%data%",name);
var formattedrole = HTMLheaderRole.replace("%data%",role);
var formattedPic = HTMLbioPic.replace("%data%",pic);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
$("#header").append(formattedPic);
$("#footerContacts").append(HTMLfooterContact);
var work = {
    "jobs": [
        {
            "employer": "International Community School",
            "title": "Business/Computer Teacher",
            "location": "Bangkok, Thailand",
            "datesworked": "2008-2015",
            "description": "Teaching Adobe Suite, Web Design, Marketing/Business, Subject Area Curriculum Team Chair"
        },
        {
            "employer": "Tillman Homes",
            "title": "Contractor's Assistant",
            "location": "Valdosta, GA",
            "datesworked": "2004-2005, 2006-2007",
            "description": "Helped oversee and prep sites for new homes.Requested city permits, Communicated and resolved issues with home owners and sub-contractors."
        },
        {
            "employer": "Liberty Place",
            "title": "Care Giver",
            "location": "Whitehall, MT",
            "datesworked": "2005",
            "description": "Personal care giver for residents with traumatic brain injuries.Prepared meals, gave showers, administered medication, and helped residents with various life skills."
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Valdosta State University",
            "major": "B.S. Business Education",
            "dates": "2003 - 2008",
            "certification": "HS Computer/Business, MS Math/Reading",
            "location": "Valdosta, GA"
        },
        {
            "name": "Boise State University",
            "dates": "2011 - 2012",
            "courses": [
                "Introduction to Educational Technology",
                " The Internet For Educators",
                " Instructional Design",
                " Theoretical Foundations of Learning Environments "
            ],
            "location": ""
        },
        {
            "name": "Udacity",
            "dates": "2014 - 2015",
            "courses": [
                "JavaScript Design Patterns",
                "Intro to AJAX",
                "Object Oriented JavaScript",
                "Website Optimization",
                "JavaScript Testing",
                "HTML5 Canvas",
                "Intro to HTML/CSS",
                " JavaScript Basics",
                " Intro to Computer Science"
            ]
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Neighborhood Map",
            "images": [""],
            "dates": "June - July 2015",
            "description": "<li>Ground-up production of a neighborhood map</li>" +
                            "<li>Utilizes the Google Maps API as well as one additional API (Foursquare was my choice)</li>" + 
                            "<li>Implements Knockout.js to take advantage of observables and the MVVM design pattern" + 
                            "<li>Demonstrates use of responsive design and JavaScript/CSS libraries (jQuery/Bootstrap)</li>"
        },
        {
            "title": "Frogger Clone",
            "images": [""],
            "dates": "December 2014",
            "description": '<li>Uses object oriented concepts to re-create the classic video game <i>Frogger</i></li>' +
                            '<li>Created objects and then instantiated objects adding various methods</li>' +
                            '<li>Game engine and sprites were provided</li>'
        },
        {
            "title": "Website Optimization",
            "images": [""],
            "dates": "February 2015",
            "description": '<li>Eliminates render and parser blocking scripts to optimize site for mobile devices</li>' +
                            '<li>Edited code to eliminate redundant iterations </li>' +
                            '<li>Utilized css translate to get more power from the GPU in order to reach a speed of 60 fps</li>'
        },
        {
            "title": "Feedreader Testing",
            "images": [""],
            "dates": "July 2015",
            "description": '<li>Wrote tests to assure proper functionality of an existing application </li>' +
                            '<li>Created testing suites using the Jasmine testing framework</li>'
        }
    ]
}

var bio = {
    "name": "Nathan Bateman",
    "role": "Business Teacher",
    "welcomemessage": "Greetings! Checkout my working resume.",
    "contacts": {
        "email": "nathan.bateman.jr@gmail.com",
        "mobile": "(913) 738-4246",
        "github": "Nathan-Bateman",
        "skype": "nbateman1",
        "location": "Kansas City, MO"
    },
    "picture": "images/nathan.jpg",
    "skills": [
        " HTML/CSS/JavaScript",
        " JQuery/Knockout/Bootstrap",
        " Ajax/Responsive Design",
        " Adobe Creative Cloud",
        " Website Optimization"
    ]
}
education.display = function(){
    for(school in education.schools){
      
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:first").append(formattedSchoolName);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:first").append(formattedSchoolDates);

        if( 'major' in education.schools[school]){
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].major);
        $(".education-entry:first").append(formattedSchoolDegree);
        }

        if( 'courses' in education.schools[school]){
        var formattedCourses = HTMLcourses.replace("%data%",education.schools[school].courses);
        $(".education-entry:first").append(formattedCourses);
        }

        if('city' in education.schools[school]){
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].city);
            $(".education-entry:first").append(formattedSchoolLocation);
        }
    }
}
education.display();
projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedprojecttitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedprojecttitle);
        var formattedprojectdates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedprojectdates);
        var formattedprojectdescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectdescription);
        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedprojectimage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedprojectimage);
            }
        }  
    }
};
projects.display();
bio.display = function(){
for (contact in bio.contacts) {

if (contact === 'email') {
    var formattedContact =  HTMLemail.replace('%data%',bio.contacts[contact]);
   $("#header").append(formattedContact);

} else if (contact === 'mobile') {
    var formattedContact =  HTMLmobile.replace('%data%',bio.contacts[contact]);
   $("#header").append(formattedContact);

} else if (contact === 'github') {
    var formattedContact =  HTMLgithub.replace('%data%',bio.contacts[contact]);
   $("#header").append(formattedContact);

} else if (contact === 'location') {
    var formattedContact =  HTMLlocation.replace('%data%',bio.contacts[contact]);
   $("#header").append(formattedContact);
}
}

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedskills);
	formattedskills = HTMLskills.replace("%data%",bio.skills[5]);
}

};
bio.display();
work.display = function(){
for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedjobtitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedemployertitle = formattedemployer + formattedjobtitle;
        $(".work-entry:last").append(formattedemployertitle);
        var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedlocation);
        var formatteddates = HTMLworkDates.replace("%data%",work.jobs[job].datesworked);
        $(".work-entry:last").append(formatteddates);
        var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formatteddescription);

	}
};
work.display();
//click counter is here 
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);
var oldName = bio.name;
function inName() {
    var finalName = oldName;
    var n = oldName.indexOf(" ");
    var firstname = oldName.substring(0,n);
    var changefirst = firstname.slice(0,1).toUpperCase();
    var firstname = changefirst + firstname.slice(1).toLowerCase();
    var lastname = oldName.substring(n);
    var lastname = lastname.toUpperCase();
    var finalName = firstname + lastname;
    return finalName;

};
$("#mapDiv").append(googleMap);






