import{d as p,Z as n,a2 as r,dL as a,s as l,i as d,a7 as h,N as c,dY as m}from"./index-78dcda3c.js";const v=Object.assign(Object.assign({},m),r.props),g=p({name:"Tooltip",props:v,__popover__:!0,setup(e){const{mergedClsPrefixRef:o}=n(e),t=r("Tooltip","-tooltip",void 0,a,e,o),s=l(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(i){s.value.setShow(i)}}),{popoverRef:s,mergedTheme:t,popoverThemeOverrides:d(()=>t.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return h(c,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{g as N};
