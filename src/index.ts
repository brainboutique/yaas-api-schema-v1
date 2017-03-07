/// <reference types="@types/es6-shim" />
//========================================================================
// RAML-defined Typed REST Client for 'YaasApiSchemaV1'
//========================================================================

import * as popsicle from 'popsicle';
import * as extend from 'deep-extend';
import {Observable} from '@reactivex/rxjs';


//========================================================================
// Schema 'appData'
//========================================================================
export namespace AppData {
   export type AppData = any[];
}


//========================================================================
// Schema 'schemasData'
//========================================================================
export namespace SchemasData {
   export interface SchemaMetadata {
     id?: string;
     metadata?: {
       [k: string]: string;
     };
     tags?: {
       [k: string]: any[];
     };
     [k: string]: any;
   }
   export type SchemasData = SchemaMetadata[];
}


//========================================================================
// Schema 'schemasTags'
//========================================================================
export namespace SchemasTags {
   export type SchemasTags = Object;
}


//========================================================================
// Schema 'resourceLocation'
//========================================================================
export namespace ResourceLocation {
   /**
    * Schema for showing location of the new resource.
    */
   export interface ResourceLocation {
     /**
      * The identifier of the created resource
      */
     id: string;
     /**
      * The link to the created resource
      */
     link: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'errorMessage'
//========================================================================
export namespace ErrorMessage {
   /**
    * schema for specific error cause
    */
   export interface ErrorDetail {
     /**
      * a bean notation expression specifying the element in request data causing the error, eg product.variants[3].name, this can be empty if violation was not field specific
      */
     field?: string;
     /**
      * classification of the error detail type, lower case with underscore eg missing_value, this value must be always interpreted in context of the general error type.
      */
     type: string;
     /**
      * descriptive error detail message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support for error detail
      */
     moreInfo?: string;
     [k: string]: any;
   }
   /**
    * Schema for API specified errors.
    */
   export interface ErrorMessage {
     /**
      * original HTTP error code, should be consistent with the response HTTP code
      */
     status: number;
     /**
      * classification of the error type, lower case with underscore eg validation_failure
      */
     type: string;
     /**
      * descriptive error message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support
      */
     moreInfo?: string;
     /**
      * list of problems causing this error
      */
     details?: ErrorDetail[];
     [k: string]: any;
   }
}


//========================================================================
// Schema 'keyValues'
//========================================================================
export namespace KeyValues {
   export interface KeyValues {
     [k: string]: string;
   }
}


//========================================================================
// Schema 'userMetadata'
//========================================================================
export namespace UserMetadata {
   export interface UserMetadata {
     [k: string]: string;
   }
}


//========================================================================
// Schema 'systemUserMetadata'
//========================================================================
export namespace SystemUserMetadata {
   export interface SystemUserMetadata {
     /**
      * schema name
      */
     id?: string;
     /**
      * user schema metadata
      */
     metadata?: {
       [k: string]: string;
     };
     [k: string]: any;
   }
}


//========================================================================
// Actions
//========================================================================


var TEMPLATE_REGEXP = /{([^{}]+)}/g

function template(string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}  

 export class YaasApiSchemaV1 {
  _client: any;
  _path: string;
  _options: any;
  _form: any;
  _version: any;
  _Security: any;

  // RAML resources without parameters


  constructor(options?:any) {
    this._path = ''
    this._options = extend({
      baseUri: 'https://api.eu.yaas.io/hybris/schema/v1',
      baseUriParameters: {}
    }, options)
  
    //function client (method, path, options) {
    //  return this.request(client, method, path, options)
    //}
    
    // Initialize RAML resourcs without parameters

    this._client=this;
    this._form = popsicle.form
    this._version = 'v0.1'
    this._Security = {

    }
  // RAML resources with parameters
  

}

