/**
 * Created by amyli on 10/5/15.
 */

Messages = new Mongo.Collection("messages");
Messages.insert({greeting: "hello"}, function() {});

Meteor.startup(function () {
  if (Messages.find().count() == 0) {
    for (var i = 0; i < 10; i++) {
      Messages.insert({text: "A dummy message"});
    }
  }
});

Messages.allow({
  insert: function (userId, doc) {
    return (userId && doc.user == userId);
  }
});

//Messages.insert({
  //text: $('.input-box_text').val(),
  //user: "someoneElseID",
  //timestamp: Date.now()
//});

//Template.footer.events({
  //'keypress input': function(e) {
    //var inputVal = $('.input-box_text').val();
    //if(!!inputVal) {
      //var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
      //if (charCode == 13) {
        //e.stopPropagation();
        //Messages.insert({text: $('.input-box_text').val()});
        //$('.input-box_text').val("");
        //return false;
      //}
    //}
  //}
//});