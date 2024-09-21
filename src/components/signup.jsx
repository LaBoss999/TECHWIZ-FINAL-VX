import './login.css';

function Signup(){
return(
<body>
<div className="container" id="container">
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Create Account</h1>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="text" placeholder="Gender" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Get Started</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Greetings!</h1>
				<p>Provide your personal details to begin your journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</body>
);
}

export default Signup;