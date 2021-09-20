var inipr = document.querySelector("#inp1");
var qtty = document.querySelector("#inp2");
var cur = document.querySelector("#inp3");
var btn = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");

btn.addEventListener( "click", function clickHandler () {
    inp = Number( inipr.value );
    qty = Number( qtty.value );
    curr = Number( cur.value );
    if(inp == "" || inp == null, qty == "" || qty == null, curr == "" || curr == null ) {
        res.innerHTML=" Enter values to proceed ahead! 💲 "
    }
    else if (( Math.sign( inp ) === -1 ) || ( Math.sign( qty ) === -1 ) || ( Math.sign( curr ) === -1 )){
        res.innerHTML=" Enter positive values. "
    }
    else if (( Math.sign( qty ) === -0 ) || ( Math.sign( qty ) === 0 ))  {
        res.innerHTML = " Enter the value of quantity. "
    }
    else{
        if ( curr > inp ) {
            profit = ( curr - inp ) * qty ;
            profitPer = (( profit / qty ) / inp) * 100;
            res.innerHTML = " The profit is <h5 style = 'color:#1C8051'> " + profit + "</h5> and the percent is <h5 style = 'color:#1C8051'> " + profitPer.toFixed(2) + "</h5>  📈 "
        }
        else if ( inp > curr ) {
            loss = ( inp - curr ) * qty ;
            lossPer = (( loss / qty ) / inp) * 100;
            res.innerHTML = " The loss is <h5 style = 'color:#cc0000'> " + loss + "</h5> and the percent is <h5 style = 'color: #cc0000'> " + lossPer.toFixed(2) + "</h5>  📉 "
        }
        else {
            res.innerHTML = " No change ";
        }
    }
    
});

btn2.addEventListener( "click", function clickHandler(){
    inipr.value = null;
    qtty.value = null;
    cur.value = null;
    res.innerHTML=" ";    
});
