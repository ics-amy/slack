/**
 * Created by amyli on 10/7/15.
 */

Meteor.methods({
  newMessage: function (message) {
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message);
  }
});