
$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.burger, .header__nav').toggleClass('active')
    })
});

$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).html('Скрыть пароль');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).html('Показать пароль');
		$('#password-input').attr('type', 'password');
	}
	return false;
}); 










