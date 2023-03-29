import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
	render() {
		const { profile } = this.props;

		let gender;

		if (profile.sex === "male") {
			gender = <i class="fas fa-male fa-2x"></i>;
		} else if (profile.sex === "female") {
			gender = <i class="fas fa-female fa-2x"></i>;
		} else {
			gender = <i class="fas fa-genderless fa-2x"></i>;
		}

		return (
			<div className="card card-body bg-light mb-3">
				<div className="row">
					<div className="col-2">
						<img src={profile.user.avatar} alt="" className="rounded-circle" />
					</div>
					<div className="col-lg-6 col-md-4 col-8 text-center">
						<h3 className="text-center">{profile.user.name}</h3>
						<p className="text-center">
							{profile.status}{" "}
							{isEmpty(profile.company) ? null : (
								<span>at {profile.company}</span>
							)}
						</p>
						<p className="text-center">
							{isEmpty(profile.location) ? null : (
								<span>{profile.location}</span>
							)}
						</p>
						<p className="profile-gender">
							{isEmpty(profile.sex) ? null : <span>{gender}</span>}
						</p>
						<Link
							to={`/profile/${profile.handle}`}
							className="btn btn-info view-profile-btn "
						>
							View Profile
						</Link>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<h4 className="text-center">Languages/Skills</h4>
						<ul className="list-group">
							{profile.skills.slice(0, 4).map((skill, index) => (
								<li key={index} className="list-group-item">
									<i className="fa fa-tools pr-1" />
									{skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileItem;
