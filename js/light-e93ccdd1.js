import{C as x,aI as m,aP as C,aJ as h,i as u}from"./Button-d9ff6831.js";import{x as P}from"./use-store-ref-bbea8734.js";const f=l=>{const{fontWeight:o,textColor1:t,textColor2:e,textColorDisabled:r,dividerColor:i,fontSize:a}=l;return{titleFontSize:a,titleFontWeight:o,dividerColor:i,titleTextColor:t,titleTextColorDisabled:r,fontSize:a,textColor:e,arrowColor:e,arrowColorDisabled:r,itemMargin:"16px 0 0 0"}},T={name:"Collapse",common:x,self:f},F=T,L={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},v=l=>{const{popoverColor:o,textColor2:t,primaryColor:e,hoverColor:r,dividerColor:i,opacityDisabled:a,boxShadow2:c,borderRadius:n,iconColor:p,iconColorDisabled:s}=l;return Object.assign(Object.assign({},L),{panelColor:o,panelBoxShadow:c,panelDividerColor:i,itemTextColor:t,itemTextColorActive:e,itemColorHover:r,itemOpacityDisabled:a,itemBorderRadius:n,borderRadius:n,iconColor:p,iconColorDisabled:s})},R=m({name:"TimePicker",common:x,peers:{Scrollbar:C,Button:h,Input:P},self:v}),S=R,H={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},z=l=>{const{hoverColor:o,fontSize:t,textColor2:e,textColorDisabled:r,popoverColor:i,primaryColor:a,borderRadiusSmall:c,iconColor:n,iconColorDisabled:p,textColor1:s,dividerColor:d,boxShadow2:D,borderRadius:g,fontWeightStrong:b}=l;return Object.assign(Object.assign({},H),{itemFontSize:t,calendarDaysFontSize:t,calendarTitleFontSize:t,itemTextColor:e,itemTextColorDisabled:r,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:u(a,{alpha:.1}),itemColorHover:o,itemColorDisabled:o,itemColorActive:a,itemBorderRadius:c,panelColor:i,panelTextColor:e,arrowColor:n,calendarTitleTextColor:s,calendarTitleColorHover:o,calendarDaysTextColor:e,panelHeaderDividerColor:d,calendarDaysDividerColor:d,calendarDividerColor:d,panelActionDividerColor:d,panelBoxShadow:D,panelBorderRadius:g,calendarTitleFontWeight:b,scrollItemBorderRadius:g,iconColor:n,iconColorDisabled:p})},w=m({name:"DatePicker",common:x,peers:{Input:P,Button:h,TimePicker:S,Scrollbar:C},self:z}),k=w;export{v as a,z as b,F as c,k as d,f as s,S as t};
