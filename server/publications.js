/**
 * Created by amyli on 10/7/15.
 */

Meteor.publish('messages', function () {
  return Messages.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.github.username": 1
  }});
});

