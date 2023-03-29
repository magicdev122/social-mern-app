import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	render() {
		return (
			<div className="landing">
				<div className="dark-overlay landing-inner text-light">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1 className="display-3 mb-4">DevLink</h1>
								<p className="lead">
									{" "}
									Create your profile to link up with other Devs right now!
								</p>
								<hr />
								<div
									className="card"
									style={{
										width: "15rem",
										opacity: ".4",
										backgroundColor: "black",
										borderRadius: "15px",
										display: "inline-block"
									}}
								>
									<div className="card-body">
										<h5 className="card-title">Ready to join?</h5>
										<Link to="/register" className="btn btn-lg btn-info mr-2">
											Sign Up
										</Link>
									</div>
								</div>
								<div
									className="card"
									style={{
										width: "15rem",
										opacity: ".4",
										backgroundColor: "black",
										borderRadius: "10px",
										display: "inline-block",
										margin: "20px"
									}}
								>
									<div className="card-body">
										<h5 className="card-title" style={{ color: "#17A2B8" }}>
											Already registered?
										</h5>
										<Link
											to="/login"
											className="btn btn-lg btn-light login-btn-main"
										>
											Login
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);
