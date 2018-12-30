import login from "./login"
import {crawlerBasicInfo as CBI} from "./crawler";


//crawlerBasicInfo("b14dccn762","thinhthuongyen");

export {
	crawlerBasicInfo
}


function crawlerBasicInfo(user,pass){
	return login(user,pass)
	.then((data)=>{
		return CBI(data.cookie);
	})
}