/* Success Navi 製品ページ 共通レンダラー (DOM生成ベース / XSS安全)
 * data-<product>.js が定義する window.SN_DATA を読み、タブUIを描画する。
 * 情報源ラベル(タブ): 活用ナビ / ヘルプ / ブログ
 * 顧客モード(?mode=customer)ではブログタブを隠す。
 */
(function () {
  var d = window.SN_DATA;
  var root = document.getElementById('sn-root');
  if (!d) { root.textContent = 'データが読み込めませんでした (SN_DATA 未定義)。'; return; }

  var customer = new URLSearchParams(location.search).get('mode') === 'customer';

  function el(tag, cls, text){ var e=document.createElement(tag); if(cls)e.className=cls; if(text!=null)e.textContent=text; return e; }

  function articleCard(a){
    var card = el('a','sn-card'); card.href=a.url||'#'; card.target='_blank'; card.rel='noopener';
    if(a.cat) card.appendChild(el('span','sn-tag',a.cat));
    card.appendChild(el('h4',null,a.title));
    if(a.summary) card.appendChild(el('p',null,a.summary));
    card.appendChild(el('span','sn-meta',(a.updated?('最終更新: '+a.updated+' ・ '):'')+'公式ページを開く ↗'));
    return card;
  }

  function grid(items){ var g=el('div','sn-grid'); items.forEach(function(a){g.appendChild(articleCard(a));}); return g; }

  function group(parent, title, items){
    if(!items || !items.length) return;
    parent.appendChild(el('h3','sn-grp',title));
    parent.appendChild(grid(items));
  }

  function stepsBlock(parent, steps){
    if(!steps || !steps.length) return;
    var ol=el('ol','sn-steps');
    steps.forEach(function(s){
      var li=el('li'); li.appendChild(el('b',null,s.title));
      if(s.desc){ li.appendChild(document.createElement('br')); li.appendChild(el('span',null,s.desc)); }
      if(s.url){ var a=el('a',null,' 記事 ↗'); a.href=s.url; a.target='_blank'; a.rel='noopener'; li.appendChild(a); }
      ol.appendChild(li);
    });
    parent.appendChild(ol);
  }

  function buildNavi(){
    var p=el('div');
    if(d.navi){
      if(d.navi.intro) p.appendChild(el('p','sn-lead',d.navi.intro));
      if(d.navi.guideTitle || (d.navi.steps&&d.navi.steps.length)){
        p.appendChild(el('h3','sn-grp',d.navi.guideTitle||'はじめてガイド'));
        stepsBlock(p, d.navi.steps);
      }
      group(p,'よく読まれている記事', d.navi.popular);
      group(p,'活用・ヒント記事', d.navi.articles);
      group(p,'特設ページ', d.navi.featured);
    }
    return p;
  }
  function buildHelp(){
    var p=el('div');
    if(d.help){ if(d.help.intro)p.appendChild(el('p','sn-lead',d.help.intro)); group(p,'製品ヘルプ',d.help.links); }
    else p.appendChild(el('p','sn-lead','この製品の日本語ヘルプは準備中です。'));
    return p;
  }
  function buildBlog(){
    var p=el('div');
    if(d.blog){ if(d.blog.intro)p.appendChild(el('p','sn-lead',d.blog.intro)); group(p,'ブログ・その他',d.blog.links); }
    else p.appendChild(el('p','sn-lead','ブログ記事は未登録です。'));
    return p;
  }

  var tabs=[ {id:'navi',label:'🚀 活用ナビ',build:buildNavi},
             {id:'help',label:'📖 ヘルプ',build:buildHelp} ];
  if(!customer) tabs.push({id:'blog',label:'📝 ブログ',build:buildBlog});

  var bar=el('div','sn-tabbar');
  root.appendChild(bar);
  tabs.forEach(function(t,i){
    var btn=el('button','sn-tabbtn'+(i===0?' active':''),t.label); btn.dataset.t=t.id;
    bar.appendChild(btn);
    var pan=t.build(); pan.className='sn-panel'+(i===0?' active':''); pan.id='pan-'+t.id;
    root.appendChild(pan);
    btn.addEventListener('click',function(){
      root.querySelectorAll('.sn-tabbtn').forEach(function(x){x.classList.remove('active');});
      root.querySelectorAll('.sn-panel').forEach(function(x){x.classList.remove('active');});
      btn.classList.add('active');
      document.getElementById('pan-'+t.id).classList.add('active');
    });
  });

  document.getElementById('sn-title').textContent = d.product + ' サクセスナビ';
  document.getElementById('sn-sub').textContent = d.tagline || '';
  var badge=document.getElementById('sn-mode');
  if(customer){ badge.textContent='顧客表示モード（ブログ非表示）'; badge.style.display='inline-block'; }
})();
