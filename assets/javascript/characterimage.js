// Arrays of character images
var mhf = [
	'assets/images-male/human-fighter-1.jpg',
	'assets/images-male/human-fighter-2.jpg',
	'assets/images-male/human-fighter-3.jpg',
];
var mhra = [
	'assets/images-male/human-ranger-1.jpg',
	'assets/images-male/human-ranger-2.jpg',
	'assets/images-male/human-ranger-3.jpg',
];
var mhm = [
	'assets/images-male/human-mage-1.jpg',
	'assets/images-male/human-mage-2.jpg',
	'assets/images-male/human-mage-3.jpg',
];
var mhc = [
	'assets/images-male/human-cleric-1.jpg',
	'assets/images-male/human-cleric-2.jpg',
	'assets/images-male/human-cleric-3.jpg',
];
var mhro = [
	'assets/images-male/human-rogue-1.jpg',
	'assets/images-male/human-rogue-2.jpg',
	'assets/images-male/human-rogue-3.jpg',
];
var fhf = [
	'assets/images-female/human-fighter-1.jpg',
	'assets/images-female/human-fighter-2.jpg',
	'assets/images-female/human-fighter-3.jpg',
];
var fhra = [
	'assets/images-female/human-ranger-1.jpg',
	'assets/images-female/human-ranger-2.jpg',
	'assets/images-female/human-ranger-3.jpg',
];
var fhm = [
	'assets/images-female/human-mage-1.jpg',
	'assets/images-female/human-mage-2.jpg',
	'assets/images-female/human-mage-3.jpg',
];
var fhc = [
	'assets/images-female/human-cleric-1.jpg',
	'assets/images-female/human-cleric-2.jpg',
	'assets/images-female/human-cleric-3.jpg',
];
var fhro = [
	'assets/images-female/human-rogue-1.jpg',
	'assets/images-female/human-rogue-2.jpg',
	'assets/images-female/human-rogue-3.jpg',
];
var mef = [
	'assets/images-male/elf-fighter-1.jpg',
	'assets/images-male/elf-fighter-2.jpg',
	'assets/images-male/elf-fighter-3.jpg',
];
var fef = [
	'assets/images-female/elf-fighter-1.jpg',
	'assets/images-female/elf-fighter-2.jpg',
	'assets/images-female/elf-fighter-3.jpg',
];
var mera = [
	'assets/images-male/elf-ranger-1.jpg',
	'assets/images-male/elf-ranger-2.jpg',
	'assets/images-male/elf-ranger-3.jpg',
];
var fera = [
	'assets/images-female/elf-ranger-1.jpg',
	'assets/images-female/elf-ranger-2.jpg',
	'assets/images-female/elf-ranger-3.jpg',
];
var mem = [
	'assets/images-male/elf-mage-1.jpg',
	'assets/images-male/elf-mage-2.jpg',
	'assets/images-male/elf-mage-3.jpg',
];
var fem = [
	'assets/images-female/elf-mage-1.jpg',
	'assets/images-female/elf-mage-2.jpg',
	'assets/images-female/elf-mage-3.jpg',
];
var mec = [
	'assets/images-male/elf-cleric-1.jpg',
	'assets/images-male/elf-cleric-2.jpg',
	'assets/images-male/elf-cleric-3.jpg',
];
var fec = [
	'assets/images-female/elf-cleric-1.jpg',
	'assets/images-female/elf-cleric-2.jpg',
	'assets/images-female/elf-cleric-3.jpg',
];
var mero = [
	'assets/images-male/elf-rogue-1.jpg',
	'assets/images-male/elf-rogue-2.jpg',
	'assets/images-male/elf-rogue-3.jpg',
];
var fero = [
	'assets/images-female/elf-rogue-1.jpg',
	'assets/images-female/elf-rogue-2.jpg',
	'assets/images-female/elf-rogue-3.jpg',
];
var mdf = [
	'assets/images-male/dwarf-fighter-1.jpg',
	'assets/images-male/dwarf-fighter-2.jpg',
	'assets/images-male/dwarf-fighter-3.jpg',
];
var fdf = [
	'assets/images-female/dwarf-fighter-1.jpg',
	'assets/images-female/dwarf-fighter-2.jpg',
	'assets/images-female/dwarf-fighter-3.jpg',
];
var mdra = [
	'assets/images-male/dwarf-ranger-1.jpg',
	'assets/images-male/dwarf-ranger-2.jpg',
	'assets/images-male/dwarf-ranger-3.jpg',
];
var fdra = [
	'assets/images-female/dwarf-ranger-1.jpg',
	'assets/images-female/dwarf-ranger-2.jpg',
	'assets/images-female/dwarf-ranger-3.jpg',
];
var mdm = [
	'assets/images-male/dwarf-mage-1.jpg',
	'assets/images-male/dwarf-mage-2.jpg',
	'assets/images-male/dwarf-mage-3.jpg',
];
var fdm = [
	'assets/images-female/dwarf-mage-1.jpg',
	'assets/images-female/dwarf-mage-2.jpg',
	'assets/images-female/dwarf-mage-3.jpg',
];
var mdc = [
	'assets/images-male/dwarf-cleric-1.jpg',
	'assets/images-male/dwarf-cleric-2.jpg',
	'assets/images-male/dwarf-cleric-3.jpg',
];
var fdc = [
	'assets/images-female/dwarf-cleric-1.jpg',
	'assets/images-female/dwarf-cleric-2.jpg',
	'assets/images-female/dwarf-cleric-3.jpg',
];
var mdro = [
	'assets/images-male/dwarf-rogue-1.jpg',
	'assets/images-male/dwarf-rogue-2.jpg',
	'assets/images-male/dwarf-rogue-3.jpg',
];
var fdro = [
	'assets/images-female/dwarf-rogue-1.jpg',
	'assets/images-female/dwarf-rogue-2.jpg',
	'assets/images-female/dwarf-rogue-3.jpg',
];

