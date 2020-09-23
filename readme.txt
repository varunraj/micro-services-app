Microservice App to create blogs and associated comments. React in front end and NodeJS , Express in backend. Docker containers that run in Kubernetes

Various Services

client => React App that runs in front end
comments => Express App to create and update comments. Broadcast events when comment is created and comment is updated after moderation
event-bus => Express App that accepts asyc events for all services and broadcast to all other services.
moderation => Express App that moderate the comments. event-bus will send the event when a comment is created. Informs comments service once moderation is completed
posts => Express App to add posts. Send event to event-bus when post is created.
query => Express App to send back the complete list of posts and comments for the client.