[
  "assets/light-dirt.jpg",
  "assets/dark-dirt.jpg",
  "assets/rock.jpg",
  "assets/copper.jpg",
  "assets/black-stone.jpg",
  "assets/silver.jpg",
].forEach(function (item) {
  for (var i = 0; i < 10; i++) {
    var img = new Image();
	img.id = i
    img.src = item;
    img.style.height = "10%";
    img.style.width = "10%";
	img.onmouseenter = hide;
	img.onmousemove = hide;
	img.onmousedown = hide;
	img.onmouseleave = hide;
    document.body.appendChild(img);
  }
});


function hide(elem) {
	console.log(elem)
	if (elem["fromElement"]["localName"] == "img"){

	 elem["fromElement"].style.visibility = "hidden";
	 elem["fromElement"].style.height = "0px"
	 elem["fromElement"].style.margin = "-4px -4px -4px -4px;";
	}
}