function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			display(this);
		}
	};
	xmlhttp.open("GET", "przychodnia.xml", true);
	xmlhttp.send();
}

function display(xml) {
	var xmlDoc = xml.responseXML;
	var gabinety = Array.from(xmlDoc.getElementsByTagName("gabinet"));
	for (var i = 0; i < gabinety.length; i++) {
		gabinety[i].childNodes.forEach(child => {
			if (child.childElementCount != null) {
				if (child.childElementCount == 0) {
					console.log(child.innerHTML);
				} else {
					console.log(child);
				}
			}
		});
	}
}
loadXMLDoc();