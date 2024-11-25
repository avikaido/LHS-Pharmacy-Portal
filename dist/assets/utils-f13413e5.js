import{a6 as m,a4 as C,R as v}from"./index-1d78c4ac.js";import{_ as D,t as N}from"./Box-3b2e6d90.js";const S={disabled:!1};var O=function(s){return s.scrollTop},x="unmounted",p="exited",f="entering",h="entered",T="exiting",u=function(l){D(s,l);function s(i,e){var t;t=l.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,o;return t.appearStatus=null,i.in?r?(o=p,t.appearStatus=f):o=h:i.unmountOnExit||i.mountOnEnter?o=x:o=p,t.state={status:o},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:p}:null};var a=s.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},a.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this);n&&O(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:x})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[m.findDOMNode(this),r],c=o[0],E=o[1],b=this.getTimeouts(),g=r?b.appear:b.enter;if(!e&&!n||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(g,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:m.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:p},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:p},function(){e.props.onExited(r)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=o[0],E=o[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=C(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(N.Provider,{value:null},typeof n=="function"?n(e,r):v.cloneElement(v.Children.only(n),r))},s}(v.Component);u.contextType=N;u.propTypes={};function d(){}u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};u.UNMOUNTED=x;u.EXITED=p;u.ENTERING=f;u.ENTERED=h;u.EXITING=T;const y=u,M=l=>l.scrollTop;function _(l,s){var a,i;const{timeout:e,easing:t,style:n={}}=l;return{duration:(a=n.transitionDuration)!=null?a:typeof e=="number"?e:e[s.mode]||0,easing:(i=n.transitionTimingFunction)!=null?i:typeof t=="object"?t[s.mode]:t,delay:n.transitionDelay}}export{y as T,O as f,_ as g,M as r};
