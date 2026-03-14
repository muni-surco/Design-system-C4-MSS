function toggleAcc(h){var b=h.nextElementSibling,o=h.classList.contains('open');h.classList.toggle('open',!o);b.classList.toggle('open',!o);}
function togglePop(id){var p=document.getElementById(id),o=p.classList.contains('open');document.querySelectorAll('.pop-box').forEach(function(x){x.classList.remove('open');});if(!o)p.classList.add('open');}

function showToast(title, msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const iconMap = {
    'success': 'circle-check', 'danger': 'siren', 'warning': 'triangle-alert', 'info': 'info'
  };
  const colorMap = {
    'success': 'var(--cok)', 'danger': 'var(--cd)', 'warning': 'var(--cw)', 'info': 'var(--ci)'
  };

  toast.innerHTML = `
    <div class="toast-icon"><i data-lucide="${iconMap[type]}" style="width:20px;height:20px;stroke:${colorMap[type]};stroke-width:2;fill:none"></i></div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button class="toast-close">×</button>
  `;

  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Auto-dismiss after 4s
  setTimeout(() => {
    toast.style.cssText += 'opacity:0;transform:translateX(40px);transition:.25s';
    setTimeout(() => { if(toast.parentNode) toast.remove(); }, 260);
  }, 4000);
}

var COMPONENTS=[
  {id:'col', name:'Colores',           desc:'Paleta de marca, estados y neutros',             tag:'Fundamentos',icon:'palette'},
  {id:'tip', name:'Tipografia',        desc:'Escala de texto, pesos y familia tipografica',   tag:'Fundamentos',icon:'type'},
  {id:'esp', name:'Espaciado',         desc:'Sistema de espaciado base 4px y border radius',  tag:'Fundamentos',icon:'ruler'},
  {id:'ico', name:'Iconos',            desc:'Libreria Lucide con mas de 1400 iconos SVG',     tag:'Fundamentos',icon:'shapes'},
  {id:'bot', name:'Botones',           desc:'Primary secondary outline ghost danger warning', tag:'Componente', icon:'mouse-pointer-click'},
  {id:'bdg', name:'Badges Chips',      desc:'Estados activo critico pendiente y categorias',  tag:'Componente', icon:'tag'},
  {id:'inp', name:'Inputs Forms',      desc:'Text select error hint textarea input group',    tag:'Componente', icon:'text-cursor-input'},
  {id:'ale', name:'Alertas',           desc:'Danger warning success info con icono',          tag:'Componente', icon:'triangle-alert'},
  {id:'crd', name:'Cards Stats',       desc:'Card estandar y tarjetas KPI con tendencia',     tag:'Componente', icon:'square'},
  {id:'tbl', name:'Tablas',            desc:'Header navy hover teal badges y acciones',       tag:'Componente', icon:'table-2'},
  {id:'nav', name:'Navegacion',        desc:'Topbar sidebar header tema oscuro y claro',      tag:'Componente', icon:'layout-dashboard'},
  {id:'tab', name:'Tabs',              desc:'Navegacion por pestanas con estado activo',      tag:'Componente', icon:'panel-top'},
  {id:'mod', name:'Modales',           desc:'Ventana modal con header navy y formulario',     tag:'Componente', icon:'app-window'},
  {id:'avt', name:'Avatares',          desc:'Iniciales de usuario en tres tamanos',           tag:'Componente', icon:'circle-user'},
  {id:'fdb', name:'Feedback UI',       desc:'Progress bars y skeleton loading shimmer',       tag:'Componente', icon:'loader'},
  {id:'tgl', name:'Toggle Switch',     desc:'On off en tres tamanos disabled toggle cards',   tag:'Componente', icon:'toggle-right'},
  {id:'acc', name:'Accordion',         desc:'Contenido colapsable con chevron animado',       tag:'Componente', icon:'chevrons-up-down'},
  {id:'bcr', name:'Breadcrumb',        desc:'Ruta de navegacion con variante pill',           tag:'Componente', icon:'git-fork'},
  {id:'ttp', name:'Tooltip Popover',   desc:'Informacion contextual al hover o al clic',      tag:'Componente', icon:'message-circle'},
  {id:'tst', name:'Toast Notificacion',desc:'Alertas emergentes con slide-in y cierre',       tag:'Componente', icon:'bell'},
  {id:'pgn', name:'Paginacion',        desc:'Navegacion de paginas con ellipsis',             tag:'Componente', icon:'ellipsis'},
  {id:'inc', name:'Incidentes',        desc:'Tarjeta de incidente con prioridad y agente',    tag:'Patron',     icon:'siren'},
  {id:'tmln',name:'Timeline',          desc:'Historial cronologico de eventos de un caso',    tag:'Patron',     icon:'history'},
  {id:'stp', name:'Stepper',           desc:'Flujo paso a paso horizontal y vertical',        tag:'Patron',     icon:'footprints'},
  {id:'flt', name:'Filter Bar',        desc:'Busqueda filtros y chips de filtros activos',    tag:'Patron',     icon:'filter'},
  {id:'map2',name:'Mapa UI',           desc:'Placeholder de mapa con leyenda de iconos',      tag:'Patron',     icon:'map'},
  {id:'dsh', name:'Dashboard',         desc:'Panel con KPIs lista de incidentes y mapa',      tag:'Patron',     icon:'bar-chart-2'},
  {id:'tkn', name:'CSS Tokens',        desc:'Variables CSS completas listas para copiar',     tag:'Tokens',     icon:'code-2'}
];

var TAG_BG  ={'Token':'#E0FAF5','Atomic':'#EEF2FF','Composite':'#E6EEF5','Patrón':'#FEF3CD','Layout':'#F0FDF4'};
var TAG_CLR ={'Token':'#00A88A','Atomic':'#4338CA','Composite':'#003D6B','Patrón':'#92400E','Layout':'#166534'};

