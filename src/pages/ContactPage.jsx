import './ContactPage.css';
import { useState, useEffect } from 'react'; // For form validation

export default function ContactPage() {
	// USESTATE HOOKS
	// Vars to set state for form inputs and validation status
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isValid, setIsValid] = useState(false); // start with false (invalid) and disable button
	const [errorMessage, setErrorMessage] = useState(''); // error message to display to user
	const [successMessage, setSuccessMessage] = useState(''); // success message to display to user - for handling form submission

	// USEEFFECT HOOKS
	// useEffect hook to validate form inputs everytime input changes - DEPRECATED - using onBlur to validate as soon as user leaves input field
	// useEffect(() => {
	// 	validateForm();
	// }, [name, email, message]);

	// Using a series of if/else statements to check each input individually and only render one error message at a time
	// First checks to see if form is completely empty (reset errormessage), then checks each input individually
	const validateForm = () => {
		if (!name && !email && !message) {
			setErrorMessage('');
			setIsValid(false);
		} else if (!name) {
			setErrorMessage('Please enter your name');
			setIsValid(false);
		} else if (!email) {
			setErrorMessage('Please enter a valid email address');
			setIsValid(false);
		} else if (!validateEmail(email)) {
			setErrorMessage('Invalid email format');
			setIsValid(false);
		} else if (!message) {
			setErrorMessage('Please enter a message');
			setIsValid(false);
		} else {
			setErrorMessage('');
			setIsValid(true);
		}
	};

	// Validate email function using regex
	const validateEmail = (email) => {
		// Regex source: https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/
		const passwordRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
		return passwordRegex.test(email);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isValid) {
			// Reset the input fields and set the success message
			setName('');
			setEmail('');
			setMessage('');
			setSuccessMessage('Form submitted successfully!');
		}
	};

	// Use onChange to update state as user types, onBlur to validate as soon as user leaves input field
	// Also reset the success message if user starts new form
	// ARIA attributes added for accessibility, as well as aria-live to announce error/success messages
	return (
		<>
			<h2>Contact Me</h2>
			<p className="instructions">
				Please complete the form below, or reach out on one of my socials.{' '}
				<br />
				<span>
					Please note, the form currently does not have any function and is
					purely for prototyping purposes.
				</span>
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
						setSuccessMessage('');
					}}
					onBlur={validateForm}
					placeholder="Name"
					required
					aria-required="true"
				/>
				<label htmlFor="email">Email:</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
						setSuccessMessage('');
					}}
					onBlur={validateForm}
					placeholder="Email"
					required
					aria-required="true"
				/>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
						setSuccessMessage('');
					}}
					onBlur={validateForm}
					placeholder="Message"
					required
					aria-required="true"
					rows={3}
				/>
				<p
					className={`instructions ${errorMessage ? 'error' : 'success'}`}
					aria-live="polite"
				>
					{errorMessage ? errorMessage : successMessage}
				</p>
				<button type="submit" disabled={!isValid}>
					Submit
				</button>
			</form>
		</>
	);
}
