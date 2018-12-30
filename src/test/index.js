import request from "request";
import {messengerconfig} from '../../config.json';

function setMenu(){
    request({
        method:"post",
        uri:`https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${messengerconfig.PAGE_ACCESS_TOKEN}`,
        json:{
            "persistent_menu":[
              {
                "locale":"default",
                "composer_input_disabled": true,
                "call_to_actions":[
                  {
                    "title":"My Account",
                    "type":"nested",
                    "call_to_actions":[
                      {
                        "title":"Pay Bill",
                        "type":"postback",
                        "payload":"PAYBILL_PAYLOAD"
                      },
                      {
                        "type":"web_url",
                        "title":"Latest News",
                        "url":"https://www.messenger.com/",
                        "webview_height_ratio":"full"
                      }
                    ]
                  }
                ]
              }
            ]
          }
    },(req,res,body)=>{
        debugger;
    })
}



export {
    setMenu
}