var t_skills = [
	{
		name: "Java", 
		years: "3  1/2",
		width: "90"
	}, 
	{
		name: "JavaScript",
		years: "3",
		width: "85"
	},
	{
		name: "Node.js",
		years: "2  1/2",
		width: "80"
	}, 
	{
		name: "Python",
		years: "2",
		width: "75"
	}, 
	{
		name: "C++",
		years: "1 1/2",
		width: "70"
	}, 
	{
		name: "Assembly",
		years: "1/2",
		width: "50"
	}, 
	{
		name: "C#",
		years: "1",
		width: "60"
	},
	{
		name: "Angular.js",
		years: "1/4",
		width: "40"
	},
	{
		name: "Ember.js",
		years: "1",
		width: "60"
	}, 
	{
		name: "Unity3D",
		years: "1/4",
		width: "40"
	}, 
	{
		name: "HTML",
		years: "2 1/2",
		width: "80"
	},
	{
		name: "CSS",
		years: "2",
		width: "75"
	}
];

var p_skills = [
	{
		name: "Agile (SCRUM)", 
		years: "1 1/4",
		width: "65"
	}, 
	{
		name: "Linux OS",
		years: "1",
		width: "60"
	},
	{
		name: "Relational databases",
		years: "2",
		width: "75"
	}, 
	{
		name: "Non-relational databases",
		years: "1  1/2",
		width: "70"
	}, 
	{
		name: "Data structures",
		years: "3",
		width: "85"
	}, 
	{
		name: "Design patterns",
		years: "2",
		width: "75"
	}, 
	{
		name: "Git",
		years: "3",
		width: "85"
	},
	{
		name: "API Integration",
		years: "1 1/2",
		width: "70"
	}	
]; 

var SORT_TYPE = {
	A_Z: 0,
	Z_A: 1,
	Z_N: 2,
	N_Z: 3
};

$(document).ready(function() {
	$("#search-input").focus();
	t_skills = sort(SORT_TYPE.N_Z, t_skills);
	p_skills = sort(SORT_TYPE.N_Z, p_skills);
	redraw(true);
});

function redraw(delay) {
	$("#technicalSkillsGrid").empty();
	$("#personalSkillsGrid").empty();

	var searchValue = $("#search-input").val();
	var useSearchValue = (searchValue != null || searchValue != "") ? true : false;

	for (var i = 0; i < t_skills.length; i++) {
		var id="pb-" + t_skills[i].name;
		var width = delay ? 0 : t_skills[i].width;
		if (useSearchValue && t_skills[i].name.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
			$("#technicalSkillsGrid").append("<div class='row'><div class='four wide column'>" 
			+ t_skills[i].name 
			+ "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div id='"
			+ id 
			+ "' class='w3-progressbar w3-round' style='width:" 
			+ width
			+ "%; background-color: darkblue; opacity: 0.9;'><div class='w3-center w3-text-white'>" 
			+ t_skills[i].years 
			+ "  years</div></div></div></div></div>");
		} else if (!useSearchValue) {
			$("#technicalSkillsGrid").append("<div class='row'><div class='four wide column'>" 
			+ t_skills[i].name 
			+ "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div id='"
			+ id 
			+ "' class='w3-progressbar w3-round' style='width:" 
			+ width
			+ "%; background-color: darkblue; opacity: 0.9;'><div class='w3-center w3-text-white'>" 
			+ t_skills[i].years 
			+ "  years</div></div></div></div></div>");
		}

		if (delay) {
			setTimeout(startMove.bind(this, id, t_skills[i].width), 1000);
		}
	}
	for (var j = 0; j < p_skills.length; j++) {
		var id = "pb-" + p_skills[j].name + "2";
		var width = delay ? 0 : p_skills[j].width;
		if (useSearchValue && p_skills[j].name.toUpperCase().indexOf(searchValue.toUpperCase()) >-1) {
			$("#personalSkillsGrid").append("<div class='row'><div class='four wide column'>" 
			+ p_skills[j].name 
			+ "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div id='"  
			+ id 
			+ "' class='w3-progressbar w3-round' style='width:" 
			+ width
			+ "%; background-color: green; opacity: 0.9;'><div class='w3-center w3-text-white'>" 
			+ p_skills[j].years 
			+ "  years</div></div></div></div></div>");
		} else if (!useSearchValue) {
			$("#personalSkillsGrid").append("<div class='row'><div class='four wide column'>" 
			+ p_skills[j].name 
			+ "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div id='"  
			+ id 
			+ "' class='w3-progressbar w3-round' style='width:" 
			+ width
			+ "%; background-color: green; opacity: 0.9;'><div class='w3-center w3-text-white'>" 
			+ p_skills[j].years 
			+ "  years</div></div></div></div></div>");
		}
		

		if (delay) {
			setTimeout(startMove.bind(this, id, p_skills[j].width), 1000);
		}
	}
}

