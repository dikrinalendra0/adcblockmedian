/*<![CDATA[*/ function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#mainCont").classList.add("drK"):document.querySelector("#mainCont").classList.remove("drK")}; function headScroll() {const distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 40, commentEl = document.getElementById('header');if (distanceY > shrinkOn) {commentEl.classList.add("stick");} else {commentEl.classList.remove("stick");} } window.addEventListener('scroll', headScroll); 
/* lazy youtube */ ( function() {var youtube = document.querySelectorAll(".lazyYt"); for (var i = 0; i < youtube.length; i++) {var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; var image = new Image(); image.setAttribute("class", "lazy"); image.setAttribute("data-src",source); image.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="); image.setAttribute("alt","Youtube video"); image.addEventListener( "load", function() {youtube[ i ].appendChild( image );}( i ) ); youtube[i].addEventListener( "click", function() {var iframe = document.createElement( "iframe" ); iframe.setAttribute( "frameborder", "0" ); iframe.setAttribute( "allowfullscreen", "" ); iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" ); this.innerHTML = ""; this.appendChild( iframe ); }); }; })();
/* Lightbox image script, source: kompiajaib.com/2021/09/update-image-lightbox-dengan-css-dan.html */ for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0; i < imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false'); function wrap(o, t, e) {for (var i = document.querySelectorAll(t), c = 0; c < i.length; c++) {var a = o + i[c].outerHTML + e; i[c].outerHTML = a} } wrap('<div class="zmImg">', '.pS .separator >a', '</div>'); wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>'); wrap('<div class="zmImg">', '.pS .separator >img', '</div>'); wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>'); wrap('<div class="zmImg">', '.pS .psImg >img', '</div>'); wrap('<div class="zmImg">', '.pS .btImg >img', '</div>'); for (var containerimg = document.getElementsByClassName('zmImg'), i = 0; i < containerimg.length; i++) containerimg[i].onclick = function() {this.classList.toggle('s');};
Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}) }); /*]]>*/

    
   <script type='text/javascript'>(function(d, t, e, m){
    
    // Async Rating-Widget initialization.
    window.RW_Async_Init = function(){
                
        RW.init({
            huid: &quot;448244&quot;,
            uid: &quot;a84ba6e4ed0b3f3ad0105dae6aa026fb&quot;,
            source: &quot;website&quot;,
            options: {
                &quot;boost&quot;: {
                    &quot;rate&quot;: 1
                },
                &quot;style&quot;: &quot;oxygen&quot;,
                &quot;isDummy&quot;: false
            } 
        });
        RW.render();
    };
        // Append Rating-Widget JavaScript library.
    var rw, s = d.getElementsByTagName(e)[0], id = &quot;rw-js&quot;,
        l = d.location, ck = &quot;Y&quot; + t.getFullYear() + 
        &quot;M&quot; + t.getMonth() + &quot;D&quot; + t.getDate(), p = l.protocol,
        f = ((l.search.indexOf(&quot;DBG=&quot;) &gt; -1) ? &quot;&quot; : &quot;.min&quot;),
        a = (&quot;https:&quot; == p ? &quot;secure.&quot; + m + &quot;js/&quot; : &quot;js.&quot; + m);
    if (d.getElementById(id)) return;              
    rw = d.createElement(e);
    rw.id = id; rw.async = true; rw.type = &quot;text/javascript&quot;;
    rw.src = p + &quot;//&quot; + a + &quot;external&quot; + f + &quot;.js?ck=&quot; + ck;
    s.parentNode.insertBefore(rw, s);
    }(document, new Date(), &quot;script&quot;, &quot;rating-widget.com/&quot;));</script>
