var crypto = require('crypto');
function TagTechnologyNfcA(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'apiName',
			'lifecycleContainer',
			'tag',
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
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Modules.Nfc.TagTechnologyNfcA.apiName is read only property');
	}
	this.apiName = 'Modules.Nfc.TagTechnologyNfcA';
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lifecycleContainer = undefined;
	} else {
		this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tag = undefined;
	} else {
		this.tag = __SLAG_PROPERTIES.tag || {};
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
TagTechnologyNfcA.prototype.isValid = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
TagTechnologyNfcA.prototype.close = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TagTechnologyNfcA.prototype.connect = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TagTechnologyNfcA.prototype.isConnected = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
TagTechnologyNfcA.prototype.getAtqa = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
TagTechnologyNfcA.prototype.getMaxTransceiveLength = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
TagTechnologyNfcA.prototype.getSak = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
TagTechnologyNfcA.prototype.getTimeout = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return 0;
};
TagTechnologyNfcA.prototype.setTimeout = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
TagTechnologyNfcA.prototype.transceive = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
TagTechnologyNfcA.prototype.getApiName = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
TagTechnologyNfcA.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
TagTechnologyNfcA.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
TagTechnologyNfcA.prototype.getTag = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tag;
};
TagTechnologyNfcA.prototype.setTag = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.tag = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new TagTechnologyNfcA(properties);
};