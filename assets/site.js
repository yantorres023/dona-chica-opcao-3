(function(){
var d=document,b=d.body,K="dc-consent";
function ler(){try{return localStorage.getItem(K)}catch(e){return null}}
function gravar(v){try{localStorage.setItem(K,v)}catch(e){}}
function carregarMapa(m){if(m.querySelector("iframe"))return;var f=d.createElement("iframe");f.src=m.getAttribute("data-mapa");f.title="Mapa: Armazém Dona Chica, R. Copacabana, 634";f.loading="lazy";f.referrerPolicy="no-referrer-when-downgrade";m.appendChild(f);var bt=m.querySelector("[data-mapa-btn]");if(bt)bt.remove()}
d.querySelectorAll("[data-mapa-btn]").forEach(function(bt){bt.addEventListener("click",function(){carregarMapa(bt.closest("[data-mapa]"))})});
var c=d.getElementById("consent");
function abrir(){if(!c)return;c.hidden=false;b.classList.add("consent-aberto")}
function fechar(){if(!c)return;c.hidden=true;b.classList.remove("consent-aberto")}
var v=ler();
if(v==="sim")d.querySelectorAll("[data-mapa]").forEach(carregarMapa);
if(!v)abrir();
d.querySelectorAll("[data-consent]").forEach(function(bt){bt.addEventListener("click",function(){var r=bt.getAttribute("data-consent");gravar(r);fechar();if(r==="sim")d.querySelectorAll("[data-mapa]").forEach(carregarMapa)})});
d.querySelectorAll("[data-abrir-consent]").forEach(function(bt){bt.addEventListener("click",abrir)});
var mb=d.querySelector("[data-menu]"),menu=d.getElementById("menu");
function menuSet(o){if(!mb||!menu)return;b.classList.toggle("menu-aberto",o);mb.setAttribute("aria-expanded",o?"true":"false");if(o){var l=menu.querySelector("a,button");if(l)l.focus()}else mb.focus()}
if(mb&&menu){mb.addEventListener("click",function(){menuSet(!b.classList.contains("menu-aberto"))});d.querySelectorAll("[data-menu-fechar]").forEach(function(x){x.addEventListener("click",function(){menuSet(false)})});d.addEventListener("keydown",function(e){if(e.key==="Escape"&&b.classList.contains("menu-aberto"))menuSet(false)})}
d.querySelectorAll("form[data-wa]").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();var linhas=[f.getAttribute("data-wa-intro")||"Olá!"];f.querySelectorAll("[data-rotulo]").forEach(function(el){var val="";if(el.type==="radio"||el.type==="checkbox"){if(!el.checked)return;val=el.value}else val=(el.value||"").trim();if(val)linhas.push(el.getAttribute("data-rotulo")+": "+val)});window.open("https://wa.me/5531985831886?text="+encodeURIComponent(linhas.join("\n")),"_blank","noopener")})});
d.querySelectorAll("[data-escolha]").forEach(function(a){a.addEventListener("click",function(){var v=a.getAttribute("data-escolha");d.querySelectorAll('input[name="tipo"]').forEach(function(r){r.checked=r.value===v})})});
d.querySelectorAll("[data-filtros]").forEach(function(g){var alvo=d.getElementById(g.getAttribute("data-filtros"));g.querySelectorAll("button[data-f]").forEach(function(bt){bt.addEventListener("click",function(){var f=bt.getAttribute("data-f");g.querySelectorAll("button[data-f]").forEach(function(x){x.setAttribute("aria-pressed",x===bt?"true":"false")});alvo.querySelectorAll("[data-cat]").forEach(function(it){it.hidden=!(f==="todas"||it.getAttribute("data-cat")===f)})})})});
})();
