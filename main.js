Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingmode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
