$(document).ready(function() {
	var socket = io();

	
	$("#u_0_66").click(_=>{
		const message =  {
			type:"text",
			content:$("#composerInput").val(),
			conversion_id:CONVERSION_ID
		}
		socket.emit("user-send-message",message);
		$("#composerInput").val("");
	})

	socket.on("server-send-message",(data)=>{
		if(data.user!=USER){
			new Audio("/audio/notification.mp3").play();
		}

		if(data.conversion_id==CONVERSION_ID){
			appendMessage(data);
		}else if(data.type==1){
			COUNT_NOTIFICATION ++;
			countNotification(COUNT_NOTIFICATION,1);
		}else if(data.type==2){
			countNotification(COUNT_NOTIFICATION,2);
		}

	})
});
