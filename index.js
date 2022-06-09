
// Select some elements...

let header = document.querySelector('#page-header')         // id selector
header.style.textAlign = "left";

let dogImages = document.querySelectorAll('.dog-image')     // class selector
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.transform = "rotate(180deg)";
}

let dog = document.querySelectorAll('.dog-name')            // class selector
for (let i=0; i<dog.length; i++) {
    dog[i].style.textAlign = "left";
}