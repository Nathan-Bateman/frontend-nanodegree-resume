
var name = name;
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
            "dates worked": "2008-2015",
            "description": "Teaching Adobe Suite, Web Design, Marketing/Business, Subject Area Curriculum Team Chair"
        },
        {
            "employer": "Tillman Homes",
            "title": "Contractor's Assistant",
            "location": "Valdosta, GA",
            "dates worked": "2004-2005, 2006-2007",
            "description": "Helped oversee and prep sites for new homes.Requested city permits, Communicated and resolved issues with home owners and sub-contractors."
        },
        {
            "employer": "Liberty Place",
            "title": "Care Giver",
            "location": "Whitehall, MT",
            "dates worked": "2005",
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
            "images": ["edtech.jpg"],
            "dates worked": "2012",
            "description": "Created lots of HTML/CSS projects in my EDTECH 502 class."
        },
        {
            "title": "Intro to HTML/CSS",
            "images": ["project1.jpg"],
            "dates worked": "2014",
            "description": "Project 1 for Udacity nano degree."
        },
        {
            "employer": "Liberty Place",
            "title": "Care Giver",
            "location": "Whitehall, MT",
            "dates worked": "2005",
            "description": "Personal care giver for residents with traumatic brain injuries.Prepared meals, gave showers, administered medication, and helped residents with various life skills."
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

for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedemployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedjobtitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedemployertitle = formattedemployer + formattedjobtitle;
		$(".work-entry:last").append(formattedemployertitle);
	};
