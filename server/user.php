<?php
require_once("../../../../wp-load.php");

if($_POST['login'] && $_POST['password'] && $_POST['SignIn'] == 'signin'){
	$creds = array();
	$creds['user_login'] = $_POST['login'];
	$creds['user_password'] = $_POST['password'];
	$_POST['remember'] ? $creds['remember'] = true : $creds['remember'] = false;

	$user = wp_signon( $creds, false );

	if ( is_wp_error($user) ) {
	   echo $user->get_error_message();
	}else{
		echo 'success';
	}
}

if($_POST['SignUp'] && $_POST['SignUp'] == 'signUp'){
	if(registor_validation() && registor_validation() != ''){
		echo registor_validation();
	}else{
		$userdata = array(
			'user_login' => $_POST['SignUpLogin'],
			'user_pass'  => $_POST['SignUpPassword'],
			'user_email' => $_POST['email'],
			'first_name' => $_POST['FirstName'],
			'last_name'   => $_POST['LastName'],
		);

		$user_id = wp_insert_user( $userdata ) ;
		if( ! is_wp_error( $user_id ) ) {
			echo 'success';
		} else {
			echo $user_id->get_error_message();
		}
	}
}

function registor_validation(){
	$error_mesage = '';
	if(!$_POST['FirstName'] && $_POST['FirstName'] == ''){
		$error_mesage .= 'Fill the First Name field</br>';
	}
	if(!$_POST['LastName'] && $_POST['LastName'] == ''){
		$error_mesage .= 'Fill the Last Name field</br>';
	}
	if(!$_POST['SignUpLogin'] && $_POST['SignUpLogin'] == ''){
		$error_mesage .= 'Fill the Login field</br>';
	}
	if(!$_POST['Email'] && $_POST['Email'] == ''){
		$error_mesage .= 'Fill the EmaiL field</br>';
	}
	if($_POST['SignUpPassword'] != $_POST['ConfirmPassword']){
		$error_mesage .= 'Passwords do not match</br>';
	}
	return $error_mesage;
}

?>
