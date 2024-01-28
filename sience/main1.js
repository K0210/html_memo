const department1 = document.getElementsByClassName("department1");
const department2 = document.getElementsByClassName("department2");
for(let i=0;i<department1.length;i++){
　　department1[i].onclick = function(){
      for(let u=0;u<department2.length;u++){
        department2[u].checked = false;
      }
  　}
} 
for(let i=0;i<department2.length;i++){
　　department2[i].onclick = function(){
      for(let u=0;u<department1.length;u++){
        department1[u].checked = false;
      }
  　}
} 
