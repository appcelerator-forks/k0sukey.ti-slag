var crypto = require('crypto');
function DataCallbackArgs(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'stringData',
			'bytesData',
			'address',
			'port',
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
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.stringData = undefined;
	} else {
		this.stringData = __SLAG_PROPERTIES.stringData || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bytesData = undefined;
	} else {
		this.bytesData = __SLAG_PROPERTIES.bytesData || 0;
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.address = undefined;
	} else {
		this.address = __SLAG_PROPERTIES.address || '';
	}
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.port = undefined;
	} else {
		this.port = __SLAG_PROPERTIES.port || '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
module.exports = function (properties) {
	return new DataCallbackArgs(properties);
};