function hl(t,q){
  if(!q)return t;
  try{return t.replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<mark>$1</mark>');}
  catch(e){return t;}
}

function jumpTo(id){
  var el=document.getElementById(id);
  if(!el)return;
  closeSearch();
  el.scrollIntoView({behavior:'smooth'});
}

function closeSearch(){
  var inp=document.getElementById('srch-inp');
  var dd =document.getElementById('srch-dd');
  var clr=document.getElementById('srch-clr');
  if(inp)inp.value='';
  if(dd)dd.classList.remove('open');
  if(clr)clr.style.display='none';
}

// alias for onclick buttons
function clearSearch(){closeSearch();}

window.addEventListener('DOMContentLoaded',function(){

  // Lucide icons
  if(typeof lucide!=='undefined')lucide.createIcons();

  // ─── Search wiring ───────────────────────────────────────
  var inp  = document.getElementById('srch-inp');
  var dd   = document.getElementById('srch-dd');
  var list = document.getElementById('srch-list');
  var mt   = document.getElementById('srch-mt');
  var mtt  = document.getElementById('srch-mt-term');
  var clr  = document.getElementById('srch-clr');

  if(!inp){return;}  // search elements not found, skip

  var focIdx=-1;

  function render(raw){
    var q=raw.toLowerCase().trim();
    clr.style.display=q?'flex':'none';
    if(!q){dd.classList.remove('open');return;}

    var hits=COMPONENTS.filter(function(c){
      return c.name.toLowerCase().indexOf(q)>-1
          || c.desc.toLowerCase().indexOf(q)>-1
          || c.tag.toLowerCase().indexOf(q)>-1
          || c.id===q;
    });

    dd.classList.add('open');
    focIdx=-1;

    if(hits.length===0){
      list.innerHTML='';
      mtt.textContent=raw;
      mt.style.display='flex';
      return;
    }
    mt.style.display='none';
    list.innerHTML=hits.map(function(c){
      return '<a class="srch-result" href="#" onclick="event.preventDefault();jumpTo(\''+c.id+'\')">'
        +'<div class="srch-result-icon"><i data-lucide="'+c.icon+'" style="width:18px;height:18px;stroke:var(--cs);stroke-width:2;fill:none"></i></div>'
        +'<div style="flex:1;min-width:0">'
        +'<div class="srch-result-name">'+hl(c.name,raw)+'</div>'
        +'<div class="srch-result-desc">'+hl(c.desc,raw)+'</div>'
        +'</div>'
        +'<span class="srch-result-tag" style="background:'+TAG_BG[c.tag]+';color:'+TAG_CLR[c.tag]+'">'+c.tag+'</span>'
        +'</a>';
    }).join('');
    if(typeof lucide!=='undefined')lucide.createIcons();
  }

  inp.addEventListener('input',function(){render(this.value);});

  inp.addEventListener('keydown',function(e){
    var items=list.querySelectorAll('.srch-result');
    if(e.key==='ArrowDown'){
      e.preventDefault();
      focIdx=Math.min(focIdx+1,items.length-1);
      items.forEach(function(el,i){el.classList.toggle('focused',i===focIdx);});
    } else if(e.key==='ArrowUp'){
      e.preventDefault();
      focIdx=Math.max(focIdx-1,0);
      items.forEach(function(el,i){el.classList.toggle('focused',i===focIdx);});
    } else if(e.key==='Enter'){
      e.preventDefault();
      var t=focIdx>=0?items[focIdx]:items[0];
      if(t)t.click();
    } else if(e.key==='Escape'){
      closeSearch(); inp.blur();
    }
  });

  // '/' to focus
  document.addEventListener('keydown',function(e){
    var tag=document.activeElement.tagName;
    if(e.key==='/'&&tag!=='INPUT'&&tag!=='TEXTAREA'){
      e.preventDefault(); inp.focus(); inp.select();
    }
  });

  // close on click outside
  document.addEventListener('click',function(e){
    var wrap=document.querySelector('.nav-search');
    if(wrap&&!wrap.contains(e.target))dd.classList.remove('open');
  });

  // ─── Popover close on outside click ─────────────────────
  document.addEventListener('click',function(e){
    if(!e.target.closest('.pop-wrap'))
      document.querySelectorAll('.pop-box').forEach(function(p){p.classList.remove('open');});
  });

  // ─── Toast dismiss ───────────────────────────────────────
  document.addEventListener('click',function(e){
    if(e.target.classList.contains('toast-close')){
      var t=e.target.closest('.toast');
      if(t){t.style.cssText+='opacity:0;transform:translateX(40px);transition:.25s';setTimeout(function(){t.remove();},260);}
    }
  });

  // ─── Active sidebar on scroll ─────────────────────────────
  var sbl=Array.from(document.querySelectorAll('.sidebar a[href^="#"]'));
  function getAct(){
    var OFF=72,act=null;
    sbl.forEach(function(a){
      var el=document.getElementById(a.getAttribute('href').slice(1));
      if(el&&el.getBoundingClientRect().top<=OFF)act=el.id;
    });
    return act||( sbl[0]?sbl[0].getAttribute('href').slice(1):null);
  }
  function setAct(id){
    if(!id)return;
    sbl.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+id);});
    var lnk=document.querySelector('.sidebar a.active');
    if(lnk)lnk.scrollIntoView({block:'nearest',behavior:'instant'});
  }
  var tick=false;
  window.addEventListener('scroll',function(){
    if(!tick){requestAnimationFrame(function(){setAct(getAct());tick=false;});tick=true;}
  },{passive:true});
  setAct(getAct());
});