// Generates a random number which is called in each if statement
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// generates a random character image based on gender, race, class.
function randomImage() {
	// plugs in to the local storage
	var gender = localStorage.getItem('charGender');
	var race = localStorage.getItem('charRace');
	var classDisplay = localStorage.getItem('charClass');
	// display which plugs into var results
	var currentpicture;
	// sets the image equal to the ID in the html
	var result = document.getElementById('centerVidImg');

	// Human Male If Statements
	if (gender === 'Male' && race === 'Human' && classDisplay === 'Fighter') {
		currentpicture = mhf[randomNumber(0, mhf.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Human' && classDisplay === 'Ranger') {
		currentpicture = mhra[randomNumber(0, mhra.length)];
        result.src = currentpicture; 
    } 
    else if (gender === 'Male' && race === 'Human' && classDisplay === 'Wizard') {
		currentpicture = mhm[randomNumber(0, mhra.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Human' && classDisplay === 'Cleric') {
		currentpicture = mhc[randomNumber(0, mhra.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Human' && classDisplay === 'Rogue') {
		currentpicture = mhro[randomNumber(0, mhra.length)];
		result.src = currentpicture;
    } 

    //Human Female If Statements
    else if (gender === 'Female' && race === 'Human' && classDisplay === 'Fighter') {
		currentpicture = fhf[randomNumber(0, fhf.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Female' && race === 'Human' && classDisplay === 'Ranger') {
		currentpicture = fhra[randomNumber(0, fhra.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Female' && race === 'Human' && classDisplay === 'Wizard') {
		currentpicture = fhm[randomNumber(0, fhm.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Female' && race === 'Human' && classDisplay === 'Cleric') {
		currentpicture = fhc[randomNumber(0, fhc.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Female' && race === 'Human' && classDisplay === 'Rogue') {
		currentpicture = fhro[randomNumber(0, fhro.length)];
		result.src = currentpicture;
    }
    
    //Elf Male If Statements
    else if (gender === 'Male' && race === 'Elf' && classDisplay === 'Fighter') {
		currentpicture = mef[randomNumber(0, mef.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Elf' && classDisplay === 'Ranger') {
		currentpicture = mera[randomNumber(0, mera.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Elf' && classDisplay === 'Wizard') {
		currentpicture = mem[randomNumber(0, mera.length)];
		result.src = currentpicture;
    } 
    else if (gender === 'Male' && race === 'Elf' && classDisplay === 'Cleric') {
		currentpicture = mec[randomNumber(0, mera.length)];
		result.src = currentpicture;
	} else if (gender === 'Male' && race === 'Elf' && classDisplay === 'Rogue') {
		currentpicture = mero[randomNumber(0, mera.length)];
		result.src = currentpicture;
    } 

    //Elf Female If Statements
    else if (gender === 'Female' && race === 'Elf' && classDisplay === 'Fighter') {
		currentpicture = fef[randomNumber(0, fef.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Elf' && classDisplay === 'Ranger') {
		currentpicture = fera[randomNumber(0, fera.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Elf' && classDisplay === 'Wizard') {
		currentpicture = fem[randomNumber(0, fem.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Elf' && classDisplay === 'Cleric') {
		currentpicture = fec[randomNumber(0, fec.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Elf' && classDisplay === 'Rogue') {
		currentpicture = fero[randomNumber(0, fero.length)];
		result.src = currentpicture;
    } 

    //Dwarf Male If Statements
    else if (gender === 'Male' && race === 'Dwarf' && classDisplay === 'Fighter') {
		currentpicture = mdf[randomNumber(0, mdf.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Male' && race === 'Dwarf' && classDisplay === 'Ranger') {
		currentpicture = mdra[randomNumber(0, mdra.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Male' && race === 'Dwarf' && classDisplay === 'Wizard') {
		currentpicture = mdm[randomNumber(0, mdra.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Male' && race === 'Dwarf' && classDisplay === 'Cleric') {
		currentpicture = mdc[randomNumber(0, mdra.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Male' && race === 'Dwarf' && classDisplay === 'Rogue') {
		currentpicture = mdro[randomNumber(0, mdra.length)];
		result.src = currentpicture;
    }

	//Dwarf Female If Statements
	else if (gender === 'Female' && race === 'Dwarf' && classDisplay === 'Fighter') {
		currentpicture = fdf[randomNumber(0, fdf.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Dwarf' && classDisplay === 'Ranger') {
		currentpicture = fdra[randomNumber(0, fdra.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Dwarf' && classDisplay === 'Wizard') {
		currentpicture = fdm[randomNumber(0, fdm.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Dwarf' && classDisplay === 'Cleric') {
		currentpicture = fdc[randomNumber(0, fdc.length)];
		result.src = currentpicture;
    } 
    
    else if (gender === 'Female' && race === 'Dwarf' && classDisplay === 'Rogue') {
		currentpicture = fdro[randomNumber(0, fdro.length)];
		result.src = currentpicture;
	}

	//updates the src.URL to equal the image
	$('#centerVidImg').attr('src', result.src);
}