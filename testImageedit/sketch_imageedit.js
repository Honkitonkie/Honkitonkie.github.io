var index = 1
	, title = getUrlVars()["title"]
	, ids = getUrlVars()["id"]
	, company = getUrlVars()["company"]
	, size = getUrlVars()["size"]
	, setHeigt = getUrlVars()["setHeight"]
	, vacTekst, textpiece, font, indexx = 0, startX, startY
	, img1, spelingX = 90, spelingY = 90, blankValue1, blankValue2, blankValue3, blankValue4
	, number = 0, done = true, r, g, b, Br, Bg, Bb, r3, g3, b3, alreadyChecked
	, tempArray = [], tempIndex = [], stayStil = 0, font, vehicles = [], texts = [], nextT = 0, maxChangeForce = 20, instructions = []
	, check = false, checkAnother = true, countt = 0, hoogte = 0, goBack = false, word = "", isThereAnEenampersandTeken, isThereAnEenSlashTeken, isThereAnEenKeyString, checkUndesirables
	, pp = 0, speed = 50, counter = 0, textje, loopFrame = 150, canvas, walls = [], ray, particle, particle2, xoff = 0, yoff = -10, lichtje = 50, itsWebGL = false;

//ELK bedrijf 3 huiskleuren --> r,g,b & Br,Bg,Bb & r3,g3,b3 
// LETTER
var typeX, typeXSlider;
var typeY, typeYSlider;
var typeStroke, typeStrokeSlider;
var strecherXslider, strecherXsize;
var strecherX = 0;
var strecherYslider, strecherYsize;
var strecherY = 0;
// FIELD
var column, columnSlider;
var row, rowSlider;
var tracking, trackSlider;
var lineSpace, lineSpaceSlider;
var xSpace, ySpace;
// WAVE
var speed, speedSlider;
var xOffset, xOffsetSlider;
var yOffset, yOffsetSlider;
var zWave, zWaveSlider, zWaveCheck;
var zWaver = 0;
var zWaveChecked = 0;
var xWave, xWaveSlider, xWaveCheck;
var xWaver = 0;
var xWaveChecked = 0;
var yWave, yWaveSlider, yWaveCheck;
var yWaver = 0;
var yWaveChecked = 0;
var yWavezRot, yWavezRotSlider;
var yWavezRoter = 0;
var yWavexStr, yWavexStrSlider;
var yWavexStrer = 0;
var xStrechWave, xStrechWaveSlider, xStrechWaveCheck;
var xStrechWave = 0;
var xStrechWaveChecked = 0;
var yStrechWave, yStrechWaveSlider, yStrechWaveCheck;
var yStrechWave = 0;
var yStrechWaveChecked = 0;
// CAMERA
var xRotCamera, yRotCamera, zRotCamera;
var xRotCameraSlider, yRotCameraSlider, zRotCameraSlider;
var zoomCamera, zoomCameraSlider;
// STRING
var letter_select, inp, inpText;
var myText = [];
var runLength;
var fullTextCheck, fullText;
// COLOR
var strkColor = 0;
var bkgdColor = 255;
var inp1, inp2, inp3, inp4, inp5, inp6;
var inpNumber = 1;
// SAVE
var exportButton;
// PRESETS
var presetStacks, presetBricks, presetSimpleZ, presetComplexZ, presetZebra, presetHarlequin;
var spaceTypeColor;



function preload() {
	//LOAD PICTURES
	if (ids < 11 || ids == undefined) {
		let rand = floor(random(1, 45));
		console.log("rand = " + rand);
		//linksboven
		let stringlb = 'assets/img/linksboven/' + rand + '.jpg'
		linksboven = loadImage(stringlb);
		//linksonder
		let stringlo = 'assets/img/linksonder/' + rand + '.jpg'
		linksonder = loadImage(stringlo);
		// //rechtsonder
		let stringro = 'assets/img/rechtsonder/' + rand + '.jpg'
		rechtsonder = loadImage(stringro);
		// //rechstboven
		let stringrb = 'assets/img/rechtsboven/' + rand + '.jpg'
		rechtsboven = loadImage(stringrb);

	} else { }
	//END LOAD PICTURES

	//LOAD COMPANY
	if (company == "automatin") {
		img = loadImage('automatin/logo_automatin.png');
		img1 = loadImage('automatin/logo_50x50.png');
		font = loadFont('automatin/MuseoSans_500.otf');
		logoTouchlogo = loadImage('automatin/logo.png');
	} else if (company == "keser") {
		img = loadImage('keser/keserk.png');
		font = loadFont('keser/urbana.otf');
		img1 = loadImage('keser/logo_keser.png');
		img2 = loadImage('keser/keser2.png');
		hooks = loadImage("keser/hooks.svg");
		logoTouchlogo = loadImage("keser/hook.svg");
	} else if (company == undefined) {
		img = loadImage('keser/keserk.png');
		font = loadFont('keser/urbana.otf');
		img1 = loadImage('keser/logo_keser.png');
		img2 = loadImage('keser/keser2.png');
		hooks = loadImage("keser/hooks.svg");
		logoTouchlogo = loadImage("keser/hook.svg");
	} else {
		img = loadImage('keser/keserk.png');
		font = loadFont('keser/urbana.otf');
		img1 = loadImage('keser/logo_keser.png');
		img2 = loadImage('keser/keser2.png');
		hooks = loadImage("keser/hooks.svg");
		logoTouchlogo = loadImage("keser/hook.svg");
	}
	//END LOAD COMPANY

}// END PRELOAD

function setup() {
	pixelDensity(1);
	// CREATECANVAS WITH ID
	if (done) {
		if (Number(ids) < 11 || undefined) {
			console.log("maak een plaatje");
			canvas = createCanvas(1200, 627);
		} else if (Number(ids) === 98 || Number(ids) > 30 && Number(ids) < 50) {
			var p5Canvas = createCanvas(800, 419, WEBGL);
			itsWebGL = true;
		} else if (Number(ids) > 10) {
			console.log("maak een gif");
			var p5Canvas = createCanvas(800, 419);
			p5Canvas.canvas.width = 800;
			p5Canvas.canvas.height = 419;
			canvas = p5Canvas.canvas;
		} else { }
		// END CREATECANVAS WITH ID

		// textSize --> USE TO MAKE IT FIT
		textFont(font);
		textStyle(BOLD);

		// URI WAARDES DIE ALS GLOBAL INGELADEN ZIJN AANPASSEN VOOR GEBRUIK.
	vacTekst = decodeURIComponent(title);
	size = Number(size);
	setHeight = Number(setHeigt)

	//DE WOORDEN DIE IN DE BACKEND AAN ELKAAR MOESTEN ALSNOG LOSKOPPELEN DOOR >> TE VERVANGEN
	textpiece = vacTekst.split(" ");
	vacTekst = vacTekst.replace(/>>/g, ' ')
	for (let i = 0; i < textpiece.length; i++) {
		textpiece[i] = textpiece[i].replace(/>>/gi, ' ')
		textpiece[i] = textpiece[i].charAt(0).toUpperCase() + textpiece[i].slice(1);
	}
	vacTekst = textpiece.join(' ');


		// LAAD DE BIJHORENDE id(s) TEMPLATE VANUIT URL
	setupcheckCompany()
	goFetch(ids);
}
} // EINDE SETUP


function goFetch(ids) {
	console.log("textpiece= " + textpiece);
	console.log("textpiece.length = " + textpiece.length);
	console.log("#woorden, case, setHeight =" + setHeight);
	console.log("vacTekst, title = " + vacTekst);
	console.log("vacTekst.length = " + vacTekst.length);
	console.log("id= " + ids);
	console.log("size= " + size);
	console.log("company = " + company);
	console.log("spelingX = " + spelingX);
	console.log("spelingY = " + spelingY);
	console.log("r,g,b = " + r + "," + g + "," + b);
	textje = textpiece.join(" ")

	//TEXTSIZES VOOR GIF INSTELLEN ADHV AANTAL WOORDEN MET SWITCH
	if (Number(ids) < 11 || undefined) {
	} else if (Number(ids) > 10) {
		switch (setHeight) {
			case 1:
				size = size + 30;
				break;
			// END code block
			case 2:
				size = size + 10;
				break;
			// END code block
			case 3:
				if (textje.length > 35) {
					size = size - 14;
				} else {
					size = size - 10;
				}
				break;
			// END code block
			case 4:
				console.log("case 4");
				if (textje.length > 55) {
					size = size - 22;
				} else if (textje.length > 45) {
					size = size - 18;
				} else {
					size = size - 14;
				}
				break;
			// END code block
			case 5:
				console.log("case 5");
				if (textje > 55) {
					size = size - 70;
				} else {
					size = size - 18;
				}
				break;
			// END code block	
			case 6:
				size = size - 22;
				break;
			// END code block
			default:
				size = size - 12;
		}
		console.log("size = " + size);
	} else {

	}



	//GO FETCH OBV ID
	switch (Number(ids)) {
		case 0:
			//code block
			textOnTop();
			break;
		// END code textOnTop
		case 1:
			startX = 800;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			keserTopLeft();
			break;
		// END code keserTopLeft
		case 2:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			keserTopRight();
			break;
		// END code keserTopRight
		case 3:
			//code block
			startX = 800;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			keserBotLeft();
			break;
		// END code keserBotLeft
		case 4:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			keserBotRight();
			break;
		// END code keserBotRight
		case 5:
			startX = 800;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			kkeserTopLeft();
			break;
		// END code kkeserTopLeft
		case 6:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			kkeserTopRight();
			break;
		// END code kkeserTopRight
		case 7:
			//code block
			startX = 800;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			kkeserBotLeft();
			break;
		// END code kkeserBotLeft
		case 8:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			kkeserBotRight();
			break;
		// END code kkeserBotRight
		case 9:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			kkeserBotRight();
			break;
		// END code kkeserBotRight
		case 10:
			//code block
			startX = 150;
			if (setHeight > 5) {
				startY = 300;
			} else {
				startY = 330;
			}
			ktextOnTop();
			break;
		// END code ktextOnTop
		case 11:
			typeWriter();
			break;
		// END typeWriter
		case 12:
			writeWord();// writeWord
			break;
		// END writeWord
		case 13:
			fadeInTop();
			break;
		// END fadeInTop
		case 14:
			fadeInLeft();
			break;
		// END fadeInLeft
		case 15:
			fadeInRight();
			break;
		// END fadeInRight
		case 16:
			fadeInBot();
			break;
		// END fadeInBot
		case 17:
			zoomIn();
			break;
		// END zoomIn
		case 18:
			zoomOut();
			break;
		// END zoomOut
		case 19:
			spinAndZoom();
			break;
		// END spinAndZoom			
		case 20:
			spin();
			break;
		// END spin
		case 21:
			steeringGif()
			break;
		// END steeringGif
		case 22:
			steeringWords()
			break;
		// END steeringWords
		case 23:
			steeringArrive()
			break;
		// END steeringArrive
		case 24:
			strokeCircus()
			break;
		// END flashLight
		case 25:
			movingWord()
			break;
		// END movingWord
		case 26:
			flyingWords()
			break;
		// END flyingWords
		case 27:
			// loopFrame = 180;
			dvdWords()
			break;
		// END dvdWords
		case 28:
			xz = 0;
			yz = 1000;
			xz2 = 0;
			yz2 = 1000;
			xz3 = 0;
			yz3 = 1000;
			distortTextWhole()
			break;
		// END distortTextWhole
		case 29:
			xz = 0;
			yz = 1000;
			xz2 = 0;
			yz2 = 1000;
			xz3 = 0;
			yz3 = 1000;
			distortTextSeperate()
			break;
		// END distortTextSeperate
		case 30:
			logoTouch()
			break;
		// END logoTouch








		//IN ONDERHOUD NIET PRODUCTIEKLAAR!!!!!!!
		case 31:
			spaceType1()
			break;
		// END spaceType1
		case 32:
			spaceType2()
			break;
		// END spaceType2
		case 33:
			spaceType3()
			break;
		// END spaceType3
		case 34:
			spaceType4()
			break;
		// END spaceType4
		case 35:
			spaceType5()
			break;
		// END spaceType5
		case 36:
			spaceType6()
			break;
		// END spaceType6
		case 37:
			spaceType7()
			break;
		// END spaceType7
		case 38:
			spaceType8()
			break;
		// END spaceType8
		case 39:
			spaceType9()
			break;
		// END spaceType9
		case 40:
			spaceType10()
			break;
		// END spaceType10
		case 41:
			spaceType11()
			break;
		// END spaceType11
		case 42:
			spaceType12()
			break;
		// END spaceType12
		case 43:
			spaceType13()
			break;
		// END spaceType13
		case 44:
			spaceType14()
			break;
		// END spaceType14
		case 45:
			spaceType15()
			break;
		// END spaceType15
		case 46:
			spaceType16()
			break;
		// END spaceType16
		case 47:
			spaceType17()
			break;
		// END spaceType17
		case 48:
			spaceType18()
			break;
		// END spaceType18
		case 49:
			spaceType19()
			break;
		// END spaceType19
		case 50:
			spaceType20()
			break;
		// END spaceType20










		case 98:
			appear()
			break;
		// END appear
		case 99:
			flashLight()
			break;
		// END flashLight
		case 1500:
			defaultSetup()
			break;
		// END defaultSetup
		default:
			ktextOnTop();
	}
}


