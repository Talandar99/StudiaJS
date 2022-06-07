function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200)
			display(this);
	};
	xmlhttp.open("GET", "przychodnia.xml", true);
	xmlhttp.send();
}

function dig(parent, table) {

	if (parent.childElementCount != null) {
		if (parent.childElementCount == 0) {
			document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].insertCell().innerHTML = parent.innerHTML;
		} else {
			table.insertRow().innerHTML = (parent.localName);
			document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1];
			parent.childNodes.forEach(child => { dig(child, table) });
		}
	} else {
		table.insertRow();
	}
}

function display(xml) {
	var startingPoint = "gabinet";
	var xmlDoc = xml.responseXML;
	var mainArray = Array.from(xmlDoc.getElementsByTagName(startingPoint));
	document.getElementsByTagName('body')[0].appendChild(document.createElement('table'));
	table = document.getElementsByTagName('table')[0];
	table.setAttribute('border', '1');

	mainArray.forEach(element => { dig(element, table); });

}
loadXMLDoc();
