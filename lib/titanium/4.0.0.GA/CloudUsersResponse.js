function CloudUsersResponse(properties) {
	properties = properties || {};
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;
	this.users = properties.users || undefined;
	return this;
}
module.exports = function (properties) {
	return new CloudUsersResponse(properties);
};