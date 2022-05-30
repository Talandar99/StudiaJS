function loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        	if (this.readyState == 4 && this.status == 200) {
         	display(this);
		}
	};
	xmlhttp.open("GET", "przychodnia.xml", true);
	xmlhttp.send();
}

function display(xml) {
	var xmlDoc = xml.responseXML;
	var ludzie = Array.from( xmlDoc.getElementsByTagName("osoba"));
	ludzie = ludzie.filter( p => (p.querySelector("miasto").innerHTML == "Bydgoszcz"));
	let table = document.querySelector("table");
	displayTable(table, ludzie);
}	


loadXMLDoc();
