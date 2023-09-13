var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
    }
recognition.onresult=function (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
    speak();
    }
}
camera=document.getElementById("camera");
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 sec";
   var utterThis=new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
   Webcam.attach(camera);
   setTimeout(function(){
    takeSnapshot();
    save();
   },5000);

}
Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
});
function takeSnapshot(){
    Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}
function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}