//IDEEEN VOOR GIFJES
// 1. TYPEWRITER EN DAN DE NIEUWE LETTER VAN GROTE FONT NAAR KLEINE FONT
// 2. SOORTGELIJK MAAR DAN EEN WAVE MAKEN MET FONTSIZE




// DE SETUP FUNCTTIES VOOR DE VERSCHILLENDE GIFS 
function defaultSetup() {
	console.log("defaultSetup");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(255);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.h)
		blankValue3 = boundss.h
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	let blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	// onderstaande worden gebruikt in draw om de woorden te zetten. 

	// X waarde van text
	blankValue1 = random(100, (width - blankValue4))

	// Y waarde van text
	blankValue2 = random(25, (height - blankValue5 - 200))
} // END case 1500: DEFAULTSETUP
function typeWriter() {
	console.log("typeWriter");
	fill(255);
	if (pp < textje.length) {
		word += textje.charAt(pp);
		background(r, g, b);
		drawcheckCompany()
		pp++;
	}

} // END case 11: typeWriter 
function writeWord() {
	console.log("writeWord");
	size = size + 70;
	textpiece.forEach(element => texts.push(element));
} // END case 12: writeWord
function fadeInTop() {
	console.log("fadeInTop");
	drawcheckCompany()
	caseTwoY = -70;
	fill(255);
} // END case 13: fadeInTop 
function fadeInLeft() {
	console.log("fadeInLeft");
	caseThreeX = -200 - (35 * setHeight);;
	fill(255);
} // END case 14: fadeInLeft 
function fadeInRight() {
	console.log("fadeInRight");
	caseThreeX = width + 200 + (35 * setHeight);
	fill(255);
} // END case 15: fadeInRight 
function fadeInBot() {
	console.log("fadeInBot");
	caseTwoY = height + 90 + (35 * setHeight);
	fill(255);
} // END case 16: fadeInBot 
function zoomIn() {
	console.log("zoomIn");
	fill(255);
} // END case 17: zoomIn 
function zoomOut() {
	console.log("zoomOut");
	pp = 120;
	size = size + 100;
	fill(255);
} // END case 18: zoomOut 	
function spinAndZoom() {
	console.log("spinAndZoom");
	fill(255);
	let angle;
} // END case 19: spinAndZoom
function spin() {
	console.log("spin");
	fill(255);
	let angle;
} // END case 20: spin 
function steeringGif() {
	console.log("steeringGif");
	fill(255);
	//FONT TO POINTS FOR MET SWITCH VOOR textpiece.length	
	for (let i = 0; i < textpiece.length; i++) {
		switch (setHeight) {
			case 1:
				let points = font.textToPoints(
					textpiece[i],
					40 + (i * 150), //x
					225 + (i * 150),  //y
					100, { sampleFactor: 0.5 });

				for (let j = 0; j < points.length; j++) {
					let pt = points[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 2:
				let pointss = font.textToPoints(
					textpiece[i],
					20 + (i * 150), //x
					160 + (i * 135),  //y
					100, { sampleFactor: 0.5 });

				for (let j = 0; j < pointss.length; j++) {
					let pt = pointss[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 3:
				let pointsss = font.textToPoints(
					textpiece[i],
					45 + (i * 110), //x
					150 + (i * 75),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointsss.length; j++) {
					let pt = pointsss[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 4:
				let pointssss = font.textToPoints(
					textpiece[i],
					50 + (i * 60), //x
					100 + (i * 75),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointssss.length; j++) {
					let pt = pointssss[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 5:
				let pointsssss = font.textToPoints(
					textpiece[i],
					25 + (i * 62), //x
					90 + (i * 62),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointsssss.length; j++) {
					let pt = pointsssss[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block	
			case 6:
				let pointssssss = font.textToPoints(
					textpiece[i],
					25 + (i * 45), //x
					50 + (i * 62),  //y
					80, { sampleFactor: 0.4 });

				for (let j = 0; j < pointssssss.length; j++) {
					let pt = pointssssss[j];
					let vehicle = new Vehicle(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			default:
				text(textpiece[i],
					810,
					(height / 2) + (i * 90) - spelingY,
					//200 - (spelingY/(textpiece.length*2)) + (i * 90),
					70,
					70);
		}
	} //End for TEXTPIECES
} // END case 21: steeringGif
function steeringWords() {
	console.log("steeringWords");
	setupcheckCompany()
	size = size + 70;
	textpiece.forEach(element => texts.push(element));
	var bounds = font.textBounds(texts[nextT], 0, 0, size);
	var posx = width / 2 - bounds.w / 2;
	var posy = height / 2 + bounds.h / 2;

	var points = font.textToPoints(texts[nextT], posx, posy, size, {
		sampleFactor: 0.5
	});

	for (var i = 0; i < points.length; i++) {
		var pt = points[i];
		var vehicle = new VehicleNEW(pt.x, pt.y);
		vehicles.push(vehicle);
	}
} // END case 22: steeringWords 
function steeringArrive() {
	console.log("steeringArrive");
	goBack = true;
	fill(255);
	//FONT TO POINTS FOR MET SWITCH VOOR textpiece.length	
	for (let i = 0; i < textpiece.length; i++) {
		switch (setHeight) {
			case 1:
				let points = font.textToPoints(
					textpiece[i],
					40 + (i * 150), //x
					225 + (i * 150),  //y
					100, { sampleFactor: 0.5 });

				for (let j = 0; j < points.length; j++) {
					let pt = points[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 2:
				let pointss = font.textToPoints(
					textpiece[i],
					20 + (i * 150), //x
					160 + (i * 135),  //y
					100, { sampleFactor: 0.5 });

				for (let j = 0; j < pointss.length; j++) {
					let pt = pointss[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 3:
				let pointsss = font.textToPoints(
					textpiece[i],
					45 + (i * 110), //x
					150 + (i * 75),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointsss.length; j++) {
					let pt = pointsss[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 4:
				let pointssss = font.textToPoints(
					textpiece[i],
					50 + (i * 60), //x
					100 + (i * 75),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointssss.length; j++) {
					let pt = pointssss[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			case 5:
				let pointsssss = font.textToPoints(
					textpiece[i],
					25 + (i * 62), //x
					90 + (i * 62),  //y
					80, { sampleFactor: 0.5 });

				for (let j = 0; j < pointsssss.length; j++) {
					let pt = pointsssss[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block	
			case 6:
				let pointssssss = font.textToPoints(
					textpiece[i],
					25 + (i * 45), //x
					50 + (i * 62),  //y
					80, { sampleFactor: 0.4 });

				for (let j = 0; j < pointssssss.length; j++) {
					let pt = pointssssss[j];
					let vehicle = new VehicleNEW(pt.x, pt.y);
					vehicles.push(vehicle);
				}
				break;
			// END code block
			default:
				text(textpiece[i],
					810,
					(height / 2) + (i * 90) - spelingY,
					//200 - (spelingY/(textpiece.length*2)) + (i * 90),
					70,
					70);
		}
	} //End for TEXTPIECES
} // END case 23: steeringArrive		
function strokeCircus() {
	console.log("strokeCircus");
	setupcheckCompany()
	// textpiece.forEach(element => texts.push(element));
	switch (setHeight) {
		case 1:
			size = size + 15;
			break;
		// END code block
		case 2:
			size = size + 5;
			break;
		// END code block
		case 3:
			size = size - 14;
			break;
		// END code block
		case 4:
			size = size - 20;
			break;
		// END code block
		case 5:
			size = size - 28;
			break;
		// END code block	
		case 6:
			size = size - 30;
			;
			break;
		// END code block
		default:
			size = size + 15;
	}
	blankValue5 = false;

} // END case 24: strokeCircus		
function movingWord() {
	console.log("movingWord");
	console.log("BR,BG,BB: ", Br, Bg, Bb);
	console.log("R,G,B: ", r, g, b);
	console.log("R3,G3,B3: ", r3, g3, b3);
	setupcheckCompany()

	background(Br, Bg, Bb);
	blankValue5 = false;
	// textpiece.forEach(element => texts.push(element));
	switch (setHeight) {
		case 1:
			size = size + 15;
			break;
		// END code block
		case 2:
			size = size + 5;
			break;
		// END code block
		case 3:
			size = size - 14;
			break;
		// END code block
		case 4:
			size = size - 20;
			break;
		// END code block
		case 5:
			size = size - 28;
			break;
		// END code block	
		case 6:
			size = size - 30;
			;
			break;
		// END code block
		default:
			size = size + 15;
	}
} // END case 25: movingWord	
function flyingWords() {
	console.log("flyingWords");
	setupcheckCompany()
	pp = undefined;
	speed = undefined;
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(255);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.h)
		blankValue3 = boundss.h + 10;
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	let blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	// onderstaande worden gebruikt in draw om de woorden te zetten. 
	blankValue1 = random(100, (width - blankValue4))
	blankValue2 = random(25, (height - blankValue5 - 200))
	counter = blankValue1;
} // END case 26: flyingWords		
function dvdWords() {
	console.log("dvdWords");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(Br, Bg, Bb);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.h)
		blankValue3 = boundss.h + 5;
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	let blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	// onderstaande worden gebruikt in draw om de woorden te zetten. 
	blankValue1 = -10;
	blankValue2 = random(25, (height))
	countt = width / 3 - 100;
} // END case 27: dvdWords		
function distortTextWhole() {
	console.log("distortTextWhole");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(Br, Bg, Bb);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.w)
		thisIsTheWidth = boundss.w
		blankValue3 = boundss.h + 5;
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	//  blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	blankValue5 = thisIsTheWidth / 2;
	let whatIsTheMax = vacTekst.split(" ")  
	pts0 = font.textToPoints(vacTekst, (220 - 50 * whatIsTheMax.length) , height/2, size, {
		sampleFactor: 0.5,
		simplifyThreshold: 0
	});
} // END case 28: distortTextWhole
function distortTextSeperate() {
	console.log("distortTextSeperate");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		// fill(Br, Bg, Bb);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.w)
		thisIsTheWidth = boundss.w
		blankValue3 = boundss.h + 5;
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	//  blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	blankValue5 = thisIsTheWidth / 2;

	switch (textpiece.length) {
		case 1:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block
		case 2:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts1 = font.textToPoints(textpiece[1], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block
		case 3:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts1 = font.textToPoints(textpiece[1], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts2 = font.textToPoints(textpiece[2], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block
		case 4:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts1 = font.textToPoints(textpiece[1], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts2 = font.textToPoints(textpiece[2], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts3 = font.textToPoints(textpiece[3], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block
		case 5:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts1 = font.textToPoints(textpiece[1], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts2 = font.textToPoints(textpiece[2], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts3 = font.textToPoints(textpiece[3], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts4 = font.textToPoints(textpiece[4], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block	
		case 6:
			pts0 = font.textToPoints(textpiece[0], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts1 = font.textToPoints(textpiece[1], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts2 = font.textToPoints(textpiece[2], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts3 = font.textToPoints(textpiece[3], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts4 = font.textToPoints(textpiece[4], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			pts5 = font.textToPoints(textpiece[5], 0, 0, size, {
				sampleFactor: 0.5,
				simplifyThreshold: 0
			});
			break;
		// END code block
		default:
			size = size - 12;
	}
	blankValue1 = width / 2;
	blankValue2 = height / 2 - 50;

} // END case 29: distortTextSeperate
function logoTouch() {
	console.log("logoTouch");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(255);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		vehicles.push(boundss.h)
		blankValue3 = boundss.h + 5;
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}
	let blankValue5 = vehicles.reduce((a, b) => a + b, 0);
	blankValue1 = width / 2;
	blankValue2 = height / 2 - 75;
} // END case 30: logoTouch







//IN ONDERHOUD NIET PRODUCTIEKLAAR!!!!!!!



// JE MOET EEN TEST INBOUWEN OM TE ZIEN OF DE STRING TE GROOT IS,, TESTEN WAT VACTEKST DOET.... 
//EN DAN DEZE AANPASSEN: TheSettingsForThisOne[14] OM DE TEKST MINDER BREED TE MAKEN of" theSettingsForThisOne HELEMAAL AANPASSEN OP BASIS VAN HOEVEEL WOORDEN/ TEKSTLENGTE

function spaceType1() {
	console.log("spaceType1");
	loopFrame = 126
	TheSettingsForThisOne =
		[14, 3, 5, 15, 5, 0, 0, 0, 0, 0, 0, 23, 0.1, 0.1, 20, 30, 4, 0, 0, 0, 0]
	//aantal karakters in regel, aantal regels, afstand lettersX, afstand lettersY, snelheid animatie, zWave, xWave, yWave, yWavezRot, yWavexStr, xOffset, yOffset, typeX, typeY, breedte letters, hoogte letters, xRotCamera, yRotCamera, zRotCamera, lijkt niks te doen, zoomCamera
	setValuesSpaceType()
} // END case 31: spaceType1

function spaceType2() {
	console.log("spaceType2");
	loopFrame = 126
	TheSettingsForThisOne = [14, 7, 1, 5, 5, 60, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 4, 0, 0, 0, -200]
	setValuesSpaceType()
} // END case 32: spaceType2


function spaceType3() {
	console.log("spaceType3");
	loopFrame = 180
	blankValue1 = 0;
	TheSettingsForThisOne = [14, 1, 7, 40, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, blankValue1, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 33: spaceType3

function spaceType4() {
	console.log("spaceType4");
	loopFrame = 180
	blankValue1 = 0;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 0, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 34: spaceType4


function spaceType5() {
	console.log("spaceType5");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 35: spaceType5


function spaceType6() {
	console.log("spaceType6");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 36: spaceType6


function spaceType7() {
	console.log("spaceType7");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 37: spaceType7


function spaceType8() {
	console.log("spaceType8");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 38: spaceType8


function spaceType9() {
	console.log("spaceType9");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 39: spaceType9


function spaceType10() {
	console.log("spaceType10");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 40: spaceType10

function spaceType11() {
	console.log("spaceType11");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [14, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 20, 40, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 41: spaceType11

function spaceType12() {
	console.log("spaceType12");
	loopFrame = 126
	blankValue1 = 0.1;
	TheSettingsForThisOne = [800, 1, 7, 30, -9, 0, 0, 0, 0, 0, 0, 0, 3.1, 3.1, 30, 30, 8, 0, 0, 0, 0]
	setValuesSpaceType()
} // END case 42: spaceType12

// function spaceType13 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 43: spaceType13

// function spaceType14 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 44: spaceType14

// function spaceType15 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 45: spaceType15

// function spaceType16 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 46: spaceType16

// function spaceType17 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 47: spaceType17

// function spaceType18 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 48: spaceType18

// function spaceType19 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 49: spaceType19

// function spaceType20 () {
// 	loopFrame = 126
// 	blankValue1 = 0.1;
// 	TheSettingsForThisOne = [14,1,7,40,-9,0,0,0,0,0,0,0,3.1,3.1,20,40,8,0,0,0,0] 
// 	setValuesSpaceType()
// } // END case 50: spaceType20


function appear() {
	console.log("appear");
	setupcheckCompany()
	//testvalue om langste woord te herkennem
	blankValue4 = 1;
	//vehicles vullen om hoogte van totaal te vinden, ook individuele waardes afnemen van boundss
	for (var i = 0; i < textpiece.length; i++) {
		fill(Br, Bg, Bb);
		let boundss = font.textBounds(textpiece[i], 0, 0, size);
		blankValue3 = boundss.h
		if (blankValue4 < boundss.w) {
			blankValue4 = boundss.w
		}
	}

	frameRate(60);
	smooth();
	pg = createGraphics(600, 300);
	pg.background(r, g, b);
	pg.textAlign(CENTER, CENTER);
	pg.textSize(size - 0);
	pg.noStroke()

	for (var i = 0; i < textpiece.length; i++) {
		pg.fill(255);
		pg.text(textpiece[i], width / 2 - 100, 50 + ((blankValue3 + 2) * i));
	}

	setupcheckCompany()
} // END case 98: appear		
function flashLight() {
	console.log("flashLight");
	setupcheckCompany()
	textpiece.forEach(element => texts.push(element));

	switch (setHeight) {
		case 1:
			size = size + 15;
			break;
		// END code block
		case 2:
			size = size + 5;
			break;
		// END code block
		case 3:
			size = size - 14;
			break;
		// END code block
		case 4:
			size = size - 24;
			break;
		// END code block
		case 5:
			size = size - 30;
			break;
		// END code block	
		case 6:
			size = size - 32;
			break;
		// END code block
		default:
			size = size + 15;
	}
	console.log("size = " + size);

	var bounds = font.textBounds(textje, 0, 0, size);
	var posx = width / 2 - bounds.w / 2;
	var posy = height / 2 + bounds.h / 2;

	var points = font.textToPoints(textje, posx, posy, size, {
		sampleFactor: 0.5
	});

	for (var i = 0; i < points.length; i++) {
		var pt = points[i];
		var vehicle = new Vehicle(pt.x, pt.y);
		walls[i] = new Boundary((pt.x - 1.5), (pt.y - 1.5), (pt.x + 1.5), (pt.y + 1.5));
		vehicles.push(vehicle);
	}
	particle = new Particle(width / 2, height);
	particle2 = new Particle(width / 2, height / 3);
} // END case 99: flashLight		



function draw() {
	if (ids > 10) {
		frameCount === 1 && capturer.start();
		textAlign(CENTER)
		drawcheckCompany();
	}

	//GIFJES INSTELLEN ADHV ID
	switch (Number(ids)) {
		case 11://draw_ typeWriter
			if (done) {
				textSize(size);
				textAlign(CENTER);
				if (counter > random(0, 4)) {
					counter = 0;
					typeWriter();
				}
				counter++
				text(word, width / 2, height / 2);
			}//end done}
			break;
		// end draw_typeWriter
		case 12://draw_ writeWord
			background(r, g, b);
			counter++
			if (counter > (150 / textpiece.length)) {
				counter = 0;
				ChangeWord();
			}

			textSize(size)
			textAlign(CENTER);
			let bounds = font.textBounds(texts[nextT], 0, 0, size);
			let posy = height / 2 + bounds.h / 2;
			text(texts[nextT], width / 2, posy);

			drawcheckCompany()

			function ChangeWord() {
				nextT++;
			}
			break;
		// end draw_writeWord
		case 13://draw_ fadeInTop
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b)
				drawcheckCompany()
				if (counter > 20) {
					if (caseTwoY < (height / 2)) {
						caseTwoY = caseTwoY + (counter / 10);
					}
					if (caseTwoY > (height / 2) && counter < 150) {
						caseTwoY = height / 2;
						console.log("height /2;" + height / 2);
						console.log("y;" + caseTwoY);
					}
				}
				text(textje, width / 2, caseTwoY);
				counter++;
			}//end done
			break;
		// end draw_fadeInTop		
		case 14://draw_ fadeInLeft
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b)
				drawcheckCompany();
				if (counter > 20) {
					if (caseThreeX < (width / 2)) {
						caseThreeX = caseThreeX + (counter / 10);
					}
					if (caseThreeX > (width / 2) && counter < 150) {
						caseThreeX = width / 2;
						console.log("height /2;" + width / 2);
						console.log("y;" + caseThreeX);
					}
				}
				text(textje, caseThreeX, height / 2);
				counter++;
			}//end done
			break;
		// end draw_fadeInLeft
		case 15://draw_ fadeInRight
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b);
				drawcheckCompany();
				if (counter > 20) {
					if (caseThreeX > (width / 2)) {
						caseThreeX = caseThreeX - (counter / 10);
					}
					if (caseThreeX < (width / 2) && counter < 150) {
						caseThreeX = width / 2;
						console.log("height /2;" + width / 2);
						console.log("y;" + caseThreeX);
					}
				}
				// console.log(caseThreeX);
				text(textje, caseThreeX, height / 2);
				counter++;
			}//end done
			break;
		// end draw_fadeInRight
		case 16://draw_ fadeInBot
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b);
				if (counter > 20) {
					if (caseTwoY > (height / 2)) {
						caseTwoY = caseTwoY - (counter / 10);
					}
				}
				text(textje, width / 2, caseTwoY);
				drawcheckCompany();
				counter++;
			}//end done
			break;
		// end draw_fadeInBot
		case 17://draw_ zoomIn
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b);
				drawcheckCompany();
				text(textje, width / 2, height / 2);
				counter++;
				if (textje.length > 50) {
					if (counter > 60) {
						if (size > 28) {
							size = size - 10;
						} else {
							size = size;
						}
					} else {
						size = size + 10;
					}
				} else {
					if (counter > 60) {
						if (size > 38) {
							size = size - 10;
						} else {
							size = size;
						}
					} else {
						size = size + 10;
					}
				}
				console.log(size);
			}//end done
			break;
		// end draw_zoomIn
		case 18://draw_ zoomOut
			if (done) {
				textSize(size);
				textAlign(CENTER);
				background(r, g, b);
				drawcheckCompany()
				if (size !== 2) {
					text(textje, width / 2, height / 2);
				}
				counter++;

				if (textje.length > 50) {
					if (counter > 65 && counter < 70) {
						let inc = 6
						if (size <= 30)
							size = size + inc;
					} else if (counter > 69) {
						size = 26;
					} else {
						if (size <= 2) {
							size = 2;
						} else {
							size = size - 6;
						}
					}
				} else {
					if (counter > 65 && counter < 70) {
						let inc = 6
						if (size <= 32)
							size = size + inc;
					} else if (counter > 69) {
						size = 38;
					} else {
						if (size <= 2) {
							size = 2;
						} else {
							size = size - 6;
						}
					}
				}
			}//end done
			break;
		// end draw_zoomIn
		case 19://draw_ spinAndZoom
			if (done) {
				textSize(size);
				if (size < 0) {
					size = 0;
				}
				textAlign(CENTER, CENTER);
				background(r, g, b)
				drawcheckCompany();
				angleMode(DEGREES)
				counter++;
				if (counter < 30) {
					angle = counter * 12;
					// pp++;
				} else if (counter >= 30 && counter < 150) {
					// console.log("i did it");
					angle = 360;
					// pp = pp;
				} else {
					counter = 0;
					angle = 360;
				}
				if (counter > 100 && counter < 200) {
					size--;
				} else if (counter > 200) {
					size = size;
				} else {
					size = size + 0.5
				}

				push()
				translate(width / 2, height / 2)
				rotate(angle);
				text(textje, 0, 0);
				pop()
			}//end done
			break;
		// end draw_spinAndZoom
		case 20://draw_ spin
			if (done) {
				textSize(size);
				if (size < 0) {
					size = 0;
				}
				textAlign(CENTER, CENTER);
				background(r, g, b)
				drawcheckCompany();
				angleMode(DEGREES)
				counter++;
				if (counter < 30) {
					console.log("i am doing it");
					angle = counter * 12;
					// pp++;
				} else if (counter >= 30 && counter < 150) {
					// console.log("i did it");
					angle = 360;
					// pp = pp;
				} else {
					counter = 0;
					angle = 360;
				}
				push()
				translate(width / 2, height / 2)
				rotate(angle);
				text(textje, 0, 0);
				pop()
			}//end done
			break;
		// end draw_spin
		case 21://draw_ steeringGif
			background(r, g, b);
			//AANROEPEN FUNCTIES THIS.VEHICLES
			for (let i = 0; i < vehicles.length; i++) {
				var v = vehicles[i];
				v.behaviors();
				v.update();
				v.show();
			}
			// "Vacature"
			// if (textpiece.length < 4) { 
			// 	 textSize(62);
			// 	 textStyle(NORMAL)
			// 	 textAlign(CENTER);
			// 		 text('Vacature:',width/2,hoogte)	
			// 		 if(hoogte > 65){
			// 		 goBack = true;
			// 		 }
			// 		 if (hoogte < 66 && goBack === false) {
			// 		 hoogte++
			// 		 } 
			// 		 if (goBack === true){
			// 		 stayStil++
			// 		 } 
			// 		 if(stayStil > 5) {
			// 		 hoogte--
			// 		 }
			//   }
			drawcheckCompany()
			textFont(font);
			textAlign(LEFT)
			textStyle(BOLD)
			noStroke();
			countt++;
			//VACATURETITEL TUSSEN countt >= 150 && countt <= 180, (!CHECK) = EENMALIG!! 
			if (!check) {
				if (countt >= 40 && countt <= 125) {
					for (let k = 0; k < textpiece.length; k++) {
						switch (setHeight) {
							case 1:
								textSize(100);
								text(textpiece[k],
									40 + (k * 150), //x
									225 + (k * 150) //y
								)
								break;
							case 2:
								textSize(100);
								text(textpiece[k],
									20 + (k * 150), //x
									160 + (k * 135),  //y
								)
								break;
							case 3:
								textSize(80);
								text(textpiece[k],
									45 + (k * 110), //x
									150 + (k * 75),  //y
								)
								break;
							case 4:
								textSize(80);
								text(textpiece[k],
									50 + (k * 60), //x
									100 + (k * 75),  //y
								)
								break;
							case 5:
								textSize(80);
								text(textpiece[k],
									25 + (k * 62), //x
									90 + (k * 62),  //y
								)
								break;
							case 6:
								textSize(80);
								text(textpiece[k],
									25 + (k * 45), //x
									50 + (k * 62),  //y
								)
								break;
							default:
								textSize(80);
								text(textpiece[k],
									25 + (k * 45), //x
									50 + (k * 62),  //y
								)
						}// end switch 
					}// end for 
				}//end if
			}
			if (countt > 125) {
				check = true;
				countt = 0;
			}

			break;
		// end draw_steeringGif
		case 22://draw_ steeringWords
			background(r, g, b);
			for (var i = 0; i < instructions.length; i++) {
				var v = instructions[i];
				v.behaviors();
				v.update();
				v.show();
			}

			for (var i = 0; i < vehicles.length; i++) {
				var v = vehicles[i];
				v.behaviors();
				v.update();
				v.show();
			}

			counter++
			if (counter > 149 / textpiece.length) {
				counter = 0;
				ChangeWordBehaviour();
			}

			if (counter > 17 && counter !== ((149 / textpiece.length) - 1) && counter !== ((149 / textpiece.length) - 2) && counter !== ((149 / textpiece.length) - 3)) {
				textSize(size)
				textAlign(CENTER);
				let bounds = font.textBounds(texts[nextT], 0, 0, size);
				let posy = height / 2 + bounds.h / 2;
				// text(texts[nextT], width/2, posy);	
			}
			drawcheckCompany()
			function ChangeWordBehaviour() {
				nextT++;
				if (nextT > texts.length - 1) {
					nextT = 0;
				}
				var bounds = font.textBounds(texts[nextT], 0, 0, size);
				var posx = width / 2 - bounds.w / 2;
				var posy = height / 2 + bounds.h / 2;

				var points = font.textToPoints(texts[nextT], posx, posy, size, {
					sampleFactor: 0.5
				});

				if (points.length < vehicles.length) {
					var toSplice = vehicles.length - points.length;
					vehicles.splice(points.length - 1, toSplice);

					for (var i = 0; i < points.length; i++) {
						vehicles[i].target.x = points[i].x;
						vehicles[i].target.y = points[i].y;

						var force = p5.Vector.random2D();
						force.mult(random(maxChangeForce));
						vehicles[i].applyForce(force);
					}
				} else if (points.length > vehicles.length) {

					for (var i = vehicles.length; i < points.length; i++) {
						var v = vehicles[i - vehicles.length].clone();

						vehicles.push(v);
					}

					for (var i = 0; i < points.length; i++) {
						vehicles[i].target.x = points[i].x;
						vehicles[i].target.y = points[i].y;
						var force = p5.Vector.random2D();
						force.mult(random(maxChangeForce));
						vehicles[i].applyForce(force);
					}

				} else {
					for (var i = 0; i < points.length; i++) {
						vehicles[i].target.x = points[i].x;
						vehicles[i].target.y = points[i].y;

						var force = p5.Vector.random2D();
						force.mult(random(maxChangeForce));
						vehicles[i].applyForce(force);
					}
				}
			}


			break;
		// end draw_steeringWords
		case 23://draw_ steeringArrive
			background(r, g, b);
			//AANROEPEN FUNCTIES THIS.VEHICLES
			for (let i = 0; i < vehicles.length; i++) {
				var v = vehicles[i];
				v.behaviors();
				v.update();
				v.show();
			}
			drawcheckCompany()
			textFont(font);
			textAlign(LEFT)
			textStyle(BOLD)
			noStroke();
			countt++;
			counter++;
			if (countt > 125) {
				check = true;
				countt = 0;
			}
			break;
		// end draw_steeringArrive
		case 24://draw_ strokeCircus
			background(r, g, b);
			drawcheckCompany()
			textSize(size);
			textAlign(CENTER);
			counter++
			if (counter > 30) {
				counter = 0;
				changeColor();
			}
			if (blankValue5 == false) {
				changeColor()
			}
			function changeColor() {
				blankValue5 = true;
				Br = random(255);
				Bg = random(255);
				Bb = random(255);
			}

			push()
			translate(width / 2, height / 2)
			for (let i = -1; i < 5; i++) {
				fill(Br, Bg, Bb)
				textAlign(CENTER, BASELINE);
				for (let y = -1; y < 5; y++) {
					text(textje, 0 + i, 0 + y);
				}
				text(textje, 0 + i, 0);
				text(textje, 0, 0 + i);
			}
			fill(255);
			text(textje, 0, 0);
			pop()
			break;
		// end draw_strokeCircus
		case 25://draw_ movingWord
			// background(r,g,b);
			drawcheckCompany()
			textSize(size);
			textAlign(CENTER);
			counter++
			if (counter > 30) {
				counter = 0;
			}
			if (blankValue1 == undefined) {
				blankValue1 = 10;
			}
			blankValue1 = blankValue1 - 0.1;
			translate(width / 2 - blankValue1, height / 2 + blankValue1)

			if (colorOne === "255, 255, 255") {
				fill(r, g, b);
				stroke(r3, g3, b3);
			} else if (colorThree === "255, 255, 255") {
				console.log();
				fill(r3, g3, b3);
				stroke(r, g, b);
			} else {
				fill(255);
				stroke(r3, g3, b3)
			}
			text(textje, 0, 0);
			break;
		// end draw_movingWord
		case 26://draw_ flyingWords
			background(r, g, b);
			while (r === Br) {
				setupcheckCompany()
			}
			fill(Br, Bg, Bb)
			// rect(0, 0, width / 2, height);
			textSize(size);
			textAlign(LEFT);
			fill(255)
			if (!pp) {
				speed = 0;
				pp = width;
			}

			if (speed < pp) {
				pp = pp - (width / 150);
				speed = speed + (width / 150);
			}
			for (let i = 0; i < textpiece.length; i++) {
				if (i % 2 == 1) {
					text(textpiece[i], pp, height / 4 + ((blankValue3 + 2) * i));
				} else {
					text(textpiece[i], speed, height / 4 + ((blankValue3 + 2) * i));
				}

			}
			if (company == "keser") {
				// console.log(blankValue3 * textpiece.length);
				console.log(blankValue3);
				hooks.resize((blankValue3 * textpiece.length), (blankValue3 * textpiece.length));
				image(hooks, speed - (100 + (30 * textpiece.length)), height / 4 - 35)
			} else {
				logoTouchlogo.resize((blankValue3 * textpiece.length) / 2, (blankValue3 * textpiece.length) / 2);
				image(logoTouchlogo, speed - 300, height / 4)
			}
			drawcheckCompany()
			break;
		// end draw_flyingWords
		case 27://draw_ windowsWords	
			background(r, g, b);
			textSize(size);
			textAlign(CENTER, BASELINE);
			for (var i = 0; i < textpiece.length; i++) {
				fill(255);
				// let boundss = font.textBounds(textpiece[i], 0, 0, size);
				text(textpiece[i], countt, blankValue2 + ((blankValue3 + 6) * i));
			}

			// Beweeg tekst
			if (goBack) {
				countt = countt - 5
			}
			if (!goBack) {
				countt = countt + 5
			}
			if (check) {
				blankValue2 = blankValue2 - 5
			}
			if (!check) {
				blankValue2 = blankValue2 + 5
			}

			// EDGES countt = x en  blankValue2 + ((blankValue3 + 6) * textpiece.length) = y
			if (blankValue2 > (height - blankValue3 * i) + 20) {
				check = true;
			}
			if (blankValue2 < 0 + blankValue3 / 2) {
				check = false;
			}
			// if(countt > width - (blankValue4/2)){
			// 	goBack = true;
			// }
			if (countt < 0 + (blankValue4 / 2)) {
				goBack = false;
			}

			if (company === "keser") {
				if (countt < 200 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 380) {
					check = true;
					console.log("one");
				}
				if (countt < 400 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 385) {
					check = true;
					console.log("two")
				}
				if (countt > 600 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 395) {
					check = true;
					console.log("three")
				}
			} else {
				if (countt < 100 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 350) {
					check = true;
					console.log("one");
				}
				if (countt < 200 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 360) {
					check = true;
					console.log("two")
				}
				if (countt < 300 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 370) {
					check = true;
					console.log("two")
				}
				if (countt < 500 && blankValue2 + (((blankValue3 + 6) * textpiece.length)) > 395) {
					check = true;
					console.log("three")
				}
			}
			drawcheckCompany()
			break;
		// end draw_dvdWords
		case 28://draw_ distortTextWhole	
			blendMode(BLEND);
			background(r, g, b);
			noStroke();
			push();
			for (let i = 0; i < pts0.length; i++) {
				let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
				let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
				fill(255);
				ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
			}
			pop();
			xz += 2;
			yz += 2;
			xz2 += 2.25;
			yz2 += 2.25;
			xz3 += 2.5;
			yz3 += 2.5;
			drawcheckCompany()
			break;
		// end draw_distortTextWhole
		case 29://draw_ distortTextSeperate	
			blendMode(BLEND);
			background(r, g, b);
			noStroke();
			thisIsTheWidth = 200 - blankValue5;
			switch (textpiece.length) {
				case 1:
					push();
					translate(thisIsTheWidth + 185, 200);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					break;
				// END code block
				case 2:
					push();
					translate(thisIsTheWidth + 100, 100);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 200, 100 + 100);
					for (let i = 0; i < pts1.length; i++) {
						let xoff2 = ns(pts1[i].x, pts1[i].y, xz2, 0.002, -50, 50);
						let yoff2 = ns(pts1[i].y, pts1[i].x, yz2, 0.002, -50, 50);
						fill(255);
						ellipse(pts1[i].x + xoff2, pts1[i].y + yoff2, 5, 5);
					}
					pop();
					break;
				// END code block
				case 3:
					push();
					translate(thisIsTheWidth + 190, 120);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 190, 200);
					for (let i = 0; i < pts1.length; i++) {
						let xoff2 = ns(pts1[i].x, pts1[i].y, xz2, 0.002, -50, 50);
						let yoff2 = ns(pts1[i].y, pts1[i].x, yz2, 0.002, -50, 50);
						fill(255);
						ellipse(pts1[i].x + xoff2, pts1[i].y + yoff2, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 190, 280);
					for (let i = 0; i < pts2.length; i++) {
						let xoff3 = ns(pts2[i].x, pts2[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts2[i].y, pts2[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts2[i].x + xoff3, pts2[i].y + yoff3, 5, 5);
					}
					pop();
					break;
				// END code block
				case 4:
					push();
					translate(thisIsTheWidth + 210, 80);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 210, 170);
					for (let i = 0; i < pts1.length; i++) {
						let xoff2 = ns(pts1[i].x, pts1[i].y, xz2, 0.002, -50, 50);
						let yoff2 = ns(pts1[i].y, pts1[i].x, yz2, 0.002, -50, 50);
						fill(255);
						ellipse(pts1[i].x + xoff2, pts1[i].y + yoff2, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 210, 250);
					for (let i = 0; i < pts2.length; i++) {
						let xoff3 = ns(pts2[i].x, pts2[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts2[i].y, pts2[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts2[i].x + xoff3, pts2[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 210, 330);
					for (let i = 0; i < pts3.length; i++) {
						let xoff3 = ns(pts3[i].x, pts3[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts3[i].y, pts3[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts3[i].x + xoff3, pts3[i].y + yoff3, 5, 5);
					}
					pop();
					break;
				// END code block
				case 5:
					push();
					translate(thisIsTheWidth + 40, 70);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 120, 130);
					for (let i = 0; i < pts1.length; i++) {
						let xoff2 = ns(pts1[i].x, pts1[i].y, xz2, 0.002, -50, 50);
						let yoff2 = ns(pts1[i].y, pts1[i].x, yz2, 0.002, -50, 50);
						fill(255);
						ellipse(pts1[i].x + xoff2, pts1[i].y + yoff2, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 200, 200);
					for (let i = 0; i < pts2.length; i++) {
						let xoff3 = ns(pts2[i].x, pts2[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts2[i].y, pts2[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts2[i].x + xoff3, pts2[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 280, 270);
					for (let i = 0; i < pts3.length; i++) {
						let xoff3 = ns(pts3[i].x, pts3[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts3[i].y, pts3[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts3[i].x + xoff3, pts3[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 360, 340);
					for (let i = 0; i < pts4.length; i++) {
						let xoff3 = ns(pts4[i].x, pts4[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts4[i].y, pts4[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts4[i].x + xoff3, pts4[i].y + yoff3, 5, 5);
					}
					pop();
					break;
				// END code block
				case 6:
					push();
					translate(thisIsTheWidth + 230, 70);
					for (let i = 0; i < pts0.length; i++) {
						let xoff = ns(pts0[i].x, pts0[i].y, xz, 0.002, -50, 50);
						let yoff = ns(pts0[i].y, pts0[i].x, yz, 0.002, -50, 50);
						fill(255);
						ellipse(pts0[i].x + xoff, pts0[i].y + yoff, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 240, 120);
					for (let i = 0; i < pts1.length; i++) {
						let xoff2 = ns(pts1[i].x, pts1[i].y, xz2, 0.002, -50, 50);
						let yoff2 = ns(pts1[i].y, pts1[i].x, yz2, 0.002, -50, 50);
						fill(255);
						ellipse(pts1[i].x + xoff2, pts1[i].y + yoff2, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 250, 170);
					for (let i = 0; i < pts2.length; i++) {
						let xoff3 = ns(pts2[i].x, pts2[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts2[i].y, pts2[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts2[i].x + xoff3, pts2[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 260, 230);
					for (let i = 0; i < pts3.length; i++) {
						let xoff3 = ns(pts3[i].x, pts3[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts3[i].y, pts3[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts3[i].x + xoff3, pts3[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 270, 290);
					for (let i = 0; i < pts4.length; i++) {
						let xoff3 = ns(pts4[i].x, pts4[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts4[i].y, pts4[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts4[i].x + xoff3, pts4[i].y + yoff3, 5, 5);
					}
					pop();
					push();
					translate(thisIsTheWidth + 280, 350);
					for (let i = 0; i < pts5.length; i++) {
						let xoff3 = ns(pts5[i].x, pts5[i].y, xz3, 0.002, -50, 50);
						let yoff3 = ns(pts5[i].y, pts5[i].x, yz3, 0.002, -50, 50);
						fill(255);
						ellipse(pts5[i].x + xoff3, pts5[i].y + yoff3, 5, 5);
					}
					pop();
					break;
				// END code block
				default:
					size = size - 12;
			}
			xz += 2;
			yz += 2;
			xz2 += 2.25;
			yz2 += 2.25;
			xz3 += 2.5;
			yz3 += 2.5;
			drawcheckCompany()
			break;
		// end draw_distortTextSeperate
		case 30://draw_ logoTouch
		background(r, g, b);
		textSize(size);
		textAlign(LEFT, BASELINE);
		
		//VOOR DUBBEL LOGO 
		counter++
		if (counter > 80) {
			counter = 0;
		}
		// VOOR ENKEL LOGO 
		pp++
		
		//iets naar beneden verplaatsen als textpiece kleiner is dan 3
		if(textpiece.length < 4){
			for (var i = 0; i < textpiece.length; i++) {
				fill(255);
				let boundss = font.textBounds(textpiece[i], 0, 0, size);
				text(textpiece[i], blankValue1, blankValue2 + ((blankValue3 + 5) * i));
			}
			if (company === "keser") {
				logoTouchlogo.resize(50 + (10 * textpiece.length), (blankValue3 * textpiece.length));
				if (counter > 20) {
					image(logoTouchlogo, blankValue1 - 120 - (15 * textpiece.length), blankValue2 - blankValue3 + 10)
				}
				if (counter > 40) {
					image(logoTouchlogo, blankValue1 - 80 - (10 * textpiece.length), blankValue2 - blankValue3 + 10)
				}
			} else {
				logoTouchlogo.resize((blankValue3 * textpiece.length), (blankValue3 * textpiece.length));
				if (pp > 75) {
					image(logoTouchlogo, blankValue1 - 70 - (20 * textpiece.length), blankValue2 - blankValue3 + 10)
				}
			}
		} else {
			for (var i = 0; i < textpiece.length; i++) {
				fill(255);
				let boundss = font.textBounds(textpiece[i], 0, 0, size);
				text(textpiece[i], blankValue1, (blankValue2- 50) + ((blankValue3 + 5) * i));
			}
			if (company === "keser") {
				logoTouchlogo.resize(50 + (10 * textpiece.length), (blankValue3 * textpiece.length));
				if (counter > 20) {
					image(logoTouchlogo, blankValue1 - 120 - (15 * textpiece.length), (blankValue2- 50) - blankValue3 + 10)
				}
				if (counter > 40) {
					image(logoTouchlogo, blankValue1 - 80 - (10 * textpiece.length), (blankValue2- 50) - blankValue3 + 10)
				}
			} else {
				// logoTouchlogo.resize((blankValue3 * textpiece.length), (blankValue3 * textpiece.length));
				logoTouchlogo.resize(50 + (10 * textpiece.length) * 2, (blankValue3 * textpiece.length));
				if (pp > 75) {
					image(logoTouchlogo, blankValue1 - 70 - (20 * textpiece.length), (blankValue2- 50) - blankValue3 + 10)
				}
			}
		}
		drawcheckCompany()
			break;
		// end draw_logoTouch
		case 31://draw_ spaceType1
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			drawValuesSpaceType()
			break;
		// end draw_spaceType1
		case 32://draw_ spaceType2
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			xSpace = typeX + tracking;
			ySpace = typeY + lineSpace + yStrechWave / 2;
			drawValuesSpaceType()
			break;
		// end draw_spaceType2
		case 33://draw_ spaceType3
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);

			if (blankValue1 > 30) {
				blankValue1 = 31;
			}
			if (blankValue1 < 1) {
				blankValue1 = 0;
			}
			console.log(blankValue1);
			counter++;
			if (counter > 25 && counter <= 100) {
				blankValue1++;
			}
			if (counter > 75) {
				blankValue1--;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[15] = blankValue1;
			typeY = TheSettingsForThisOne[15]
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			drawValuesSpaceType()
			break;
		// end draw_spaceType3
		case 34://draw_ spaceType4
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[14] = blankValue1;
			typeX = TheSettingsForThisOne[14]
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			typeX = TheSettingsForThisOne[14]
			drawValuesSpaceType()
			break;
		// end draw_spaceType4	
		case 35://draw_ spaceType5
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);

			if (blankValue1 > 30) {
				blankValue1 = 31;
			}
			if (blankValue1 < 1) {
				blankValue1 = 1;
			}

			counter++;
			if (counter > 25 && counter < 100) {
				blankValue1++;
			}
			if (counter > 75) {
				blankValue1--;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! //11
			TheSettingsForThisOne[11] = blankValue1;
			yStrechWave = TheSettingsForThisOne[11]
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			drawValuesSpaceType()
			break;
		// end draw_spaceType5
		case 36://draw_ spaceType6
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[9] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			yWavexStr = TheSettingsForThisOne[9]
			drawValuesSpaceType()
			break;
		// end draw_spaceType6
		case 37://draw_ spaceType7
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);

			if (blankValue1 > 30) {
				blankValue1 = 31;
			}
			if (blankValue1 < 1) {
				blankValue1 = 1;
			}

			counter++;
			if (counter > 25 && counter < 100) {
				blankValue1++;
			}
			if (counter > 75) {
				blankValue1--;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[8] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			yWavezRot = TheSettingsForThisOne[8]
			drawValuesSpaceType()
			break;
		// end draw_spaceType7
		case 38://draw_ spaceType8
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[7] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			yWave = TheSettingsForThisOne[7]
			drawValuesSpaceType()
			break;
		// end draw_spaceType8
		case 39://draw_ spaceType9
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);

			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}

			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[6] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			xWave = TheSettingsForThisOne[6]
			drawValuesSpaceType()
			break;
		// end draw_spaceType9
		case 40://draw_ spaceType10
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[5] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			zWave = TheSettingsForThisOne[5]
			drawValuesSpaceType()
			break;
		// end draw_spaceType10
		case 41://draw_ spaceType11
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);
			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			TheSettingsForThisOne[3] = blankValue1;
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			lineSpace = TheSettingsForThisOne[3]
			drawValuesSpaceType()
			break;
		// end draw_spaceType11
		case 42://draw_ spaceType12
			background(bkgdColor);
			textSize(size);
			textAlign(LEFT, BASELINE);

			counter++;
			if (counter >= 25 && counter <= 75) {
				blankValue1++;
			}
			if (counter > 100) {
				blankValue1--;
			}
			if (blankValue1 >= 30) {
				blankValue1 = 30;
			}
			if (blankValue1 <= 1) {
				blankValue1 = 1;
			}
			TheSettingsForThisOne[2] = blankValue1;
			tracking = TheSettingsForThisOne[2]
			//als je iets veranderd in draw moet je de value nog eens zetten! 
			stroke(spaceTypeColor);
			fill(spaceTypeColor);
			drawValuesSpaceType()
			break;
		// end draw_spaceType12






		//IN ONDERHOUD NIET PRODUCTIEKLAAR!!!!!!!
		case 98:// draw_ appear	
			background(r, g, b);
			textSize(size);
			textAlign(LEFT, BASELINE);

			if (countt < 0) checkAnother = true;
			if (countt > 500) checkAnother = false;
			translate(0, 0, checkAnother ? countt++ : countt--);
			texture(pg);
			noStroke()
			plane(400, 200);


			// for (var i = 0; i < textpiece.length; i++) {
			// fill(255);
			// let boundss = font.textBounds(textpiece[i], 0, 0, size);
			// text(textpiece[i], countt, blankValue2 + ((blankValue3 + 6) * i));
			// }


			drawcheckCompany()
			break;
		// end draw_ appear


		case 99:// flashLight
			background(r, g, b);
			for (let wall of walls) {
				wall.show();
			}
			fill(255);
			textSize(size);
			let boundss = font.textBounds(textje, 0, 0, size);
			let posxx = width / 2 - boundss.w / 2;
			let posyy = height / 2 + boundss.h / 2;
			textAlign(LEFT, BASELINE)
			text(textje, posxx, posyy);
			particle.update((xoff * width), yoff);
			particle.show();
			particle.look(walls);
			// particle2.update(noise(xoff) * width, noise(yoff) * height/2);
			// particle2.show();
			// particle2.look(walls);	  
			counter++
			// console.log(counter);
			if (counter > 0 && counter < 30) {
				xoff += 0.002;
			} else if (counter > 30 && counter < 60) {
				xoff -= 0.002;
			} else if (counter > 70 && counter < 100) {
				xoff += 0.002;
			} else if (counter > 100 && counter < 130) {
				xoff -= 0.002;
			} else if (counter > 130 && counter < 150) {
				xoff += 0.002;
			}

			if ((xoff * width) > 950) {
				yoff += 10;
			} else if ((xoff * width) < 205) {
				yoff -= 10;
			}

			if ((xoff * width) > 1500) {
				xoff = 0;
			} else if ((xoff * width) < -10) {
				xoff = 0;
			}
			if (yoff > height + 50) {
				yoff = height + 50;
			} else if (yoff < -100) {
				yoff = -100;
			}




			console.log((xoff * width));
			//  console.log(yoff);

			drawcheckCompany()
			break;
		// end draw_ flashLight

		case 1500:// DEFAULT TEXTPIECE 
			background(r, g, b);
			textSize(size);
			textAlign(LEFT, BASELINE);
			for (var i = 0; i < textpiece.length; i++) {
				fill(Br, Bg, Bb);
				let boundss = font.textBounds(textpiece[i], 0, 0, size);
				text(textpiece[i], blankValue1, blankValue2 + (blankValue3 * i));
			}
			drawcheckCompany()
			break;
		// end draw_ DEFAULT TEXTPIECE 

		default:
	}


	//CAPTURE STOP START
	if (ids > 10) {
		if (frameCount < loopFrame) {
			capturer.capture(canvas);
		} else if (frameCount === loopFrame || frameCount > loopFrame) {
			capturer.stop();
			capturer.save();
		}
	}//CAPTURE STOP
} //END DRAW




function mouseClicked() {
	// console.log(counter);
	console.log("click");
	// console.log(angle);
	// console.log(counter);
}

// CHECK COMPANY FUNCTIONS
function setupcheckCompany() {
	if (company == "automatin") {
		setupLayoutAutomatin();
	} else if (company == "keser") {
		setupLayoutKeser();
	} else if (company == undefined) {
		setupLayoutKeser();
	} else {

	}
}
function drawcheckCompany() {
	if (company == "automatin") {
		layoutAutomatin();
	} else if (company == "keser") {
		layoutKeser();
	} else if (company == undefined) {
		layoutKeser();
	} else {

	}
}
//KESER
function setupLayoutKeser() {
	//COLOR

	if (done) {
		let rnd = Math.floor(random(2));
		let rndB = Math.floor(random(3));
		if (rnd === 0) {
			colorOne = "255, 123, 0";
			spaceTypeColor = 255;
			r = 255;
			g = 123;
			b = 0;
		} else {
			colorOne = "9, 149, 204";
			spaceTypeColor = 255;
			r = 9;
			g = 149;
			b = 204;
		}
		if (rndB === 0) {
			colorTwo = "255, 123, 0";
			spaceTypeColor = 255;
			Br = 255;
			Bg = 123;
			Bb = 0;
		} else if (rndB === 1) {
			colorTwo = "9, 149, 204";
			spaceTypeColor = 255;
			Br = 9;
			Bg = 149;
			Bb = 204;
		} else {
			colorTwo = "255, 255, 255";
			Br = 255;
			Bg = 255;
			Bb = 255;
		}

		if (colorOne === colorTwo) {
			setupLayoutKeser()
		} else if (colorTwo === "255, 255, 255") {
			if (colorOne !== "9, 149, 204") {
				colorThree = "9, 149, 204";
				spaceTypeColor = 255;
				r3 = 9;
				g3 = 149;
				b3 = 204;
			} else {
				colorThree = "255, 123, 0";
				spaceTypeColor = 255;
				r3 = 255;
				g3 = 123;
				b3 = 0;
			}
		} else {
			colorThree = "255, 255, 255";
			r3 = 255;
			g3 = 255;
			b3 = 255;
		}
	} // END COLOR

	if (Number(ids) < 11 || undefined) {
	} else if (Number(ids) > 10) {
		size = 50;
		fill(255)
		stroke(255)
		beginShape(CLOSE)
		vertex(0, 319)
		vertex(600, 419)
		vertex(0, 419)
		endShape();
		image(img, 3, 355)
		noStroke();
	} else { }
}
function layoutKeser() {
	push()
	if (itsWebGL) {
		fill(255)
		beginShape();
		vertex(0, -50);
		vertex(900, 100);
		vertex(0, 100);
		endShape(CLOSE);
		image(img, 3, 0)
	} else {
		fill(255)
		noStroke();
		beginShape(CLOSE)
		vertex(0, 319)
		vertex(600, 419)
		vertex(0, 419)
		endShape();
		image(img, 3, 355)
	}
	pop()
}

//AUTOMATIN
function setupLayoutAutomatin() {
	//COLOR
	if (done) {
		let rnd = Math.floor(random(2));
		let rndB = Math.floor(random(3));
		if (rnd === 0) {
			colorOne = "72, 116, 174";
			spaceTypeColor = 255;
			r = 72;
			g = 116;
			b = 174;
		} else {
			colorOne = "209, 112, 60";
			spaceTypeColor = 255;
			r = 209;
			g = 112;
			b = 60;
		}
		if (rndB === 0) {
			colorTwo = "209, 112, 60";
			spaceTypeColor = 255;
			Br = 209;
			Bg = 112;
			Bb = 60;
		} else if (rndB === 1) {
			colorTwo = "72, 116, 174";
			spaceTypeColor = 255;
			Br = 72;
			Bg = 116;
			Bb = 174;
		} else {
			colorTwo = "255, 255, 255";
			Br = 255;
			Bg = 255;
			Bb = 255;
		}
		if (colorOne === colorTwo) {
			setupLayoutAutomatin()
		} else if (colorTwo === "255, 255, 255") {
			if (colorOne !== "209, 112, 60") {
				colorThree = "209, 112, 60";
				spaceTypeColor = 255;
				r3 = 209;
				g3 = 112;
				b3 = 60;
			} else {
				colorThree = "72, 116, 174";
				spaceTypeColor = 255;
				r3 = 72;
				g3 = 116;
				b3 = 174;
			}
		} else {
			colorThree = "255, 255, 255";
			r3 = 255;
			g3 = 255;
			b3 = 255;
		}
	} // END COLOR

	if (Number(ids) < 11 || undefined) {

	} else if (Number(ids) > 10) {
		size = 42;
		fill(241);
	} else { }


}
function layoutAutomatin() {

	if (itsWebGL) {
		fill(255)
		beginShape();
		vertex(0, -140);
		vertex(500, 100);
		vertex(0, 100);
		vertex(0, 75);
		endShape(CLOSE);
		image(img, 0, -140)
	} else {
		stroke(241, 241, 241)
		push()
		fill(255)
		beginShape();
		vertex(0, height / 2 + 20);
		vertex(width / 2, height);
		vertex(0, height);
		vertex(0, height / 2 + 20);
		endShape();

		beginShape();
		vertex(0, height / 2);
		vertex(width / 2, height);
		vertex(0, height);
		vertex(0, height / 2);
		endShape();
		pop()
		image(img, -1, 220)
	}
}

//LOSSE FUNCTIONS
function splitIt(itemPiece, itemIndex) {
	itemPiece = itemPiece.join("");
	itemPiece = itemPiece.split(" ");
	tempArray.push(itemPiece[0]);
	tempArray.push(itemPiece[1]);
} // END SPLITIT

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
} //END getUrlVars
		
function ns(x, y, z, scale_, min_, max_) {
	return map(
		noise(x * scale_, y * scale_, z * scale_),
		0, 1, min_, max_);
}




//TEMPLATES VOOR PLAATJES
function textOnTop() {
	console.log("textOnTop");

	if (done) {
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsboven, 0, 100);
		//HOEK LINKSONDER WIT
		noStroke();
		console.log(255);
		fill(255);
		beginShape();
		vertex(0, 637);
		vertex(1090, 637);
		vertex(0, 478);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(0, 637);
		vertex(1070, 637);
		vertex(0, 482);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img1, -20, 530);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	stroke(r, g, b);
	strokeWeight(5);
	line(0, 100, 1260, 100);
	noStroke();
	fill(255);
	beginShape();
	vertex(0, 0);
	vertex(1260, 0);
	vertex(1260, 100);
	vertex(0, 100);
	endShape(CLOSE);
	textAlign(CENTER);
	fill(r, g, b);
	if (vacTekst.length > 29 && vacTekst.length < 40) {
		textSize(55);
	} else if (vacTekst.length >= 40 && vacTekst.length < 50) {
		textSize(48);
	} else if (vacTekst.length >= 50 && vacTekst.length < 60) {
		textSize(42);
	} else if (vacTekst.length >= 60) {
		textSize(36);
	} else {
		textSize(size);
	}
	// Moet ik rechtzetten met de for loop en textpiece[i]
	text(vacTekst, 590, 80);
	//	for(let i = 0; i < textpiece.length; i++){  
	//	text(textpiece[i], 420 + (330 * i), 70); 	
	//	}
} // END textOnTop
function keserTopLeft() {
	console.log("keserTopLeft");
	if (done) {
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(linksonder, 0, 0);
		//HOEK LINKSBOVEN WIT
		noStroke();
		fill(255);
		beginShape();
		vertex(0, 0);
		vertex(1090, 0);
		vertex(0, 155);
		endShape(CLOSE);
		//HOEK LINKSBOVEN RGB    
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(0, 0);
		vertex(1070, 0);
		vertex(0, 150);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img1, -20, -20);
		//img1.resize(50, 100);
		fill(r, g, b);
		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(255);
		strokeWeight(4);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	console.log(setHeight);
	console.log(startX);
	console.log(startY);

	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25);
	//PRAATHAAK	
	if (setHeight > 4) {
		beginShape();
		vertex(startX - spelingX - 3, startY - 160);
		vertex(585, 50);
		vertex(startX - spelingX - 3, startY);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 - spelingX, startY - (45 * setHeight) - 7);
		vertex(585, 50);
		vertex(startX + 20 - spelingX, startY - (45 * setHeight) - 7);
		endShape();
	}
	//TEXT EIGENSCHAPPEN
	if (done) {
		//TEXT EIGENSCHAPPEN
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(255);
	}
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END keserTopLeft
function keserTopRight() {
	console.log("keserTopRight");
	if (done) {
		background(Br, Bg, Bb);
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsonder, 0, 0);
		//HOEK LINKSBOVEN WIT
		noStroke();
		fill(255);
		beginShape();
		vertex(1260, 0);
		vertex(70, 0);
		vertex(1260, 155);
		endShape(CLOSE);
		//HOEK LINKSBOVEN BLAUW    
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(1260, 0);
		vertex(90, 0);
		vertex(1260, 150);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img1, 620, -20);
		//img1.resize(50, 100);
		fill(r, g, b); //BLAUW

		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(255);
		strokeWeight(4);
	}

	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,               //waar op x
		startY - 10 - (45 * setHeight),         //waar op y
		375 + spelingX,                         //hoe breed
		90 + (setHeight * 100) - spelingY,    	//hoe hoog
		25); 									// EINDE RECT

	//PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex((startX * 4) - spelingX - 3, startY - 190);
		vertex(585, 50);
		vertex((startX * 4) - spelingX - 3, startY - 30);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 + spelingX, startY - (45 * setHeight) - 8);
		vertex(585, 50);
		vertex(startX + 20 + spelingX, startY - (45 * setHeight) - 8);
		endShape();
	}

	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(255);
	}

	//TEXT
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END keserTopRight
function keserBotLeft() {
	console.log("keserBotLeft");
	if (done) {
		console.log("case= " + setHeight);
		console.log("id= " + ids);
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(linksboven, 0, 0);
		//HOEK LINKSONDER WIT
		noStroke();
		fill(255);

		beginShape();
		vertex(0, 637);
		vertex(1090, 637);
		vertex(0, 478);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(r, g, b);

		beginShape();
		vertex(0, 637);
		vertex(1070, 637);
		vertex(0, 482);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img1, -20, 530);

		//STEL IN WAAR HET TEKSTVLAK KOMT.
		fill(r, g, b);
		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(255);
		strokeWeight(4);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25);
	//PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex(startX - spelingX - 13, startY + 160);
		vertex(585, 575);
		vertex(startX - spelingX - 13, startY);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 - spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		vertex(585, 575);
		vertex(startX + 20 - spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		endShape();
	}
	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		fill(255);
	}
	// TEXTPIECES
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END keserBotLeft
function keserBotRight() {
	console.log("keserBotRight");
	if (done) {
		console.log("case= " + setHeight);
		console.log("id= " + ids);
		// 255,123,0 ORANDGE
		// 9,149,204 // BLAUW		
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsboven, 0, 0);
		noStroke();
		fill(255);
		beginShape();
		vertex(1200, 637);
		vertex(50, 627);
		vertex(1200, 466);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(1200, 637);
		vertex(90, 627);
		vertex(1200, 470);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img1, 618, 530);
		fill(255, 123, 0); //BLAUW
		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(255);
		strokeWeight(4);
	}

	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25                                       //border-radius
	);
	// PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex(startX + 270 + spelingX - 3, startY + 160);
		console.log(spelingX + "spelingX");
		vertex(585, 575);
		vertex(startX + 270 + spelingX - 3, startY);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 + spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		vertex(585, 575);
		vertex(startX + 20 + spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		endShape();
	}
	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(255);
	}
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END keserTopRight
function kkeserTopLeft() {
	console.log("kkeserTopLeft");
	if (done) {
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(linksonder, 0, 0);
		//HOEK LINKSBOVEN WIT
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(0, 0);
		vertex(1090, 0);
		vertex(0, 155);
		endShape(CLOSE);
		//HOEK LINKSBOVEN RGB    
		noStroke();
		fill(255);
		beginShape();
		vertex(0, 0);
		vertex(1070, 0);
		vertex(0, 150);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img2, -20, -20);
		//img1.resize(50, 100);
		//STEL IN WAAR HET TEKSTVLAK KOMT.
		fill(r, g, b);

		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(255);
		strokeWeight(4);
	}

	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25                                       //border-radius
	);
	// PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex(startX - spelingX - 12, startY - 160);
		vertex(585, 50);
		vertex(startX - spelingX - 12, startY);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 - spelingX, startY - (45 * setHeight) - 7);
		vertex(585, 50);
		vertex(startX + 20 - spelingX, startY - (45 * setHeight) - 7);
		endShape();

	}

	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(255);
	}
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX + 5 - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END kkeserTopLeft
function kkeserTopRight() {
	console.log("kkeserTopRight");
	if (done) {
		// 255,123,0 ORANDGE
		// 9,149,204 // BLAUW	
		background(Br, Bg, Bb);
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsonder, 0, 0);
		//HOEK LINKSBOVEN WIT
		noStroke();
		fill(255);
		beginShape();
		vertex(1260, 0);
		vertex(70, 0);
		vertex(1260, 155);
		endShape(CLOSE);
		//HOEK LINKSBOVEN BLAUW    
		noStroke();
		fill(255);
		beginShape();
		vertex(1260, 0);
		vertex(90, 0);
		vertex(1260, 150);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img2, 620, -20);
		fill(255); //BLAUW
		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(r, g, b);
		strokeWeight(4);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25                                       //border-radius
	);
	// PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex((startX * 4) - spelingX - 3, startY - 190);
		vertex(585, 50);
		vertex((startX * 4) - spelingX - 3, startY - 30);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 + spelingX, startY - (45 * setHeight) - 7);
		vertex(585, 50);
		vertex(startX + 20 + spelingX, startY - (45 * setHeight) - 7);
		endShape();
	}
	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(r, g, b);
	}

	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight) + 3,     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END kkeserTopRight
function kkeserBotLeft() {
	console.log("kkeserbotleft");
	if (done) {
		console.log("case= " + setHeight);
		console.log("id= " + ids);
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(linksboven, 0, 0);
		//HOEK LINKSONDER WIT
		noStroke();
		fill(255);

		beginShape();
		vertex(0, 637);
		vertex(1090, 637);
		vertex(0, 478);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(255);

		beginShape();
		vertex(0, 637);
		vertex(1070, 637);
		vertex(0, 482);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img2, -20, 530);
		fill(255);
		console.log("spelingX= " + spelingX);
		console.log("spelingY= " + spelingY);
		console.log("setHeight= " + setHeight);
		stroke(r, g, b);
		strokeWeight(4);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25                                       //border-radius
	);
	// PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex(startX - spelingX - 13, startY + 160);
		vertex(585, 575);
		vertex(startX - spelingX - 13, startY);
		endShape();

	} else {
		beginShape();
		vertex(startX + 160 - spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		vertex(585, 575);
		vertex(startX + 20 - spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		endShape();
	}

	//TEXT EIGENSCHAPPEN
	if (done) {
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(r, g, b);
	}

	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END kkeserBotLeft
function kkeserBotRight() {
	console.log("kkeserBotRight");
	if (done) {
		// 255,123,0 ORANDGE
		// 9,149,204 // BLAUW	
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsboven, 0, 0);
		noStroke();
		fill(r, g, b);
		beginShape();
		vertex(1200, 637);
		vertex(50, 627);
		vertex(1200, 460);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(255);
		beginShape();
		vertex(1200, 637);
		vertex(90, 627);
		vertex(1200, 470);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img2, 618, 535);
		fill(r, g, b); //BLAUW
		//SWITCH MAKEN VOOR WOORDLENGTE,, ONG. 100 ERBIJ (4e parameter) VOOR ELK WOORD.
		stroke(r, g, b);
		strokeWeight(4);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	rect(
		(startX - 15) - spelingX,                //waar op x
		startY - 10 - (45 * setHeight),           //waar op y
		375 + spelingX,                          //hoe breed
		90 + (setHeight * 100) - spelingY,    //hoe hoog
		25                                       //border-radius
	);
	// PRAATHAAK
	if (setHeight > 4) {
		beginShape();
		vertex(startX + spelingX - 3, startY + 160);
		vertex(585, 575);
		vertex(startX + spelingX - 3, startY);
		endShape();
	} else {
		beginShape();
		vertex(startX + 160 + spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		vertex(585, 575);
		vertex(startX + 20 + spelingX, startY + (setHeight * 90) - (38 * setHeight) - (12 - (setHeight * 3)));
		endShape();
	}
	if (done) {
		//TEXT EIGENSCHAPPEN
		noStroke();
		textSize(size);
		textAlign(CENTER);
		//textStyle(BOLD);
		//textFont(font); 	
		fill(255);
	}
	for (let i = 0; i < textpiece.length; i++) {
		console.log(setHeight);
		text(textpiece[i],
			startX - spelingX,           //waar op x
			startY + (i * 90) - (42 * setHeight),     //waar op y
			350 + spelingX,                     //hoe breed
			175 + (i * 90) - spelingY,   //hoe hoog
			70, 70);
	} //End for TEXTPIECES
	//
	//
	//
	//
} // END kkeserTopRight
function ktextOnTop() {
	console.log("ktextOnTop");
	if (done) {
		background(Br, Bg, Bb); //ORANGE
		//BACKGROUNG IMAGE IN HALVE OPACITY
		tint(255, 127); // Display at half opacity
		image(rechtsboven, 0, 100);
		//HOEK LINKSONDER WIT
		noStroke();
		console.log(255);
		fill(r, g, b);
		beginShape();
		vertex(0, 637);
		vertex(1090, 637);
		vertex(0, 478);
		endShape(CLOSE);
		//HOEK LINKSONDER BLAUW    
		noStroke();
		fill(255);
		beginShape();
		vertex(0, 637);
		vertex(1070, 637);
		vertex(0, 482);
		endShape(CLOSE);
		//LOGO
		tint(255);
		image(img2, -20, 530);
		stroke(r, g, b);
		strokeWeight(5);
		line(0, 100, 1260, 100);
		noStroke();
		fill(255);
		beginShape();
		vertex(0, 0);
		vertex(1260, 0);
		vertex(1260, 100);
		vertex(0, 100);
		endShape(CLOSE);
		textAlign(CENTER);
		fill(r, g, b);
	}
	//STEL IN WAAR HET TEKSTVLAK KOMT.
	if (vacTekst.length > 29 && vacTekst.length < 40) {
		textSize(55);
	} else if (vacTekst.length >= 40 && vacTekst.length < 50) {
		textSize(48);
	} else if (vacTekst.length >= 50 && vacTekst.length < 60) {
		textSize(42);
	} else if (vacTekst.length >= 60) {
		textSize(36);
	} else {
		textSize(size);
	}
	// Moet ik rechtzetten met de for loop en textpiece[i]
	textAlign(CENTER)
	text(vacTekst, width / 2, 80);
	//	for(let i = 0; i < textpiece.length; i++){  
	//	text(textpiece[i], 420 + (330 * i), 70); 	
	//	}
} // END ktextOnTop


//functions spacetype
function sinEngine(Offset, xLength, xCounter, yLength, yCounter, Speed, slopeN) {
	var sinus = sin((frameCount * Speed / 100 + xCounter / xLength + yCounter / yLength + Offset));
	var sign = (sinus >= 0 ? 1 : -1);
	var sinerSquare = sign * (1 - pow(1 - abs(sinus), slopeN));
	return sinerSquare;
}

function cosEngine(Offset, xLength, xCounter, yLength, yCounter, Speed, slopeN) {
	var cosus = cos((frameCount * Speed / 100 + xCounter / xLength + yCounter / yLength + Offset));
	var sign = (cosus >= 0 ? 1 : -1);
	var coserSquare = sign * (1 - pow(1 - abs(cosus), slopeN));
	return coserSquare;
}

function cosEngine2(Offset, xLength, xCounter, yLength, yCounter, Speed, slopeN) {
	var cosus = cos((frameCount * Speed / 100 + xCounter / xLength + yCounter / yLength + Offset) * 2);
	var sign = (cosus >= 0 ? 1 : -1);
	var coserSquare = sign * (1 - pow(1 - abs(cosus), slopeN));
	return coserSquare;
}

function setValuesSpaceType() {
	let tempArr = vacTekst.split(" ")
	let tempArrLengths = tempArr.map(yo => yo.length);
	let maxLenght = Math.max.apply(Math, tempArrLengths);

	for (let i = 0; i < tempArrLengths.length; i++) {
		if (tempArrLengths[i] < maxLenght) {
			while (tempArrLengths[i] < maxLenght) {
				tempArr[i] = tempArr[i] + " ";
				tempArrLengths = tempArr.map(p => p.length);
			}
		}
	}
	tempArr.forEach((yo => console.log(yo.length)))
	inpText = tempArr.join('')
	// defaultStart = [33,7,5,5,-2,0,0,0,0,0,0,0,3.1,3.1,20,40,2,0,0,0,0]
	//instellen values van de in de spaceTypeFunctie bepaalde waardes 
	column = maxLenght
	row = tempArrLengths.length;
	tracking = TheSettingsForThisOne[2];
	lineSpace = TheSettingsForThisOne[3];
	speed = TheSettingsForThisOne[4];
	zWave = TheSettingsForThisOne[5];
	xWave = TheSettingsForThisOne[6];
	yWave = TheSettingsForThisOne[7];
	yWavezRot = TheSettingsForThisOne[8];
	yWavexStr = TheSettingsForThisOne[9];
	xStrechWave = TheSettingsForThisOne[10];
	yStrechWave = TheSettingsForThisOne[11];
	xOffset = TheSettingsForThisOne[12];
	yOffset = TheSettingsForThisOne[13];
	typeX = TheSettingsForThisOne[14];
	typeY = TheSettingsForThisOne[15];
	typeStroke = TheSettingsForThisOne[16];
	xRotCamera = TheSettingsForThisOne[17];
	yRotCamera = TheSettingsForThisOne[18];
	zRotCamera = TheSettingsForThisOne[19];
	zoomCamera = TheSettingsForThisOne[20];
	bkgdColor = color(r, g, b);

}

function drawValuesSpaceType() {
	xSpace = typeX + tracking;
	ySpace = typeY + lineSpace + yStrechWave / 2;
	push()
	if (fullText == true) {
		runLength = row * column;
		translate(-column * xSpace / 2, -row * ySpace / 2);
	} else {
		runLength = inpText.length;
		if (inpText.length >= column) {
			translate(-column * xSpace / 2, -floor(inpText.length / column) * ySpace / 2);
		} else {
			translate(-inpText.length * xSpace / 2, -floor(inpText.length / column) * ySpace / 2);
		}
	}
	// THE TYPE
	for (var i = 0; i < runLength; i++) {
		if (fullText == true) {
			letter_select = i % inpText.length;
		} else {
			letter_select = i;
		}

		fill(r, g, b);

		zWaver = sinEngine(zWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1) * zWave;
		xWaver = map(sinEngine(xWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1), -1, 1, 0, xWave);
		yWaver = sinEngine(yWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1) * yWave;
		yWavezRoter = cosEngine(yWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1) * yWavezRot;
		yWavexStrer = map(cosEngine2(yWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1), -1, 1, 0, yWavexStr);
		strecherX = map(sinEngine(xStrechWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1), -1, 1, 0, xStrechWave) + yWavexStrer;

		if (floor(i / column) % 2 == 1) {
			strecherY = map(sinEngine(yStrechWaveChecked, xOffset, i % column, yOffset, floor(i / column), speed, 1), -1, 1, 0, yStrechWave);
		} else {
			strecherY = map(sinEngine(yStrechWaveChecked + PI, xOffset, i % column, yOffset, floor(i / column), speed, 1), -1, 1, 0, yStrechWave);
		}

		push();
		translate((i % column) * xSpace + xWaver, floor(i / column) * ySpace + yWaver, zWaver);
		translate(-(typeX + strecherX) / 2, -(typeY + strecherY) / 2);

		// rotation adjustments
		var preZAnchX = sinEngine(zWaveChecked, xOffset, (i % column) - 1, yOffset, floor((i) / column), speed, 1) * zWave;
		var postZAnchX = sinEngine(zWaveChecked, xOffset, (i % column) + 1, yOffset, floor((i) / column), speed, 1) * zWave;
		var diffZAnchorX = postZAnchX - preZAnchX;
		var newYrot = atan2(abs(diffZAnchorX), 2 * xSpace);
		if (preZAnchX > postZAnchX) { rotateY(newYrot); } else { rotateY(-newYrot); }

		var preZAnchY = sinEngine(zWaveChecked, xOffset, i % column, yOffset, floor(i / column) - 1, speed, 1) * zWave;
		var postZAnchY = sinEngine(zWaveChecked, xOffset, i % column, yOffset, floor(i / column) + 1, speed, 1) * zWave;
		var diffZAnchorY = postZAnchY - preZAnchY;
		var newXrot = atan2(abs(diffZAnchorY), 2 * ySpace);
		if (preZAnchY > postZAnchY) { rotateX(-newXrot); } else { rotateX(newXrot); }

		rotateZ(radians(yWavezRoter));
		keyboardEngine();
		pop();
	}
	pop();
	push()
	translate(-400, 150);
	drawcheckCompany()
	pop();
}
