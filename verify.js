const icons = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  scan: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><circle cx="12" cy="10" r="3"/><path d="M7 18c0-5 10-5 10 0"/>',
  shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  wallet: '<path d="M20 8V5H5a2 2 0 0 0 0 4h16v11H5a2 2 0 0 1-2-2V7"/><path d="M21 12h-6v4h6"/>',
  file: '<path d="M14 3H5v18h14V8Z M14 3v5h5M8 12h8M8 16h5"/>',
  pulse: '<path d="M2 12h5l3-8 4 16 3-8h5"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
const badge = (text, tone = '') => `<span class="badge ${tone}">${text}</span>`;
const row = (label, value) => `<div class="report-row"><span>${label}</span><b>${value}</b></div>`;
const head = (title, subtitle, right = '<span class="screen-tag">DEMO PREVIEW</span>') => `<div class="screen-head"><div><h3>${title}</h3><p>${subtitle}</p></div>${right}</div>`;
const table = (columns, rows) => `<div class="table-scroll"><table class="mini-table"><thead><tr>${columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const card = (title, content, cls = '') => `<div class="screen-card ${cls}"><h4>${title}</h4>${content}</div>`;
const stat = (label, value, detail) => `<div class="stat-card"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`;
const descriptions = {
  dashboard: 'An overview of screenings, risk signals and work awaiting review.',
  identity: 'Document, biometric and AML results, brought together in one screening report.',
  aml: 'Review individual and business matches, then follow changes over time.',
  crypto: 'Switch between source and destination of funds to explore wallet exposure.',
  forensics: 'Expand a file to inspect its analysis outcome and extracted metadata.',
  monitoring: 'Filter the illustrative alert queue by severity to focus your review.'
};
const views = {
  dashboard: () => `${head('Dashboard','Your screening activity, at a glance.','<span class="screen-tag">This month</span>')}
    <div class="stat-grid">${stat('Screenings','128','Across all check types')}${stat('Awaiting review','16','Cases needing attention')}${stat('Open alerts','8','Transaction monitoring')}${stat('AML changes','3','Ongoing screening')}</div>
    <div class="dashboard-grid">${card('Screening status',`<div class="donut-area"><div class="donut"><div>128<small>SCREENINGS</small></div></div><div class="legend"><span><i></i>Accepted<b>96</b></span><span><i></i>Processing<b>16</b></span><span><i></i>Rejected<b>8</b></span><span><i></i>Initiated<b>8</b></span></div></div>`)}${card('Work queue','<div class="queue-item"><span>Awaiting review</span><strong>16</strong></div><div class="queue-item"><span>Open alerts</span><strong>8</strong></div><div class="queue-item"><span>AML changes</span><strong>3</strong></div>')}</div>
    ${card('Latest activity',table(['Screening','Type','Status','Risk'],[['CASE-1042<small>Individual screening</small>','KYC',badge('Accepted','green'),badge('Low','green')],['CASE-1043<small>Business screening</small>','AML',badge('Processing'),badge('Medium','amber')],['CASE-1044<small>Wallet screening</small>','Crypto',badge('Completed','green'),badge('Review','amber')]]),'full-card')}`,
  identity: () => `${head('Screening report','CASE-1042 · Regular KYC')}
    <div class="notice">✓ &nbsp; KYC verification completed — illustrative accepted case.</div><div class="data-tabs"><span>Overview</span><span>Files · 3</span><span>Reports · 1</span></div>
    <div class="report-grid">${card('Report summary',row('External reference','CASE-1042')+row('Status',badge('Accepted','green'))+row('Risk level',badge('Low','green'))+row('Address status',badge('Accepted','green'))+row('Document type','Passport'))}${card('Document checks',row('MRZ validation',badge('Valid','green'))+row('Visual data','Extracted')+row('NFC verification',badge('Verified','green'))+row('Expiry check',badge('Valid','green'))+row('Proof of address','Reviewed'))}
    ${card('Biometric results',`<div class="biometric"><div class="face-icon">${icon('scan')}</div><p>Liveness &nbsp; ${badge('Passed','green')}<br />Document match &nbsp; ${badge('Passed','green')}<br /><span class="demo-label">ILLUSTRATIVE RESULTS</span></p></div>`)}${card('AML & context',row('AML screening',badge('Completed','green'))+row('Screening matches','None in this example')+row('Device & location','Available in report'))}</div>
    ${card('Audit history','<div class="audit-list"><div><span>Screening created · External reference linked</span><time>09:40</time></div><div><span>Applicant submitted documents</span><time>09:42</time></div><div><span>Decision recorded · Accepted</span><time>09:48</time></div></div>','full-card')}`,
  aml: () => `${head('AML screenings','Screen names. Review matches. Follow changes.')}
    <div class="screen-filter" role="group" aria-label="AML subject type"><button data-aml="individual" aria-pressed="true">Individuals</button><button data-aml="business" aria-pressed="false">Businesses</button></div><div id="aml-content">${amlContent('individual')}</div>` ,
  crypto: () => `${head('Wallet screening','WALLET-1044 · Illustrative wallet report')}
    <div class="stat-grid">${stat('Risk score','2.40','Illustrative result')}${stat('Inflow · USD','42.5k','Source of funds')}${stat('Outflow · USD','28.0k','Destination of funds')}${stat('Triggered rules','2','Review exposure')}</div>
    <div class="screen-filter" role="group" aria-label="Wallet exposure direction"><button data-exposure="source" aria-pressed="true">Source of funds</button><button data-exposure="destination" aria-pressed="false">Destination of funds</button></div><div id="exposure-content">${exposureContent('source')}</div>` ,
  forensics: () => `${head('Forensic analysis report','CASE-1045 · Supporting documents')}
    <div class="report-grid">${card('Report summary',row('Analysis reference','FORENSIC-1045')+row('Screening reference','CASE-1045')+row('Files analysed','2'))}${card('A closer look',`<p class="screen-note">Inspect each file’s outcome and metadata alongside the screening it belongs to. Expand a document below to see an example.</p><div class="tag-row" style="margin-top:15px"><span>File-level outcomes</span><span>Linked evidence</span></div>`)}</div>
    <p class="mini-section">ANALYSED DOCUMENTS</p>
    <details class="report-file" open><summary>${icon('file')} Address-document.jpg ${badge('Likely genuine','green')}</summary><div class="file-body">${row('File type','JPEG image')}${row('Image dimensions','1600 × 1200')}${row('File size','482 KB')}${row('Analysis outcome',badge('Likely genuine','green'))}</div></details>
    <details class="report-file"><summary>${icon('file')} Supporting-document.jpg ${badge('Bad data','amber')}</summary><div class="file-body">${row('File type','JPEG image')}${row('Image dimensions','640 × 480')}${row('File size','76 KB')}${row('Analysis outcome',badge('Bad data','amber'))}<p class="screen-note">Illustrative outcome: a clearer document is required for assessment.</p></div></details>` ,
  monitoring: () => `${head('Transaction alerts','Prioritise the cases that need attention.','<select class="screen-select" id="severity" aria-label="Filter alerts by severity"><option value="all">Any severity</option><option value="critical">Critical</option><option value="high">High</option><option value="medium">Medium</option></select>')}
    <div class="stat-grid">${stat('Open alerts','8','Awaiting review')}${stat('Critical','1','Highest priority')}${stat('High','4','Review required')}${stat('Medium','3','Further context')}</div>
    <div id="alerts-content">${alertsContent('all')}</div><div class="notice" style="margin-top:17px;background:#a77ce510;color:#b9a6d0;border-color:#a77ce51a">Rules, transaction details and screening context in one review workflow.</div>`
};
function amlContent(type) {
  const business = type === 'business';
  return `<div class="report-grid">${card(business ? 'Business screening' : 'Individual screening',row('Reference',business?'BUSINESS-1043':'PERSON-1046')+row('Status',badge('Completed','green'))+row('Screening mode','Ongoing')+row('Last change','Available in history'))}${card('Screening scope',row('Sanctions','Included')+row('Politically exposed persons','Included')+row('Adverse media','Included')+row('Review context','Match details'))}</div>
    ${card('Screening results',table(['Category','Result','Review'],[[business?'Sanctions':'Politically exposed person',badge('Potential match','amber'),'Further review'],['Adverse media',badge('No match','green'),'—'],['Ongoing screening',badge('Active'),'Track changes']]),'full-card')}
    <div class="notice" style="margin-top:15px;background:#a77ce510;color:#b9a6d0;border-color:#a77ce51a">Potential matches are review signals. Examine the evidence in context.</div>`;
}
function exposureContent(direction) {
  const data = direction === 'source' ? [['Exchange',62],['Decentralised exchange',18],['Payment services',8],['Mixer',4],['Unknown',8]] : [['Exchange',48],['Decentralised exchange',22],['Payment services',12],['Mixer',6],['Unknown',12]];
  return `<div class="report-grid">${card(direction==='source'?'Source of funds exposure':'Destination of funds exposure',`<div class="chart-bars">${data.map(([label,value])=>`<div><div class="bar-label"><span>${label}</span><span>${value}%</span></div><div class="bar-track"><i style="--bar:${value}%"></i></div></div>`).join('')}</div>`)}${card('Risk in context',row('Obfuscating activity',badge('Triggered','amber'))+row('Illicit activity',badge('Triggered','amber'))+row('Exposure details','Direct & indirect')+row('Previous checks','Screening history')+'<p class="screen-note" style="margin-top:18px">Investigate source and destination categories alongside the rules that contributed to the result.</p>')}</div>`;
}
const alerts = [
  ['Critical','Counterparty on a watchlist','TX-2041','Blocked'],
  ['High','Large transaction','TX-2042','Flagged'],
  ['High','Daily aggregate','TX-2043','Flagged'],
  ['High','Unverified applicant','TX-2044','Blocked'],
  ['High','High-risk country','TX-2045','Flagged'],
  ['Medium','Structuring','TX-2046','Flagged'],
  ['Medium','New counterparty, high value','TX-2047','Flagged'],
  ['Medium','Daily aggregate','TX-2048','Flagged']
];
function alertsContent(severity) {
  const shown = alerts.filter(a=>severity==='all'||a[0].toLowerCase()===severity);
  return card(`Alert queue · ${shown.length} ${shown.length===1?'alert':'alerts'}`,table(['Severity','Rule','Transaction','Status'],shown.map(a=>[badge(a[0],a[0]==='Critical'?'red':'amber'),a[1],a[2],badge(a[3],a[3]==='Blocked'?'red':'amber')])));
}
const tabs = [...document.querySelectorAll('[data-view]')];
const panel = document.querySelector('#tour-panel');
function showView(view) {
  if (!views[view]) return;
  tabs.forEach(tab=>{const active=tab.dataset.view===view;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  panel.setAttribute('aria-labelledby',`tab-${view}`);
  panel.innerHTML=views[view]();
  document.querySelector('#tour-description').textContent=descriptions[view];
  document.querySelector('#tour-number').textContent=String(tabs.findIndex(t=>t.dataset.view===view)+1).padStart(2,'0');
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>showView(tab.dataset.view));
  tab.addEventListener('keydown',event=>{
    let next;
    if(['ArrowDown','ArrowRight'].includes(event.key)) next=(index+1)%tabs.length;
    if(['ArrowUp','ArrowLeft'].includes(event.key)) next=(index-1+tabs.length)%tabs.length;
    if(event.key==='Home') next=0;
    if(event.key==='End') next=tabs.length-1;
    if(next!==undefined){event.preventDefault();showView(tabs[next].dataset.view);tabs[next].focus();}
  });
});
document.querySelectorAll('[data-open-view]').forEach(link=>link.addEventListener('click',()=>{showView(link.dataset.openView);panel.focus({preventScroll:true});}));
panel.addEventListener('click',event=>{
  const aml=event.target.closest('[data-aml]');
  if(aml){panel.querySelectorAll('[data-aml]').forEach(b=>b.setAttribute('aria-pressed',String(b===aml)));panel.querySelector('#aml-content').innerHTML=amlContent(aml.dataset.aml);}
  const exposure=event.target.closest('[data-exposure]');
  if(exposure){panel.querySelectorAll('[data-exposure]').forEach(b=>b.setAttribute('aria-pressed',String(b===exposure)));panel.querySelector('#exposure-content').innerHTML=exposureContent(exposure.dataset.exposure);}
});
panel.addEventListener('change',event=>{if(event.target.id==='severity')panel.querySelector('#alerts-content').innerHTML=alertsContent(event.target.value);});
const nav=document.querySelector('#navigation');
const menu=document.querySelector('.menu-toggle');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const orientation=matchMedia('(max-width:900px)');
function setOrientation(){document.querySelector('[role=tablist]').setAttribute('aria-orientation',orientation.matches?'horizontal':'vertical');}
orientation.addEventListener('change',setOrientation);setOrientation();showView('dashboard');
