import React from 'react';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}
	onSubmitSignIn = () => {
		fetch('https://face-detection-backend-o3m5.onrender.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			// ========== CHANGE 1: Added response status checking ==========
			.then(response => {
				if (!response.ok) {
					throw new Error('Server not responding');
				}
				return response.json();
			})
			// ==============================================================
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			})
			// ========== CHANGE 2: Added error handling with catch ==========
			.catch(error => {
				console.error('Signin error:', error);
				alert('Cannot connect to server. Please make sure the backend is running on port 3001.');
			});
			// ==============================================================
	}
	render() {
		const {onRouteChange} = this.props;
		return(
 		<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
	 		<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
			        <input
			        	className="b b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			        	type="email"
			        	name="email-address"
			        	id="email-address"
			        	onChange={this.onEmailChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f4"
			        	htmlFor="password">Password</label>
			        <input
			        	className="b b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			        	type="password"
			        	name="password" 
			        	id="password"
			        	onChange={this.onPasswordChange}
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={this.onSubmitSignIn}
			      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
			      	type="submit"
			      	value="Sign in" />
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('register')}
			      	 className="f4 link dim black db pointer">Register</p>
			    </div>
			  </div>
			</main>
		</article>
	 	);
	 }
}

export default SignIn;
 	