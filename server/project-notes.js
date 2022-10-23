/* 
Testing in Node: 
test runner is Jest

Test fixtures are in the __tests__ folder

Assertions are made with the Jest expect function

Mocking is protecting our data layer from being modified by our tests

write file names as .test.js or .spec.js

in order to horizontally scale our application, we need to make sure that our server is stateless.  The solution is to remove the state from the server memory and persist it somewhere else. Ex: a database that exists independently of our node processes. 


worker threads module allows parrallel JavaScript threads to be executed on a single CPU core.  This is useful for CPU intensive tasks.  It is not useful for I/O intensive tasks.

node worker threads are based on the web worker API.  They are not the same as web workers.  Web workers are not available in node.  node web workers run on v8 isolates

unlike clusters worker threads are not for horizontal scaling.  They are for vertical scaling.  They are for CPU intensive tasks.  They are not for I/O intensive tasks.

clusters run multiple instances of node on seperate processes on the same machine. workers run multiple threads on the same process. *** This means worker threads share memory clusters do not. ***

Mongoose creates a version id for each document.  This is a unique identifier that is used to track changes to the document.  It is used to implement optimistic concurrency control. Allows for schema version control 


*/
