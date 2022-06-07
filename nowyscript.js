function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200)
			display(this);
	};
	xmlhttp.open("GET", "przychodnia.xml", true);
	xmlhttp.send();
}

function dig(parent) {
	if (parent.childElementCount != null) {
		if (parent.childElementCount == 0) {
			console.log("[" + parent.localName + "]			" + parent.innerHTML);
		} else {
			parent.childNodes.forEach(child => { dig(child) });
		}
	}
}

function display(xml) {
	var xmlDoc = xml.responseXML;
	document.getElementById('body').appendChild(table);
	var mainArray = Array.from(xmlDoc.getElementsByTagName("gabinet"));
	mainArray.forEach(element => { dig(element);});
}
loadXMLDoc();