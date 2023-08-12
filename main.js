Webcam.set({
  width : 500 ,
  height : 300 ,
  image_format : "png" ,
  png_quality : 100
});

Camera = document.getElementById("camera");

Webcam.attach(Camera);

function takepic() {
  Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id="picture" src="'+data_uri+'"/>';
  });
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HzzEcMj_l/model.json",modelloaded);

function modelloaded(){
console.log("model is loaded");
}

function check(){
img = document.getElementById("picture") ;
classifier.classify(img , gotresult);
}

function gotresult(error , result){
if (error) {
  console.log(error);
} else {
  console.log(result);
  document.getElementById("Nameofobj").innerHTML = result[0].label ;
  document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(2) ;
}
}
