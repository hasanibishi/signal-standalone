"use strict";(self.webpackChunksignal_standalone=self.webpackChunksignal_standalone||[]).push([[290],{5290:(m,_,o)=>{o.r(_),o.d(_,{CartComponent:()=>g});var t=o(2029),l=o(6814),s=o(2296),d=o(617),u=o(5849);function i(a,c){if(1&a){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",2),t.NdJ("click",function(){const p=t.CHM(n).$implicit,C=t.oxw();return t.KtG(C.deleteFromCart(p.id))}),t.TgZ(13,"mat-icon",3),t._uU(14,"close"),t.qZA()()()()}if(2&a){const n=c.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.category),t.xp6(2),t.Oqu(n.price),t.xp6(2),t.Oqu(n.quantity),t.xp6(2),t.Oqu(n.quantity*n.price)}}let g=(()=>{var a;class c{constructor(){this.dataService=(0,t.f3M)(u.D),this.totalSum=(0,t.Flj)(()=>this.dataService.productsOnCart().reduce((e,r)=>e+r.price*r.quantity,0))}deleteFromCart(e){this.dataService.deleteItemFromCart(e)}}return(a=c).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["cart"]],standalone:!0,features:[t.jDz],decls:19,vars:2,consts:[[1,"cart-products"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"],[2,"color","red"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"table")(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Title"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Category"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Price"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Quantity"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Sum"),t.qZA(),t._UZ(14,"th"),t.qZA()(),t.TgZ(15,"tbody"),t.YNc(16,i,15,5,"tr",1),t.qZA()(),t.TgZ(17,"h1"),t._uU(18),t.qZA()()),2&e&&(t.xp6(16),t.Q6J("ngForOf",r.dataService.productsOnCart()),t.xp6(2),t.hij("Total Sum: ",r.totalSum(),""))},dependencies:[l.ez,l.sg,s.ot,s.RK,d.Ps,d.Hw],styles:[".cart-products[_ngcontent-%COMP%]{max-width:50%;margin:5rem auto}.cart-products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;table-layout:fixed}.cart-products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cart-products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;text-align:left;padding:0 10px}.cart-products[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:10px}.cart-products[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:right}"]}),c})()}}]);