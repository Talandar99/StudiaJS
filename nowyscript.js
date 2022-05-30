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
