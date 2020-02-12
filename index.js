const winner=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];


 

const player1=[];
const player2=[];
a=0;
function play(){
    
const box1=document.getElementById('box0');
    box1.addEventListener("click",()=>{
        if(a%2!=0){
        box1.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(1);
        return 0;
        }
        else if(a%2==0){
        box1.innerHTML='<pr>O<pr>';
        a++
        player2.push(1);
        }
    });
    checkA();
    const box2=document.getElementById('box1');
    box2.addEventListener("click",()=>{
        if(a%2!=0){
        box2.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(2);
        return 0;
        }
        else if(a%2==0){
        box2.innerHTML='<pr>O<pr>';
        a++
        player2.push(2);
        }
    });
    checkA();
    
    const box3=document.getElementById('box2');
    box3.addEventListener("click",()=>{
        if(a%2!=0){
        box3.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(3);
        return 0;
        }
        else if(a%2==0){
        box3.innerHTML='<pr>O<pr>';
        a++
        player2.push(3);
        }
    });
    checkA();
    
    const box4=document.getElementById('box3');
    box4.addEventListener("click",()=>{
        if(a%2!=0){
        box4.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(4);
        return 0;
        }
        else if(a%2==0){
        box4.innerHTML='<pr>O<pr>';
        a++
        player2.push(4);
        }
    });
    checkA();
    
    const box5=document.getElementById('box4');
    box5.addEventListener("click",()=>{
        if(a%2!=0){
        box5.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(5);
        return 0;
        }
        else if(a%2==0){
        box5.innerHTML='<pr>O<pr>';
        a++
        player2.push(5);
        }
    });
    checkA();
    
    const box6=document.getElementById('box5');
    box6.addEventListener("click",()=>{
        if(a%2!=0){
        box6.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(6);
        return 0;
        }
        else if(a%2==0){
        box6.innerHTML='<pr>O<pr>';
        a++
        player2.push(6);
        }
    });
    checkA();
    
    const box7=document.getElementById('box6');
    box7.addEventListener("click",()=>{
        if(a%2!=0){
        box7.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(7);
        return 0;
        }
        else if(a%2==0){
        box7.innerHTML='<pr>O<pr>';
        a++
        player2.push(7);
        }
    });
    checkA();
    
    const box8=document.getElementById('box7');
    box8.addEventListener("click",()=>{
        if(a%2!=0){
        box8.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(8);
        return 0;
        }
        else if(a%2==0){
        box8.innerHTML='<pr>O<pr>';
        a++
        player2.push(8);
        }
    });
    checkA();
    
    const box9=document.getElementById('box8');
    box9.addEventListener("click",()=>{
        if(a%2!=0){
        box9.innerHTML='<pr>X</pr><br>';
        a++;
        player1.push(9);
        return 0;
        }
        else if(a%2==0){
        box9.innerHTML='<pr>O<pr>';
        a++
        player2.push(9);
        }
    });
    checkA();

}
play();
function checkA(){if(a>5)
{
    for(var i=0;i<9;i++)
    {
        if(winner[i][0]==player1[0] || winner[i][1]==player1[0] || winner[i][2]==player1[0] )
                if(winner[i][0]==player1[1] || winner[i][1]==player1[2] || winner[i][2]==player1[3] )
                    if(winner[i][0]==player1[2] || winner[i][1]==player1[3] || winner[i][2]==player1[4] )
                    {
                        console.log("player1 wins");
                    }
    }
}
};
         