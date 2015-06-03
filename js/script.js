$(document).ready(function() {
	$('#text').keypress(function(e) {
		var p = e.which;
     	if(p == 13){
         	$('#list').prepend('<li>' + $('#text').val() + '<span class="pull-right"><input type="checkbox"> <i class="glyphicon glyphicon-trash"></i></span></li>');
         	$('#text').val('');
     	}
	});
	$(document).on('click', 'i' , function(e) {
		var checkstr =  confirm('Are you sure you want to delete this?');
		if(checkstr == true){
  			$(this).parents('li').remove();
		}
	});
});