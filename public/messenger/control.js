function handleContext(thread_context){
    alert(JSON.stringify(thread_context));
}







window.extAsyncInit = function() {
    MessengerExtensions.askPermission(
        function(permission_response) {
            // Person grants or rejects the asked permission.
            let permissions = permission_response.permissions; // list of all permissions granted
            let isGranted = permission_response.isGranted;
        
            if (isGranted) {
            // User has granted user_profile permission
            handleGranted(isGranted);
            }
            
        }, function(errorCode, errorMessage) {
            // Error occurred
            errGrandted(errorCode,errorMessage);
        },
        "user_messaging"
    );
};

function handleGranted(){
    MessengerExtensions.getContext('240970963274330', 
    handleContext,
    function error(err){
      // error
    }
  );
}
function errGrandted(errorCode,errorMessage){
    debugger;
}










