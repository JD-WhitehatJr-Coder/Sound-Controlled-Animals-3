var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;


function startClassifictaion()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9mZJVkYaM/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if(error){
    console.error(error);
  }
  else{
console.log(results);
  random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    console.log("Red "+random_number_r);
    console.log("Green "+random_number_g);
    console.log("Blue "+random_number_b);
    document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';
      document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
      document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';



      img_1=document.getElementById("image1");       
        
      if (results[0].label=="Roar") {
        img_1.src="lion.png";
      }
      else if (results[0].label=="meowing") {
          img_1.src="cat.png";
      }
      else if (results[0].label=="Barking") {
        img_1.src="dog.png";
    }
      else if (results[0].label=="Mooing"){
          img_1.src="cow.png";
      }
      else {
        img_1.src="ear-nutraceutical-insurance-solutions-supplement-insurance-12.png";
      }
  }
}