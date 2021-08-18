var inipr = document.querySelector("#inp1");
var qty = document.querySelector("#inp2");
var cur = document.querySelector("#inp3");
var btn = document.querySelector("#btn1");

btn.addEventListener("click", function clickHandler(){
    inp = Number(inipr.value);
    qty = Number(qty.value);
    curr = Number(cur.value);
    if(inp=="" || inp==null, qty=="" || qty==null, curr=="" || curr==null){
        console.log("yes")
        res.innerHTML="Enter values to proceed ahead! 💲"
    }else{
        if (curr > inp) {
            profit = (curr - inp) * qty;
            profitPer = (profit / inp) * 100;
            res.innerHTML = "The profit is "+profit+" and the percent is "+profitPer+"  📈"
        }
        else if (inp > curr) {
            loss = (inp - curr) * qty;
            lossPer = (loss / inp) * 100;
            res.innerHTML = "The loss is "+loss+" and the percent is "+lossPer+"  📉"
        } 
        else {
            res.innerHTML="No change"
        }
    }
    
});
