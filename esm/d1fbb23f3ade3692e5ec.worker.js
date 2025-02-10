/*! For license information please see d1fbb23f3ade3692e5ec.worker.js.LICENSE.txt */
var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{graphNew:()=>Q});const r=.5*Math.PI,o=(t,e)=>Math.round(t/e)*e,n=(t,e)=>Math.atan2(t.y-e.y,t.x-e.x),i=t=>t.x-.5*t.width,s=t=>t.x+.5*t.width,a=t=>t.y-.5*t.height,c=t=>t.y+.5*t.height,u=t=>{const e={};for(const r of t)e[r.y]=e[r.y]||[],e[r.y].push(r);const r=Object.keys(e).map((t=>parseFloat(t)));r.sort(((t,e)=>t-e));const o=r.map((t=>e[t]));for(let t=0;t<o.length;t+=1){o[t].sort(((t,e)=>p(t.x,e.x,t.id,e.id)));for(const e of o[t])e.row=t}return o},p=function(t,e){const r="string"==typeof t?t.localeCompare(e):t-e;for(var o=arguments.length,n=new Array(o>2?o-2:0),i=2;i<o;i++)n[i-2]=arguments[i];return 0!==r||0===n.length?r:p(...n)},h=(t,e,r,o,n,i)=>{const s=n-r,a=i-o,c=(h=1,(u=((t-r)*s+(e-o)*a)/(s*s+a*a||1))<(p=0)?p:u>h?h:u);var u,p,h;return{x:r+s*c,y:o+a*c,ax:r,ay:o,bx:n,by:i}};function f(){return new d}var d=function(){function t(){this.index={},this.array=[]}return t.prototype.size=function(){return this.array.length},t.prototype.empty=function(){return 0===this.array.length},t.prototype.itemAt=function(t){return this.array[t]},t.prototype.contains=function(t){return void 0!==this.index[t.id()]},t.prototype.find=function(t){var e=this.index[t.id()];return void 0===e?void 0:this.array[e]},t.prototype.setDefault=function(t,e){var r=this.index[t.id()];if(void 0===r){var o=new l(t,e());return this.index[t.id()]=this.array.length,this.array.push(o),o}return this.array[r]},t.prototype.insert=function(t,e){var r=new l(t,e),o=this.index[t.id()];return void 0===o?(this.index[t.id()]=this.array.length,this.array.push(r)):this.array[o]=r,r},t.prototype.erase=function(t){var e=this.index[t.id()];if(void 0!==e){this.index[t.id()]=void 0;var r=this.array[e],o=this.array.pop();return r!==o&&(this.array[e]=o,this.index[o.first.id()]=e),r}},t.prototype.copy=function(){for(var e=new t,r=0;r<this.array.length;r++){var o=this.array[r].copy();e.array[r]=o,e.index[o.first.id()]=r}return e},t}(),l=function(){function t(t,e){this.first=t,this.second=e}return t.prototype.copy=function(){return new t(this.first,this.second)},t}(),y=function(){function t(t){void 0===t&&(t=""),this._value=0,this._context=null,this._id=m++,this._name=t}return t.prototype.id=function(){return this._id},t.prototype.name=function(){return this._name},t.prototype.setName=function(t){this._name=t},t.prototype.context=function(){return this._context},t.prototype.setContext=function(t){this._context=t},t.prototype.value=function(){return this._value},t.prototype.setValue=function(t){this._value=t},t.prototype.plus=function(t){return new v(this,t)},t.prototype.minus=function(t){return new v(this,"number"==typeof t?-t:[-1,t])},t.prototype.multiply=function(t){return new v([t,this])},t.prototype.divide=function(t){return new v([1/t,this])},t.prototype.toJSON=function(){return{name:this._name,value:this._value}},t.prototype.toString=function(){return this._context+"["+this._name+":"+this._value+"]"},t}(),m=0,v=function(){function t(){var t=g(arguments);this._terms=t.terms,this._constant=t.constant}return t.prototype.terms=function(){return this._terms},t.prototype.constant=function(){return this._constant},t.prototype.value=function(){for(var t=this._constant,e=0,r=this._terms.size();e<r;e++){var o=this._terms.itemAt(e);t+=o.first.value()*o.second}return t},t.prototype.plus=function(e){return new t(this,e)},t.prototype.minus=function(e){return new t(this,"number"==typeof e?-e:[-1,e])},t.prototype.multiply=function(e){return new t([e,this])},t.prototype.divide=function(e){return new t([1/e,this])},t.prototype.isConstant=function(){return 0==this._terms.size()},t.prototype.toString=function(){var t=this._terms.array.map((function(t){return t.second+"*"+t.first.toString()})).join(" + ");return this.isConstant()||0===this._constant||(t+=" + "),t+=this._constant},t}();function g(t){for(var e=0,r=function(){return 0},o=f(),n=0,i=t.length;n<i;++n){var s=t[n];if("number"==typeof s)e+=s;else if(s instanceof y)o.setDefault(s,r).second+=1;else if(s instanceof v){e+=s.constant();for(var a=0,c=(d=s.terms()).size();a<c;a++){var u=d.itemAt(a);o.setDefault(u.first,r).second+=u.second}}else{if(!(s instanceof Array))throw new Error("invalid Expression argument: "+s);if(2!==s.length)throw new Error("array must have length 2");var p=s[0],h=s[1];if("number"!=typeof p)throw new Error("array item 0 must be a number");if(h instanceof y)o.setDefault(h,r).second+=p;else{if(!(h instanceof v))throw new Error("array item 1 must be a variable or expression");e+=h.constant()*p;var d;for(a=0,c=(d=h.terms()).size();a<c;a++){u=d.itemAt(a);o.setDefault(u.first,r).second+=u.second*p}}}}return{terms:o,constant:e}}var _,x=function(){function t(){}return t.create=function(t,e,r,o){void 0===o&&(o=1);var n=0;return n+=1e6*Math.max(0,Math.min(1e3,t*o)),n+=1e3*Math.max(0,Math.min(1e3,e*o)),n+=Math.max(0,Math.min(1e3,r*o))},t.clip=function(e){return Math.max(0,Math.min(t.required,e))},t.required=t.create(1e3,1e3,1e3),t.strong=t.create(1,0,0),t.medium=t.create(0,1,0),t.weak=t.create(0,0,1),t}();!function(t){t[t.Le=0]="Le",t[t.Ge=1]="Ge",t[t.Eq=2]="Eq"}(_||(_={}));var b,w=function(){function t(t,e,r,o){void 0===o&&(o=x.required),this._id=M++,this._operator=e,this._strength=x.clip(o),this._expression=void 0===r&&t instanceof v?t:t.minus(r)}return t.prototype.id=function(){return this._id},t.prototype.expression=function(){return this._expression},t.prototype.op=function(){return this._operator},t.prototype.strength=function(){return this._strength},t.prototype.toString=function(){return this._expression.toString()+" "+["<=",">=","="][this._operator]+" 0 ("+this._strength.toString()+")"},t}(),M=0,S=function(){function t(){this._cnMap=f(),this._rowMap=f(),this._varMap=f(),this._editMap=f(),this._infeasibleRows=[],this._objective=new z,this._artificial=null,this._idTick=0}return t.prototype.createConstraint=function(t,e,r,o){void 0===o&&(o=x.required);var n=new w(t,e,r,o);return this.addConstraint(n),n},t.prototype.addConstraint=function(t){if(void 0!==this._cnMap.find(t))throw new Error("duplicate constraint");var e=this._createRow(t),r=e.row,o=e.tag,n=this._chooseSubject(r,o);if(n.type()===b.Invalid&&r.allDummies()){if(!E(r.constant()))throw new Error("unsatisfiable constraint");n=o.marker}if(n.type()===b.Invalid){if(!this._addWithArtificialVariable(r))throw new Error("unsatisfiable constraint")}else r.solveFor(n),this._substitute(n,r),this._rowMap.insert(n,r);this._cnMap.insert(t,o),this._optimize(this._objective)},t.prototype.removeConstraint=function(t){var e=this._cnMap.erase(t);if(void 0===e)throw new Error("unknown constraint");this._removeConstraintEffects(t,e.second);var r=e.second.marker,o=this._rowMap.erase(r);if(void 0===o){var n=this._getMarkerLeavingSymbol(r);if(n.type()===b.Invalid)throw new Error("failed to find leaving row");(o=this._rowMap.erase(n)).second.solveForEx(n,r),this._substitute(r,o.second)}this._optimize(this._objective)},t.prototype.hasConstraint=function(t){return this._cnMap.contains(t)},t.prototype.addEditVariable=function(t,e){if(void 0!==this._editMap.find(t))throw new Error("duplicate edit variable");if((e=x.clip(e))===x.required)throw new Error("bad required strength");var r=new v(t),o=new w(r,_.Eq,void 0,e);this.addConstraint(o);var n={tag:this._cnMap.find(o).second,constraint:o,constant:0};this._editMap.insert(t,n)},t.prototype.removeEditVariable=function(t){var e=this._editMap.erase(t);if(void 0===e)throw new Error("unknown edit variable");this.removeConstraint(e.second.constraint)},t.prototype.hasEditVariable=function(t){return this._editMap.contains(t)},t.prototype.suggestValue=function(t,e){var r=this._editMap.find(t);if(void 0===r)throw new Error("unknown edit variable");var o=this._rowMap,n=r.second,i=e-n.constant;n.constant=e;var s=n.tag.marker,a=o.find(s);if(void 0!==a)return a.second.add(-i)<0&&this._infeasibleRows.push(s),void this._dualOptimize();var c=n.tag.other;if(void 0!==(a=o.find(c)))return a.second.add(i)<0&&this._infeasibleRows.push(c),void this._dualOptimize();for(var u=0,p=o.size();u<p;++u){var h=o.itemAt(u),f=h.second,d=f.coefficientFor(s);0!==d&&f.add(i*d)<0&&h.first.type()!==b.External&&this._infeasibleRows.push(h.first)}this._dualOptimize()},t.prototype.updateVariables=function(){for(var t=this._varMap,e=this._rowMap,r=0,o=t.size();r<o;++r){var n=t.itemAt(r),i=e.find(n.second);void 0!==i?n.first.setValue(i.second.constant()):n.first.setValue(0)}},t.prototype._getVarSymbol=function(t){var e=this;return this._varMap.setDefault(t,(function(){return e._makeSymbol(b.External)})).second},t.prototype._createRow=function(t){for(var e=t.expression(),r=new z(e.constant()),o=e.terms(),n=0,i=o.size();n<i;++n){var s=o.itemAt(n);if(!E(s.second)){var a=this._getVarSymbol(s.first),c=this._rowMap.find(a);void 0!==c?r.insertRow(c.second,s.second):r.insertSymbol(a,s.second)}}var u=this._objective,p=t.strength(),h={marker:k,other:k};switch(t.op()){case _.Le:case _.Ge:var f=t.op()===_.Le?1:-1,d=this._makeSymbol(b.Slack);if(h.marker=d,r.insertSymbol(d,f),p<x.required){var l=this._makeSymbol(b.Error);h.other=l,r.insertSymbol(l,-f),u.insertSymbol(l,p)}break;case _.Eq:if(p<x.required){var y=this._makeSymbol(b.Error),m=this._makeSymbol(b.Error);h.marker=y,h.other=m,r.insertSymbol(y,-1),r.insertSymbol(m,1),u.insertSymbol(y,p),u.insertSymbol(m,p)}else{var v=this._makeSymbol(b.Dummy);h.marker=v,r.insertSymbol(v)}}return r.constant()<0&&r.reverseSign(),{row:r,tag:h}},t.prototype._chooseSubject=function(t,e){for(var r=t.cells(),o=0,n=r.size();o<n;++o){var i=r.itemAt(o);if(i.first.type()===b.External)return i.first}var s=e.marker.type();return(s===b.Slack||s===b.Error)&&t.coefficientFor(e.marker)<0?e.marker:((s=e.other.type())===b.Slack||s===b.Error)&&t.coefficientFor(e.other)<0?e.other:k},t.prototype._addWithArtificialVariable=function(t){var e=this._makeSymbol(b.Slack);this._rowMap.insert(e,t.copy()),this._artificial=t.copy(),this._optimize(this._artificial);var r=E(this._artificial.constant());this._artificial=null;var o=this._rowMap.erase(e);if(void 0!==o){var n=o.second;if(n.isConstant())return r;var i=this._anyPivotableSymbol(n);if(i.type()===b.Invalid)return!1;n.solveForEx(e,i),this._substitute(i,n),this._rowMap.insert(i,n)}for(var s=this._rowMap,a=0,c=s.size();a<c;++a)s.itemAt(a).second.removeSymbol(e);return this._objective.removeSymbol(e),r},t.prototype._substitute=function(t,e){for(var r=this._rowMap,o=0,n=r.size();o<n;++o){var i=r.itemAt(o);i.second.substitute(t,e),i.second.constant()<0&&i.first.type()!==b.External&&this._infeasibleRows.push(i.first)}this._objective.substitute(t,e),this._artificial&&this._artificial.substitute(t,e)},t.prototype._optimize=function(t){for(;;){var e=this._getEnteringSymbol(t);if(e.type()===b.Invalid)return;var r=this._getLeavingSymbol(e);if(r.type()===b.Invalid)throw new Error("the objective is unbounded");var o=this._rowMap.erase(r).second;o.solveForEx(r,e),this._substitute(e,o),this._rowMap.insert(e,o)}},t.prototype._dualOptimize=function(){for(var t=this._rowMap,e=this._infeasibleRows;0!==e.length;){var r=e.pop(),o=t.find(r);if(void 0!==o&&o.second.constant()<0){var n=this._getDualEnteringSymbol(o.second);if(n.type()===b.Invalid)throw new Error("dual optimize failed");var i=o.second;t.erase(r),i.solveForEx(r,n),this._substitute(n,i),t.insert(n,i)}}},t.prototype._getEnteringSymbol=function(t){for(var e=t.cells(),r=0,o=e.size();r<o;++r){var n=e.itemAt(r),i=n.first;if(n.second<0&&i.type()!==b.Dummy)return i}return k},t.prototype._getDualEnteringSymbol=function(t){for(var e=Number.MAX_VALUE,r=k,o=t.cells(),n=0,i=o.size();n<i;++n){var s=o.itemAt(n),a=s.first,c=s.second;if(c>0&&a.type()!==b.Dummy){var u=this._objective.coefficientFor(a)/c;u<e&&(e=u,r=a)}}return r},t.prototype._getLeavingSymbol=function(t){for(var e=Number.MAX_VALUE,r=k,o=this._rowMap,n=0,i=o.size();n<i;++n){var s=o.itemAt(n),a=s.first;if(a.type()!==b.External){var c=s.second,u=c.coefficientFor(t);if(u<0){var p=-c.constant()/u;p<e&&(e=p,r=a)}}}return r},t.prototype._getMarkerLeavingSymbol=function(t){for(var e=Number.MAX_VALUE,r=e,o=e,n=k,i=n,s=n,a=n,c=this._rowMap,u=0,p=c.size();u<p;++u){var h=c.itemAt(u),f=h.second,d=f.coefficientFor(t);if(0!==d){var l=h.first;if(l.type()===b.External)a=l;else if(d<0){(y=-f.constant()/d)<r&&(r=y,i=l)}else{var y;(y=f.constant()/d)<o&&(o=y,s=l)}}}return i!==n?i:s!==n?s:a},t.prototype._removeConstraintEffects=function(t,e){e.marker.type()===b.Error&&this._removeMarkerEffects(e.marker,t.strength()),e.other.type()===b.Error&&this._removeMarkerEffects(e.other,t.strength())},t.prototype._removeMarkerEffects=function(t,e){var r=this._rowMap.find(t);void 0!==r?this._objective.insertRow(r.second,-e):this._objective.insertSymbol(t,-e)},t.prototype._anyPivotableSymbol=function(t){for(var e=t.cells(),r=0,o=e.size();r<o;++r){var n=e.itemAt(r),i=n.first.type();if(i===b.Slack||i===b.Error)return n.first}return k},t.prototype._makeSymbol=function(t){return new N(t,this._idTick++)},t}();function E(t){return t<0?-t<1e-8:t<1e-8}!function(t){t[t.Invalid=0]="Invalid",t[t.External=1]="External",t[t.Slack=2]="Slack",t[t.Error=3]="Error",t[t.Dummy=4]="Dummy"}(b||(b={}));var N=function(){function t(t,e){this._id=e,this._type=t}return t.prototype.id=function(){return this._id},t.prototype.type=function(){return this._type},t}(),k=new N(b.Invalid,-1),z=function(){function t(t){void 0===t&&(t=0),this._cellMap=f(),this._constant=t}return t.prototype.cells=function(){return this._cellMap},t.prototype.constant=function(){return this._constant},t.prototype.isConstant=function(){return this._cellMap.empty()},t.prototype.allDummies=function(){for(var t=this._cellMap,e=0,r=t.size();e<r;++e){if(t.itemAt(e).first.type()!==b.Dummy)return!1}return!0},t.prototype.copy=function(){var e=new t(this._constant);return e._cellMap=this._cellMap.copy(),e},t.prototype.add=function(t){return this._constant+=t},t.prototype.insertSymbol=function(t,e){void 0===e&&(e=1),E(this._cellMap.setDefault(t,(function(){return 0})).second+=e)&&this._cellMap.erase(t)},t.prototype.insertRow=function(t,e){void 0===e&&(e=1),this._constant+=t._constant*e;for(var r=t._cellMap,o=0,n=r.size();o<n;++o){var i=r.itemAt(o);this.insertSymbol(i.first,i.second*e)}},t.prototype.removeSymbol=function(t){this._cellMap.erase(t)},t.prototype.reverseSign=function(){this._constant=-this._constant;for(var t=this._cellMap,e=0,r=t.size();e<r;++e){var o=t.itemAt(e);o.second=-o.second}},t.prototype.solveFor=function(t){var e=this._cellMap,r=-1/e.erase(t).second;this._constant*=r;for(var o=0,n=e.size();o<n;++o)e.itemAt(o).second*=r},t.prototype.solveForEx=function(t,e){this.insertSymbol(t,-1),this.solveFor(e)},t.prototype.coefficientFor=function(t){var e=this._cellMap.find(t);return void 0!==e?e.second:0},t.prototype.substitute=function(t,e){var r=this._cellMap.erase(t);void 0!==r&&this.insertRow(e,r.second)},t}();const A=(t,e,r)=>{for(let o=0;o<e;o+=1)for(const e of t)e.base.solve(e,r)},j=(t,e)=>{const r=new S,o={},n=(t,e)=>"".concat(t.id,"_").concat(e),i=(t,e)=>{const r=n(t,e);if(!o[r]){const n=o[r]=new y;n.property=e,n.obj=t}};for(const e of t)i(e.a,e.base.property),i(e.b,e.base.property);let s=0;for(const i of t)try{r.addConstraint(i.base.strict(i,e,o[n(i.a,i.base.property)],o[n(i.b,i.base.property)]))}catch(t){s+=1}r.updateVariables();const a=Object.values(o);for(const t of a)t.obj[t.property]=t.value()},C={property:"y",strict:(t,e,r,o)=>new w(r.minus(o),_.Ge,e.spaceY,x.required)},F={property:"y",strict:(t,e,r,o)=>new w(r.minus(o),_.Ge,e.layerSpace,x.required)},O={property:"x",solve:t=>{const{a:e,b:r,strength:o}=t,n=o*(e.x-r.x);e.x-=n,r.x+=n},strict:(t,e,r,o)=>new w(r.minus(o),_.Eq,0,x.create(1,0,0,t.strength))},R={property:"x",solve:t=>{const{edgeA:e,edgeB:r,separationA:o,separationB:n,strength:i}=t,s=i*((e.sourceNode.x-r.sourceNode.x-o)/o),a=i*((e.targetNode.x-r.targetNode.x-n)/n);e.sourceNode.x-=s,r.sourceNode.x+=s,e.targetNode.x-=a,r.targetNode.x+=a}},D={property:"x",strict:(t,e,r,o)=>new w(o.minus(r),_.Ge,t.separation,x.required)},q=t=>t.map((t=>({base:C,a:t.targetNode,b:t.sourceNode}))),V=(t,e)=>{const r=[];if(!e)return r;const o=e.map((e=>t.filter((t=>t.nearestLayer===e))));for(let t=0;t<o.length-1;t+=1){const e=o[t],n=o[t+1],i={id:"layer-".concat(t),x:0,y:0};for(const t of e)r.push({base:F,a:i,b:t});for(const t of n)r.push({base:F,a:t,b:i})}return r},X=(t,e)=>{const{spaceX:r}=e,o=[];for(let e=0;e<t.length;e+=1){const n=t[e],{sourceNode:i,targetNode:s}=n,a=i.sources.length+i.targets.length+s.sources.length+s.targets.length;for(let c=e+1;c<t.length;c+=1){const e=t[c],{sourceNode:u,targetNode:p}=e;if(i.row>=p.row||s.row<=u.row)continue;const h=u.sources.length+u.targets.length+p.sources.length+p.targets.length;o.push({base:R,edgeA:n,edgeB:e,separationA:.5*i.width+r+.5*u.width,separationB:.5*s.width+r+.5*p.width,strength:1/Math.max(1,(a+h)/4)})}}return o},I=t=>t.map((t=>{let{sourceNode:e,targetNode:r}=t;return{base:O,a:e,b:r,strength:.6/Math.max(1,e.targets.length+r.sources.length-2)}})),L=(t,e)=>{const{spaceX:r}=e,n=[];for(let i=0;i<t.length;i+=1){const s=t[i];s.sort(((t,e)=>p(t.x,e.x,t.id,e.id)));for(let t=0;t<s.length-1;t+=1){const i=s[t],a=s[t+1],c=Math.max(1,i.targets.length+i.sources.length-2),u=Math.max(1,a.targets.length+a.sources.length-2),p=Math.min(10,c*u*e.spreadX),h=o(p*r,r);n.push({base:D,a:i,b:a,separation:.5*i.width+h+.5*a.width})}}return n},P=function(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.25,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.25;const s=G(t),a=Math.round(r*i);let c=0;for(let t=0;t<e.length-1;t+=1){const i=s[t]||0;c+=o(i*n*r,a);for(const r of e[t+1])r.y+=c}},G=t=>{const e={};for(const o of t){const t=Math.abs(n(o.targetNode,o.sourceNode)-r)/r,i=o.sourceNode.row,s=o.targetNode.row-1;e[i]=e[i]||[0,0],e[i][0]+=t,e[i][1]+=1,s!==i&&(e[s]=e[s]||[0,0],e[s][0]+=t,e[s][1]+=1)}for(const t in e)e[t]=e[t][0]/(e[t][1]||1);return Object.values(e)},T={layout:{spaceX:14,spaceY:110,layerSpaceY:55,spreadX:2.2,padding:100,iterations:25},routing:{spaceX:26,spaceY:28,minPassageGap:40,stemUnit:8,stemMinSource:5,stemMinTarget:5,stemMax:20,stemSpaceSource:6,stemSpaceTarget:10}},Y=function(t,e,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T;B(t,e),U(t,r),(t=>{let{nodes:e,edges:r,layers:o,spaceX:n,spaceY:i,spreadX:s,layerSpaceY:a,iterations:c}=t;for(const t of e)t.x=0,t.y=0;const p={spaceX:n,spaceY:i,spreadX:s,layerSpace:.5*(i+a)},h=q(r),f=V(e,o);j([...h,...f],p);const d=u(e),l=X(r,p),y=I(r,p);for(let t=0;t<c;t+=1)A(l,1,p),A(y,50,p);const m=L(d,p);j([...m,...y],p),P(r,d,i)})({nodes:t,edges:e,layers:r,...o.layout}),(t=>{let{nodes:e,edges:r,spaceX:o,spaceY:f,minPassageGap:d,stemUnit:l,stemMinSource:y,stemMinTarget:m,stemMax:v,stemSpaceSource:g,stemSpaceTarget:_}=t;const x=u(e);for(const t of e)t.targets.sort(((t,e)=>p(n(e.sourceNode,e.targetNode),n(t.sourceNode,t.targetNode))));for(const t of r){const e=t.sourceNode,r=t.targetNode;t.points=[];const n=Math.min((e.width-g)/e.targets.length,g)*(e.targets.indexOf(t)-.5*(e.targets.length-1));let c={x:e.x+n,y:e.y};for(let u=e.row+1;u<r.row;u+=1){const e=x[u][0];let r={x:i(e)-o,y:e.y},p=1/0;const l=[{...e,x:Number.MIN_SAFE_INTEGER},...x[u],{...e,x:Number.MAX_SAFE_INTEGER}];for(let t=0;t<l.length-1;t+=1){const e=l[t],n=l[t+1],u=i(n)-s(e);if(u<d)continue;const y=Math.min(o,.5*u),m=h(c.x,c.y,s(e)+y,a(e)-f,i(n)-y,a(n)-f),v=(b=c.x,w=m.x,Math.abs(b-w));if(v>p)break;v<p&&(p=v,r=m)}const y=e.height+f;t.points.push({x:r.x+n,y:r.y}),t.points.push({x:r.x+n,y:r.y+y}),c={x:r.x,y:r.y+y}}}var b,w;for(const t of e)t.targets.sort(((t,e)=>p(n(e.sourceNode,e.points[0]||e.targetNode),n(t.sourceNode,t.points[0]||t.targetNode)))),t.sources.sort(((t,e)=>p(n(t.points[t.points.length-1]||t.sourceNode,t.targetNode),n(e.points[e.points.length-1]||e.sourceNode,e.targetNode))));for(const t of r){const e=t.sourceNode,r=t.targetNode,o=Math.min((e.width-g)/e.targets.length,g),n=Math.min((r.width-_)/r.sources.length,_),i=e.targets.indexOf(t)-.5*(e.targets.length-1),s=r.sources.indexOf(t)-.5*(r.sources.length-1),u=o*i,p=n*s,h=l*e.targets.length*(1-Math.abs(i)/e.targets.length),f=l*r.sources.length*(1-Math.abs(s)/r.sources.length),d=[{x:e.x+u,y:c(e)},{x:e.x+u,y:c(e)+y},{x:e.x+u,y:c(e)+y+Math.min(h,v)}],x=[{x:r.x+p,y:a(r)-m-Math.min(f,v)},{x:r.x+p,y:a(r)-m},{x:r.x+p,y:a(r)}],b=[...d,...t.points,...x];let w=b[0].y;for(const t of b)t.y<w?t.y=w:w=t.y;t.points=b}})({nodes:t,edges:e,layers:r,...o.routing});const f=K(t,o.layout.padding);return t.forEach((t=>((t,e)=>(t.x=t.x-e.x,t.y=t.y-e.y,t.order=t.x+9999*t.y,t))(t,f.min))),e.forEach((t=>((t,e)=>(t.points.forEach((t=>{t.x=t.x-e.x,t.y=t.y-e.y})),t))(t,f.min))),{nodes:t,edges:e,layers:r,size:f}},B=(t,e)=>{const r={};for(const e of t)r[e.id]=e,e.targets=[],e.sources=[];for(const t of e)t.sourceNode=r[t.source],t.targetNode=r[t.target],t.sourceNode.targets.push(t),t.targetNode.sources.push(t)},U=(t,e)=>{if(e&&e.length>0){const r={};for(const t of e)r[t]=!0;const o=t=>Boolean(t&&t.layer in r),n=e[e.length-1];for(const e of t){const t=H(e,W,J,o);e.nearestLayer=t?t.layer:n}}},W=t=>t.targets.map((t=>t.targetNode)),J=(t,e)=>t.rank-e.rank,H=(t,e,r,o,n)=>{if(o(t))return t;(n=n||{})[t.id]=!0;return e(t).filter((t=>!n[t.id])).sort(r).map((t=>H(t,e,r,o,n))).filter(o).sort(r)[0]},K=(t,e)=>{const r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}};for(const e of t){const t=e.x,o=e.y;t<r.min.x&&(r.min.x=t),t>r.max.x&&(r.max.x=t),o<r.min.y&&(r.min.y=o),o>r.max.y&&(r.max.y=o)}return r.width=r.max.x-r.min.x+2*e,r.height=r.max.y-r.min.y+2*e,r.min.x-=e,r.min.y-=e,r},Q=t=>{let{nodes:e,edges:r,layers:o}=t;for(const t of e){t.iconSize=t.iconSize||24,t.icon=t.icon||"node";const e={x:20,y:10},r=7*(t&&t.fullName&&t.fullName.length||t&&t.name&&t.name.length),o=6,n=t.iconSize+r+o;t.width=t.width||n+2*e.x,t.height=t.height||t.iconSize+2*e.y,t.textOffset=t.textOffset||(n-r)/2,t.iconOffset=t.iconOffset||-n/2}const n=Y(e,r,o);return{...n,size:{...n.size,marginx:100,marginy:100}}};addEventListener("message",(function(t){var r,o=t.data,n=o.type,i=o.method,s=o.id,a=o.params;"RPC"===n&&i&&((r=e[i])?Promise.resolve().then((function(){return r.apply(e,a)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:s,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:s,error:e})}))})),postMessage({type:"RPC",method:"ready"});