const AD_SCRIPT = `(function () {
  // Trust pages and non-indexable renders (404 / noindex) stay ad-free.
  if (/^\\/(privacy|terms|about)\\/?$/.test(location.pathname)) return;
  if (document.querySelector('meta[name="robots"][content*="noindex"]')) return;

  var langs =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];

  // zh locales: the ad network's CN-geo creatives have repeatedly served
  // forced redirects, so zh visitors get an ad-free page and no banner.
  for (var i = 0; i < langs.length; i++) {
    if ((langs[i] || '').toLowerCase().indexOf('zh') === 0) return;
  }

  // EU/EEA + similar jurisdictions (UK, CH, NO, IS, LI) keep strict opt-in
  // (GDPR-style prior consent). Everywhere else ads are on by default with
  // an opt-out in the consent banner. Keep this heuristic in sync with
  // components/consent-banner.tsx.
  var euRegions = {
    at: 1, be: 1, bg: 1, hr: 1, cy: 1, cz: 1, dk: 1, ee: 1, fi: 1, fr: 1,
    de: 1, gr: 1, hu: 1, ie: 1, it: 1, lv: 1, lt: 1, lu: 1, mt: 1, nl: 1,
    pl: 1, pt: 1, ro: 1, sk: 1, si: 1, es: 1, se: 1, gb: 1, ch: 1, no: 1,
    is: 1, li: 1
  };
  var euLangs = {
    de: 1, fr: 1, es: 1, it: 1, pt: 1, nl: 1, pl: 1, sv: 1, da: 1, fi: 1,
    cs: 1, el: 1, hu: 1, ro: 1, sk: 1, sl: 1, bg: 1, hr: 1, et: 1, lv: 1,
    lt: 1, mt: 1, ga: 1
  };
  function isEuVisitor() {
    for (var i = 0; i < langs.length; i++) {
      var parts = String(langs[i] || '')
        .toLowerCase()
        .replace('_', '-')
        .split('-');
      var region = '';
      for (var j = 1; j < parts.length; j++) {
        if (parts[j].length === 2) {
          region = parts[j];
          break;
        }
      }
      if (region ? euRegions[region] : euLangs[parts[0]]) return true;
    }
    return false;
  }
  var eu = isEuVisitor();

  var bannerMounted = false;
  var nativeMounted = false;
  function mount() {
    if (!bannerMounted) {
      var bannerSlot = document.getElementById('ad-slot-banner');
      if (bannerSlot) {
        bannerMounted = true;
        // Reserve the banner's space in the same layout pass to avoid post-consent CLS.
        bannerSlot.classList.add('is-reserved');

        // 300x250 banner - isolated iframe because its invoke.js uses document.write
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
        bannerSlot.appendChild(f);
      }
    }

    if (!nativeMounted) {
      var nativeSlot = document.getElementById('ad-slot-native');
      if (nativeSlot) {
        nativeMounted = true;
        // native banner - fills its container div via DOM, safe to inject directly
        var nContainer = document.createElement('div');
        nContainer.id = 'container-8d1131d675af043db70e754330030179';
        nativeSlot.appendChild(nContainer);
        var s = document.createElement('script');
        s.async = true;
        s.setAttribute('data-cfasync', 'false');
        s.src = 'https://pl30903113.profitableratecpmnetwork.com/8d1131d675af043db70e754330030179/invoke.js';
        nativeSlot.appendChild(s);
      }
    }
  }
  function unmount() {
    if (!bannerMounted && !nativeMounted) return;
    bannerMounted = false;
    nativeMounted = false;
    // Already-loaded ad scripts cannot be fully unloaded, but removing their
    // DOM stops any further impressions and collapses the reserved space.
    var bannerSlot = document.getElementById('ad-slot-banner');
    if (bannerSlot) {
      bannerSlot.classList.remove('is-reserved');
      while (bannerSlot.lastChild) bannerSlot.removeChild(bannerSlot.lastChild);
    }
    var nativeSlot = document.getElementById('ad-slot-native');
    if (nativeSlot) {
      while (nativeSlot.lastChild) nativeSlot.removeChild(nativeSlot.lastChild);
    }
  }

  var choice = null;
  try {
    choice = localStorage.getItem('mortalshell2-consent-v1');
  } catch (e) {
    // storage unavailable - fall back to the region default below
  }
  // In opt-in regions 'essential' always wins and EU/EEA-style visitors must
  // have explicitly chosen 'all'. Everyone else gets ads on by default and
  // can turn them off via the banner.
  if (choice !== 'essential' && (choice === 'all' || !eu)) mount();

  // Late banner choices can still flip either direction.
  document.addEventListener('mortalshell2:consent', function (event) {
    if (event.detail === 'all') mount();
    else if (event.detail === 'essential') unmount();
  });
})();`;

function AdScript() {
  return <script dangerouslySetInnerHTML={{ __html: AD_SCRIPT }} />;
}

export function AdBanner({ className }: { className?: string }) {
  return (
    <div
      className={className ? "ad-slot " + className : "ad-slot"}
      id="ad-slot-banner"
    >
      <span className="ad-slot__label">Advertisement</span>
      <AdScript />
    </div>
  );
}

export function AdNative() {
  return (
    <div className="ad-slot ad-slot--native" id="ad-slot-native">
      <span className="ad-slot__label">Advertisement</span>
      <AdScript />
    </div>
  );
}
