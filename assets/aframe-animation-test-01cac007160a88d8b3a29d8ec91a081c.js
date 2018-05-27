"use strict"
define("aframe-animation-test/app",["exports","aframe-animation-test/resolver","ember-load-initializers","aframe-animation-test/config/environment","npm:aframe","npm:aframe-animation-component"],function(e,t,a,i){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,a.default)(n,i.default.modulePrefix),e.default=n}),define("aframe-animation-test/helpers/app-version",["exports","aframe-animation-test/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.default.APP.version,r=i.versionOnly||i.hideSha,o=i.shaOnly||i.hideVersion,l=null
return r&&(i.showExtended&&(l=n.match(a.versionExtendedRegExp)),l||(l=n.match(a.versionRegExp))),o&&(l=n.match(a.shaRegExp)),l?l[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=Ember.Helper.helper(i)}),define("aframe-animation-test/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("aframe-animation-test/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("aframe-animation-test/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","aframe-animation-test/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0,n=void 0
a.default.APP&&(i=a.default.APP.name,n=a.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(i,n)}}),define("aframe-animation-test/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("aframe-animation-test/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("aframe-animation-test/initializers/export-application-global",["exports","aframe-animation-test/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var i,n=t.default.exportApplicationGlobal
i="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),a[i]||(a[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("aframe-animation-test/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("aframe-animation-test/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("aframe-animation-test/router",["exports","aframe-animation-test/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){}),e.default=a}),define("aframe-animation-test/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("aframe-animation-test/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"H6Dq12oH",block:'{"symbols":[],"statements":[[6,"a-scene"],[8],[0,"\\n  "],[6,"a-camera"],[10,"position","5 2 5"],[10,"rotation","-10 45 0"],[10,"spectator","true"],[8],[9],[0,"\\n  "],[6,"a-box"],[10,"color","#EF2D5E"],[10,"animation__first","property: height; dur: 10000; to: 10"],[10,"animation__second","property: width; dur: 10000; to: 10"],[8],[9],[0,"\\n"],[9],[0,"\\n"],[1,[20,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"aframe-animation-test/templates/application.hbs"}})}),define("aframe-animation-test/config/environment",[],function(){try{var e="aframe-animation-test/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("aframe-animation-test/app").default.create({name:"aframe-animation-test",version:"0.0.0+1f4c970b"})
