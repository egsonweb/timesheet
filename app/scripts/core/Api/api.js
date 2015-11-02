import path from 'path';
import assign from 'object-assign';
import request from 'superagent';
import Constants from '../../constants';


function uppercase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const TimesheetApi = {
	construct(resource, classes=false) {
		if (! classes) {
			return path.join(Constants.api.BASE_URL, resource)
		}
		return path.join(Constants.api.BASE_URL, 'classes', uppercase(resource));
	},

	headers() {
		return {
			'Content-Type': 'application/json',
			'X-Parse-Application-Id': Constants.api.APP_ID,
			'X-Parse-REST-API-Key': Constants.api.APP_KEY,
		}
	},

	get(endpoint, query={}, classes=false) {
		const url = this.construct(endpoint, classes);
		const headers = this.headers();

		const params = assign({}, headers, params);
		return new Promise((resolve, reject) => {
			request.get(url)
				.set(headers)
				.query(query)
				.end((err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res.body.results);
				});
		});
	},

	post(endpoint, data, classes) {
		const url = this.construct(endpoint, classes);
		const headers = this.headers();

		return new Promise((resolve, reject) => {
			request.post(url)
				.set(headers)
				.send(data)
				.end((err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res.body);
				});
		});
	}
};

function make(endpoint, classes=false) {
	return {
		get(query) {
			return TimesheetApi.get(endpoint, query, classes);
		},

		post(data) {
			return TimesheetApi.post(endpoint, data, classes);
		}
	}
}

export default {
	Users: make('users'),
	Registration: make('registration', true)
};
