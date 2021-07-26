function addComponents(page,fullName,nameNumber,title,text,type){
    var box=document.querySelector(".content_section .innerContent_div");
    var nameTag=fullName.slice(0,nameNumber);
    var currentUrl="../codeBet/page_"+page+"/"+fullName+".html";
    var textTemp="";
    var SIG='"';
    textTemp+="<div class='innerComponent_div' id='"+nameTag+"'>";
    textTemp+="<a href='"+currentUrl+"' class='jumpLink_a'>";
    textTemp+="<img class='image_img' style='background:url("+SIG+"pictures/page_"+page+"/"+nameTag+".JPG"+SIG+");background-size: cover;background-position: center;background-repeat: no-repeat;'>";
    textTemp+="</a>";
    textTemp+="<div class='textArea_div'>";
    textTemp+="<h2 class='contentInnerTitle_h2'>"+title+"</h2>";
    textTemp+="<p class='contentInnerText_p'>"+text+"</p>";
    textTemp+="<p class='contentInnerType_p'>type:"+type+"</p>";
    textTemp+="</div>";
    textTemp+="</div>";
    box.innerHTML+=textTemp;
}
function addPages(all,current){
    var box=document.querySelector(".content_section");
    var textTemp="";
    textTemp+="<div class='pages_div'>";
    if(current!=1){
        textTemp+="<a class='bottomButton prev_button' href='mainPage_"+(current-1)+".html'><p>上一页</p></button>";
    }
    for(var i=1;i<=all;i++){
        if(i!=current){
            textTemp+="<a class='bottomButton page_button' href='mainPage_"+i+".html'><p>"+i+"</p></button>";
        }else{
            textTemp+="<a class='bottomButton page_button' id='currentPage' href='#'><p>"+i+"</p></button>";
        }
    }
    if(current!=all){
        textTemp+="<a class='bottomButton next_button' href='mainPage_"+(current+1)+".html'><p>下一页</p></button>";
    }
    textTemp+="</div>";
    box.innerHTML+=textTemp;
}