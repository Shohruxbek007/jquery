$(document).ready(function(){
      const inp1 = document.getElementById("inp1")
  const inp2 = document.getElementById("inp2")
  const sel1 = document.getElementById("sel1")
  const sel2 = document.getElementById("sel2")
  inp1.addEventListener("input",updated)
    function updated(){
  
     
        let rate = 0
     if(sel1.value==="uzs" && sel2.value==="usd"){
        rate = 0.000080
     }
    else if(sel1.value==="usd" && sel2.value==="uzs"){
      rate =  12422}
     else{
        rate =1
     }
     let result = parseFloat(inp1.value) *rate
     inp2.value = result.toFixed(2)
     
event.preventDefault()
    
}})