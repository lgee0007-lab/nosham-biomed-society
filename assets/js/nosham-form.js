document.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('join-form');
	var message = document.getElementById('form-message');

	if (!form || !message) {
		return;
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		var name = document.getElementById('member-name').value.trim();
		var email = document.getElementById('member-email').value.trim();
		var interest = document.getElementById('member-interest').value;

		message.textContent = '';
		message.classList.remove('error', 'success');

		if (name === '' || email === '' || interest === '') {
			message.textContent = 'Please complete all fields before submitting.';
			message.classList.add('error');
			return;
		}

		if (!email.includes('@student.nosham.edu')) {
			message.textContent = 'Please use your Nosham student email address.';
			message.classList.add('error');
			return;
		}

		message.textContent = 'Thank you, ' + name + '! Your interest has been recorded.';
		message.classList.add('success');
		form.reset();
	});
});