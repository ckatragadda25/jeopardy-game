(function(){"use strict";var e={4280:function(e,t,s){var n=s(5130),o=s(6768),r=s(4232);const i={key:0,style:{color:"red","font-size":"30px"},class:"blinking-text"},l={key:0,class:"player-scores"},a={class:"score-table"},u={key:0,style:{"white-space":"normal","word-wrap":"break-word"}},d={style:{"margin-bottom":"10px","font-weight":"bold",color:"darkgreen"}},c={style:{"list-style":"none",padding:"0","font-size":"18px","margin-bottom":"5px"}},h={style:{"margin-bottom":"5px"}};function p(e,t,s,n,p,g){const f=(0,o.g2)("v-col"),y=(0,o.g2)("v-row"),k=(0,o.g2)("v-select"),w=(0,o.g2)("v-btn"),m=(0,o.g2)("GameBoard"),b=(0,o.g2)("v-card-title"),v=(0,o.g2)("v-card-text"),x=(0,o.g2)("v-card-actions"),Q=(0,o.g2)("v-card"),_=(0,o.g2)("v-dialog"),C=(0,o.g2)("v-container"),M=(0,o.g2)("v-main"),F=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(M,null,{default:(0,o.k6)((()=>[(0,o.bF)(y,{class:"d-flex justify-center"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{cols:"12",class:"text-center"},{default:(0,o.k6)((()=>t[6]||(t[6]=[(0,o.Lk)("h1",{class:"quiz-title"},"Telugu Jeopardy Game",-1)]))),_:1})])),_:1}),(0,o.bF)(C,null,{default:(0,o.k6)((()=>[(0,o.bF)(y,{class:"align-start"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{cols:"12",md:"6"},{default:(0,o.k6)((()=>[(0,o.bF)(k,{modelValue:p.selectedCategories,"onUpdate:modelValue":t[0]||(t[0]=e=>p.selectedCategories=e),items:p.categories,label:"Select Categories",multiple:"",disabled:p.gameStarted,style:{"background-color":"orange",height:"55px",overflow:"hidden","text-overflow":"ellipsis"}},null,8,["modelValue","items","disabled"]),t[7]||(t[7]=(0,o.Lk)("p",{style:{color:"blue","margin-top":"15px"}},'(Please select one to five categories and then click "Start Game.")',-1))])),_:1}),(0,o.bF)(f,{cols:"auto"},{default:(0,o.k6)((()=>[(0,o.bF)(w,{class:"start-game-btn",disabled:p.gameStarted,onClick:g.handleStartGame,style:{width:"100px",height:"50px"},color:"green"},{default:(0,o.k6)((()=>t[8]||(t[8]=[(0,o.eW)(" START ")]))),_:1},8,["disabled","onClick"]),(0,o.bF)(w,{onClick:g.resetGame,style:{width:"100px",height:"50px","margin-left":"10px"},color:"blue darken-4"},{default:(0,o.k6)((()=>t[9]||(t[9]=[(0,o.eW)(" RESET ")]))),_:1},8,["onClick"])])),_:1})])),_:1}),p.errorMessage?((0,o.uX)(),(0,o.CE)("p",i,(0,r.v_)(p.errorMessage),1)):(0,o.Q3)("",!0),(0,o.bF)(y,{class:"d-flex justify-start mt-4"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{cols:"12",md:"8",class:"text-center",style:{"margin-left":"0px"}},{default:(0,o.k6)((()=>[p.gameStarted?((0,o.uX)(),(0,o.Wv)(m,{key:0,categories:p.selectedCategories,openedQuestions:p.openedQuestions,displayedQuestions:p.displayedQuestions,onAskQuestion:g.handleQuestion},null,8,["categories","openedQuestions","displayedQuestions","onAskQuestion"])):(0,o.Q3)("",!0)])),_:1})])),_:1}),(0,o.bF)(y,{class:"d-flex justify-start mt-4"},{default:(0,o.k6)((()=>[(0,o.bF)(f,{cols:"12",md:"8",class:"text-center",style:{"margin-left":"0px"}},{default:(0,o.k6)((()=>[p.gameStarted?((0,o.uX)(),(0,o.CE)("div",l,[t[10]||(t[10]=(0,o.Lk)("h3",null,"Player Scores",-1)),(0,o.Lk)("table",a,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",{class:(0,r.C4)(0===p.currentPlayer?"active-player":"inactive-player")},"Player 1",2),(0,o.Lk)("th",{class:(0,r.C4)(1===p.currentPlayer?"active-player":"inactive-player")},"Player 2",2)]),(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,(0,r.v_)(p.scores[0]),1),(0,o.Lk)("td",null,(0,r.v_)(p.scores[1]),1)])])])):(0,o.Q3)("",!0)])),_:1})])),_:1}),(0,o.bF)(_,{modelValue:p.showModal,"onUpdate:modelValue":t[3]||(t[3]=e=>p.showModal=e),persistent:"","max-width":"600px",style:{top:"-50px"}},{default:(0,o.k6)((()=>[(0,o.bF)(Q,null,{default:(0,o.k6)((()=>[(0,o.bF)(b,{style:{"white-space":"normal","word-wrap":"break-word"}},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(p.currentQuestion.question),1)])),_:1}),(0,o.bF)(v,null,{default:(0,o.k6)((()=>[(0,o.Lk)("p",null,"Points: "+(0,r.v_)(p.currentQuestion.points),1),p.showAnswer?((0,o.uX)(),(0,o.CE)("p",u," Answer: "+(0,r.v_)(p.currentQuestion.answer),1)):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)(x,null,{default:(0,o.k6)((()=>[(0,o.bF)(w,{color:"blue darken-1",text:"",onClick:g.revealAnswer},{default:(0,o.k6)((()=>t[11]||(t[11]=[(0,o.eW)("Show Answer")]))),_:1},8,["onClick"]),p.showAnswer?((0,o.uX)(),(0,o.Wv)(w,{key:0,color:"green darken-1",text:"",onClick:t[1]||(t[1]=e=>g.submitAnswer(!0))},{default:(0,o.k6)((()=>t[12]||(t[12]=[(0,o.eW)("Correct")]))),_:1})):(0,o.Q3)("",!0),p.showAnswer?((0,o.uX)(),(0,o.Wv)(w,{key:1,color:"red darken-1",text:"",onClick:t[2]||(t[2]=e=>g.submitAnswer(!1))},{default:(0,o.k6)((()=>t[13]||(t[13]=[(0,o.eW)("Incorrect")]))),_:1})):(0,o.Q3)("",!0),(0,o.bF)(w,{color:"orange darken-1",text:"",onClick:g.skipQuestion},{default:(0,o.k6)((()=>t[14]||(t[14]=[(0,o.eW)("Skip")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(_,{modelValue:p.showWinnerModal,"onUpdate:modelValue":t[5]||(t[5]=e=>p.showWinnerModal=e),persistent:"","max-width":"600px",class:"winner-modal"},{default:(0,o.k6)((()=>[(0,o.bF)(Q,null,{default:(0,o.k6)((()=>[(0,o.bF)(b,{style:{"font-weight":"bold","font-size":"24px","text-align":"center"}},{default:(0,o.k6)((()=>t[15]||(t[15]=[(0,o.eW)("Game Over")]))),_:1}),(0,o.bF)(v,{style:{"text-align":"center","font-size":"18px"}},{default:(0,o.k6)((()=>[(0,o.Lk)("p",d,(0,r.v_)(p.winnerMessage),1),t[18]||(t[18]=(0,o.Lk)("p",{style:{"font-weight":"bold","margin-bottom":"5px"}},"Final Scores:",-1)),(0,o.Lk)("ul",c,[(0,o.Lk)("li",h,[t[16]||(t[16]=(0,o.eW)("🏆 Player 1: ")),(0,o.Lk)("strong",null,(0,r.v_)(p.scores[0]),1)]),(0,o.Lk)("li",null,[t[17]||(t[17]=(0,o.eW)("🏆 Player 2: ")),(0,o.Lk)("strong",null,(0,r.v_)(p.scores[1]),1)])])])),_:1}),(0,o.bF)(x,{style:{"justify-content":"center","margin-top":"-30px"}},{default:(0,o.k6)((()=>[(0,o.bF)(w,{color:"blue darken-1",text:"",onClick:t[4]||(t[4]=e=>p.showWinnerModal=!1),style:{"font-size":"18px",padding:"12px 24px"}},{default:(0,o.k6)((()=>t[19]||(t[19]=[(0,o.eW)(" Close ")]))),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}s(4114),s(7642),s(8004),s(3853),s(5876),s(2475),s(5024),s(1698);var g=s(8344),f=s.n(g);const y={class:"game-board"};function k(e,t,s,n,i,l){const a=(0,o.g2)("v-btn");return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("table",null,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.distributedColumns,((e,t)=>((0,o.uX)(),(0,o.CE)("th",{key:t},(0,r.v_)(e.category),1)))),128))])]),(0,o.Lk)("tbody",null,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(5,(t=>(0,o.Lk)("tr",{key:t},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.distributedColumns,((s,n)=>((0,o.uX)(),(0,o.CE)("td",{key:n},[l.getQuestionForCell(s,t)?((0,o.uX)(),(0,o.Wv)(a,{key:0,class:(0,r.C4)({answered:l.isOpened(s.category,l.getQuestionIndex(s,t))}),style:(0,r.Tr)([l.isOpened(s.category,l.getQuestionIndex(s,t))?{backgroundColor:"grey",color:"white"}:{backgroundColor:"lightblue",color:"purple"},{width:"120px",height:"30px",margin:"-5px"}]),onClick:n=>e.$emit("ask-question",{category:s.category,index:l.getQuestionIndex(s,t)})},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(l.getQuestionForCell(s,t).points)+" POINTS ",1)])),_:2},1032,["class","style","onClick"])):(0,o.Q3)("",!0)])))),128))]))),64))])])])}var w={props:{categories:Array,displayedQuestions:Object,openedQuestions:Array},computed:{distributedColumns(){const e=[];return this.categories.forEach((t=>{const s=this.displayedQuestions[t]||[];for(let n=0;n<Math.ceil(s.length/5);n++)e.push({category:t,startIndex:5*n})})),e}},methods:{getQuestionForCell(e,t){const s=e.category,n=e.startIndex+(t-1);return this.displayedQuestions[s]&&this.displayedQuestions[s][n]?this.displayedQuestions[s][n]:null},getQuestionIndex(e,t){return e.startIndex+(t-1)},isOpened(e,t){return this.openedQuestions.some((s=>s.category===e&&s.index===t))}}},m=s(1241);const b=(0,m.A)(w,[["render",k],["__scopeId","data-v-1b13970e"]]);var v=b,x={name:"App",components:{GameBoard:v},data(){return{categories:[],selectedCategories:[],questions:{},showModal:!1,showWinnerModal:!1,currentQuestion:{},scores:[0,0],currentPlayer:0,showAnswer:!1,openedQuestions:[],gameStarted:!1,totalSelectedQuestions:0,displayedQuestions:{},questionsAnswered:0,totalQuestions:25,winnerMessage:"",errorMessage:""}},methods:{loadQuestions(){const e="/jeopardy-game/questions.csv";f().parse(e,{header:!0,download:!0,complete:e=>{this.processQuestions(e.data)}})},processQuestions(e){const t=new Set,s={};e.forEach((e=>{const{Category:n,Question:o,Answer:r,Marks:i}=e;n&&o&&r&&i&&(t.add(n),s[n]||(s[n]=[]),s[n].push({question:o,answer:r,points:parseInt(i,10)}))})),this.categories=Array.from(t),this.questions=s},shuffle(e){let t,s=e.length;while(0!==s)t=Math.floor(Math.random()*s),s--,[e[s],e[t]]=[e[t],e[s]];return e},handleStartGame(){if(0===this.selectedCategories.length)return void(this.errorMessage="Please select at least one category.");if(this.selectedCategories.length>5)return void(this.errorMessage="Please select only a maximum of 5 categories.");this.errorMessage="",this.gameStarted=!0;let e=25;const t=this.selectedCategories.length;2===t?e=20:3===t?e=10:t>=4&&(e=5);const s=[...this.selectedCategories].sort(((e,t)=>{const s=this.questions[e]?this.questions[e].length:0,n=this.questions[t]?this.questions[t].length:0;return s-n})),n={};let o=0,r=this.totalQuestions,i=s.length,l=Math.floor(r/i);s.forEach((t=>{const s=this.shuffle([...this.questions[t]]),a=Math.min(l,e),u=5*Math.floor(a/5);n[t]=s.slice(0,u),n[t].sort(((e,t)=>e.points-t.points)),o+=n[t].length,r-=n[t].length,i-=1,l=Math.floor(r/i)})),this.totalSelectedQuestions=o,this.displayedQuestions=n,this.questionsAnswered=0},handleQuestion({category:e,index:t}){const s=this.displayedQuestions[e][t];s&&(this.currentQuestion=s,this.showModal=!0,this.showAnswer=!1,this.openedQuestions.push({category:e,index:t}))},revealAnswer(){this.showAnswer=!0},submitAnswer(e){e?this.scores[this.currentPlayer]+=this.currentQuestion.points:this.scores[this.currentPlayer]-=this.currentQuestion.points,this.questionsAnswered++,this.closeModal(),this.checkGameOver(),this.switchPlayer()},skipQuestion(){this.questionsAnswered++,this.closeModal(),this.checkGameOver(),this.switchPlayer()},handleEscapeKey(e){"Escape"===e.key&&this.showModal&&this.skipQuestion()},closeModal(){this.showModal=!1,this.showAnswer=!1},switchPlayer(){this.currentPlayer=(this.currentPlayer+1)%this.scores.length},checkGameOver(){this.questionsAnswered>=this.totalSelectedQuestions&&this.showWinner()},showWinner(){this.scores[0]>this.scores[1]?this.winnerMessage="Player 1 is the winner!":this.scores[1]>this.scores[0]?this.winnerMessage="Player 2 is the winner!":this.winnerMessage="It's a tie!",this.showWinnerModal=!0},resetGame(){this.scores=[0,0],this.openedQuestions=[],this.questionsAnswered=0,this.gameStarted=!1,this.showWinnerModal=!1,this.selectedCategories=[],this.displayedQuestions={},this.errorMessage=""}},mounted(){this.loadQuestions(),window.addEventListener("keydown",this.handleEscapeKey)},beforeUnmount(){window.removeEventListener("keydown",this.handleEscapeKey)}};const Q=(0,m.A)(x,[["render",p],["__scopeId","data-v-3edbd5e7"]]);var _=Q,C=(s(5524),s(7768)),M=s(1920),F=s(5741),A=(0,C.$N)({components:M,directives:F});(0,n.Ef)(_).use(A).mount("#app")}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,r){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var l=!0,a=0;a<n.length;a++)(!1&r||i>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[a])}))?n.splice(a--,1):(l=!1,r<i&&(i=r));if(l){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],l=n[1],a=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(a)var d=a(s)}for(t&&t(n);u<i.length;u++)r=i[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=self["webpackChunkjeopardy_game"]=self["webpackChunkjeopardy_game"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(4280)}));n=s.O(n)})();
//# sourceMappingURL=app.45b3f1e6.js.map