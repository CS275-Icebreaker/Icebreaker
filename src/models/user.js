"use strict";

class User {
	static findAll(q) {
		return Promise.resolve([]);
	}

	const Model = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		room_id: {
			type: Sequelize.INTEGER,
			notNull: true
		},
		name: {
			type: Sequelize.STRING,
			notNull: true
		},
		year: {
			type: Sequelize.STRING,
			notNull: true
		},
		major: {
			type: Sequelize.STRING,
			notNull: true
		},
		topics: {
			type: Sequelize.ARRAY(Sequelize.INTEGER),
			notNull: true
		},
		auth_token_hash: {
			type: Sequelize.STRING,
			notNull: true
		},
	});

	destroy () {}
}

module.exports = User;
