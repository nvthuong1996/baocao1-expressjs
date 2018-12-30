/*
    Xây dựng các hàm sau:
    Thêm tin nhắn: dạng text, dạng hình ảnh và dạng stick
    Hàm nhận vào tham số là 1 object là 1 đối tượng: tên, id, image. nếu image là null sử dụng default image
*/


function appendMessage(message){
	let HTML ="";
	if(message.body.type=="text"){
		HTML = `
	    <div class="voice acw abt">
	        <div class="_4g33">
	            <div class="_4g34">
	                <div class="ib">
	                    <a class="darkTouch l" aria-hidden="true">
	                        <i class="img profpic" aria-label="${message.name}" role="img" style="background:#d8dce6 url(${message.avatar}) no-repeat center;background-size:100% 100%;-webkit-background-size:100% 100%;width:40px;height:40px;"
	                            data-sigil="touchable"></i>
	                    </a>
	                    <div class="c">
	                        <div class="msg">
	                            <a class="actor-link" data-sigil="actor-link">
	                                <strong class="actor">${message.name}</strong>
	                            </a>
	                            <br />
	                            <div class="" data-sigil="message-text">
	                                <span>${message.body.content}</span>
	                                <div class="messageAttachments"></div>
	                            </div>
	                            <span data-sigil="message-body"></span>
	                        </div>
	                        <div class="actions mfss fcg" data-sigil="action-list">
	                            <abbr data-store="&#123;&quot;time&quot;:1534727660,&quot;short&quot;:false,&quot;forceseconds&quot;:false&#125;"
	                                data-sigil="timestamp">${message.time}</abbr>
	                            <span aria-hidden="true"> · </span>
	                            <span data-sigil="message-source"></span>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div class="_5s61"></div>
	        </div>
	    </div>`
	}
	else if(message.body.type=="image"){
		HTML = `
		<div class="voice acw abt" data-sigil="message-xhp marea">
		    <div class="_4g33">
		        <div class="_4g34">
		            <div class="ib">
		                <a class="darkTouch l" aria-hidden="true">
		                    <i class="img profpic" aria-label="${message.name}" role="img" style="background:#d8dce6 url(${message.avatar}) no-repeat center;background-size:100% 100%;-webkit-background-size:100% 100%;width:40px;height:40px;"
		                        data-sigil="touchable"></i>
		                </a>
		                <div class="c">
		                    <div class="msg">
		                        <a class="actor-link" data-sigil="actor-link">
		                            <strong class="actor">${message.name}</strong>
		                        </a>
		                        <br>
		                        <div class="" data-sigil="message-text">
		                            <span></span>
		                            <div class="messageAttachments">
		                                <img src="${message.body.content}"
		                                    class="img" alt="Happy, smiling face">
		                            </div>
		                        </div>
		                        <span data-sigil="message-body"></span>
		                    </div>
		                    <div class="actions mfss fcg" data-sigil="action-list">
		                        <abbr data-sigil="timestamp">${message.time}</abbr>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div class="_5s61"></div>
		    </div>
		</div>`
	}
	else if(message.body.type=="stick"){
		HTML = `
		<div class="voice acw abt" data-sigil="message-xhp marea">
            <div class="_4g33">
                <div class="_4g34">
                    <div class="ib">
                        <a class="darkTouch l" aria-hidden="true">
                            <i class="img profpic" aria-label="${message.name}" role="img" style="background:#d8dce6 url(${message.avatar}) no-repeat center;background-size:100% 100%;-webkit-background-size:100% 100%;width:40px;height:40px;" data-sigil="touchable"></i>
                        </a>
                        <div class="c">
                            <div class="msg">
                                <a class="actor-link" data-sigil="actor-link">
                                    <strong class="actor">${message.name}</strong>
                                </a>
                                <br>
                                <div class="" data-sigil="message-text">
                                    <span></span>
                                    <div class="messageAttachments">
                                        <a>
                                            <img src="${message.body.content}" width="250" class="_675 img">
                                        </a>
                                    </div>
                                </div>
                                <span data-sigil="message-body"></span>
                            </div>
                            <div class="actions mfss fcg" data-sigil="action-list">
                                <abbr data-sigil="timestamp">${message.time}</abbr>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_5s61"></div>
            </div>
        </div>
	`;
	}


    
	$("#messageGroup").children().append(HTML);
}	

function countNotification(count,type){
	if(type==1){
		$("#messages_jewel").removeClass("noCount");
		$("#count_notification").html(COUNT_NOTIFICATION);
	}else if(type==2){
		$("#requests_jewel").removeClass("noCount");
		$("#gorupNotifycation").html(COUNT_NOTIFICATION);
	}

}


$(document).ready(function() {
	/*let thuongnguyen = {
		name:"Thuong Nguyen Van",
		avatar:"/assets/avatar/thuongnguyenvan.jpg",
		time:"6 giờ trước"
	}
	appendImage(thuongnguyen,"/assets/img/thuong.jpg");*/
});