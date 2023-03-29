import React from "react";

const ContactUs = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className="display-4 text-center">CONTACT US</h1>
					<p className="lead text-center">Need help?</p>
					<p className="lead text-muted">
						Please submit your email address, name, and a brief description of
						your problem. We usually respond within 48 hours.
					</p>
					<form action="https://sendpoint.io/id/RzbZ6lHC5" method="POST">
						<div className="form-group">
							<label for="email">Email address</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="name@example.com"
							></input>
						</div>
						<div className="form-group">
							<label for="name">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Full Name"
							></input>
						</div>
						<div class="form-group">
							<label for="description">Issue Description</label>
							<textarea
								class="form-control"
								id="description"
								rows="10"
								placeholder="Please describe your issue here."
							></textarea>
						</div>
						<button type="submit" class="btn btn-info mr-1">
							Contact Us
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
