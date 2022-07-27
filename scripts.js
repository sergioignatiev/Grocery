
let x=document.getElementById("head").offsetWidth;
let innerW=window.innerWidth
let inherit=document.getElementsByClassName("inherit");
for(let i=0;i<inherit.length;i++){
inherit[i].style.width=x+"px"}


function Add(){
    let inp=document.getElementById("inp").value.toUpperCase();
    document.getElementById('inp').value = '';
    if(inp!=""){
    let addItem=`<div ondblclick="d(this)" class="mainItem"><div class="addItem"  style="width:${x}px;background:whitesmoke">${inp}</div><button onclick=(complete(this)) class="buy buyBtn" style="height:22px;border:none;border-radius:4px;">Купить</button> </div>`
    document.getElementById("list").innerHTML +=addItem ;}

   let add= document.getElementsByClassName('addItem');
if(innerW<500){
    for(let i=0;i<add.length;i++){
        add[i].style.width=x-65+"px"
    }

}
}
function complete(x){
    x.innerHTML="Куплено"
    x.classList.add("buyed")
    x.classList.remove("buy")
   
  }

   /*Удаляет , вернее делает невидимыми все родительские элементы класса btn-success т.е в нашем случае купленные товары*/
   function rem(){
    let completed=document.getElementsByClassName("buyed")
    for(let i=0;i<completed.length;i++){
        completed[i].parentElement.style.display="none"
        
        
    }
}
  /*Простенькая функция чтобы удалить все содержимое с id LIST*/
  function deleteAll(){
    if(confirm('Удалить все?')){
        document.getElementById("list").innerHTML=" ";
        
    }
    else{}
}

   /*Функция удаляет один элемент , в данном случае после двойного нажатия (ondblclick) и подтверждения*/
   function d(x){
    var display=""
    if(confirm(`Удалить?`)){
    display="none"
    }else{
    display=""
    }
    x.style.display=display;
    }
        /*Функция и нитервал снизу отвечают за Storage API. Усли "items" пустые то автоматически присваивается предыдущее значение элементу с 
 ID demo перед этим также надо сделать LIST !=""*/
  setInterval(miStorage,1)
 
  function miStorage(){
   let storage=""
let aa=document.getElementById("list").innerHTML;
if(aa!==""){
   storage=aa
}
else{
storage=localStorage.getItem("items")
}
localStorage.setItem("items",storage);

  }
  document.getElementById("list").innerHTML=localStorage.getItem('items')
/*  Enter button onclick to mainBtn*/ 
  var input = document.getElementById("inp");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("mainBtn").click();
    }
  });
