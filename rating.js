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
