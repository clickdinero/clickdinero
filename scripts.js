document.addEventListener('DOMContentLoaded',()=>{if('serviceWorker'in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{});}
function updateStatsUI(stats){document.getElementById('stat-total').innerText=Object.values(stats).reduce((a,b)=>a+b,0);const list=document.getElementById('stat-list');list.innerHTML='';for(const k in stats){const li=document.createElement('li');li.innerText=`${k}: ${stats[k]} clicks`;list.appendChild(li);} }
function loadStats(){try{const s=JSON.parse(localStorage.getItem('cd_stats')||'{}');return s}catch(e){return{}}}
function saveStats(s){localStorage.setItem('cd_stats',JSON.stringify(s));}
let stats=loadStats();updateStatsUI(stats);
document.querySelectorAll('.offer-card').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('data-id')||a.href;stats[id]=(stats[id]||0)+1;saveStats(stats);updateStatsUI(stats);});});
document.getElementById('resetStats').addEventListener('click',()=>{stats={};saveStats(stats);updateStatsUI(stats);});
});