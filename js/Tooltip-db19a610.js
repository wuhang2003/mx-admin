import{d as p,a2 as t,dN as i,s as n,i as a,a7 as l,N as d,dY as h}from"./index-2bc9fa0e.js";const c=Object.assign(Object.assign({},h),t.props),u=p({name:"Tooltip",props:c,__popover__:!0,setup(e){const o=t("Tooltip","-tooltip",void 0,i,e),s=n(null);return Object.assign(Object.assign({},{syncPosition(){s.value.syncPosition()},setShow(r){s.value.setShow(r)}}),{popoverRef:s,mergedTheme:o,popoverThemeOverrides:a(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:o}=this;return l(d,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:o.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{u as N};
