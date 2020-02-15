function start()
{
  const head= document.getElementById('title');
  const player1=[];
const player2=[];
a=0;
draw=0;
function play(){
  const box1=document.getElementById('box0');
      box1.addEventListener("click",function click0(){
          box1.removeEventListener ("click",click0);
          if(a%2!=0){
          box1.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(1);
          }
          else if(a%2==0){
          box1.innerHTML='<pr>O<pr>';
          a++
          player2.push(1);
          }
          checkA();
      });

      const box2=document.getElementById('box1');
      box2.addEventListener("click",function click1(){
          box2.removeEventListener ("click",click1);
          if(a%2!=0){
          box2.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(2);
          }
          else if(a%2==0){
          box2.innerHTML='<pr>O<pr>';
          a++
          player2.push(2);
          }
          checkA();
      });
      
      const box3=document.getElementById('box2');
      box3.addEventListener("click",function click2(){
          box3.removeEventListener ("click",click2);
          if(a%2!=0){
          box3.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(3);
          }
          else if(a%2==0){
          box3.innerHTML='<pr>O<pr>';
          a++
          player2.push(3);
          }
          checkA();
      });

      const box4=document.getElementById('box3');
      box4.addEventListener("click",function click3(){
          box4.removeEventListener ("click",click3);
          if(a%2!=0){
          box4.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(4);;
          }
          else if(a%2==0){
          box4.innerHTML='<pr>O<pr>';
          a++
          player2.push(4);
          }
          checkA();
      });
      
      const box5=document.getElementById('box4');
      box5.addEventListener("click",function click4(){
          box5.removeEventListener ("click",click4);
          if(a%2!=0){
          box5.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(5);
          }
          else if(a%2==0){
          box5.innerHTML='<pr>O<pr>';
          a++
          player2.push(5);
          }
          checkA();
      });
      
      const box6=document.getElementById('box5');
      box6.addEventListener("click",function click5(){
          box6.removeEventListener ("click",click5);
          if(a%2!=0){
          box6.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(6);
          }
          else if(a%2==0){
          box6.innerHTML='<pr>O<pr>';
          a++
          player2.push(6);
          }
          checkA();
      });
      
      const box7=document.getElementById('box6');
      box7.addEventListener("click",function click6(){
          box7.removeEventListener ("click",click6);
          if(a%2!=0){
          box7.innerHTML='<pr>X</pr><br>';
          a++;
          player1.push(7);
          }
          else if(a%2==0){
          box7.innerHTML='<pr>O<pr>';
          a++
          player2.push(7);
          }
          checkA();
      });
    
    const box8=document.getElementById('box7');
    box8.addEventListener("click",function click7(){
        box8.removeEventListener ("click",click7);
        if(a%2!=0){
        box8.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(8);
        }
        else if(a%2==0){
        box8.innerHTML='<pr>O<pr>';
        a++
        player2.push(8);
        }
        checkA();
    });
    
    
    const box9=document.getElementById('box8');
    box9.addEventListener("click",function click8(){
        box9 .removeEventListener ('click',click8);
        if(a%2!=0){
        box9.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(9);
        }
        else if(a%2==0){
        box9.innerHTML='<pr>O<pr>';
        a++
        player2.push(9);
        }
        checkA();
    });
    

}
function winnerA(){
    const title=document.getElementById('title');
    title.innerText=('🌟🌟Player 2 Wins🌟🌟');
    player1=[];
    player2=[];
}
function winnerB(){
    const title=document.getElementById('title');
    title.innerText=('🌟🌟Player 1 Wins🌟🌟');
    player1=[];
    player2=[];
}
function Draw(){
    const title=document.getElementById('title');
    title.innerText=("🤯IT'S A DRAW 🤯");
}
function checkA()
{
    if(1)
    {
        if(player2.includes(1) && player2.includes(2) && player2.includes(3))
          {
            winnerB();
          }
          else if(player2.includes(4) && player2.includes(5) && player2.includes(6))
          {
            winnerB();
          }
          else if(player2.includes(7) && player2.includes(8) && player2.includes(9))
          {
            winnerB();
          }
          else if(player2.includes(1) && player2.includes(4) && player2.includes(7))
          {
            winnerB();
          }
          else if(player2.includes(2) && player2.includes(5) && player2.includes(8))
          {
            winnerB();
          }
          else  if(player2.includes(3) && player2.includes(6) && player2.includes(9))
          {
            winnerB();
          }
          else if(player2.includes(3) && player2.includes(5) && player2.includes(7))
          {
            winnerB();
          }
          else if(player2.includes(1) && player2.includes(5) && player2.includes(9))
          {
            winnerB();
          }
          
    if(player1.includes(1) && player1.includes(2) && player1.includes(3))
    {
      winnerA();
    }
    else if(player1.includes(4) && player1.includes(5) && player1.includes(6))
    {
      winnerA();
    }
    else if(player1.includes(7) && player1.includes(8) && player1.includes(9))
    {
      winnerA();
    }
    else if(player1.includes(1) && player1.includes(4) && player1.includes(7))
    {
      winnerA();
    }
    else if(player1.includes(2) && player1.includes(5) && player1.includes(8))
    {
      winnerA();
    }
    else if(player1.includes(3) && player1.includes(6) && player1.includes(9))
    {
      winnerA();
    }
    else if(player1.includes(3) && player1.includes(5) && player1.includes(7))
    {
      winnerA();
    }
    else if(player1.includes(1) && player1.includes(5) && player1.includes(9))
    {
      winnerA();
    }
    else
    {
      draw++;
      checkdraw();
    }

    }
}
function checkdraw()
{
  if(draw>8)
  {
    head.innerText=("DRAW");
  }
} 
play();
};    
start();  