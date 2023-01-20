import{_}from"./inventory.d9163b31.js";import{_ as d}from"./three-dot.5a2e52a0.js";import{_ as h}from"./inventory.692274bb.js";import{_ as u,o as m,c as v,a as t,b as o,w as a,d as e,e as c,r as n}from"./app.2182db58.js";var g="/assets/tree.f7ae0af5.jpg",b="/assets/tree_plank.af0fe521.jpg",f="/assets/tree_stick.3a444bc5.jpg",j="/assets/pick_menu.fe96b608.jpg",x="/assets/dig_stone.c6c0050b.jpg",k="/assets/stone_pick.5bc3a0d5.jpg",w="/assets/stone_with_coal.7b691f9c.jpg",A="/assets/stone_with_iron.18956854.jpg",C="/assets/torch.94970771.jpg",N="/assets/furnace.ba966430.jpg",V="/assets/furnace_iron.17afa02f.jpg",B="/assets/steel_pick.6b1408d2.jpg",I="/assets/stone_axe.8b90bee5.jpg",P="/assets/stone_sword.65ba29e1.jpg",T="/assets/stone_shovel.1ad878d8.jpg",y="/assets/stone_hoe.8e0f34e8.jpg",E="/assets/steel_bucket.9b6edf90.jpg",L="/assets/plant_water.52239d98.jpg";const R={},S={class:"custom-container tip"},z=t("p",{class:"custom-container-title"},"\u63D0\u793A",-1),D=e("\u5982\u679C\u5BF9\u6E38\u620F\u64CD\u4F5C\u4E0D\u6E05\u695A\uFF0C\u8BF7\u5148\u9605\u8BFB"),q=e("\u5FEB\u901F\u4E0A\u624B\u6307\u5357"),F=e("\u3002"),G=c('<p>\u4F60\u51FA\u751F\u5728\u4E00\u4E2A\u968F\u673A\u7684\u5730\u70B9\uFF0C\u65F6\u95F4\u4E3A\u65E9\u4E0A\u3002\u8FD9\u65F6\u4F60\u9700\u8981\u5BFB\u627E\u6811\u6728\u3002\u592A\u9633\u4E5F\u4F1A\u4E1C\u5347\u897F\u843D\uFF0C</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u5728\u8FD9\u4E2A\u4E16\u754C\u4E2D\u542F\u7528\u4E86\u751F\u7269/\u602A\u7269\u6A21\u7EC4,\u90A3\u4E48\u8FD9\u4E2A\u4E16\u754C\u5C31\u4F1A\u968F\u673A\u51FA\u73B0\u751F\u7269,\u6709\u4E9B\u7279\u6709\u7684\u751F\u7269/\u602A\u7269,\u4F1A\u53EA\u5728\u767D\u5929\u6216\u665A\u4E0A\u624D\u4F1A\u51FA\u73B0\uFF0C\u5BF9\u4F60\u7684\u751F\u5B58\u5F71\u54CD\u5F88\u5927.</p></div><h2 id="\u6316\u6398\u5E76\u5F97\u5230\u6389\u843D\u7684\u65B9\u5757" tabindex="-1"><a class="header-anchor" href="#\u6316\u6398\u5E76\u5F97\u5230\u6389\u843D\u7684\u65B9\u5757" aria-hidden="true">#</a> \u6316\u6398\u5E76\u5F97\u5230\u6389\u843D\u7684\u65B9\u5757</h2><p>\u5728\u751F\u5B58\u6A21\u5F0F\u83B7\u5F97\u8D44\u6E90\u7684\u65B9\u5F0F\u5C31\u662F\u901A\u8FC7\u6316\u6398\u5E76\u5F97\u5230\u6389\u843D\u7684\u65B9\u5757.</p><p><img src="'+g+'" alt="tree"></p><p>\u6811\u4E00\u822C\u7531\u6811\u5E72\u4E0E\u6811\u53F6\u7EC4\u6210\u3002\u5982\u56FE\u6240\u793A\uFF0C\u8FD9\u662F\u4E00\u9897\u82F9\u679C\u6811\uFF0C\u9644\u8FD1\u989C\u8272\u8F83\u6D45\u7684\u6811\u662F\u677E\u6811\u3002\u6728\u5934\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u9664\u4E86\u989C\u8272\u4E0E\u7EB9\u7406\u4E0A\u7684\u5DEE\u5F02\u3002</p><p>\u7531\u4E8E\u4F60\u6CA1\u6709\u4EFB\u4F55\u5DE5\u5177\uFF0C\u4F60\u9700\u8981\u9760\u8FD1\u5E76(\u7528\u5C0F\u5C0F\u7684\u5341\u5B57\u51C6\u5FC3)\u5BF9\u51C6\u6728\u5934\uFF0C\u8FDE\u7EED\u51FB\u6253\u6728\u5934\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6728\u5934\u51FA\u73B0\u4E86\u65B9\u5757\u88C2\u75D5\uFF0C\u7EE7\u7EED\u4E0D\u505C\u7684\u51FB\u6253\u6728\u5934,\u5F53\u88C2\u75D5\u5E03\u6EE1\u8FD9\u4E2A\u65B9\u5757\uFF0C\u8FD9\u4E2A\u65B9\u5757\u4F1A\u88AB\u6316\u6389\uFF0C\u4EE5\u7269\u54C1\u7684\u5F62\u5F0F\u51FA\u73B0\u5728\u5730\u4E0A\uFF0C\u63A5\u8FD1\u4F1A\u88AB\u62FE\u53D6(\u9ED8\u8BA4\u542F\u7528<code>ItemDrop</code>\u6A21\u7EC4)\u3002\u5927\u90E8\u5206\u65B9\u5757\u90FD\u9700\u8981\u7279\u5B9A\u7684\u5DE5\u5177\u624D\u53EF\u4EE5\u5FEB\u901F\u7834\u574F\u5E76\u6389\u843D\u3002</p>',7),H={class:"custom-container tip"},J=t("p",{class:"custom-container-title"},'"\u51FB\u6253\u6728\u5934"\u64CD\u4F5C\u65B9\u6CD5',-1),K=t("p",null,"\u9760\u8FD1\u6811\u6728\u540E:",-1),M=t("p",null,"\u8FDE\u7EED\u51FB\u6253: \u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u4E0D\u653E \u5355\u6B21\u51FB\u6253: \u70B9\u6309\u9F20\u6807\u5DE6\u952E",-1),O=t("p",null,"\u8FDE\u7EED\u51FB\u6253: \u7528\u624B\u6307\u6309\u4F4F\u5C4F\u5E55\u53F3\u65B9\u7684\u6811\u6728\u4E0D\u653E",-1),Q=t("p",null,[t("em",null,"\u6CE8\u610F"),e(": \u8BF7\u786E\u4FDD\u6811\u6728\u662F\u5904\u4E8E\u5C4F\u5E55\u7684\u53F3\u65B9;\u5C4F\u5E55\u5DE6\u65B9\u662F\u524D\u8FDB\u65B9\u5411\u63A7\u5236\u533A,\u65E0\u6CD5\u64CD\u4F5C\u51FB\u6253.")],-1),U=t("p",null,"\u51E0\u79D2\u540E\u4F60\u7684\u624B\u4E2D\u5C31\u591A\u4E86\u4E00\u5757\u6728\u5934",-1),W=t("h2",{id:"\u5408\u6210\u7269\u54C1\u4E0E\u8BBE\u5907",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u5408\u6210\u7269\u54C1\u4E0E\u8BBE\u5907","aria-hidden":"true"},"#"),e(" \u5408\u6210\u7269\u54C1\u4E0E\u8BBE\u5907")],-1),X=t("p",null,"\u6253\u5F00\u7269\u54C1\u680F\uFF0C\u5C06\u6728\u5934\u5DE6\u952E\uFF0C\u653E\u5165\u5408\u6210\u4E0B\u9762\u76846\u4E2A\u65B9\u683C\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF0C\u5408\u6210\u597D\u7684\u7269\u54C1\u5C31\u51FA\u73B0\u5728\u53F3\u8FB9\u7684\u90A3\u4E2A\u5C0F\u65B9\u683C\u4E2D\uFF0C\u606D\u559C\u4F60\uFF0C\u4F60\u628A\u6728\u5934\u5206\u89E3\u4E3A\u4E864\u4E2A\u6728\u677F\u3002 \u7136\u540E\u4F60\u53EF\u4EE5\u628A\u53F3\u8FB9\u5C0F\u65B9\u683C\u4E2D\u5408\u6210\u597D\u7684\u6728\u677F,\u62D6\u5230\u81EA\u5DF1\u7684\u968F\u8EAB\u7269\u54C1\u680F\u4E2D.",-1),Y=t("p",null,[t("img",{src:_,alt:"inventory"})],-1),Z={class:"custom-container tip"},$=t("p",{class:"custom-container-title"},'"\u6253\u5F00\u7269\u54C1\u680F"\u64CD\u4F5C\u65B9\u6CD5',-1),tt=t("p",null,[e("\u6309"),t("code",null,"I"),e("\u952E\u6253\u5F00\u7269\u54C1\u680F,\u6309\u4E0B"),t("code",null,"ESC"),e("\u952E\u5173\u95ED\u7269\u54C1\u680F.")],-1),et=t("ul",null,[t("li",null,[e("\u70B9\u51FB\u53F3\u65B9\u7684"),t("strong",null,"\u529F\u80FD\u83DC\u5355"),e("(\u7AD6\u7740\u7684\u4E09\u70B9) "),t("img",{src:d,alt:"three dot"}),e(": "),t("ul",null,[t("li",null,[e("\u70B9\u51FB\u4E5D\u65B9\u683C\u56FE\u6807 "),t("img",{src:h,alt:"Inventory"}),e(" - \u6253\u5F00\u73A9\u5BB6\u7269\u54C1\u88C5\u5907(\u5408\u6210)\u680F")])])])],-1),at=t("p",null,"\u70B9\u51FB\u5C4F\u5E55\u5176\u4ED6\u533A\u57DF(\u975E\u7269\u54C1\u680F\u7A97\u4F53)\u5373\u53EF\u5173\u95ED\u7269\u54C1\u680F.",-1),st=t("p",null,[t("img",{src:b,alt:"plank"})],-1),it={class:"custom-container tip"},rt=t("p",{class:"custom-container-title"},'"\u62D6\u52A8\u7269\u54C1"\u7684\u64CD\u4F5C\u65B9\u6CD5',-1),ot=t("p",null,"\u9F20\u6807\u79FB\u52A8\u5230\u7269\u54C1\u4E0A,\u5DE6\u952E\u70B9\u51FB\u7269\u54C1,\u5373\u53EF\u6293\u4F4F\u7269\u54C1,\u7136\u540E\u79FB\u52A8\u9F20\u6807\u5230\u76EE\u6807\u4F4D\u7F6E,\u6700\u540E\u518D\u6B21\u70B9\u51FB\u9F20\u6807\u5DE6\u952E,\u5C31\u5168\u90E8\u653E\u4E0B,\u70B9\u51FB\u9F20\u6807\u53F3\u952E,\u5C31\u653E\u4E0B\u4E00\u534A.",-1),pt=t("p",null,"\u624B\u6307\u6309\u4F4F\u5C4F\u5E55\u4E0A\u7684\u7269\u54C1\u4E0D\u653E,\u7136\u540E\u79FB\u52A8\u5230\u76EE\u6807,\u6700\u540E\u624B\u6307\u79BB\u5F00\u5C4F\u5E55\u6216\u8005\u6309\u4E0B\u53E6\u4E00\u4E2A\u624B\u6307\u5206\u79BB\u591A\u4E2A\u7269\u54C1.\u4E5F\u53EF\u6309\u7535\u8111\u4E0A\u7684\u65B9\u5F0F\u64CD\u4F5C.",-1),nt=c('<h3 id="\u6728\u68CD" tabindex="-1"><a class="header-anchor" href="#\u6728\u68CD" aria-hidden="true">#</a> \u6728\u68CD</h3><p><img src="'+f+'" alt="stick"></p><p>\u7136\u540E\u653E\u5757\u6728\u677F\u5230\u5408\u6210\u680F\u4E2D,\u5C31\u4F1A\u5F97\u52304\u6839\u6728\u68CD.</p><h3 id="\u9550\u5B50" tabindex="-1"><a class="header-anchor" href="#\u9550\u5B50" aria-hidden="true">#</a> \u9550\u5B50</h3><p><img src="'+j+'" alt="pick"></p><p>\u8FD9\u6837\u505A\u51FA\u9550\u5B50\uFF08\u4EC0\u4E48\u5DE5\u5177\u90FD\u53EF\u4EE5\u6CA1\u6709\uFF0C\u9550\u5B50\u7EDD\u5BF9\u8981\u6709\uFF09\u3002\u53EF\u4EE5\u628A\u9550\u5934(\u6A2A\u7740\u7684\u4E09\u5757\u6728\u5757/\u77F3\u5757\u5C31\u662F\u9550\u5934)\u6362\u6210\u77F3\u5934\u6216\u94C1\u952D\u3002</p><p><img src="'+x+'" alt="dig stone"></p><p>\u7136\u540E\u53BB\u6316\u77F3\u5934\uFF0C\u8FD9\u7070\u8272\u7684\u5C31\u662F\u77F3\u5934\uFF0C\u7528\u9550\u5B50\u91C7\u96C6\uFF0C\u83B7\u5F97\u539F\u77F3\u3002</p><p><img src="'+k+'" alt="stone pick"></p><p>\u8FD9\u6837\u505A\u77F3\u9550\uFF0C\u53EF\u4EE5\u91C7\u96C6\u6728\u9550\u91C7\u96C6\u4E0D\u4E86\u7684\u94C1\u77FF\u3002</p><p><img src="'+w+'" alt="coal"></p><p>\u6709\u9ED1\u70B9\u70B9\u7684\u662F\u7164\u77FF\uFF0C\u53EF\u4EE5\u6316\u51FA\u7164\u70AD\uFF1B</p><p><img src="'+A+'" alt="stone_with_iron.jpg"></p><p>\u5E26\u6709\u6697\u91D1\u70B9\u70B9\u7684\u662F\u94C1\u77FF\uFF0C\u53EF\u4EE5\u6316\u51FA\u94C1\u77FF\u3002</p><h3 id="\u706B\u628A" tabindex="-1"><a class="header-anchor" href="#\u706B\u628A" aria-hidden="true">#</a> \u706B\u628A</h3><p><img src="'+C+'" alt="torch"></p><p>\u4E00\u5757\u7164\u70AD\u52A0\u4E00\u6839\u6728\u68CD,\u8FD9\u6837\u505A\u706B\u628A\uFF0C\u7528\u4E8E\u7167\u660E\u3002</p><h3 id="\u7194\u7089" tabindex="-1"><a class="header-anchor" href="#\u7194\u7089" aria-hidden="true">#</a> \u7194\u7089</h3><p><img src="'+N+'" alt="furnace"></p><p>\u516B\u4E2A\u539F\u77F3\u642D\u5EFA\u4E00\u4E2A\u7194\u7089\uFF0C\u7528\u6765\u70E7\u5236\u719F\u98DF\u548C\u77FF\u7269\u3002</p><p>\u7194\u7089\u4E0B\u9762\u653E\u71C3\u6599:\u7164\u70AD,\u6728\u5934,\u6811\u53F6...,\u4E0A\u9762\u653E\u9700\u8981\u52A0\u70ED\u7684\u6750\u6599\u7269\u54C1.</p><h3 id="\u94C1\u952D" tabindex="-1"><a class="header-anchor" href="#\u94C1\u952D" aria-hidden="true">#</a> \u94C1\u952D</h3><p><img src="'+V+'" alt="furnace iron"></p><p>\u7164\u70AD\u3001\u5404\u79CD\u6811\u53F6\u4EE5\u53CA\u5927\u90E8\u5206\u6728\u5236\u54C1\u53EF\u7528\u4F5C\u71C3\u6599\uFF0C\u4E0A\u65B9\u6446\u653E\u70E7\u5236\u7684\u7269\u54C1\uFF0C\u5982\u56FE\u94C1\u77FF\u83B7\u5F97\u94C1\u952D\u3002</p><p>\u521D\u671F\u6CA1\u6709\u7164\u70AD\uFF0C\u53EF\u4EE5\u628A\u6811\u53F6\u3001\u6728\u677F\u548C\u6728\u8D28\u5DE5\u5177\u653E\u8FDB\u53BB\u5F53\u71C3\u6599\u70E7\uFF0C\u5F53\u7136\u706B\u4E00\u4F1A\u5C31\u706D\u4E86\uFF0C\u56E0\u4E3A\u4E0D\u8010\u70E7\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u591A\u653E\u4E00\u4E9B\u71C3\u6599\u3002</p><h3 id="\u94C1\u9550" tabindex="-1"><a class="header-anchor" href="#\u94C1\u9550" aria-hidden="true">#</a> \u94C1\u9550</h3><p><img src="'+B+'" alt="steel_pick"></p><p>\u5982\u56FE\u8FD9\u6837\u505A\u51FA\u94C1\u9550\uFF0C\u53EF\u91C7\u96C6\u94C1\u77FF\u4EE5\u4E0A\u66F4\u9AD8\u7EA7\u7684\u77FF\u7269\u3002</p><h3 id="\u65A7\u5934" tabindex="-1"><a class="header-anchor" href="#\u65A7\u5934" aria-hidden="true">#</a> \u65A7\u5934</h3><p><img src="'+I+'" alt="stone_axe"></p><p>\u65A7\u5934\u7684\u505A\u6CD5\uFF08\u77F3\u5934\u53EF\u4EE5\u6362\u6210\u6728\u5934\uFF0C\u94C1\u4E4B\u7C7B\u7684\uFF0C\u5176\u4ED6\u5DE5\u5177\u540C\u7406\uFF09\u4E3B\u8981\u7528\u6765\u780D\u6728\u5236\u54C1\uFF0C\u4E5F\u9F13\u52B1\u7528\u4F5C\u6B66\u5668\u3002</p><h3 id="\u5251" tabindex="-1"><a class="header-anchor" href="#\u5251" aria-hidden="true">#</a> \u5251</h3><p><img src="'+P+'" alt="stone_sword.jpg"></p><p>\u5251\u7684\u505A\u6CD5\uFF0C\u53EF\u5BF9\u591A\u76EE\u6807\u9020\u6210\u6A2A\u780D\u7684\u7FA4\u4F24\u6548\u679C\u3002</p><h3 id="\u94F2\u5B50" tabindex="-1"><a class="header-anchor" href="#\u94F2\u5B50" aria-hidden="true">#</a> \u94F2\u5B50</h3><p><img src="'+T+'" alt="stone_shovel.jpg"></p><p>\u94F2\u5B50\u7528\u6765\u6316\u6CE5\u571F\uFF0C\u6C99\u5B50\uFF0C\u7802\u783E\uFF0C\u901F\u5EA6\u66F4\u5FEB\u3002</p><h3 id="\u9504\u5934" tabindex="-1"><a class="header-anchor" href="#\u9504\u5934" aria-hidden="true">#</a> \u9504\u5934</h3><p><img src="'+y+'" alt="stone_hoe.jpg"></p><p>\u9504\u5934\uFF0C\u79CD\u5730\u7528\uFF0C\u5BF9\u6CE5\u571F\u53F3\u952E\u53EF\u751F\u6210\u8015\u5730\u3002</p><h3 id="\u6876" tabindex="-1"><a class="header-anchor" href="#\u6876" aria-hidden="true">#</a> \u6876</h3><p><img src="'+E+'" alt="steel_bucket.jpg"></p><p>\u94C1\u6876\u53EF\u4EE5\u63D0\u6C34\uFF08\u5728\u6709\u6C34\u7684\u5730\u65B9\u6309\u4E0B\u5DE6\u952E\u6316\u6C34\uFF09\u3002\u7528\u53F3\u952E\uFF08\u653E\u7F6E\uFF09\u5012\u6C34\u3002</p><h3 id="\u8015\u5730" tabindex="-1"><a class="header-anchor" href="#\u8015\u5730" aria-hidden="true">#</a> \u8015\u5730</h3><p><img src="'+L+'" alt="plant"></p><p>\u5728\u8015\u5730\u4E0A\u64AD\u79CD\uFF08\u5C0F\u9EA6\u79CD\u5B50\u53EF\u901A\u8FC7\u64B8\u8349\u83B7\u5F97\uFF09,\u8015\u5730\u65C1\u8981\u6709\u6C34\u6E90\u624D\u80FD\u957F\u597D.</p>',46);function ct(lt,_t){const l=n("RouterLink"),p=n("Tabs");return m(),v("div",null,[t("div",S,[z,t("p",null,[D,o(l,{to:"/zh/guide/get-started/"},{default:a(()=>[q]),_:1}),F])]),G,t("div",H,[J,K,o(p,{data:[{title:"PC/\u7535\u8111",value:"pc"},{title:"\u5B89\u5353\u624B\u673A/\u5E73\u677F",value:"mobile"}],"tab-id":"operator"},{tab0:a(({title:s,value:i,isActive:r})=>[M]),tab1:a(({title:s,value:i,isActive:r})=>[O,Q]),_:1})]),U,W,X,Y,t("div",Z,[$,o(p,{data:[{title:"PC/\u7535\u8111",value:"pc"},{title:"\u5B89\u5353\u624B\u673A/\u5E73\u677F",value:"mobile"}],"tab-id":"operator"},{tab0:a(({title:s,value:i,isActive:r})=>[tt]),tab1:a(({title:s,value:i,isActive:r})=>[et,at]),_:1})]),st,t("div",it,[rt,o(p,{data:[{title:"PC/\u7535\u8111",value:"pc"},{title:"\u5B89\u5353\u624B\u673A/\u5E73\u677F",value:"mobile"}],"tab-id":"operator"},{tab0:a(({title:s,value:i,isActive:r})=>[ot]),tab1:a(({title:s,value:i,isActive:r})=>[pt]),_:1})]),nt])}var vt=u(R,[["render",ct],["__file","index.html.vue"]]);export{vt as default};
