// Registers the <custom-header> web component that is mounted at
// the top of every page when the element is defined. Renders the Sentiance brand
// bar (the "S" mark + "iOS SDK <version>").
//
// 6.29.0 is substituted at publish time by publish-docs.sh.
//
// The title is set in Poppins (the Sentiance brand font, Medium for titles),
// self-hosted alongside the docs so there's no external font dependency.
(function () {
  if (window.customElements && customElements.get('custom-header')) return;

  var HOME = '/ios-sdk-api-docs/documentation/sentsdk/';
  var FONT_SEMIBOLD = '/ios-sdk-api-docs/poppins-semibold.woff2';
  var VERSION = '6.29.0';

  function ensureFont() {
    if (document.getElementById('sent-poppins-font')) return;
    var st = document.createElement('style');
    st.id = 'sent-poppins-font';
    st.textContent =
      "@font-face{font-family:'Poppins';font-style:normal;font-weight:600;" +
      "font-display:swap;src:url('" + FONT_SEMIBOLD + "') format('woff2')}";
    document.head.appendChild(st);
  }

  var LOGO =
    '<svg class="mark" viewBox="0 0 85 85" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M 58.503906 65.640625 L 25.539062 65.640625 L 25.539062 62.40625 L 58.503906 62.40625 Z"/>' +
    '<path d="M 37.371094 43.921875 C 37.371094 47.21875 39.4375 48.511719 42.347656 48.511719 ' +
    'C 44.738281 48.511719 46.417969 47.671875 46.417969 45.601562 C 46.417969 43.210938 43.960938 42.953125 ' +
    '38.082031 40.949219 C 32.972656 39.203125 28.449219 37.84375 28.449219 31.835938 C 28.449219 25.371094 ' +
    '33.8125 22.332031 42.21875 22.332031 C 51.265625 22.332031 55.664062 26.921875 55.664062 32.867188 ' +
    'L 45.902344 32.867188 C 45.902344 30.285156 44.542969 28.796875 41.828125 28.796875 C 39.824219 28.796875 ' +
    '38.144531 29.703125 38.144531 31.578125 C 38.144531 33.839844 40.796875 34.355469 46.09375 35.972656 ' +
    'C 51.589844 37.652344 56.113281 39.074219 56.113281 45.148438 C 56.113281 52.519531 49.78125 55.167969 ' +
    '42.023438 55.167969 C 33.167969 55.167969 27.671875 51.097656 27.671875 43.859375 Z"/>' +
    '</svg>';

  var template =
    '<style>' +
    ':host{display:block}' +
    '.bar{display:flex;align-items:center;box-sizing:border-box;width:100%;min-height:40px;' +
    'padding:10px;padding-left:8px;background:#3d3d41;' +
    'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}' +
    '.brand{display:inline-flex;align-items:center;gap:9px;text-decoration:none;color:#fff}' +
    '.mark{height:49.5px;width:49.5px;display:block;fill:currentColor;padding-left:8px;box-sizing:content-box}' +
    '.title{font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;' +
    'font-size:15px;font-weight:600;letter-spacing:-0.1px;white-space:nowrap}' +
    '</style>' +
    '<div class="bar">' +
    '<a class="brand" href="' + HOME + '" aria-label="Sentiance iOS SDK">' +
    LOGO +
    '<span class="title">iOS SDK v' + VERSION + '</span>' +
    '</a>' +
    '</div>';

  class CustomHeader extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      ensureFont();
      this.attachShadow({ mode: 'open' }).innerHTML = template;
    }
  }

  customElements.define('custom-header', CustomHeader);
})();
