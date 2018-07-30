window.onload = (function(){
    var oDate = document.getElementById('t-date');
        setInterval(
            function(){
                var dd = new Date();// 必须写在里面，防止setInterval不稳定
                var yy = dd.getFullYear();
                var day = dd.getDay();
                var hh = dd.getHours();
                var mm = dd.getMinutes();
                var ss = dd.getSeconds();
                var M = dd.getMonth()+1;
                var D = dd.getDate();
                yy = toTwo(yy);
                M = toTwo(M);
                D = toTwo(D);
                hh = toTwo(hh);
                mm = toTwo(mm);
                ss = toTwo(ss);

                oDate.innerHTML = yy+"年"+M+"月"+D+"日"+hh+"时"+mm+"分"+ss+"秒";
            }
            ,13
        )
        function toTwo(n){
            if( n<10 ){
                n = '0'+ n ;
            }
            return n
        }



})()
