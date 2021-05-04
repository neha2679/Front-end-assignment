var url="http://www.omdbapi.com/";
var xhttp=new XMLHttpRequest();
 
xhttp.open("POST",url,true);

xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status=200){
        let result=document.getElementById("result");

        result.innerHTML=this.responseText;
    }
}

xhttp.send("s= harry potter & apikey= e0620bd4");