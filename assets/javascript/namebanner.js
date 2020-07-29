
var count = 0;

$(window).on('load', function () {
	if (localStorage.charClass != null) {
		var name = localStorage.getItem('charName');
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		$('#characterName').text(name);
		$('#gender').text(gender);
		$('#race').text(race);
		$('#class').text(classDisplay);
	} else {
		generateName();
	}
});


function generateName() {
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';


      var gender = localStorage.getItem("charGender");
      var race = localStorage.getItem("charRace");
      var classDisplay = localStorage.getItem("charClass");

      $("#gender").text(gender);
      $("#race").text(race);
      $("#class").text(classDisplay);

    }
  });


  
//   var gender = localStorage.getItem("charGender");
//   var race = localStorage.getItem("charRace");
//   var classDisplay = localStorage.getItem("charClass");
 

//   var mhf = ["images-male/human-fighter-1.jpg", "images-male/human-fighter-2.jpg", "images-male/human-fighter-3.jpg"];
//   var mhra = ["images-male/human-ranger-1.jpg", "images-male/human-ranger-2.jpg", "images-male/human-ranger-3.jpg"];
//   var mhm = ["images-male/human-mage-1.jpg", "images-male/human-mage-2.jpg", "images-male/human-mage-3.jpg"];
//   var mhc = ["images-male/human-cleric-1.jpg", "images-male/human-cleric-2.jpg", "images-male/human-cleric-3.jpg"];
//   var mhro = ["images-male/human-rogue-1.jpg", "images-male/human-rogue-2.jpg", "images-male/human-rogue-3.jpg"];
//   var fhf = ["images-female/human-fighter-1.jpg", "images-female/human-fighter-2.jpg", "images-female/human-fighter-3.jpg"];
//   var fhra = ["images-female/human-ranger-1.jpg", "images-female/human-ranger-2.jpg", "images-female/human-ranger-3.jpg"];
//   var fhm = ["images-female/human-mage-1.jpg", "images-female/human-mage-2.jpg", "images-female/human-mage-3.jpg"];
//   var fhc = ["images-female/human-cleric-1.jpg", "images-female/human-cleric-2.jpg", "images-female/human-cleric-3.jpg"];
//   var fhro = ["images-female/human-rogue-1.jpg", "images-female/human-rogue-2.jpg", "images-female/human-rogue-3.jpg"];
//   var result = document.getElementById("centerVidImg");
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max-min) + min);
// }

// function humanImage() {
//   console.log("I'm in the human image function - lolololol");
//   if (gender === "Male" && race === "Human" && classDisplay === "Fighter") {
//     result.src = mhf[randomNumber(0,3)];
//   } else if (gender === "Male" && race === "Human" && classDisplay === "Ranger") {
//     result.src = mhra[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Male" && race === "Human" && classDisplay === "Wizard") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = mhm[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Male" && race === "Human" && classDisplay === "Cleric") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = mhc[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Male" && race === "Human" && classDisplay === "Rogue") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = mhro[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Female" && race === "Human" && classDisplay === "Fighter") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     } 
//     result.src = fhf[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Female" && race === "Human" && classDisplay === "Ranger") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = fhra[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Female" && race === "Human" && classDisplay === "Wizard") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = fhm[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Female" && race === "Human" && classDisplay === "Cleric") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = fhc[Math.floor(random(1, 3)) - 1];
//   } else if (gender === "Female" && race === "Human" && classDisplay === "Rogue") {
//     function random(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//     result.src = fhro[Math.floor(random(1, 3)) - 1];
//   }
  
// };
//   humanImage();

  



  function editName() {
    $("#characterName").attr("contenteditable", "true");

    var saveButton = $("<button>");
    $(saveButton).text("Save");
    $(saveButton).attr("id", "saveBtn");
    $(saveButton).attr("type", "button");
    $(saveButton).addClass("button");
    $("#characterName").append(saveButton);

    $("#saveBtn").click(function () {
      $("#characterName").attr("contenteditable", "false");
      $("#saveBtn").remove();
    });
  };

  $("#characterName").dblclick(function () {
    editName();
  });


  function editRace() {

    $("#race").text("");

    var createLabelRace = $("<label>");
    $(createLabelRace).text("Select Race");
    $(createLabelRace).attr("id", "labelRace");
    $("#race").append(createLabelRace);

    var createSelectRace = $("<select>");
    $(createSelectRace).attr("id", "selectRace");
    $("#lableRace").append(createSelectRace);

    var opt1Race = $("<option>");
    $(opt1Race).text("Dwarf");
    $(opt1Race).attr("value", "Dwarf");
    $("#selectRace").append(opt1Race);

    var opt2Race = $("<option>");
    $(opt2Race).text("Elf");
    $(opt2Race).attr("value", "Elf");
    $("#selectRace").append(opt2Race);

    var opt3Race = $("<option>");
    $(opt3Race).text("Human");
    $(opt3Race).attr("value", "Human");
    $("#selectRace").append(opt3Race);
  };

  $("#race").dblclick(function () {
    event.preventDefault();
    editRace();
  });
});





