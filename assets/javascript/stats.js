// Attribute Stats Function
function stats() {

    // Variables
	var hitpoints = document.getElementById('health');
	var armor = document.getElementById('armor');
	var str = document.getElementById('sideStatNumber1');
	var dex = document.getElementById('sideStatNumber2');
	var con = document.getElementById('sideStatNumber3');
	var int = document.getElementById('sideStatNumber4');
	var wis = document.getElementById('sideStatNumber5');
	var cha = document.getElementById('sideStatNumber6');
	var strMod = document.createElement("h5");
	var dexMod = document.createElement("h5");
	var conMod = document.createElement("h5");
	var intMod = document.createElement("h5");
	var wisMod = document.createElement("h5");
    var chaMod = document.createElement("h5");
    
    //Get Race and Class from Local Storage
	var race = localStorage.getItem('charRace');
    var classDisplay = localStorage.getItem('charClass');

    // Human If Statements
	if (race === 'Human') {

		if (classDisplay === 'Fighter') {
			hitpoints.innerHTML = '15';
			armor.innerHTML = '15';
			str.innerHTML = '17';
			$(strMod).text("Mod: +3");
			$(str).append(strMod);
			dex.innerHTML = '13';
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			con.innerHTML = '14';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '12';
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			wis.innerHTML = '12';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Athletics: +5" + "</h5>");
			$("#skill-2").html("<h5>" + "Intimidation: +1" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			hitpoints.innerHTML = '12';
			armor.innerHTML = '14';
			str.innerHTML = '16';
			$(strMod).text("Mod: +3");
			$(str).append(strMod);
			dex.innerHTML = '15';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '12';
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			int.innerHTML = '12';
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			wis.innerHTML = '13';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Animal Handling: +3" + "</h5>");
			$("#skill-2").html("<h5>" + "Survival: +3" + "</h5>");
			$("#skill-3").html("<h5>" + "Perception: +3" + "</h5>");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			hitpoints.innerHTML = '10';
			armor.innerHTML = '10';
			str.innerHTML = '10';
			$(strMod).text("Mod: +0");
			$(str).append(strMod);
			dex.innerHTML = '10';
			$(dexMod).text("Mod: +0");
			$(dex).append(dexMod);
			con.innerHTML = '13';
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			int.innerHTML = '17';
			$(intMod).text("Mod: +3");
			$(int).append(intMod);
			wis.innerHTML = '14';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '12';
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Arcana: +5" + "</h5>");
			$("#skill-2").html("<h5>" + "Investigation: +5" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			hitpoints.innerHTML = '15';
			armor.innerHTML = '15';
			str.innerHTML = '15';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '12';
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			con.innerHTML = '14';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '12';
			$(intMod).text("Mod: +1");
			$(int).append(intMod);
			wis.innerHTML = '15';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Medicine: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Insight: +4" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			hitpoints.innerHTML = '11';
			armor.innerHTML = '13';
			str.innerHTML = '15';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '15';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '10';
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '12';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '15';
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").html("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").html("<h5>" + "Persuasion: +4" + "</h5>");
		}
    } 
    
    // Elf If Statements
    else if (race === 'Elf') {
        
        if (classDisplay === 'Fighter') {
			hitpoints.innerHTML = '15';
			armor.innerHTML = '15';
			str.innerHTML = '15';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '15';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '14';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '12';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '10';
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Athletics: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Intimidation: +2" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			hitpoints.innerHTML = '12';
			armor.innerHTML = '16';
			str.innerHTML = '14';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '17';
			$(dexMod).text("Mod: +3");
			$(dex).append(dexMod);
			con.innerHTML = '12';
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '13';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '10';
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Animal Handling: +3" + "</h5>");
			$("#skill-2").html("<h5>" + "Survival: +3" + "</h5>");
			$("#skill-3").html("<h5>" + "Perception: +3" + "</h5>");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			hitpoints.innerHTML = '10';
			armor.innerHTML = '11';
			str.innerHTML = '8';
			$(strMod).text("Mod: -1");
			$(str).append(strMod);
			dex.innerHTML = '12';
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			con.innerHTML = '13';
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			int.innerHTML = '15';
			$(intMod).text("Mod: +2");
			$(int).append(intMod);
			wis.innerHTML = '14';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '14';
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Arcana: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Investigation: +4" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			hitpoints.innerHTML = '15';
			armor.innerHTML = '16';
			str.innerHTML = '13';
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			dex.innerHTML = '14';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '14';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '15';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '10';
			$(chaMod).text("Mod: +0");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Medicine: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Insight: +4" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			hitpoints.innerHTML = '11';
			armor.innerHTML = '14';
			str.innerHTML = '13';
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			dex.innerHTML = '16';
			$(dexMod).text("Mod: +3");
			$(dex).append(dexMod);
			con.innerHTML = '10';
			$(conMod).text("Mod: +0");
			$(con).append(conMod);
			int.innerHTML = '8';
			$(intMod).text("Mod: -1");
			$(int).append(intMod);
			wis.innerHTML = '12';
			$(wisMod).text("Mod: +1");
			$(wis).append(wisMod);
			cha.innerHTML = '17';
			$(chaMod).text("Mod: +3");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Stealth: +5" + "</h5>");
			$("#skill-2").html("<h5>" + "Acrobatics: +5" + "</h5>");
			$("#skill-3").html("<h5>" + "Sleight of Hand: +5" + "</h5>");
			$("#skill-4").html("<h5>" + "Persuasion: +5" + "</h5>");
		}
    } 
    
    //Dwarf If Statements
    else if (race === 'Dwarf') {
        
        if (classDisplay === 'Fighter') {
			hitpoints.innerHTML = '20';
			armor.innerHTML = '15';
			str.innerHTML = '15';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '13';
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			con.innerHTML = '16';
			$(conMod).text("Mod: +3");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '14';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Athletics: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Intimidation: +1" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Ranger') {
			hitpoints.innerHTML = '14';
			armor.innerHTML = '14';
			str.innerHTML = '14';
			$(strMod).text("Mod: +2");
			$(str).append(strMod);
			dex.innerHTML = '15';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '14';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '15';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Animal Handling: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Survival: +4" + "</h5>");
			$("#skill-3").html("<h5>" + "Perception: +4" + "</h5>");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Wizard') {
			hitpoints.innerHTML = '12';
			armor.innerHTML = '10';
			str.innerHTML = '8';
			$(strMod).text("Mod: -1");
			$(str).append(strMod);
			dex.innerHTML = '10';
			$(dexMod).text("Mod: +0");
			$(dex).append(dexMod);
			con.innerHTML = '15';
			$(conMod).text("Mod: +2");
			$(con).append(conMod);
			int.innerHTML = '15';
			$(intMod).text("Mod: +2");
			$(int).append(intMod);
			wis.innerHTML = '16';
			$(wisMod).text("Mod: +3");
			$(wis).append(wisMod);
			cha.innerHTML = '12';
			$(chaMod).text("Mod: +1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Arcana: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Investigation: +4" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Cleric') {
			hitpoints.innerHTML = '18';
			armor.innerHTML = '15';
			str.innerHTML = '13';
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			dex.innerHTML = '12';
			$(dexMod).text("Mod: +1");
			$(dex).append(dexMod);
			con.innerHTML = '16';
			$(conMod).text("Mod: +3");
			$(con).append(conMod);
			int.innerHTML = '10';
			$(intMod).text("Mod: +0");
			$(int).append(intMod);
			wis.innerHTML = '17';
			$(wisMod).text("Mod: +3");
			$(wis).append(wisMod);
			cha.innerHTML = '8';
			$(chaMod).text("Mod: -1");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Medicine: +5" + "</h5>");
			$("#skill-2").html("<h5>" + "Insight: +5" + "</h5>");
			$("#skill-3").html(" ");
			$("#skill-4").html(" ");
        } 
        
        else if (classDisplay === 'Rogue') {
			hitpoints.innerHTML = '13';
			armor.innerHTML = '13';
			str.innerHTML = '13';
			$(strMod).text("Mod: +1");
			$(str).append(strMod);
			dex.innerHTML = '15';
			$(dexMod).text("Mod: +2");
			$(dex).append(dexMod);
			con.innerHTML = '12';
			$(conMod).text("Mod: +1");
			$(con).append(conMod);
			int.innerHTML = '8';
			$(intMod).text("Mod: -1");
			$(int).append(intMod);
			wis.innerHTML = '14';
			$(wisMod).text("Mod: +2");
			$(wis).append(wisMod);
			cha.innerHTML = '15';
			$(chaMod).text("Mod: +2");
			$(cha).append(chaMod);
			$("#skill-1").html("<h5>" + "Stealth: +4" + "</h5>");
			$("#skill-2").html("<h5>" + "Acrobatics: +4" + "</h5>");
			$("#skill-3").html("<h5>" + "Sleight of Hand: +4" + "</h5>");
			$("#skill-4").html("<h5>" + "Persuasion: +4" + "</h5>");
		}
	}
}