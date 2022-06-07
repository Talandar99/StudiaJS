function loadXMLDoc(nazwadokumentu) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementsByTagName('body')[0].appendChild(document.createElement('table')).setAttribute('border', '2');
			this.responseXML.childNodes.forEach(element => { dig(element, document.getElementsByTagName('table')[0]); });
		}
	};
	xmlhttp.open("GET", nazwadokumentu, true);
	xmlhttp.send();
}

function dig(parent, table, x, y) {
	if (parent.childElementCount != null) {
		if (parent.childElementCount == 0) {
			table.insertRow();
			document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].insertCell().innerHTML = parent.localName+": ";
			document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].insertCell().innerHTML = parent.innerHTML;
		} else {
			table.insertRow().innerHTML = (parent.localName);
			parent.childNodes.forEach(child => { dig(child, table) });
		}
	}
}
loadXMLDoc("przychodnia.xml");// nazwa xml'a