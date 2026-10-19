let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let img1 = 1;
let img2 = 2;
let img3 = 3;

function ChangeStory() {
    img1++;
    img2++;
    img3 = img3 - 2;
    if (img2 > 3) {
        reset1();
    }
    image1.src= "images/image" + img1 + ".jpg";
    image2.src= "images/image" + img2 + ".jpg";
    image3.src= "images/image" + img3 + ".jpg";
}

function reset1() {
    img1 = 1;
    img2 = 2;
    img3 = 3;
}

image1.addEventListener("click", ChangeStory);