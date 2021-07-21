var mivideo = document.getElementById("video1")

function playPause(){
  if(mivideo.paused){
  mivideo.play();
  }else{
  mivideo.pause();
  }
}