 request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: extend(options.headers, options.getHeaders ? options.getHeaders() : {}),
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}


// createProtoResources - Resource: Client
tenant(tenant:string) { return new Resources.Tenant(this._client, this._path + template('/{tenant}', extend({}, {tenant:tenant}))) }
}
export module Resources {
  // createResource - Tenant
  export class Tenant { 
    _client: any; _path: string;
    all:Tenant.TenantAll;
    constructor(client, path) {
      this._client = client
      this._path = path
    this.all = new Tenant.TenantAll(this._client, this._path + '/all')
    }
  // createProtoResources - Resource: Tenant
  schema(schema:string) { return new Tenant.TenantSchema(this._client, this._path + template('/{schema}', extend({}, {schema:schema}))) }
    /**
     * GET on Tenant
     */
    GET(totalCount?:boolean, pageNumber?:number, pageSize?:number, q?:string, sort?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:SchemasData.SchemasData,"_400"?:ErrorMessage.ErrorMessage,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         if (totalCount !== undefined && totalCount !== null) options.query['totalCount']=totalCount;
         if (pageNumber !== undefined && pageNumber < 1) { observer.error('Parameter \'pageNumber\' outside specified range!'); return;}
         if (pageNumber !== undefined && pageNumber !== null) options.query['pageNumber']=pageNumber;
         if (pageSize !== undefined && pageSize < 1) { observer.error('Parameter \'pageSize\' outside specified range!'); return;}
         if (pageSize !== undefined && pageSize !== null) options.query['pageSize']=pageSize;
         if (q !== undefined && q !== null) options.query['q']=q;
         if (sort !== undefined && sort !== null) options.query['sort']=sort;
         this._client.request(this._client, 'get', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
    /**
     * DELETE on Tenant
     */
    DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'delete', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Tenant { 
    // createResource - TenantSchema
    export class TenantSchema { 
      _client: any; _path: string;
      metadata:Tenant.TenantSchema.TenantSchemaMetadata;
      tags:Tenant.TenantSchema.TenantSchemaTags;
      constructor(client, path) {
        this._client = client
        this._path = path
      this.metadata = new Tenant.TenantSchema.TenantSchemaMetadata(this._client, this._path + '/metadata')
      this.tags = new Tenant.TenantSchema.TenantSchemaTags(this._client, this._path + '/tags')
      }
      /**
       * GET on TenantSchema
       */
      GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'get', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
      /**
       * POST on TenantSchema
       */
      POST(body:any, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_201"?:ResourceLocation.ResourceLocation,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_409"?:ErrorMessage.ErrorMessage}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           options.body=body;
           this._client.request(this._client, 'post', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
    }
    export module TenantSchema { 
      // createResource - TenantSchemaMetadata
      export class TenantSchemaMetadata { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
        /**
         * GET on TenantSchemaMetadata
         */
        GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:SystemUserMetadata.SystemUserMetadata,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             this._client.request(this._client, 'get', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
        /**
         * PUT on TenantSchemaMetadata
         */
        PUT(body:KeyValues.KeyValues, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400"?:ErrorMessage.ErrorMessage,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             options.body=body;
             this._client.request(this._client, 'put', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
      }
      export module TenantSchemaMetadata { 
      }
      // createResource - TenantSchemaTags
      export class TenantSchemaTags { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantSchemaTags
      tag(tag:string) { return new Tenant.TenantSchema.TenantSchemaTags.TenantSchemaTagsTag(this._client, this._path + template('/{tag}', extend({}, {tag:tag}))) }
        /**
         * GET on TenantSchemaTags
         */
        GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:SchemasData.SchemasData,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             this._client.request(this._client, 'get', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
      }
      export module TenantSchemaTags { 
        // createResource - TenantSchemaTagsTag
        export class TenantSchemaTagsTag { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
          /**
           * POST on TenantSchemaTagsTag
           */
          POST(tags:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (tags !== undefined && tags !== null) options.query['tags']=tags;
               this._client.request(this._client, 'post', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * DELETE on TenantSchemaTagsTag
           */
          DELETE(tags:string, removeEmpty?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (tags !== undefined && tags !== null) options.query['tags']=tags;
               if (removeEmpty !== undefined && removeEmpty !== null) options.query['removeEmpty']=removeEmpty;
               this._client.request(this._client, 'delete', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantSchemaTagsTag { 
        }
      }
    }
    // createResource - TenantAll
    export class TenantAll { 
      _client: any; _path: string;
      tagvalues:Tenant.TenantAll.TenantAllTagvalues;
      constructor(client, path) {
        this._client = client
        this._path = path
      this.tagvalues = new Tenant.TenantAll.TenantAllTagvalues(this._client, this._path + '/tagvalues')
      }
    }
    export module TenantAll { 
      // createResource - TenantAllTagvalues
      export class TenantAllTagvalues { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantAllTagvalues
      tag(tag:string) { return new Tenant.TenantAll.TenantAllTagvalues.TenantAllTagvaluesTag(this._client, this._path + template('/{tag}', extend({}, {tag:tag}))) }
        /**
         * GET on TenantAllTagvalues
         */
        GET(pageNumber?:number, pageSize?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:AppData.AppData,"_400"?:ErrorMessage.ErrorMessage,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage,"_503"?:ErrorMessage.ErrorMessage}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             if (pageNumber !== undefined && pageNumber < 1) { observer.error('Parameter \'pageNumber\' outside specified range!'); return;}
             if (pageNumber !== undefined && pageNumber !== null) options.query['pageNumber']=pageNumber;
             if (pageSize !== undefined && pageSize < 1) { observer.error('Parameter \'pageSize\' outside specified range!'); return;}
             if (pageSize !== undefined && pageSize !== null) options.query['pageSize']=pageSize;
             this._client.request(this._client, 'get', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
      }
      export module TenantAllTagvalues { 
        // createResource - TenantAllTagvaluesTag
        export class TenantAllTagvaluesTag { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
          /**
           * GET on TenantAllTagvaluesTag
           */
          GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200"?:AppData.AppData,"_401"?:ErrorMessage.ErrorMessage,"_403"?:ErrorMessage.ErrorMessage,"_404"?:ErrorMessage.ErrorMessage,"_503"?:ErrorMessage.ErrorMessage}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'get', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantAllTagvaluesTag { 
        }
      }
    }
  }
}
