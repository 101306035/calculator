
$(function(){

	float before;
	float after;
	float results;
	var operation;
	var currentText = '';
	$('#btn1').on('click',function() {

		currentText = currentText + '1';
		render();
	});

	$('#btn2').on('click',function() {
		currentText = currentText + '2';
		render();
	});

	$('#btn3').on('click',function() {
		currentText = currentText + '3'
		render();
	});

	$('#btn4').on('click',function() {
		currentText = currentText + '4';
		render();
	});

	$('#btn5').on('click',function() {
		currentText = currentText + '5';
		render();
	});

	$('#btn6').on('click',function() {
		currentText = currentText + '6';
		render();
	});

	$('#btn7').on('click',function() {
		currentText = currentText + '7';
		render();
	});

	$('#btn8').on('click',function() {
		currentText = currentText + '8';
		render();
	});

	$('#btn9').on('click',function() {
		currentText = currentText + '9';
		render();
	});

	$('#btn0').on('click',function() {
		currentText = currentText + '0';
		render();
	});

	$('#btnDecimalPoint').on('click',function() {
		currentText = currentText + '.';
		render();
	});


	$('#btnClear').on('click',function() {
		currentText = '';
		render();
	});
	
	$('#btnEqual').on('click',function() {	
		after = parseFloat(currentText);
		calculate(operation);		
		render();
	});
	
	$('#btnAdd').on('click',function() {
		if(operation = null){
			operation = '+'
			before = parseFloat(currentText);
			currentText = '';
		}else if (operation != null) {
			after = parseFloat(currentText);
			calculate(operation);
		};
		render();
	});

	$('#btnLess').on('click',function() {
		if (operation = null) {
			operation = '-';
			before = parseFloat(currentText);
			currentText = '';
		}else if (operation != null) {
			after = parseFloat(currentText);
			calculate(operation);
		};

		render();
	});

	$('#btnMultiply').on('click',function() {
		if (operation = null) {
			operation = '-';
			before = parseFloat(currentText);
			currentText = '';
		}else if (operation != null) {
			after = parseFloat(currentText);
			calculate(operation);
		};

		render();
	});

	$('#btnExcept').on('click',function() {
		if (operation = null) {
			operation = '-';
			before = parseFloat(currentText);
			currentText = '';
		}else if (operation != null) {
			after = parseFloat(currentText);
			calculate(operation);
		};

		render();
	});
	
	function render(){
		$('#message').text(currentText);
	};

	function calculate (operation){
		if (operation=='+') {
			results = before+after;
			currentText = ""+results;
		}
		else if (operation=='-') {
			results = before-after;
			currentText = ""+results;
		}else if (operation=='*') {
			results = before*after;
			currentText = ""+results;	
		}else if (operation=='/') {
			results = before/after;
			currentText = ""+results;
		}else (operation==""){
			currentText = ""+currentText;
		};
		before=null;
		after=null;
		results=null;
		operation=null;
	};

});