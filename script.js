
		function loadXMLDoc() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                display(this);
              }
            };
            xmlhttp.open("GET", "baza.xml", true);
            xmlhttp.send();
          }
  
          function displayTableHead( table, osoba) {
            //console.log( osoba)
            let thead = table.createTHead();
            let row = thead.insertRow();
            for( let key of osoba.children) {
                  //console.log( key);
              //console.log( key.querySelector("imie1").innerHTML);
              let th = document.createElement("th");
              let text = document.createTextNode( key.nodeName);
              th.appendChild(text);
              row.appendChild(th);
            }
          }		
  
          function displayTable( table, data) {
            displayTableHead( table, data[0])
            for (let osoba of data) {
              let row = table.insertRow();
              for ( let key of osoba.children) {
                  //console.log( key)
                  let cell = row.insertCell();
                  let text = document.createTextNode( key.innerHTML);
                  cell.appendChild(text);
              }
            }
          }		
  
          function display(xml) {
            var xmlDoc = xml.responseXML;
            var ludzie = Array.from( xmlDoc.getElementsByTagName("osoba"));
            //console.log( ludzie[0].querySelector("miasto").innerHTML);
            ludzie = ludzie.filter( p => (p.querySelector("miasto").innerHTML == "Bydgoszcz"));
            //console.log( ludzie);
            let table = document.querySelector("table");
            displayTable(table, ludzie);
          }	
  
          loadXMLDoc();