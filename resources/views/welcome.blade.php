<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet">
  <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
  <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
  <title>{{env('APP_NAME')}}</title>

</head>

<body>
  <div id="app">
  </div>
</body>

<script src="{{ asset('js/app.js') }}"></script>
<!-- Start of LiveChat (www.livechatinc.com) code -->
<script>
window.__lc = window.__lc || {};
window.__lc.license = 12680100;;
(function(n, t, c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n)
  }
  var e = {
    _q: [],
    _h: null,
    _v: "2.0",
    on: function() {
      i(["on", c.call(arguments)])
    },
    once: function() {
      i(["once", c.call(arguments)])
    },
    off: function() {
      i(["off", c.call(arguments)])
    },
    get: function() {
      if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
      return i(["get", c.call(arguments)])
    },
    call: function() {
      i(["call", c.call(arguments)])
    },
    init: function() {
      var n = t.createElement("script");
      n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head
        .appendChild(n)
    }
  };
  !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e
}(window, document, [].slice))
</script>
<noscript><a href="https://www.livechatinc.com/chat-with/12680100/" rel="nofollow">Chat with us</a>, powered by <a
    href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->

<!-- <script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en'
  }, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script> -->

</html>