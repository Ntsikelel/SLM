(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EAnV:function(l,n,t){"use strict";t.d(n,"a",(function(){return c}));var u=t("mrSG"),e=t("WrxE"),a=t("CcnG"),o=t("t/Na"),c=function(l){function n(n){var t=l.call(this,n,"accounts")||this;return t.localHttpClient=n,t}return Object(u.__extends)(n,l),n.prototype.getDepositAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/member",n)},n.prototype.downloadMemberAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/member",n,{responseType:"blob"})},n.prototype.getLoanAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/loan",n)},n.prototype.downloadLoanAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/loan",n,{responseType:"blob"})},n.prototype.getGeneralAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/general",n)},n.prototype.downloadGeneralAccountStatement=function(n){return this.localHttpClient.post(l.prototype.getResourceUrl.call(this)+"/general",n,{responseType:"blob"})},n.ngInjectableDef=a.Tb({factory:function(){return new n(a.Ub(o.c))},token:n,providedIn:"root"}),n}(e.a)},MuVW:function(l,n,t){"use strict";var u=t("CcnG"),e=t("NvT6"),a=t("Blfk"),o=t("dWZg"),c=t("Ip0R"),i=t("wFw1"),r=t("BHnd"),s=t("y4qS"),b=t("pIm3"),d=t("Fzqc"),m=t("bujt"),p=t("UodH"),f=t("lLAP"),h=t("v9Dh"),g=t("eDkP"),w=t("qAlS"),k=t("ZYjt"),v=t("Mr+X"),y=t("SMsm"),_=t("o3x0"),S=t("sc5M"),C=t("gIcY"),A=t("EAnV"),M=t("iHlq");t.d(n,"a",(function(){return V}));var x=u.rb({encapsulation:0,styles:[["mat-table[_ngcontent-%COMP%]{min-width:600px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{font-weight:700}.mat-cell[_ngcontent-%COMP%]{font-size:12px}.narration[_ngcontent-%COMP%]{min-width:200px}.date[_ngcontent-%COMP%]{min-width:150px}.header[_ngcontent-%COMP%]{background-color:transparent;padding:0 5px;height:20px}.fx-spacer[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1 1 auto}.align-center[_ngcontent-%COMP%]{text-align:center}.small-font[_ngcontent-%COMP%]{font-size:medium}"]],data:{}});function P(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"div",[["class","d-flex justify-content-center spinner-container"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,[" Statement ... "])),(l()(),u.tb(2,0,null,null,1,"mat-spinner",[["class","mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,e.b,e.a)),u.sb(3,49152,null,0,a.d,[u.k,o.a,[2,c.d],[2,i.a],a.a],{diameter:[0,"diameter"]},null)],(function(l,n){l(n,3,0,40)}),(function(l,n){l(n,2,0,u.Fb(n,3)._noopAnimations,u.Fb(n,3).diameter,u.Fb(n,3).diameter)}))}function L(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,14,"div",[["class","card-header align-center small-font"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.tb(2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,[" Account Statement "])),(l()(),u.tb(4,0,null,null,10,"div",[["class","row col-12"]],null,null,null,null,null)),(l()(),u.tb(5,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Nb(7,null,["A/C Name: ",""])),(l()(),u.tb(8,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Nb(9,null,["A/C Number: ",""])),(l()(),u.tb(10,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u.tb(11,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Nb(12,null,[" A/C Type: "," "])),(l()(),u.tb(13,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.Nb(14,null,[" A/C Class: "," "]))],null,(function(l,n){var t=n.component;l(n,7,0,null==t.account?null:t.account.account_display_name),l(n,9,0,null==t.account?null:t.account.account_number),l(n,12,0,null==t.account?null:null==t.account.accountType?null:t.account.accountType.name),l(n,14,0,null==t.account?null:null==t.account.accountType?null:null==t.account.accountType.accountClass?null:t.account.accountType.accountClass.name)}))}function R(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-cell",[["class","date mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.e,[s.d,u.k],null,null),(l()(),u.Nb(-1,null,[" Date "]))],null,null)}function N(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-cell",[["class","date mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.a,[s.d,u.k],null,null),(l()(),u.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.created_at)}))}function F(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-cell",[["class","narration mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.e,[s.d,u.k],null,null),(l()(),u.Nb(-1,null,[" Narration "]))],null,null)}function O(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-cell",[["class","narration mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.a,[s.d,u.k],null,null),(l()(),u.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.narration)}))}function K(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.e,[s.d,u.k],null,null),(l()(),u.Nb(-1,null,[" Debit "]))],null,null)}function D(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.a,[s.d,u.k],null,null),(l()(),u.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.is_dr?n.context.$implicit.display_amount:"-")}))}function T(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.e,[s.d,u.k],null,null),(l()(),u.Nb(-1,null,[" Credit "]))],null,null)}function E(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.a,[s.d,u.k],null,null),(l()(),u.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.is_cr?n.context.$implicit.display_amount:"-")}))}function j(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.e,[s.d,u.k],null,null),(l()(),u.Nb(-1,null,[" Balance "]))],null,null)}function I(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.sb(1,16384,null,0,r.a,[s.d,u.k],null,null),(l()(),u.Nb(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.balance)}))}function H(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,b.d,b.a)),u.Kb(6144,null,s.k,null,[r.g]),u.sb(2,49152,null,0,r.g,[],null,null)],null,null)}function U(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,b.e,b.b)),u.Kb(6144,null,s.m,null,[r.i]),u.sb(2,49152,null,0,r.i,[],null,null)],null,null)}function z(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["No Activity"]))],null,null)}function B(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,80,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,77,"mat-table",[["class","mat-table"]],null,null,null,b.f,b.c)),u.Kb(6144,null,s.o,null,[r.k]),u.sb(3,2342912,[["table",4]],4,r.k,[u.s,u.h,u.k,[8,null],[2,d.b],c.d,o.a],{dataSource:[0,"dataSource"]},null),u.Lb(603979776,2,{_contentColumnDefs:1}),u.Lb(603979776,3,{_contentRowDefs:1}),u.Lb(603979776,4,{_contentHeaderRowDefs:1}),u.Lb(603979776,5,{_contentFooterRowDefs:1}),(l()(),u.tb(8,0,null,null,12,null,null,null,null,null,null,null)),u.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.sb(10,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Lb(603979776,6,{cell:0}),u.Lb(603979776,7,{headerCell:0}),u.Lb(603979776,8,{footerCell:0}),u.Kb(2048,[[2,4]],s.d,null,[r.c]),(l()(),u.ib(0,null,null,2,null,R)),u.sb(16,16384,null,0,r.f,[u.M],null,null),u.Kb(2048,[[7,4]],s.j,null,[r.f]),(l()(),u.ib(0,null,null,2,null,N)),u.sb(19,16384,null,0,r.b,[u.M],null,null),u.Kb(2048,[[6,4]],s.b,null,[r.b]),(l()(),u.tb(21,0,null,null,12,null,null,null,null,null,null,null)),u.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.sb(23,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Lb(603979776,9,{cell:0}),u.Lb(603979776,10,{headerCell:0}),u.Lb(603979776,11,{footerCell:0}),u.Kb(2048,[[2,4]],s.d,null,[r.c]),(l()(),u.ib(0,null,null,2,null,F)),u.sb(29,16384,null,0,r.f,[u.M],null,null),u.Kb(2048,[[10,4]],s.j,null,[r.f]),(l()(),u.ib(0,null,null,2,null,O)),u.sb(32,16384,null,0,r.b,[u.M],null,null),u.Kb(2048,[[9,4]],s.b,null,[r.b]),(l()(),u.tb(34,0,null,null,12,null,null,null,null,null,null,null)),u.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.sb(36,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Lb(603979776,12,{cell:0}),u.Lb(603979776,13,{headerCell:0}),u.Lb(603979776,14,{footerCell:0}),u.Kb(2048,[[2,4]],s.d,null,[r.c]),(l()(),u.ib(0,null,null,2,null,K)),u.sb(42,16384,null,0,r.f,[u.M],null,null),u.Kb(2048,[[13,4]],s.j,null,[r.f]),(l()(),u.ib(0,null,null,2,null,D)),u.sb(45,16384,null,0,r.b,[u.M],null,null),u.Kb(2048,[[12,4]],s.b,null,[r.b]),(l()(),u.tb(47,0,null,null,12,null,null,null,null,null,null,null)),u.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.sb(49,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Lb(603979776,15,{cell:0}),u.Lb(603979776,16,{headerCell:0}),u.Lb(603979776,17,{footerCell:0}),u.Kb(2048,[[2,4]],s.d,null,[r.c]),(l()(),u.ib(0,null,null,2,null,T)),u.sb(55,16384,null,0,r.f,[u.M],null,null),u.Kb(2048,[[16,4]],s.j,null,[r.f]),(l()(),u.ib(0,null,null,2,null,E)),u.sb(58,16384,null,0,r.b,[u.M],null,null),u.Kb(2048,[[15,4]],s.b,null,[r.b]),(l()(),u.tb(60,0,null,null,12,null,null,null,null,null,null,null)),u.Kb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),u.sb(62,16384,null,3,r.c,[],{name:[0,"name"]},null),u.Lb(603979776,18,{cell:0}),u.Lb(603979776,19,{headerCell:0}),u.Lb(603979776,20,{footerCell:0}),u.Kb(2048,[[2,4]],s.d,null,[r.c]),(l()(),u.ib(0,null,null,2,null,j)),u.sb(68,16384,null,0,r.f,[u.M],null,null),u.Kb(2048,[[19,4]],s.j,null,[r.f]),(l()(),u.ib(0,null,null,2,null,I)),u.sb(71,16384,null,0,r.b,[u.M],null,null),u.Kb(2048,[[18,4]],s.b,null,[r.b]),(l()(),u.ib(0,null,null,2,null,H)),u.sb(74,540672,null,0,r.h,[u.M,u.s],{columns:[0,"columns"],sticky:[1,"sticky"]},null),u.Kb(2048,[[4,4]],s.l,null,[r.h]),(l()(),u.ib(0,null,null,2,null,U)),u.sb(77,540672,null,0,r.j,[u.M,u.s],{columns:[0,"columns"]},null),u.Kb(2048,[[3,4]],s.n,null,[r.j]),(l()(),u.ib(16777216,null,null,1,null,z)),u.sb(80,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,3,0,t.dataSource),l(n,10,0,"date"),l(n,23,0,"narration"),l(n,36,0,"debit"),l(n,49,0,"credit"),l(n,62,0,"balance"),l(n,74,0,t.tableColumns,!0),l(n,77,0,t.tableColumns),l(n,80,0,0===t.dataSource.length)}),null)}function G(l){return u.Pb(0,[(l()(),u.tb(0,16777216,null,null,6,"button",[["mat-raised-button",""],["matTooltip","Download Account Statement."]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],(function(l,n,t){var e=!0,a=l.component;return"longpress"===n&&(e=!1!==u.Fb(l,2).show()&&e),"keydown"===n&&(e=!1!==u.Fb(l,2)._handleKeydown(t)&&e),"touchend"===n&&(e=!1!==u.Fb(l,2)._handleTouchend()&&e),"click"===n&&(e=!1!==a.downloadPdf()&&e),e}),m.b,m.a)),u.sb(1,180224,null,0,p.b,[u.k,f.h,[2,i.a]],null,null),u.sb(2,212992,null,0,h.d,[g.c,u.k,w.b,u.P,u.z,o.a,f.c,f.h,h.b,[2,d.b],[2,h.a],[2,k.f]],{position:[0,"position"],message:[1,"message"]},null),(l()(),u.tb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,v.b,v.a)),u.sb(4,9158656,null,0,y.b,[u.k,y.d,[8,null],[2,y.a]],null,null),(l()(),u.Nb(-1,0,["picture_as_pdf"])),(l()(),u.Nb(-1,0,[" Download "])),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,2,0,"above","Download Account Statement."),l(n,4,0)}),(function(l,n){l(n,0,0,u.Fb(n,1).disabled||null,"NoopAnimations"===u.Fb(n,1)._animationMode),l(n,3,0,u.Fb(n,4).inline,"primary"!==u.Fb(n,4).color&&"accent"!==u.Fb(n,4).color&&"warn"!==u.Fb(n,4).color)}))}function q(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,G)),u.sb(2,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,2,0,n.component.dataSource.length>0)}),null)}function $(l){return u.Pb(0,[u.Lb(402653184,1,{stepper:0}),(l()(),u.ib(16777216,null,null,1,null,P)),u.sb(2,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,null,1,null,L)),u.sb(4,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(5,0,null,null,3,"mat-dialog-content",[["class","mat-dialog-data mat-dialog-content"]],null,null,null,null,null)),u.sb(6,16384,null,0,_.j,[],null,null),(l()(),u.ib(16777216,null,null,1,null,B)),u.sb(8,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(9,0,null,null,7,"mat-dialog-actions",[["align","center"],["class","mat-dialog-actions"]],null,null,null,null,null)),u.sb(10,16384,null,0,_.f,[],null,null),(l()(),u.tb(11,0,null,null,3,"button",[["class","mat-raised-button"],["mat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-label",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Fb(l,13).dialogRef.close(u.Fb(l,13).dialogResult)&&e),e}),m.b,m.a)),u.sb(12,180224,null,0,p.b,[u.k,f.h,[2,i.a]],null,null),u.sb(13,606208,null,0,_.g,[[2,_.l],u.k,_.e],{dialogResult:[0,"dialogResult"]},null),(l()(),u.Nb(-1,0,["Close"])),(l()(),u.ib(16777216,null,null,1,null,q)),u.sb(16,16384,null,0,c.m,[u.P,u.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,t.loader),l(n,4,0,!t.loader),l(n,8,0,!t.loader),l(n,13,0,!0),l(n,16,0,!t.loader)}),(function(l,n){l(n,11,0,u.Fb(n,12).disabled||null,"NoopAnimations"===u.Fb(n,12)._animationMode,u.Fb(n,13).ariaLabel||null)}))}function W(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"app-statement",[],null,null,null,$,x)),u.sb(1,114688,null,0,S.a,[_.a,C.g,A.a,M.a,_.l],null,null)],(function(l,n){l(n,1,0)}),null)}var V=u.pb("app-statement",S.a,W,{},{},[])},Rlre:function(l,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return c}));var u=t("CcnG"),e=t("La40"),a=(t("Ip0R"),t("M2Lx"));t("Fzqc"),t("Wf4p"),t("ZYjt"),t("4c35"),t("dWZg"),t("lLAP"),t("wFw1"),t("qAlS");var o=u.rb({encapsulation:2,styles:[".mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}"],data:{}});function c(l){return u.Pb(2,[u.Lb(402653184,1,{_inkBar:0}),(l()(),u.tb(1,0,null,null,4,"div",[["class","mat-tab-links"]],null,[[null,"cdkObserveContent"]],(function(l,n,t){var u=!0;return"cdkObserveContent"===n&&(u=!1!==l.component._alignInkBar()&&u),u}),null,null)),u.sb(2,1196032,null,0,a.a,[a.b,u.k,u.z],null,{event:"cdkObserveContent"}),u.Eb(null,0),(l()(),u.tb(4,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),u.sb(5,16384,[[1,4]],0,e.b,[u.k,u.z,e.l],null,null)],null,null)}},sc5M:function(l,n,t){"use strict";t.d(n,"a",(function(){return u})),t("iHlq"),t("EAnV");var u=function(){function l(l,n,t,u,e){this.fb=n,this.accountingService=t,this.notification=u,this.dialogRef=e,this.loader=!1,this.tableColumns=["date","narration","debit","credit","balance"],this.id=l.id,this.type=l.type}return l.prototype.ngOnInit=function(){switch(this.loader=!0,this.type){case"general":this.generalAccountStatement(this.id,!1);break;case"member":this.depositAccountStatement(this.id,!1);break;case"loan":this.loanAccountStatement(this.id,!1)}},l.prototype.downloadPdf=function(){switch(this.type){case"general":this.generalAccountStatement(this.id,!0);break;case"member":this.depositAccountStatement(this.id,!0);break;case"loan":this.loanAccountStatement(this.id,!0)}},l.prototype.showFile=function(l){var n=new Blob([l],{type:"application/pdf"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n);else{var t=window.URL.createObjectURL(n),u=document.createElement("a");u.href=t,u.download="statement.pdf",u.click(),setTimeout((function(){window.URL.revokeObjectURL(t)}),100)}},l.prototype.depositAccountStatement=function(l,n){var t=this;1==n&&(this.loader=!0,this.accountingService.downloadMemberAccountStatement({id:l,pdf:n}).subscribe((function(l){t.dialogRef.close(),t.showFile(l)}),(function(){t.loader=!1,t.dialogRef.close()}))),this.accountingService.getDepositAccountStatement({id:l,pdf:n}).subscribe((function(l){t.loader=!1,t.dataSource=l.data.statement,t.account=l.data}),(function(){t.loader=!1,t.dataSource=[]}))},l.prototype.loanAccountStatement=function(l,n){var t=this;1==n&&(this.loader=!0,this.accountingService.downloadLoanAccountStatement({id:l,pdf:n}).subscribe((function(l){t.dialogRef.close(),t.showFile(l)}),(function(){t.loader=!1,t.dialogRef.close()}))),this.accountingService.getLoanAccountStatement({id:l,pdf:n}).subscribe((function(l){t.loader=!1,t.dataSource=l.data.statement,t.account=l.data}),(function(){t.loader=!1,t.dataSource=[]}))},l.prototype.generalAccountStatement=function(l,n){var t=this;1==n&&(this.loader=!0,this.accountingService.downloadGeneralAccountStatement({id:l,pdf:n}).subscribe((function(l){t.dialogRef.close(),t.showFile(l)}),(function(){t.loader=!1,t.dialogRef.close()}))),this.accountingService.getGeneralAccountStatement({id:l,pdf:n}).subscribe((function(l){t.loader=!1,t.dataSource=l.data.statement,t.account=l.data}),(function(){t.loader=!1,t.dataSource=[]}))},l.prototype.close=function(){this.dialogRef.close()},l}()}}]);