var downloadButton = document.getElementById("at-downloadx");
var counter = 40;
var newElement = document.createElement("span");
newElement.innerHTML = "Please Wait 40 sec";
var id;
downloadButton.parentNode.replaceChild(newElement, downloadButton);

function startDownload() {
	this.style.display = 'none';
	id = setInterval(function() {
		counter--;
		if (counter < 0) {
			newElement.parentNode.replaceChild(downloadButton, newElement);
			clearInterval(id);
		} else {
			newElement.innerHTML = "Please Wait" + " " + counter.toString() + " " + " sec.... ";
		}
	}, 1500);
};

var clickbtn = document.getElementById("btn-at");
clickbtn.onclick = startDownload;
