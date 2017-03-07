var popsicle = require('popsicle')
var extend = require('deep-extend')
var setprototypeof = require('setprototypeof')

var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

module.exports = Client

function template (string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}

function request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: options.headers,
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}

function Client (options) {
  this._path = ''
  this._options = extend({
    baseUri: 'https://api.eu.yaas.io/hybris/schema/v1',
    baseUriParameters: {}
  }, options)

  function client (method, path, options) {
    return request(client, method, path, options)
  }

// ### ctr 1
  this._client=client;
  setprototypeof(client, this)
  return client
}

Client.form = popsicle.form
Client.version = 'v0.1'
Client.Security = {
}
Client.prototype.tenant = function (uriParams) { return new Tenant(this._client, this._path + template('/{tenant}', extend({}, uriParams))) }
function Tenant (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.all = new TenantAll(this._client, this._path + '/all')
}
Tenant.prototype.schema = function (uriParams) { return new TenantSchema(this._client, this._path + template('/{schema}', extend({}, uriParams))) }
Tenant.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
Tenant.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantSchema (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.metadata = new TenantSchemaMetadata(this._client, this._path + '/metadata')
// ### createProtoResources
  this.tags = new TenantSchemaTags(this._client, this._path + '/tags')
}
TenantSchema.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantSchema.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
function TenantSchemaMetadata (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantSchemaMetadata.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantSchemaMetadata.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
function TenantSchemaTags (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantSchemaTags.prototype.tag = function (uriParams) { return new TenantSchemaTagsTag(this._client, this._path + template('/{tag}', extend({}, uriParams))) }
TenantSchemaTags.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantSchemaTagsTag (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantSchemaTagsTag.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantSchemaTagsTag.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantAll (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.tagvalues = new TenantAllTagvalues(this._client, this._path + '/tagvalues')
}
function TenantAllTagvalues (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantAllTagvalues.prototype.tag = function (uriParams) { return new TenantAllTagvaluesTag(this._client, this._path + template('/{tag}', extend({}, uriParams))) }
TenantAllTagvalues.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantAllTagvaluesTag (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantAllTagvaluesTag.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
