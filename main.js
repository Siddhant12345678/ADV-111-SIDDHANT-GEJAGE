Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});
document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>"
});
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hTPEDMrag/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Is Loaded!");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first Prediction is"+Prediction1;
    speak_data2="The second Prediction is"+Prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}