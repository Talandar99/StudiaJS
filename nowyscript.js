var arrayWithTitles = [];
var arrayWithData = [[], [], [], [], []];

function loadXMLDoc(nazwadokumentu) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var depth = 0;
			this.responseXML.childNodes[1].childNodes.forEach(element => { dive(element, depth) })
		}
	};
	xmlhttp.open("GET", nazwadokumentu, true);
	xmlhttp.send();
	console.log(arrayWithTitles);
	console.log(arrayWithData);
}

function dive(children, depth) {
	if (children.childNodes.length == 0) {
		if (!children.data.includes("\n")) {
			if (arrayWithTitles.includes(children.parentNode.localName)) {
				arrayWithData[arrayWithTitles.indexOf(children.parentNode.localName)].push(children.nodeValue);
			} else {
				arrayWithTitles.push(children.parentNode.localName);
				arrayWithData[arrayWithTitles.indexOf(children.parentNode.localName)].push(children.nodeValue);
			}
			let actualindex = arrayWithTitles.indexOf(children.parentNode.localName);
			for (let index = 0; index < actualindex; index++) {
				if (arrayWithData[arrayWithData[index].length]!=arrayWithData[arrayWithData[actualindex].length]) {	
					arrayWithData[index].push(" ");		
				}
			}
		}
	} else {
		children.childNodes.forEach(child => {
			dive(child, depth + 1);
		});
	}
}
loadXMLDoc("przychodnia.xml");// nazwa xml'a




//należy po kolei zczytywać elementy wraz z ich typem
//przez typ rozumię się nazwę rodzica elementu (children.parentNode.localName)
//jeżeli typ elementu w wierszu powtórzy się powinien zostać utworzony w następnym wierszu




//this.responseXML
//has "children"
//each "children" can also have a "children" (and soo on)
//each element have it's name located in localName variable
//if "children " don't have any children you should use it's innerHTML


//create table that is based on this