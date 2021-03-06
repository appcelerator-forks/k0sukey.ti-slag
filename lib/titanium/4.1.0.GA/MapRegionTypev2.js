var crypto = require('crypto');
function MapRegionTypev2(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bearing',
			'longitude',
			'latitude',
			'longitudeDelta',
			'latitudeDelta',
			'tilt',
			'zoom',
			'id'
		];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bearing = undefined;
	} else {
		this.bearing = __SLAG_PROPERTIES.bearing || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.longitude = undefined;
	} else {
		this.longitude = __SLAG_PROPERTIES.longitude || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.latitude = undefined;
	} else {
		this.latitude = __SLAG_PROPERTIES.latitude || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.longitudeDelta = undefined;
	} else {
		this.longitudeDelta = __SLAG_PROPERTIES.longitudeDelta || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.latitudeDelta = undefined;
	} else {
		this.latitudeDelta = __SLAG_PROPERTIES.latitudeDelta || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tilt = undefined;
	} else {
		this.tilt = __SLAG_PROPERTIES.tilt || 0;
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.zoom = undefined;
	} else {
		this.zoom = __SLAG_PROPERTIES.zoom || 0;
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new MapRegionTypev2(properties);
};