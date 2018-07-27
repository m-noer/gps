
$(document).ready(function(){
  var database = firebase.database();
  var ledStatus, coba;

  // database.ref().on("value", function(snap){
  //   ledStatus = snap.val().ledStatus;
  //   coba = snap.val().coba;
  //   if(ledStatus == 1){
  //     $(".lightStatus").text("The light is on");
  //   } else {
  //     $(".lightStatus").text("The light is off");
  //   }
  // });





  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");
    console.log("led = " + ledStatus);
    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
