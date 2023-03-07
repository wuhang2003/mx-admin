import{k as D,v,C as no,i as o,E as so,H as f,G as y,bD as I,D as P,y as to,J as io,L as U,t as ho,ax as go,K as Co,n as F,N as bo,aN as N,b4 as vo,b2 as uo,M as d,aG as L}from"./Button-5ec267f1.js";import{N as po}from"./Card-73dd4072.js";import{c as fo}from"./_common-991711fd.js";const Ho=D({name:"Checkmark",render(){return v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},v("g",{fill:"none"},v("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ko=c=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:k,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:m,borderColor:x,opacityDisabled:g,tagColor:u,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:p,borderRadiusSmall:C,fontSizeMini:b,fontSizeTiny:z,fontSizeSmall:S,fontSizeMedium:B,heightMini:$,heightTiny:H,heightSmall:R,heightMedium:M,closeColorHover:T,closeColorPressed:w,buttonColor2Hover:E,buttonColor2Pressed:_,fontWeightStrong:W}=c;return Object.assign(Object.assign({},fo),{closeBorderRadius:C,heightTiny:$,heightSmall:H,heightMedium:R,heightLarge:M,borderRadius:C,opacityDisabled:g,fontSizeTiny:b,fontSizeSmall:z,fontSizeMedium:S,fontSizeLarge:B,fontWeightStrong:W,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:_,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:k,border:`1px solid ${x}`,textColor:h,color:u,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:p,closeColorHover:T,closeColorPressed:w,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},mo={name:"Tag",common:no,self:ko},xo=mo,yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=so("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),y("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),y("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),y("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),f("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[y("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),y("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),f("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),f("icon, avatar",[f("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),f("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),f("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[P("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),P("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),f("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[P("&:hover","background-color: var(--n-color-checked-hover);"),P("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Po=Object.assign(Object.assign(Object.assign({},U.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),zo=vo("n-tag"),Ro=D({name:"Tag",props:Po,setup(c){const h=to(null),{mergedBorderedRef:r,mergedClsPrefixRef:k,inlineThemeDisabled:a,mergedRtlRef:i}=io(c),s=U("Tag","-tag",Io,xo,c,k);ho(zo,{roundRef:go(c,"round")});function n(e){if(!c.disabled&&c.checkable){const{checked:l,onCheckedChange:p,onUpdateChecked:C,"onUpdate:checked":b}=c;C&&C(!l),b&&b(!l),p&&p(!l)}}function t(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:l}=c;l&&uo(l,e)}}const m={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},x=Co("Tag",i,k),g=F(()=>{const{type:e,size:l,color:{color:p,textColor:C}={}}=c,{common:{cubicBezierEaseInOut:b},self:{padding:z,closeMargin:S,closeMarginRtl:B,borderRadius:$,opacityDisabled:H,textColorCheckable:R,textColorHoverCheckable:M,textColorPressedCheckable:T,textColorChecked:w,colorCheckable:E,colorHoverCheckable:_,colorPressedCheckable:W,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:G,closeBorderRadius:A,fontWeightStrong:J,[d("colorBordered",e)]:q,[d("closeSize",l)]:Q,[d("closeIconSize",l)]:X,[d("fontSize",l)]:Y,[d("height",l)]:O,[d("color",e)]:Z,[d("textColor",e)]:oo,[d("border",e)]:eo,[d("closeIconColor",e)]:j,[d("closeIconColorHover",e)]:ro,[d("closeIconColorPressed",e)]:lo,[d("closeColorHover",e)]:co,[d("closeColorPressed",e)]:ao}}=s.value;return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${O} - 8px)`,"--n-bezier":b,"--n-border-radius":$,"--n-border":eo,"--n-close-icon-size":X,"--n-close-color-pressed":ao,"--n-close-color-hover":co,"--n-close-border-radius":A,"--n-close-icon-color":j,"--n-close-icon-color-hover":ro,"--n-close-icon-color-pressed":lo,"--n-close-icon-color-disabled":j,"--n-close-margin":S,"--n-close-margin-rtl":B,"--n-close-size":Q,"--n-color":p||(r.value?q:Z),"--n-color-checkable":E,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":G,"--n-color-hover-checkable":_,"--n-color-pressed-checkable":W,"--n-font-size":Y,"--n-height":O,"--n-opacity-disabled":H,"--n-padding":z,"--n-text-color":C||oo,"--n-text-color-checkable":R,"--n-text-color-checked":w,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":T}}),u=a?bo("tag",F(()=>{let e="";const{type:l,size:p,color:{color:C,textColor:b}={}}=c;return e+=l[0],e+=p[0],C&&(e+=`a${L(C)}`),b&&(e+=`b${L(b)}`),r.value&&(e+="c"),e}),g,c):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:x,mergedClsPrefix:k,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:u?.themeClass,onRender:u?.onRender})},render(){var c,h;const{mergedClsPrefix:r,rtlEnabled:k,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n?.();const m=N(t.avatar,g=>g&&v("div",{class:`${r}-tag__avatar`},g)),x=N(t.icon,g=>g&&v("div",{class:`${r}-tag__icon`},g));return v("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:k,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:m,[`${r}-tag--icon`]:x,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||m,v("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(c=this.$slots).default)===null||h===void 0?void 0:h.call(c)),!this.checkable&&a?v(po,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?v("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Ho as F,Ro as N,zo as a,yo as c,xo as t};
