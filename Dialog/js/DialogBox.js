var count = 0;
var dialogBeep = new Audio('audio/Dialog_Waiting.wav');
function createDialog()
{
	var dialogDiv =	document.createElement("DIV");
	var dialogTop =	document.createElement("DIV");
	var close = document.createElement("SPAN");
	var dialogContent =	document.createElement("DIV");
	var dialogBottom =	document.createElement("DIV");
	var okButton = document.createElement("SPAN");
	dialogDiv.style.boxShadow="0px 0px 6px #888888";
	dialogDiv.className="dialogDiv center";

	dialogTop.style.height="20px";
	dialogTop.style.padding="10px";
	dialogTop.style.color="#d44836";
	dialogTop.style.background="#f0efee";

	close.className="close";
	close.addEventListener("click",closeDialog);

	dialogContent.className="dialogContent";

	okButton.className="button";
	okButton.appendChild(document.createTextNode("OK"));
	
	okButton.addEventListener("click",closeDialog);

	dialogBottom.style.margin="auto";	
	dialogBottom.appendChild(okButton);
	
	dialogTop.appendChild(close);
	dialogDiv.appendChild(dialogTop);
	dialogDiv.appendChild(dialogContent);
	dialogDiv.appendChild(dialogBottom);

	return dialogDiv;
}

function showDialog(title,message)
{
	dialogBeep.play();
	var myDialog = document.getElementsByClassName("dialogDiv")[0];
	if(!myDialog)
	{
		var container = document.createElement("DIV");
		var freezeLayer = document.createElement("DIV");
		freezeLayer.className="freezeLayer";
		freezeLayer.addEventListener("click",function blinkDialog(){
			if(count<5)
			{
				myDialog.style.boxShadow = (count % 2 == 0) ? "0px 0px 6px #888888" : "";
				count++;
				setTimeout(blinkDialog,100);
				return;
			}
			count=0;
		});
		freezeLayer.addEventListener("click",function(){dialogBeep.play();});
		myDialog = createDialog();
		container.appendChild(myDialog);
		container.appendChild(freezeLayer);
		document.body.appendChild(container);
	}
	var titleDiv = myDialog.firstElementChild;
	var content = document.getElementsByClassName("dialogContent")[0];
	if(!title)
	{
		title = "";
	}
	if(!message)
	{
		message = "";	
	}
	titleDiv.appendChild(document.createTextNode(title));
	content.appendChild(document.createTextNode(message));
	myDialog.parentElement.style.display="";
}

function closeDialog()
{
	var myDialog = document.getElementsByClassName("dialogDiv")[0];
	if(myDialog)
	{
		myDialog.parentElement.style.display="none";
		var content = document.getElementsByClassName("dialogContent")[0];
		myDialog.firstElementChild.removeChild(myDialog.firstElementChild.lastChild);	//	to remove title
		content.innerHTML="";
	}
}
