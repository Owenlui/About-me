const images = [
    './img/Golf.jpg',//index 0
    './img/Hiking.jpg',
    './img/squidFishing.jpg',
    './img/Tennis.jpg' //index 3
];
//set values to tags
const placeholder = document.getElementById('placeholder');//targeting the ID of my golf picture
const button = 0; //const when value not expected to change
const lastImage = images.length -1;//lenght = items in array and -1 because index 0 already displayed, last image after 3 clicks
let currentImage = 0; //let because value will change

//next button
const nextButton= document.getElementById('next')
nextButton.addEventListener('click',()=>{
    const imgTag = document.getElementById(placeholder);
    currentImage++; //after click, value increases by 1, which means index 1/image 2 will be shown. 
    if(currentImage >= lastImage) {
        currentImage = 3; //if value is 3 or exceeds 3, it'll set back to 3, containing the user to the last image 
    }
    placeholder.src = images [currentImage];
    });

//Previous button
  const prevButton= document.getElementById('prev')
  prevButton.addEventListener('click',()=>{
  const imgTag = document.getElementById(placeholder);
  currentImage--; //after click, value decreases by 1
  if(currentImage <= 0) {
    currentImage = 0; 
    }
    placeholder.src = images[currentImage];
});

window.alert ("Website Currently Under Development") // alert, which will be commented out after completion
