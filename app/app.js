var evtSource = new EventSource('01.py');
var eventList = document.querySelector('ul');
evtSource.onmessage = function(e) {
    var newElement = document.createElement("li");
  
    newElement.textContent = "message: " + e.data;
    eventList.appendChild(newElement);
  }

