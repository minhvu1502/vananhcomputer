!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{K8dJ:function(e,r,u){"use strict";u.d(r,"a",(function(){return l}));var a=u("tk/3"),o=u("AytR"),i=u("YMfE"),c=u("fXoL"),p=u("Ac7g"),l=function(){var e=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"create",value:function(t){return this.http.post(o.a.BASE_API_URL+i.r.create,t)}},{key:"createMany",value:function(t){return this.http.post(o.a.BASE_API_URL+i.r.createMany,t)}},{key:"update",value:function(t){return this.http.put(o.a.BASE_API_URL+i.r.update,t)}},{key:"getById",value:function(t){return this.http.get(o.a.BASE_API_URL+i.r.getById+t)}},{key:"updateVisitCount",value:function(t){return this.http.post(o.a.BASE_API_URL+i.r.updateVisitCount+o.a.ALLOW_ANONYMOUS,t)}},{key:"delete",value:function(t){var e={headers:new a.g({"Content-Type":"application/json"}),body:t};return this.http.request("delete",o.a.BASE_API_URL+i.r.delete,e)}},{key:"getFilter",value:function(t){return this.http.post(o.a.BASE_API_URL+i.r.getFilter+o.a.ALLOW_ANONYMOUS,t)}},{key:"getListProductBySupplier",value:function(t){return this.http.post(o.a.BASE_API_URL+i.r.getProdBySupplier+o.a.ALLOW_ANONYMOUS,t)}},{key:"getAll",value:function(){return this.http.get(o.a.BASE_API_URL+i.r.getAll+o.a.ALLOW_ANONYMOUS)}},{key:"getListCombobox",value:function(){return this.http.get(o.a.BASE_API_URL+i.r.getListCombobox)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(p.s))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},sQTL:function(e,r,u){"use strict";u.d(r,"a",(function(){return l}));var a=u("tk/3"),o=u("AytR"),i=u("YMfE"),c=u("fXoL"),p=u("Ac7g"),l=function(){var e=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"create",value:function(t){return this.http.post(o.a.BASE_API_URL+i.l.create,t)}},{key:"createMany",value:function(t){return this.http.post(o.a.BASE_API_URL+i.l.createMany,t)}},{key:"update",value:function(t){return this.http.put(o.a.BASE_API_URL+i.l.update,t)}},{key:"getById",value:function(t){return this.http.get(o.a.BASE_API_URL+i.l.getById+t)}},{key:"delete",value:function(t){var e={headers:new a.g({"Content-Type":"application/json"}),body:t};return this.http.request("delete",o.a.BASE_API_URL+i.l.delete,e)}},{key:"getFilter",value:function(t){return this.http.post(o.a.BASE_API_URL+i.l.getFilter,t)}},{key:"getAll",value:function(){return this.http.get(o.a.BASE_API_URL+i.l.getAll+o.a.ALLOW_ANONYMOUS)}},{key:"getListCombobox",value:function(){return this.http.get(o.a.BASE_API_URL+i.l.getListCombobox)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Zb(p.s))},e.\u0275prov=c.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();