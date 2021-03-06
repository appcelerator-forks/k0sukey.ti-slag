var crypto = require('crypto');
function Filesystem(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_DEVICE = JSON.parse(process.env.SLAG_DEVICE);
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'MODE_APPEND',
			'MODE_READ',
			'MODE_WRITE',
			'apiName',
			'applicationCacheDirectory',
			'applicationDataDirectory',
			'applicationDirectory',
			'applicationSupportDirectory',
			'bubbleParent',
			'externalStorageDirectory',
			'lineEnding',
			'resRawDirectory',
			'resourcesDirectory',
			'separator',
			'tempDirectory',
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
	if (__SLAG_PROPERTIES.MODE_APPEND) {
		throw new Error('Ti.Filesystem.MODE_APPEND is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_APPEND = undefined;
	} else {
		this.MODE_APPEND = 0;
	}
	if (__SLAG_PROPERTIES.MODE_READ) {
		throw new Error('Ti.Filesystem.MODE_READ is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_READ = undefined;
	} else {
		this.MODE_READ = 0;
	}
	if (__SLAG_PROPERTIES.MODE_WRITE) {
		throw new Error('Ti.Filesystem.MODE_WRITE is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.MODE_WRITE = undefined;
	} else {
		this.MODE_WRITE = 0;
	}
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Filesystem.apiName is read only property');
	}
	this.apiName = 'Ti.Filesystem';
	if (__SLAG_PROPERTIES.applicationCacheDirectory) {
		throw new Error('Ti.Filesystem.applicationCacheDirectory is read only property');
	}
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationCacheDirectory = undefined;
	} else {
		this.applicationCacheDirectory = '';
	}
	if (__SLAG_PROPERTIES.applicationDataDirectory) {
		throw new Error('Ti.Filesystem.applicationDataDirectory is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationDataDirectory = undefined;
	} else {
		this.applicationDataDirectory = '';
	}
	if (__SLAG_PROPERTIES.applicationDirectory) {
		throw new Error('Ti.Filesystem.applicationDirectory is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationDirectory = undefined;
	} else {
		this.applicationDirectory = '';
	}
	if (__SLAG_PROPERTIES.applicationSupportDirectory) {
		throw new Error('Ti.Filesystem.applicationSupportDirectory is read only property');
	}
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.applicationSupportDirectory = undefined;
	} else {
		this.applicationSupportDirectory = '';
	}
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.bubbleParent = undefined;
	} else {
		this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	}
	if (__SLAG_PROPERTIES.externalStorageDirectory) {
		throw new Error('Ti.Filesystem.externalStorageDirectory is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.externalStorageDirectory = undefined;
	} else {
		this.externalStorageDirectory = '';
	}
	if (__SLAG_PROPERTIES.lineEnding) {
		throw new Error('Ti.Filesystem.lineEnding is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.lineEnding = undefined;
	} else {
		this.lineEnding = '';
	}
	if (__SLAG_PROPERTIES.resRawDirectory) {
		throw new Error('Ti.Filesystem.resRawDirectory is read only property');
	}
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.resRawDirectory = undefined;
	} else {
		this.resRawDirectory = '';
	}
	if (__SLAG_PROPERTIES.resourcesDirectory) {
		throw new Error('Ti.Filesystem.resourcesDirectory is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.resourcesDirectory = undefined;
	} else {
		this.resourcesDirectory = '';
	}
	if (__SLAG_PROPERTIES.separator) {
		throw new Error('Ti.Filesystem.separator is read only property');
	}
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.separator = undefined;
	} else {
		this.separator = '';
	}
	if (__SLAG_PROPERTIES.tempDirectory) {
		throw new Error('Ti.Filesystem.tempDirectory is read only property');
	}
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		this.tempDirectory = undefined;
	} else {
		this.tempDirectory = '';
	}
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Filesystem.prototype.addEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Filesystem.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Filesystem.prototype.createTempDirectory = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TempDirectory = require('./Filesystem/TempDirectory');
	return TempDirectory(__SLAG_PROPERTY);
};
Filesystem.prototype.createTempFile = function (__SLAG_PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	var TempFile = require('./Filesystem/TempFile');
	return TempFile(__SLAG_PROPERTY);
};
Filesystem.prototype.fireEvent = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Filesystem.prototype.getApiName = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Filesystem.prototype.getApplicationCacheDirectory = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationCacheDirectory;
};
Filesystem.prototype.getApplicationDataDirectory = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationDataDirectory;
};
Filesystem.prototype.getApplicationDirectory = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationDirectory;
};
Filesystem.prototype.getApplicationSupportDirectory = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.applicationSupportDirectory;
};
Filesystem.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Filesystem.prototype.getExternalStorageDirectory = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.externalStorageDirectory;
};
Filesystem.prototype.getFile = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Filesystem.prototype.getLineEnding = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lineEnding;
};
Filesystem.prototype.getResRawDirectory = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.resRawDirectory;
};
Filesystem.prototype.getResourcesDirectory = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.resourcesDirectory;
};
Filesystem.prototype.getSeparator = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.separator;
};
Filesystem.prototype.getTempDirectory = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tempDirectory;
};
Filesystem.prototype.isExternalStoragePresent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Filesystem.prototype.openStream = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Filesystem.prototype.removeEventListener = function () {
	if ([
			'android',
			'blackberry',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Filesystem.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Filesystem(properties);
};