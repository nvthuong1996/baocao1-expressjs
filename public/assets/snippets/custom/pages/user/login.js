//== Class Definition
var SnippetLogin = function() {

    var login = $('#m_login');

    var showErrorMsg = function(form, type, msg) {
        var alert = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\
			<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\
			<span></span>\
		</div>');

        form.find('.alert').remove();
        alert.prependTo(form);
        //alert.animateClass('fadeIn animated');
        mUtil.animateClass(alert[0], 'fadeIn animated');
        alert.find('span').html(msg);
    }

    //== Private Functions

    var displaySignUpForm = function() {
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');

        login.addClass('m-login--signup');
        mUtil.animateClass(login.find('.m-login__signup')[0], 'flipInX animated');
    }

    var displaySignInForm = function() {
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');

        login.addClass('m-login--signin');
        mUtil.animateClass(login.find('.m-login__signin')[0], 'flipInX animated');
        //login.find('.m-login__signin').animateClass('flipInX animated');
    }

    var displayForgetPasswordForm = function() {
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');

        login.addClass('m-login--forget-password');
        //login.find('.m-login__forget-password').animateClass('flipInX animated');
        mUtil.animateClass(login.find('.m-login__forget-password')[0], 'flipInX animated');

    }

    var handleFormSwitch = function() {
        $('#m_login_forget_password').click(function(e) {
            e.preventDefault();
            displayForgetPasswordForm();
        });

        $('#m_login_forget_password_cancel').click(function(e) {
            e.preventDefault();
            displaySignInForm();
        });

        $('#m_login_signup').click(function(e) {
            e.preventDefault();
            displaySignUpForm();
        });

        $('#m_login_signup_cancel').click(function(e) {
            e.preventDefault();
            displaySignInForm();
        });
    }

    var submitLogin = (token,fb_id) =>{
        return new Promise((resolve,reject)=>{
            $.post("login",{password:token,username:fb_id})
            .done((result)=>{
                if(result.login){
                    return resolve()
                }else{
                    return resolve("Có lỗi xác thức") 
                }
            })
            .fail(()=>{
                return reject({
                    err:"Có lỗi khi send resquest",
                });
            })
        })
        
    }

    var handleSignInFormSubmit = function() {
                    $('#m_login_signin_submit').click(function(e) {
            e.preventDefault();
            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    email: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: `/api/qldt/info`,
                success: function(result, status, xhr, $form) {
                	// similate 2s delay
                    if(result.err){
                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                        showErrorMsg(form, 'danger', result.err);
                        return
                    }else if(!result.is_dk){
                        //Chưa đăng kí

                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                        displaySignUpForm();

                        $("#showMSSV").val(result.id);
                        $("#showTen").val(result.ten_sv);
                        $("#token").val(result.token);
                    }else{
                        submitLogin(result.token,"test")
                        .then(_=>{
                            location.href = "/conversion";
                        })
                        .catch((ex)=>{
                            showErrorMsg(form, 'danger', "Có lỗi. Vui lòng thử lại");
                            setTimeout(_=>{
                                location.href = '/login';
                            },2000)  
                        });
                    }
                }
            });
        });
    }

    var handleSignUpFormSubmit = function() {
        $('#m_login_signup_submit').click(function(e) {
            e.preventDefault();

            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    nickname: {
                        required: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: '/api/signup',
                success: function(response, status, xhr, $form) {
                        btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
                        if(response.err){
                            
                            return showErrorMsg(form, 'danger', response.err);
                        }

                        submitLogin(response.token,"test")
                        .then((res)=>{
                            location.href = "/conversion";
                        })
                        .catch((ex)=>{
                            showErrorMsg(form, 'danger', "Có lỗi. Vui lòng thử lại");
                            setTimeout(_=>{
                                location.href = '/login';
                            },2000)  
                        });
                	// similate 2s delay
                	/*setTimeout(function() {
	                    btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false);
	                    form.clearForm();
	                    form.validate().resetForm();

	                    // display signup form
	                    displaySignInForm();
	                    var signInForm = login.find('.m-login__signin form');
	                    signInForm.clearForm();
	                    signInForm.validate().resetForm();

	                    showErrorMsg(signInForm, 'success', 'Thank you. To complete your registration please check your email.');
	                }, 2000);*/
                }
            });
        });
    }

    var handleForgetPasswordFormSubmit = function() {
        $('#m_login_forget_password_submit').click(function(e) {
            e.preventDefault();

            var btn = $(this);
            var form = $(this).closest('form');

            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                }
            });

            if (!form.valid()) {
                return;
            }

            btn.addClass('m-loader m-loader--right m-loader--light').attr('disabled', true);

            form.ajaxSubmit({
                url: '',
                success: function(response, status, xhr, $form) { 
                	// similate 2s delay
                	setTimeout(function() {
                		btn.removeClass('m-loader m-loader--right m-loader--light').attr('disabled', false); // remove 
	                    form.clearForm(); // clear form
	                    form.validate().resetForm(); // reset validation states

	                    // display signup form
	                    displaySignInForm();
	                    var signInForm = login.find('.m-login__signin form');
	                    signInForm.clearForm();
	                    signInForm.validate().resetForm();

	                    showErrorMsg(signInForm, 'success', 'Cool! Password recovery instruction has been sent to your email.');
                	}, 2000);
                }
            });
        });
    }


    const checkLogin = () =>{
        /*
        *   Gửi Fbid len server kiểm tra xem nó đã được target với mssv nào hay chưa
        *   Nếu nó đã target rồi thì server gửi trả token cho phép login
        *   Nếu nó chưa thì load login
        */
        const fbid = getFbId();

        $.get("/api/account/fbid",{fbid:"250265955585"})
        .done((res)=>{
            if(res.is_linking){
                submitLogin(res.token,fbid)
                .then((_=>{
                    location.href = "/conversion";
                }))
            }
        })
        .fail((err)=>{
            showErrorMsg($('#m_login_signin_submit'), 'danger', "Có lỗi. Vui lòng reload lại trang");
        })
    }

    const getFbId = function () {
        return Math.round(Math.random()*1000000000000);
    }

    //== Public Functions
    return {
        // public functions
        init: function() {
            handleFormSwitch();
            handleSignInFormSubmit();
            handleSignUpFormSubmit();
            handleForgetPasswordFormSubmit();
        }
    };
}();

//== Class Initialization
jQuery(document).ready(function() {
    SnippetLogin.init();
});