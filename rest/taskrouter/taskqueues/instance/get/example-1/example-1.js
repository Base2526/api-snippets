// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var twilio = require('twilio');

var accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var authToken = "{{ auth_token }}";
var workspaceSid = "{{ workspace_sid }}";
var taskQueueSid = "{{ taskqueue_sid }}";

var client = new twilio.TaskRouterClient(accountSid, authToken, workspaceSid);

client.workspace.taskqueues(taskQueueSid).get(function(err, taskQueue) {
    console.log(taskQueue.friendly_name);
});