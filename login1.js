// JavaScript Document
$(document).ready(function() {
	$("div#form").append(
	// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
	$("<h3/>").text("Please Login with Your ID"), $("<form/>", {
		action: '#',
		method: '#'
		}).append(
		// Create form
		$("<input/>", {
			type: 'text',
			id: 'vnim',
			name: 'nim',
			placeholder: 'Your NIM'
			}), // Creating Input
			$("<input/>", {
				type: 'text',
				id: 'vpass',
				name: 'pass',
				placeholder: 'Your Password'
				}), $("<br/>"), $("<input/>", {
					type: 'submit',
					id: 'submit',
					value: 'Login'
					})))
					});