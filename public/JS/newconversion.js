var handleFormSendMessage = () =>{
	$("#m-messages-touch-composer-send-button").click((e)=>{

		e.preventDefault();
		var form = $("#m-messages-touch-composer-form");
		var mssv = form.find( "input[name='mssv']" ).val();
		var body = form.find( "textarea[name='body']" ).val();

		var btn = $(this);
        $.post("/conversion/send",{
        	mssv:mssv,
        	body:body
        })
        .done((e)=>{
        	if(e.err){
        		return alert("Có lỗi: "+e.err);
        	}
        	location.href = "/conversion/"+e.id_conversion
        })
        .fail((e)=>{
        	alert("Có thể có lỗi khi kết nối với máy chủ. Hãy thử reload trang");
        })
	});
}


$(document).ready(function() {
	handleFormSendMessage();
})