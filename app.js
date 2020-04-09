//alert("hello peeps");
 


$(document).ready(function () {

    
    let totalExpense=00;
    const eList=$("#expense")
    


$("#AddBtn").click(function () { 
    const  reasonval=$("#reason").val();
    const amount =$("#amount").val();

    if(reasonval==""||amount<=0){
        return;
    }

    var ele = document.createElement("ion-item")
    ele.textContent=reasonval + ": $"+amount;
    eList.append(ele);
    console.log(totalExpense);
    
    totalExpense+= +amount;
    console.log(totalExpense);
    $("#totexp span").text(totalExpense);
    

    
    $("#reason").val('');
    $("#amount").val('');
});

$("#clearBtn").click(function () { 
    console.log("works");
    $("#totexp span").text('00');
    eList.empty();
});
    
});

