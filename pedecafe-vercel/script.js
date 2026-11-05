const toggle=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');}});
const tabs=[...document.querySelectorAll('[data-filter]')];
function selectTab(tab){tabs.forEach(button=>{button.setAttribute('aria-selected',String(button===tab));button.tabIndex=button===tab?0:-1;});document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=tab.dataset.filter!=='all'&&card.dataset.category!==tab.dataset.filter;});document.querySelector('#flavor-grid').setAttribute('aria-labelledby',tab.id);}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();selectTab(tabs[next]);}});});
document.querySelector('#year').textContent=new Date().getFullYear();
