function addSlider() {
	var data = [
		{index:1},
		{index:2},
		{index:3},
		{index:4},
		{index:5}
	]
	var tpl_main = document.getElementById('template_main').innerHTML
							.replace(/^\s*/,'')
							.replace(/\s*$/,'');
	var tpl_ctrl = document.getElementById('template_ctrl').innerHTML
							.replace(/^\s*/,'')
							.replace(/\s*$/,'');
	var out_main = [];
	var out_ctrl = [];

	for (i in data) {
		var _html_main = tpl_main.replace(/{{index}}/g, data[i].index);
		var _html_ctrl = tpl_ctrl.replace(/{{index}}/g, data[i].index);
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}

	document.getElementById('template_main').innerHTML = out_main.join('');
	document.getElementById('template_ctrl').innerHTML = out_ctrl.join('');

}

function switchSlider(n) {
	var main = document.getElementById('main_' + n);
	var ctrl = document.getElementById('ctrl_' + n);

	var clear_main = document.getElementsByClassName('main-item');
	var clear_ctrl = document.getElementsByClassName('ctrl-item');

	for (var i = 0; i < clear_ctrl.length; i++) {
		clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-item_active', '');
		clear_main[i].className = clear_main[i].className.replace(' main-item_active', '');
	};
	main.className += ' main-item_active';
	ctrl.className += ' ctrl-item_active';
}

window.onload = function() {
	addSlider();
	switchSlider(1);
}