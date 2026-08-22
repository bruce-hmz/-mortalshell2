const AD_SCRIPT = `(function () {
  // Trust pages and non-indexable renders (404 / noindex) stay ad-free.
  if (/^\\/(privacy|terms|about)\\/?$/.test(location.pathname)) return;
  if (document.querySelector('meta[name="robots"][content*="noindex"]')) return;
  // zh locales: the ad network's CN-geo creatives have repeatedly served
  // forced redirects, so zh visitors get an ad-free page.
  var langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
  for (var i = 0; i < langs.length; i++) {
    if ((langs[i] || '').toLowerCase().indexOf('zh') === 0) return;
  }

  var mounted = false;
  function mount() {
    if (mounted) return;
    mounted = true;
    var slot = document.getElementById('ad-slot');
    if (!slot) return;
    // Reserve the banner's space in the same layout pass to avoid post-consent CLS.
    slot.classList.add('is-reserved');

    // 300x250 banner — isolated iframe because its invoke.js uses document.write
    var f = document.createElement('iframe');
    f.width = 300;
    f.height = 250;
    f.title = 'advertisement';
    f.setAttribute('scrolling', 'no');
    f.setAttribute('frameborder', '0');
    f.srcdoc =
      '<scr' + 'ipt>atOptions={"key":"e3bbb1d69d507e22005e57f8026990a6","format":"iframe","height":250,"width":300,"params":{}};</scr' +
      'ipt><scr' +
      'ipt src="https://www.highrevenueformat.com/e3bbb1d69d507e22005e57f8026990a6/invoke.js"></scr' +
      'ipt>';
    slot.appendChild(f);

    // native banner — fills its container div via DOM, safe to inject directly
    var nContainer = document.createElement('div');
    nContainer.id = 'container-8d1131d675af043db70e754330030179';
    slot.appendChild(nContainer);
    var s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.src = 'https://pl30903113.profitableratecpmnetwork.com/8d1131d675af043db70e754330030179/invoke.js';
    slot.appendChild(s);
  }

  // Ads count as optional cookies: mount only after an explicit "allow" choice.
  var choice = null;
  try {
    choice = localStorage.getItem('mortalshell2-consent-v1');
  } catch (e) {
    // storage unavailable — stay ad-free rather than guess
  }
  if (choice === 'all') {
    mount();
    return;
  }
  document.addEventListener('mortalshell2:consent', function (event) {
    if (event.detail === 'all') mount();
  });
})();`;

export function AdSlot() {
  return (
    <div className="ad-slot" id="ad-slot">
      <span className="ad-slot__label">Advertisement</span>
      <script dangerouslySetInnerHTML={{ __html: AD_SCRIPT }} />
    </div>
  );
}
