#AllClear
AllClear is an app to help law enforcement evacuate teachers and students who may be trapped in their classrooms during a school shooting or active shooter scenario. We used Twilio webhooks for SMS forwarding over http to let teachers send the Police Commander realtime updates about the number of students in the room and whether anyone has been injured. With a single click of a button the commander can also send out instructions en mass to teachers and students during the crisis to better coordinate strategies for safety. We chose to use IBM Cloud Functions (Similar to AWS Lambda) in a server-less setup with a NoSQL database because we needed a backend that was lightning fast & could scale easily during a crisis but not take up tons of resources during downtime. On the frontend we use vanilla JavaScript because we didn't want to have a lot of dependencies and external libraries that could potentially break the application if there were major changes. This project is designed to take advantage of FirstNet which is a dedicated broadband fast-lane for public safety and first responders.

##Tech-stack:
* Twilio web hooks - SMS forwarding over HTTP 
* Vanilla JS - For frontend development
* Apache whisk + IBM cloud functions - IBM server-less functions for auto-scaling without consuming resources
* NoSQL DB - high-performance, non-relational database
* FirstNet utilization to maintain real-time status regardless of local network connection
