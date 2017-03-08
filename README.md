# YaasApiSchemaV1

> TypeScript abstraction library for RAML-based REST API [YaasApiSchemaV1](https://api.eu.yaas.io/hybris/schema/v1).

Auto-generated using [raml-typescript-generator](https://github.com/brainboutique/raml-typescript-generator). 

## Installation

```sh
npm install yaas-api-schema-v1 --save
```

## Usage

### TypeScript
```ts
import {YaasApiSchemaV1} from 'yaas-api-schema-v1';
...
constructor(..) {
  this.yaasApiSchemaV1 = new YaasApiSchemaV1({});
}
```

To support multiple versions of the API, it is recommended to alias the import so it can easily be mapped to a later API version - and, due to the nature of Typescript, 
you should be alerted on API signature changes already at compile time:

 ```ts
import {YaasApiSchemaV1 as YaasApiSchema} from 'yaas-api-schema-v1';
 ```


### JS (Legacy)
API skeleton as it would be produced by MuleSoft's [raml-javascript-generator](https://github.com/mulesoft-labs/raml-javascript-generator) JS generator is shipped for reference and to ease migrations:
```js
var YaasApiSchemaV1 = require('yaas-api-schema-v1/leagcy.js')

var client = new YaasApiSchemaV1()
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options per request by passing an object as the last argument of request methods. For example:

```javascript
client = new YaasApiSchemaV1({ ... })

client('GET', '/', {
  baseUri: 'https://api.eu.yaas.io/hybris/schema/anotherVersion',
  headers: {
    'Content-Type': 'application/json'
  }
})
```

For dynamic header injection - for example required for non-standard REST services asking for custom authentication token - a provider may be defined:

```javascript
client = new YaasApiSchemaV1({
  getHeaders: ()=>{ return(this.myToken ? {Authorization: "Bearer " + this.myToken} : {}) }
});
```

#### Base URI
By default, endpoint as defined in RAML file `https://api.eu.yaas.io/hybris/schema/v1` is used.

**Note** If supported by API provider, it is recommended to use one API version definition (i.e. RAML file and corresponding API TypeScript library) and switch endpoint based on the desired environment, for example `test`, `qa` or `prod`

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new YaasApiSchemaV1({
  baseUri: 'https://api.eu.yaas.io/hybris/schema/anotherVersion',
});
```


### Methods

All methods return an Observable wrapping a [Popsicle](https://github.com/blakeembrey/popsicle) obtained response:

#### `tenant({ tenant }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)

Returns a list, that contains the IDs of the schemas, their tags and metadata. It can be limited by a query on tags or metadata. The 'q' query parameter enables you to specify the conditions. Two types of operators are supported for tags:<br/>
- IN - Checks if a tag contains any of the provided values, such as branch:in(apparel, food)<br/>
- ALL - The tag must contain all values from the condition, such as branch:all(sport, food) <br/>
There is also possibility to filter schema by metadata. In this case the only operator is EQUAL. Values should be quoted!
<br/> **Security / Access Control:** <br/>To access this method, an access token must be issued for the tenant with the <b>hybris.schema_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)

Deletes all schemas for a given tenant. <br>
<br/> **Security / Access Control:** <br/>To access this method, an access token must be issued for the tenant with the <b>hybris.schema_admin</b> scope to manage this resource.

```js
client.tenant({ tenant }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** Name of the schema stored for the given tenant. (type: `string`)

Gets the schema file. <br/> <br/> **Security / Access Control:** <br/> Does not require access token.

```js
client.tenant({ tenant }).schema({ schema }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** Name of the schema stored for the given tenant. (type: `string`)

Creates a new schema file. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>tenant</b> and have <b>hybris.schema_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).metadata.get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** (type: `string`)

Returns the metadata of a given schema.
<br/> <br/> **Security / Access Control:** <br/>To access this method, an access token must be issued for the tenant with the <b>hybris.schema_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).metadata.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).metadata.put([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** (type: `string`)

Updates metadata stored along with the schema by replacing it.
The metadata format is simple key-value pairs. Both keys and values must be strings and keys cannot contain any special characters like "." or "$".
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>tenant</b> and have <b>hybris.schema_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).metadata.put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).tags.get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** Name of the schema stored for the given tenant. (type: `string`)

Get a list of all tags with all distinct values for a particular schema.
<br/> <br/> **Security / Access Control:** <br/>To access this method, an access token must be issued for the tenant with the <b>hybris.schema_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).tags.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).tags.tag({ tag }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** Name of the schema stored for the given tenant. (type: `string`)
* **tag** Name of the tag attribute to which tags will be added or removed from. (type: `string`)

Append several tags values to a schema.
Tags are added only if they are not already added.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>tenant</b> and have <b>hybris.schema_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).tags.tag({ tag }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).schema({ schema }).tags.tag({ tag }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **schema** Name of the schema stored for the given tenant. (type: `string`)
* **tag** Name of the tag attribute to which tags will be added or removed from. (type: `string`)

Removes tags from a schema. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>tenant</b> and have <b>hybris.schema_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).schema({ schema }).tags.tag({ tag }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).all.tagvalues.get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)

Returns a list of all tags with their distinct values. The result is based on all tenant's schemas and it is eventually consistent, which means it may be outdated as aggregation does not run on every GET request.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>tenant</b> and have <b>hybris.schema_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).all.tagvalues.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).all.tagvalues.tag({ tag }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. Must match the project that is associated with the access token in the Authorization header. (type: `string`)
* **tag** Name of the tag attribute whose values will be aggregated. (type: `string`)

Return distinct values for the given tag from all schemas. The result is eventually consistent, which means it may be outdated because the aggregation does not run on every GET request.
<br/> <br/> **Security / Access Control:** <br/>To access this method, an access token must be issued for the tenant with the <b>hybris.schema_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).all.tagvalues.tag({ tag }).get([query, [options]]).then(...)
```
  
## License

Apache 2.0
