function appendConversion (message){
	/*message = {
		conversion_id:"",
		reception:{
			avatar:"",
			name:""
		},
		type:"text|image|stick",
		text:"",
		is_reade:true|false
	}*/

	var snippet_ellipsis = "";

	switch(snippet_ellipsis){
		case "text":
			snippet_ellipsis = `<span class="snippet ellipsis">${message.text}</span>`;
			break;
		case "image":
			snippet_ellipsis = `
				<span class="snippet ellipsis">
	                <i class="touched_hide messageicons img sp_XHFAcEMpcqj sx_ec6918"></i>
	                <i class="messageicons touched_show img sp_XHFAcEMpcqj sx_014aad"></i>đã gửi một ảnh.
	            </span>`;
	        break;
	    case "stick":
	    	snippet_ellipsis = `<span class="snippet ellipsis">đã gửi một nhãn dán.</span>`;
	    	break;
	}

	var HTML = 
		`<li class="item messages-flyout-item aclb abt" id="msg_other_user_fbid_723216317888203" data-sigil="marea">
            <a class="touchable primary" href="/conversion?id=${message.conversion_id}" data-sigil="touchable">
                <div class="primarywrap">
                    <div class="image">
                        <i class="img profpic" aria-label="${message.reception.name}" role="img" style="background:#d8dce6 url('${message.reception.avatar}') no-repeat center;background-size:100% 100%;-webkit-background-size:100% 100%;width:43px;height:43px;" data-sigil="profile_image"></i>
                    </div>
                    <div class="content">
                        <div class="lr">
                            <div class="time r nowrap mfss fcl">
                                <abbr data-store="{&quot;time&quot;:1535343114,&quot;short&quot;:true,&quot;forceseconds&quot;:false}" data-sigil="timestamp" data-store-id="39">2 phút</abbr>
                            </div>
                            <div class="title thread-title mfsl fcb">
                                <strong>${message.reception.name}</strong>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="oneLine preview mfss fcg">
                            <i class="touched_hide messageicons img sp_XHFAcEMpcqj sx_ec6918" data-sigil="attachment-icon" style="display:none"></i>
                            <i class="messageicons touched_show img sp_XHFAcEMpcqj sx_014aad" data-sigil="attachment-icon" style="display:none"></i>
                            ${snippet_ellipsis}
                        </div>
                    </div>
                </div>
            </a>
        </li>`

}