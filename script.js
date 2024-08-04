function cal(){
let current=document.getElementById("current").value;
let dob=document.getElementById("dob").value;
let res1=new Date(current);
let res2=new Date(dob);
let res=res1.getFullYear()-res2.getFullYear();
let month=res1.getMonth()-res2.getMonth();
document.getElementById("res").innerHTML="Your age is    "+res;


if(current!="" && dob!=""){
    return true;
}
else{
    alert("Enter all fields")
    return false;
}

}
