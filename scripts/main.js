const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/buncho.jpg"){
        myImage.setAttribute("src", "images/buncho2.jpg");
    }else{
        myImage.setAttribute("src", "images/buncho.jpg");
    }
};
