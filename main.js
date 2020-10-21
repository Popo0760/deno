$(function(){
    var tl = $("#isPetOrAcc").val();
    console.log(tl);
    if(tl == "pets"){
        $(".adds").addClass("hide");
        $(".deposts").removeClass("hide");
    }
     if(tl == "accs"){
        $(".adds").removeClass("hide");
        $(".deposts").addClass("hide");
    }
});
let classQuery = $(".isPetOrAcc");
console.log(classQuery);
for(let i=0 ; i<classQuery.length;i++){
    let value = $(classQuery[i]).val();
    console.log("value",$(classQuery[i]));
}
