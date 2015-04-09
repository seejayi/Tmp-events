var Event = $resource('/events/:eventId', {eventId:'@id'});
var event = Event.get({eventId:123}, function() {
  event.abc = true;
  event.$save();
});