function startMove(id, width) {
	var elem = document.getElementById(id); 
    var start = 0;

    var interval = setInterval(frame, 10);
    function frame() {
        if (start >= width) {
            clearInterval(interval);
        } else {
            start++; 
            elem.style.width = start + '%'; 
        }
    }
}


$("#search-input").keyup(function(ev) {
	$("#technicalSkillsGrid").empty();
	$("#personalSkillsGrid").empty();
	var value = $("#search-input").val();
	for (var i = 0; i < t_skills.length; i++) {
		if (t_skills[i].name.toUpperCase().indexOf(value.toUpperCase()) > -1) {
			$("#technicalSkillsGrid").append("<div class='row'><div class='four wide column'>" + t_skills[i].name + "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div class='w3-progressbar w3-round' style='width:" + t_skills[i].width + "%; background-color: darkblue; opacity: 0.9;'><div class='w3-center w3-text-white'>" + t_skills[i].years + "  years</div></div></div></div></div>")
		}
	}
	for (var j = 0; j < p_skills.length; j++) {
		if (p_skills[j].name.toUpperCase().indexOf(value.toUpperCase()) >-1) {
			$("#personalSkillsGrid").append("<div class='row'><div class='four wide column'>" + p_skills[j].name + "</div><div class='twelve wide column'><div class='w3-progress-container white-bg'><div class='w3-progressbar w3-round' style='width:" + p_skills[j].width + "%; background-color: green; opacity: 0.9;'><div class='w3-center w3-text-white'>" + p_skills[j].years + "  years</div></div></div></div></div>");	
		}
	}
});

$("#sort-ZA").click(function() {
	editSelectedSortIcon($(this));
	t_skills = sort(SORT_TYPE.Z_A, t_skills);
	p_skills = sort(SORT_TYPE.Z_A, p_skills);
	redraw(false);
});

$("#sort-AZ").click(function() {
	editSelectedSortIcon($(this));
	t_skills = sort(SORT_TYPE.A_Z, t_skills);
	p_skills = sort(SORT_TYPE.A_Z, p_skills);
	redraw(false);
});

$("#sort-09").click(function() {
	editSelectedSortIcon($(this));
	t_skills = sort(SORT_TYPE.Z_N, t_skills);
	p_skills = sort(SORT_TYPE.Z_N, p_skills);
	redraw(false);
});

$("#sort-90").click(function() {
	editSelectedSortIcon($(this));
	t_skills = sort(SORT_TYPE.N_Z, t_skills);
	p_skills = sort(SORT_TYPE.N_Z, p_skills);
	redraw(false);
});

function editSelectedSortIcon(el) {
	$("i.inverted").removeClass("inverted");
	el.addClass("inverted");
}

function sort(sortType, array) {
	var sortedArray = array;
	switch (sortType) {

		case 0: 
			// Sort A-Z
			sortedArray.sort(function(a, b) {
				if(a.name < b.name) return -1;
    			if(a.name > b.name) return 1;
    			return 0;
			});
			break;

		case 1: 
			// Sort Z-A
			sortedArray.sort(function(a, b) {
				if(a.name < b.name) return -1;
    			if(a.name > b.name) return 1;
    			return 0;
			});
			sortedArray.reverse();
			break;

		case 2: 
			// Sort 0-9
			sortedArray.sort(function(a, b) {
				return parseInt(a.width) - parseInt(b.width);	
			});
			break;
		case 3: 
			// Sort 9-0
			sortedArray.sort(function(a, b) {
				return parseInt(a.width) - parseInt(b.width);	
			});			
			sortedArray.reverse();
			break;

		default:
			break;
	}

	return sortedArray;
}
