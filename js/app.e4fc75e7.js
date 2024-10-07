(function(){"use strict";var e={8745:function(e,t,n){var o=n(5130),s=n(6768),r=n(4232);const i={key:1},u={key:0};function a(e,t,n,o,a,l){const c=(0,s.g2)("v-select"),d=(0,s.g2)("v-btn"),p=(0,s.g2)("GameBoard"),h=(0,s.g2)("v-card-title"),f=(0,s.g2)("v-card-text"),g=(0,s.g2)("v-card-actions"),v=(0,s.g2)("v-card"),y=(0,s.g2)("v-dialog"),k=(0,s.g2)("v-container"),m=(0,s.g2)("v-main"),w=(0,s.g2)("v-app");return(0,s.uX)(),(0,s.Wv)(w,null,{default:(0,s.k6)((()=>[(0,s.bF)(m,null,{default:(0,s.k6)((()=>[(0,s.bF)(k,null,{default:(0,s.k6)((()=>[(0,s.bF)(c,{modelValue:a.selectedCategories,"onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedCategories=e),items:a.categories,label:"Select Categories",multiple:""},null,8,["modelValue","items"]),(0,s.bF)(d,{onClick:l.handleStartGame},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("Start Game")]))),_:1},8,["onClick"]),a.gameStarted?((0,s.uX)(),(0,s.Wv)(p,{key:0,categories:a.selectedCategories,openedQuestions:a.openedQuestions,displayedQuestions:a.displayedQuestions,onAskQuestion:l.handleQuestion},null,8,["categories","openedQuestions","displayedQuestions","onAskQuestion"])):(0,s.Q3)("",!0),a.gameStarted?((0,s.uX)(),(0,s.CE)("div",i,[t[5]||(t[5]=(0,s.Lk)("h3",null,"Player Scores",-1)),(0,s.Lk)("p",null,"Player 1: "+(0,r.v_)(a.scores[0])+" points",1),(0,s.Lk)("p",null,"Player 2: "+(0,r.v_)(a.scores[1])+" points",1)])):(0,s.Q3)("",!0),(0,s.bF)(y,{modelValue:a.showModal,"onUpdate:modelValue":t[3]||(t[3]=e=>a.showModal=e),persistent:"","max-width":"600px"},{default:(0,s.k6)((()=>[(0,s.bF)(v,null,{default:(0,s.k6)((()=>[(0,s.bF)(h,null,{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(a.currentQuestion.question),1)])),_:1}),(0,s.bF)(f,null,{default:(0,s.k6)((()=>[(0,s.Lk)("p",null,"Points: "+(0,r.v_)(a.currentQuestion.points),1),a.showAnswer?((0,s.uX)(),(0,s.CE)("p",u,"Answer: "+(0,r.v_)(a.currentQuestion.answer),1)):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(g,null,{default:(0,s.k6)((()=>[(0,s.bF)(d,{color:"blue darken-1",text:"",onClick:l.revealAnswer},{default:(0,s.k6)((()=>t[6]||(t[6]=[(0,s.eW)("Show Answer")]))),_:1},8,["onClick"]),a.showAnswer?((0,s.uX)(),(0,s.Wv)(d,{key:0,color:"green darken-1",text:"",onClick:t[1]||(t[1]=e=>l.submitAnswer(!0))},{default:(0,s.k6)((()=>t[7]||(t[7]=[(0,s.eW)("Correct")]))),_:1})):(0,s.Q3)("",!0),a.showAnswer?((0,s.uX)(),(0,s.Wv)(d,{key:1,color:"red darken-1",text:"",onClick:t[2]||(t[2]=e=>l.submitAnswer(!1))},{default:(0,s.k6)((()=>t[8]||(t[8]=[(0,s.eW)("Incorrect")]))),_:1})):(0,s.Q3)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var l=n(8344),c=n.n(l);function d(e,t,n,o,i,u){const a=(0,s.g2)("v-btn"),l=(0,s.g2)("v-col"),c=(0,s.g2)("v-row");return(0,s.uX)(),(0,s.Wv)(c,null,{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.categories,(t=>((0,s.uX)(),(0,s.Wv)(l,{key:t,cols:"6"},{default:(0,s.k6)((()=>[(0,s.Lk)("h2",null,(0,r.v_)(t),1),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.displayedQuestions[t],((n,o)=>((0,s.uX)(),(0,s.CE)("div",{key:o},[(0,s.bF)(a,{class:(0,r.C4)({"greyed-out":u.isOpened(t,n.points)}),onClick:o=>e.$emit("ask-question",{category:t,points:n.points})},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(n.points)+" POINTS ",1)])),_:2},1032,["class","onClick"])])))),128))])),_:2},1024)))),128))])),_:1})}var p={props:{categories:Array,displayedQuestions:Object,openedQuestions:Array},methods:{isOpened(e,t){return this.openedQuestions.some((n=>n.category===e&&n.points===t))}}},h=n(1241);const f=(0,h.A)(p,[["render",d]]);var g=f,v={name:"App",components:{GameBoard:g},data(){return{categories:[],selectedCategories:[],questions:{},showModal:!1,currentQuestion:{},scores:[0,0],currentPlayer:0,showAnswer:!1,openedQuestions:[],gameStarted:!1,displayedQuestions:{}}},methods:{loadQuestions(){c().parse("/questions.csv",{header:!0,download:!0,complete:e=>{console.log("CSV loaded:",e.data),this.processQuestions(e.data)}})},processQuestions(e){const t=new Set,n={};e.forEach((e=>{const{Category:o,Question:s,Answer:r,Marks:i}=e;o&&s&&r&&i&&(t.add(o),n[o]||(n[o]=[]),n[o].push({question:s,answer:r,points:parseInt(i,10)}))})),this.categories=Array.from(t),this.questions=n,console.log("Categories:",this.categories),console.log("Questions:",this.questions)},shuffle(e){let t,n=e.length;while(0!==n)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e},handleStartGame(){const e={};this.selectedCategories.forEach((t=>{const n=this.shuffle([...this.questions[t]]);e[t]=[];const o=[100,200,300,400,500];o.forEach((o=>{const s=n.filter((e=>e.points===o)),r=2;if(s.length>=r)e[t].push(...s.slice(0,r));else{e[t].push(...s);const i=r-s.length,u=n.filter((e=>e.points>o)).slice(0,i);e[t].push(...u)}})),e[t].sort(((e,t)=>e.points-t.points))})),this.displayedQuestions=e,this.gameStarted=!0},handleQuestion({category:e,points:t}){if(!this.openedQuestions.some((n=>n.category===e&&n.points===t))){const n=this.questions[e].find((e=>e.points===t));n&&(this.currentQuestion=n,this.showModal=!0,this.showAnswer=!1,this.openedQuestions.push({category:e,points:t}))}},revealAnswer(){this.showAnswer=!0},submitAnswer(e){e?this.scores[this.currentPlayer]+=this.currentQuestion.points:this.scores[this.currentPlayer]-=this.currentQuestion.points,this.showModal=!1,this.currentPlayer=(this.currentPlayer+1)%this.scores.length}},mounted(){this.loadQuestions()}};const y=(0,h.A)(v,[["render",a]]);var k=y,m=(n(5524),n(7768)),w=n(1920),b=n(5741),Q=(0,m.$N)({components:w,directives:b});(0,o.Ef)(k).use(Q).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],r=e[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(u=!1,r<i&&(i=r));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,i=o[0],u=o[1],a=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(a)var c=a(n)}for(t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkjeopardy_game"]=self["webpackChunkjeopardy_game"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(8745)}));o=n.O(o)})();
//# sourceMappingURL=app.e4fc75e7.js.map