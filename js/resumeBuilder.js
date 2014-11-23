
var name = "Nathan Bateman";
var role = "Educator";
var pic = "images/nathan.jpg";
var formattedname = HTMLheaderName.replace("%data%",name);
var formattedrole = HTMLheaderRole.replace("%data%",role);
var formattedPic = HTMLbioPic.replace("%data%",pic);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
$("#header").append(formattedPic);
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
            "graduation": "2008",
            "certification": "HS Computer/Business, MS Math/Reading",
            "city": "Valdosta, GA"
        },
        {
            "name": "Boise State University",
            "courses": [
                "Introduction to Educational Technology",
                "The Internet For Educators",
                "Instructional Design",
                "Theoretical Foundations of Learning Environments"
            ],
            "city": "Boise, ID"
        },
        {
            "name": "Udacity",
            "courses": [
                "Intro to HTML/CSS",
                "JavaScript Basics",
                "Intro to Computer Science,"
            ]
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Editing CSS Templates",
            "images": ["images/edtech.jpg"],
            "dates": "2012",
            "description": "Created lots of HTML/CSS projects in my EDTECH 502 class."
        },
        {
            "title": "Intro to HTML/CSS",
            "images": ["images/udacityp1.jpg"],
            "dates": "2014",
            "description": "Project 1 for Udacity nano degree."
        }
    ]
}

var bio = {
    "name": "Nathan Bateman",
    "role": "Business Teacher",
    "welcomemessage": "Greetings! Checkout my working resume.",
    "contacts": {
        "email": "email@gmail.com",
        "mobile": "5551212",
        "github": "Nathan-Bateman",
        "skype": "nbateman1",
        "location": "Bangkok, Thailand"
    },
    "picture": "images/nathan.jpg",
    "skills": [
        " Instructional Design",
        " Curriculum Design",
        " Technology Integration",
        " Adobe Creative Cloud",
        " HTML/CSS"
    ]
}

projects.display = function(){
//function displayProjects(){
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
//displayProjects();
function displayHeader(){
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
displayHeader();
function displayWork(){
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
displayWork();

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