var e=globalThis,t={},n={},a=e.parcelRequire5feb;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire5feb=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,a=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.1c79cf4d.js","3n06e","star-red.e9298925.png","l8b8L","star-green.741bfdeb.png","iMGB9","papel-grande.7657fda8.png","fkAYp","piedra-grande.235b1aee.png","6bNvX","tijera-grande.fa900d32.png","5mdmA","papel.97b4e337.png","hbeyn","piedra.f7ab90c7.png","cnU0O","tijera.af887105.png"]'));class r extends HTMLElement{constructor(){super(),this.computerPoints=this.getAttribute("computerPoints"),this.myPoints=this.getAttribute("myPoints")}connectedCallback(){this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");n.appendChild(a),n.appendChild(r),n.classList.add("containerTotalPoints");let i=document.createElement("div"),s=document.createElement("div"),o=document.createElement("style");t.classList.add("container"),o.textContent=`

    .container .containerTotalPoints{
        left: 45px;
        font-size: 18px;
            color: white;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            // padding: 10px;
            // padding-top: 15px;
            width: 25px;
            height: 80px;
            border-radius: 30px;
            background: #212121;
            box-shadow: 15px 15px 30px rgb(25, 25, 25),
                        // -15px -15px 30px rgb(60, 60, 60);
           
           
    }
    .container {
        position: relative;
        width: 25px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 15px;
        border-radius: 30px;
        box-shadow: 15px 15px 30px #bebebe,
        -15px -15px 30px #ffffff;
        background-color: white;
      }

      .container > div{
        text-align: center;
        font-size: 30px;
      }
    `,this.classList.add("tanteador"),a.textContent="0",r.textContent="0",i.textContent=this.computerPoints||0,s.textContent=this.myPoints||0,// containerPoints.appendChild(containerTotalPoints);
