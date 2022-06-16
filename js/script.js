document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(212, 45%, 89%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "15px";

const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.gap = "30px";
wrapper.style.justifyContent = "center";
wrapper.style.maxWidth = "375px";
wrapper.style.margin = "30px auto";


console.log(wrapper);

function createQrCode() {
	const container = document.createElement("container");
	container.className = "container";
	container.style.padding = "15px 15px";
	container.style.width = "300px";
	container.style.backgroundColor = "hsl(0, 0%, 100%)";
	container.style.borderRadius = "20px";
	container.style.position = "relative";

	const qrCodeImg = document.createElement("img");
	qrCodeImg.className = "qr-code-img";
	qrCodeImg.src = "./images/image-qr-code.png";
	qrCodeImg.style.width = "100%";
	qrCodeImg.style.borderRadius = "20px";

	const qrCodeTitleTxtDiv = document.createElement("div");
	qrCodeTitleTxtDiv.className = "qr-code-title-txt";
	qrCodeTitleTxtDiv.style.width = "261px";
	qrCodeTitleTxtDiv.style.textAlign = "center";
	qrCodeTitleTxtDiv.style.margin = "0 auto 25px";
	


	const qrCodeTitle = document.createElement("h3");
	qrCodeTitle.className = "qr-code-title";
	qrCodeTitle.innerText = "Improve your front-end skills by building projects";
	qrCodeTitle.style.fontSize = "23px";
	qrCodeTitle.style.fontWeight = "700";
	qrCodeTitle.style.color = " hsl(218, 44%, 22%)";

	const qrCodeTxt= document.createElement("p");
	qrCodeTxt.className = "qr-code-text";
	qrCodeTxt.innerText = " Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
	qrCodeTxt.style.fontSize = "15px";
	qrCodeTxt.style.fontWeight = "400";
	qrCodeTxt.style.color = "hsl(220, 15%, 55%)";
	






	document.body.appendChild(wrapper);
	wrapper.appendChild(container);
	container.appendChild(qrCodeImg);
	container.appendChild(qrCodeTitleTxtDiv);
	qrCodeTitleTxtDiv.appendChild(qrCodeTitle);
	qrCodeTitleTxtDiv.appendChild(qrCodeTxt);

}

createQrCode();
