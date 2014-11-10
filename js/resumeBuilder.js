
var name = name;
var role = "Educator";
var formattedname = HTMLheaderName.replace("%data%",name);
var formattedrole = HTMLheaderRole.replace("%data%",role);
var HTMLbioPic = "<img src='%data%' class='biopic'>";
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
var bio = {
	"name":"Nathan Bateman",
	"role":"Business Teacher",
	"contactinfo":"nathan.bateman.jr@gmail.com",
	"welcomemessage":"Greetings! Checkout my working resume.",
	"picture":"images/nathan.jpg",
	"skills":["Adobe Creative Cloud","Instructional Design","HTML","CSS","Curriculum Design","Technology Integration"],
};
var formattedbioPic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").prepend(formattedbioPic);
var formattedcontactinfo = HTMLemail.replace("%data%",bio.contactinfo);
$("#header").append(formattedcontactinfo);
var formattedwelcomemessage = HTMLWelcomeMsg.replace("%data%",bio.welcomemessage);
$("#header").append(formattedwelcomemessage);
var formattedskills = HTMLskills.replace("%data%",bio.skills);

//$("#header").prepend(role);
//$("#main").prepend(bio.contact info);
//$("#main").append(bio.welcome message);
//$("#main").append(bio.picture url);
//$("#main").append(bio.skills);