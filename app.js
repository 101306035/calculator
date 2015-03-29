
$(function(){

	var strOper=0;  //暫存運算符號

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
		
		currentText=currentText+'.';
		render();
	})

	$('#btnNegative').on('click',function() {
		currentText = '-' + currentText;
		render();
	});

	$('#btnClear').on('click',function() {
		currentText = '';
		render();
	});

	$('#btnEqual').on('click',function() {	
		equal();
		render();
	});

	//算式符號	
	$('#btnAdd').on('click',function() {
		operBtn('+');
	});

	$('#btnLess').on('click',function() {
		operBtn('-');
	});

	$('#btnMultiply').on('click',function() {
		operBtn('*');
	});

	$('#btnExcept').on('click',function() {
		operBtn('/');
	});

    //運算符號
	function operBtn(str){

		//不按等號的連續運算
 		equal();
		valueA=parseFloat(currentText);
		strOper=str;

		currentText='';
		render();
    }

    //等於
	function equal(){
		switch (strOper){
			case '+':
				currentText=parseFloat(valueA)+parseFloat(currentText);
				break;
			case '-':
				currentText=parseFloat(valueA)-parseFloat(currentText);
				break;
            case '*':
				currentText=parseFloat(valueA)*parseFloat(currentText);
				break;
			case '/':
				currentText=parseFloat(valueA)/parseFloat(currentText);
				break;
			default:
				break;
		}
		//防呆用

		strOper=null;
    }

	function render(){
		$('#message').text(currentText);
	};

});