t.appendChild(i),t.appendChild(s),e.appendChild(t),e.appendChild(o)}}customElements.define("tanteador-el",r);class i extends HTMLElement{constructor(){super(),this.texto=this.getAttribute("texto")||""}connectedCallback(){this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),n=document.createElement("style");t.textContent=`${this.texto}`,n.textContent=`
    button{
        border-radius: 10px;
        border: 10px solid #001997;
        font-family: "Odibee Sans";
        background-color: #006CFC;
        color: white;
        font-size: 45px;
        letter-spacing: 2.25px;
        width: 322px;
        height: 87px;
    }
    `,e.appendChild(t),e.appendChild(n)}}customElements.define("button-el",i);var s={};s=new URL("star-red.e9298925.png",import.meta.url).toString();var o={};o=new URL("star-green.741bfdeb.png",import.meta.url).toString();class l extends HTMLElement{constructor(){super(),this.texto=this.getAttribute("texto"),this.color=this.getAttribute("color"),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("container");let n=document.createElement("p"),a=document.createElement("img"),r=document.createElement("img"),i=document.createElement("style");return a.src=new URL(s),r.src=new URL(o),n.textContent=this.texto||"",i.textContent=`
        .container{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container > p {
            position: absolute;
            color: white;
            font-size: 45px;
        }
    `,"red"==this.color?t.appendChild(a):"green"==this.color&&t.appendChild(r),t.appendChild(n),e.appendChild(i),e.appendChild(t),e}}customElements.define("resultado-el",l);class c extends HTMLElement{constructor(){super(),this.title=this.getAttribute("title"),this.puntajePlayerUno=this.getAttribute("scoreUno"),this.puntajePlayerDos=this.getAttribute("scoreDos")}connectedCallback(){this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style");n.textContent=`
        .container{
            border-radius: 10px;
            border: 10px solid #000;
            text-align: center;
            padding: 10px;
            background-color: #fff;
        }

        .title{
            font-size: 55px;
            margin: 10px;
        }

        p{
            font-size: 45px;
            margin: 0
        }
    `,t.innerHTML=`
    <div class="container">
        <h2 class="title">${this.title}</h2>
        <p class="player-uno">Vos: ${this.puntajePlayerUno}</p>
        <p class="player-dos">Computer: ${this.puntajePlayerDos}</p>
    </div>
    
    `,e.appendChild(t),e.appendChild(n)}}// new ScoreEl();
customElements.define("score-el",c);var d={};d=new URL("papel-grande.7657fda8.png",import.meta.url).toString();var p={};p=new URL("piedra-grande.235b1aee.png",import.meta.url).toString();var m={};m=new URL("tijera-grande.fa900d32.png",import.meta.url).toString();var u={};u=new URL("papel.97b4e337.png",import.meta.url).toString();var y={};y=new URL("piedra.f7ab90c7.png",import.meta.url).toString();var h={};h=new URL("tijera.af887105.png",import.meta.url).toString();const g={data:{currentGame:{computerPlay:0,myPlay:0,playTime:0,ganador:"",choice:!1},historyGame:[]},listener:[],optionsPlay:["piedra","papel","tijera"],initState(){let e=localStorage.getItem("juego")||this.getState();"string"==typeof e?this.setState(JSON.parse(e)):this.setState(e)},getState(){return this.data},suscrcribe(e){this.listener.push(e)},setState(e){for(let t of(this.data=e,localStorage.setItem("juego",JSON.stringify(e)),this.listener))t()},whoWins(e){let t=this.getState();t.currentGame.ganador=e,this.setState(t)},computerPlay(){let e=!1;for(;!1==e;){let t=Math.floor(10*Math.random());if(t<=2)return e=!0,this.optionsPlay[t]}},setMove(e,t){let n=this.getState();"papel"==e&&"piedra"==t&&(n.currentGame.myPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"papel"==e&&"tijera"==t&&(// const currentState = this.getState();
n.currentGame.computerPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"papel"==e&&"papel"==t&&(// const currentState = this.getState();
n.currentGame.playTime+=1,this.setState(n)),"piedra"==e&&"papel"==t&&(// const currentState = this.getState();
n.currentGame.computerPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"piedra"==e&&"tijera"==t&&(// const currentState = this.getState();
n.currentGame.myPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"piedra"==e&&"piedra"==t&&(// const currentState = this.getState();
n.currentGame.playTime+=1,this.setState(n)),"tijera"==e&&"papel"==t&&(// const currentState = this.getState();
n.currentGame.myPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"tijera"==e&&"piedra"==t&&(// const currentState = this.getState();
n.currentGame.computerPlay+=1,n.currentGame.playTime+=1,this.setState(n)),"tijera"==e&&"tijera"==t&&(// const currentState = this.getState();
n.currentGame.playTime+=1,this.setState(n))}};function f(e,t){// const images =
//   document.querySelector(".hands-container")?.children[0].children;
// const arrImages = Array.prototype.slice.call(images);
// const handsContainer = document.querySelector(".hands-container");
// const container = handsContainer as any;
// container.style.pointerEvents = "none";
// setTimeout(() => {
//   container.style.pointerEvents = "auto";
// }, 6000);
"papel"==e?(t[0].style.transform="translate(125px,-130px)",t[0].style.transition="transform 0.5s",t[1].style.transform="translate(-135px,80px)",t[1].style.transition="transform 0.5s",t[1].style.opacity="0.5",t[2].style.transform="translate(0,80px)",t[2].style.transition="transform 0.5s",t[2].style.opacity="0.5"):"piedra"==e?(t[0].style.transform="translate(0,80px)",t[0].style.transition="transform 0.5s",t[0].style.opacity="0.5",t[1].style.transform="translate(0,-130px)",t[1].style.transition="transform 0.5s",t[2].style.transform="translate(0,80px)",t[2].style.transition="transform 0.5s",t[2].style.opacity="0.5"):"tijera"==e&&(t[2].style.transform="translate(-125px,-130px)",t[2].style.transition="transform 0.5s",t[1].style.transform="translate(125px,80px)",t[1].style.transition="transform 0.5s",t[1].style.opacity="0.5",t[0].style.transform="translate(0,80px)",t[0].style.transition="transform 0.5s",t[0].style.opacity="0.5");// setTimeout(() => {
//   arrImages.forEach((img) => {
//     img.style.transform = "";
//     img.style.transition = "";
//     img.style.opacity = "";
//   });
// }, 3000);
// setTimeout(() => {
//   computerSelect(computedMove);
// }, 3000);
// computerSelect(computedMove);
}function x(e){let t=document.querySelector(".computer")?.children[0].children,n=Array.prototype.slice.call(t);"papel"==e?(n[0].style.transform="translate(125px,-170px)",n[0].style.transition="transform 0.5s",// arrImages[0].style.opacity = "0.5";
n[1].style.transform="translate(-125px,70px)",n[1].style.transition="transform 0.5s",n[1].style.opacity="0.5",n[2].style.transform="translate(0,70px)",n[2].style.opacity="0.5"):"piedra"==e?(n[1].style.transform="translate(0,-170px)",n[1].style.transition="transform 0.5s",n[0].style.transform="translate(0,70px)",n[0].style.transition="transform 0.5s",n[0].style.opacity="0.5",n[2].style.transform="translate(0,70px)",n[2].style.opacity="0.5",n[2].style.transition="transform 0.5s"):"tijera"==e&&(n[2].style.transform="translate(-125px,-170px)",n[2].style.transition="transform 0.5s",n[0].style.transform="translate(0,70px)",n[0].style.transition="transform 0.5s",n[0].style.opacity="0.5",n[1].style.transform="translate(125px,70px)",n[1].style.opacity="0.5",n[1].style.transition="transform 0.5s"),setTimeout(()=>{n.forEach(e=>{e.style.transform="",e.style.transition="",e.style.opacity=""})},3e3)}const b=document.querySelector(".root"),S="/piedra-papel-tijera/",E=[{path:/\/inicio$/,handle:function(e){let t=document.createElement("div");t.innerHTML=`
    <div class="init-page">
        <h1 class="init-page__title">Piedra Papel o Tijera</h1>

        <button-el texto="Empezar" class="btn-empezar"></button-el>
        <hands-container></hands-container>
    </div>
    `;let n=t.querySelector(".btn-empezar");return n?.addEventListener("click",()=>{e("jugar")}),t}},{path:/\/jugar$/,handle:function(e){let t=document.createElement("div");t.innerHTML=`
      <div class="init-page">
          <p class="jugar__parrafo">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos. Gana 2 de 3 manos para ser el/la vencedor/a</p>
          <button-el texto="Jugar" class="btn-jugar"></button-el>
          <hands-container></hands-container>
      </div>
      `;let n=t.querySelector(".btn-jugar");return n?.addEventListener("click",()=>{e("game")}),t}},{path:/\/game$/,handle:function(){let e=document.createElement("div"),t=function(n,a,r){let i,s;e.innerHTML=`
    <div class="game-page">
    <hands-container size="grande" class="computer"></hands-container>
    <div class="container-middle">
    <tanteador-el computerPoints=${a} myPoints=${n}></tanteador-el>
    <div  class="container-tempo">
    <temporizador-el></temporizador-el>

    <p class="aviso">Partida n\xb0${r+1}</p>
    </div>
    
    </div>
    
    <hands-container size="grande" class="hands-container"></hands-container>
    </div>
    `;let o=e.querySelector(".hands-container");return setTimeout(()=>{let e=document.querySelector(".hands-container")?.children[0].children,n=Array.prototype.slice.call(e);if(s=g.computerPlay(),setTimeout(()=>{o.style.pointerEvents="auto"},3e3),o?.getAttribute("select")){console.log("fui sleccionado");let e=g.getState();x(s),g.setMove(i.id,s),setTimeout(()=>{if(""==e.currentGame.ganador)return n.forEach(e=>{e.style.transform="",e.style.transition="",e.style.opacity=""}),o.style.pointerEvents="auto",t(e.currentGame.myPlay,e.currentGame.computerPlay,e.currentGame.playTime);e.historyGame.push({...e.currentGame}),g.setState(e),G("endgame")},3e3)}else{console.log("no fui seleccionado"),o.style.pointerEvents="none",i="piedra",x(s);{let e=document.querySelector(".hands-container")?.children[0].children,t=Array.prototype.slice.call(e);g.setMove(i,s),console.log(i+s),f(i,t)}let e=g.getState();setTimeout(()=>{if(""==e.currentGame.ganador)return n.forEach(e=>{e.style.transform="",e.style.transition="",e.style.opacity=""}),o.style.pointerEvents="auto",t(e.currentGame.myPlay,e.currentGame.computerPlay,e.currentGame.playTime);e.historyGame.push({...e.currentGame}),g.setState(e),G("endgame")},3e3)}},3e3),o?.addEventListener("click",e=>{o.setAttribute("select","true"),o.style.pointerEvents="none",i=e.target;{let e=document.querySelector(".hands-container")?.children[0].children,t=Array.prototype.slice.call(e);f(i.id,t)}}),e};return g.suscrcribe(()=>{let e=g.getState(),t=e.currentGame.myPlay,n=e.currentGame.computerPlay,a=e.currentGame.playTime;""==e.currentGame.ganador&&(a>=3?t>n?g.whoWins("yo"):t<n&&g.whoWins("computer"):2==a&&(2==t?g.whoWins("yo"):2==n&&g.whoWins("computer")))}),t(0,0,0)}},{path:/\/endgame$/,handle:function(e){let t=0,n=0,a=g.getState();return a.historyGame.map(e=>{"yo"==e.ganador?n+=1:"computer"==e.ganador&&(t+=1)}),function(t,n,a){let r=document.createElement("div");"yo"==t.ganador?r.classList.add("container-end-game-winner"):r.classList.add("container-end-game-looser"),r.innerHTML=`
          <div class="end-page">
              
              <resultado-el texto="${"yo"==t.ganador?"Ganaste":""==t.ganador?"":"Perdiste"}" color="${"yo"==t.ganador?"green":"red"}" ></resultado-el>

      <score-el title="Score" scoreUno=${n} scoreDos=${a}></score-el>

      <div class="container-buttons">
        <button-el texto="Volver a jugar" class="btn-empezar"></button-el>
        <button-el texto="Inicio" class="btn-inicio"></button-el>
      </div>
       
          </div>
          `;let i=r.querySelector(".btn-empezar");i?.addEventListener("click",()=>{let t=g.getState();// currentState.historyGame.push({ ...currentState.currentGame });
t.currentGame.myPlay=0,t.currentGame.computerPlay=0,t.currentGame.playTime=0,t.currentGame.ganador="",g.setState(t),e("game")});let s=r.querySelector(".btn-inicio");return s?.addEventListener("click",()=>{let t=g.getState();// currentState.historyGame.push({ ...currentState.currentGame });
t.currentGame.myPlay=0,t.currentGame.computerPlay=0,t.currentGame.playTime=0,t.currentGame.ganador="",t.historyGame=[],g.setState(t),e("inicio")}),r}(a.currentGame,n,t)}}];function v(e){if(C()){let t=e.replace(S,"/");for(let e of E)if(e.path.test(t)){let t=e.handle(G);L(t)}}else for(let t of E)if(t.path.test(e)){let e=t.handle(G);L(e)}}function L(e){b?.firstChild?(b.firstChild.remove(),b.appendChild(e)):b?.appendChild(e)}function G(e){if(C()){let t=S+e;history.pushState({},"",t),v(t)}else"/inicio"==e?(history.pushState({},"",e),v(e)):(history.pushState({},"","/"+e),v("/"+e))}function H(){if(location.pathname==S)G("inicio");else if("/"==location.pathname)G("/inicio");else if(C()){let e=location.pathname.replace(S,"/");G(e)}else v(location.pathname)}function C(){return location.host.includes("github.io")}window.addEventListener("popstate",()=>{H()}),g.initState(),H(),function(){class e extends HTMLElement{constructor(){super(),this.size=this.getAttribute("size")}connectedCallback(){this.render()}render(){let e=document.createElement("div"),t=document.createElement("style"),n=document.createElement("img"),a=document.createElement("img"),r=document.createElement("img");if(n.id="papel",a.id="piedra",r.id="tijera",e.classList.add("container"),t.textContent=`
            .container{
                display: flex;
                column-gap: ${"grande"==this.size?"10px":"45px"};
                justify-content: center;
                width: 100%;
                // overflow: hidden;
             }

             .computer{
                transform: translate(0,0px) rotate(180deg); 
             }

             
    
            //  img{
            //     transform: translate(0, 30px);
            //  }
        `,"grande"==this.size){let e=new URL(d);n.src=e;let t=new URL(p);a.src=t;let i=new URL(m);r.src=i}else{let e=new URL(u);n.src=e;let t=new URL(y);a.src=t;let i=new URL(h);r.src=i}e.appendChild(n),e.appendChild(a),e.appendChild(r),this.appendChild(e),this.appendChild(t)}}customElements.define("hands-container",e),new e}(),function(){class e extends HTMLElement{constructor(){super();// this.render();
//   this.texto = this.getAttribute("texto") || "";
}connectedCallback(){this.render();//   console.log("Fui añadido al dom");
let e=document.querySelector(".container-gral");e.style.display="block";let t=document.querySelector(".number3");t?.classList.add("animation"),//   console.log("temporizador");
//   console.log(numberTres);
setTimeout(()=>{let e=document.querySelector(".number2");e?.classList.add("animation")},1e3),setTimeout(()=>{let e=document.querySelector(".number1");e?.classList.add("animation")},2e3),setTimeout(()=>{//   const containerGral = document.querySelector(
//     ".container-gral"
//   ) as any;
e.style.display="none"},3e3)}render(){//   const shadow = this.attachShadow({ mode: "open" });
let e=document.createElement("div");e.classList.add("container-gral"),e.innerHTML=`
            <div class="loading">
                <div class="spiner"></div>
                <span class="number3">3</span>
                <span class="number2">2</span>
                <span class="number1">1</span>
            </div>
         `,// this.style.position = "absolute";
this.classList.add("temporizador"),this.appendChild(e);// div.classList.add("temporizador");
// return div;
}}customElements.define("temporizador-el",e);//   return new TemporizadorEl();
}();//# sourceMappingURL=index.1c79cf4d.js.map

//# sourceMappingURL=index.1c79cf4d.js.map