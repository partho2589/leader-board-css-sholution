// topPlayer color change
const topPlayer =  document.getElementById('top-player-titel');
 topPlayer.style.color = 'red';

 // toblogs color change
 const topBlogs = document.getElementById('top-blogs');
 topBlogs.style.color = 'red'

 const playersBgChange = document.getElementById('players-name');
 playersBgChange.style.backgroundColor = 'rgba(255, 0, 0, 0.4)'

 // list item
 document.getElementById('click-button').addEventListener('click',function(){
    const listItem = document.getElementById('list').innerText;
    listItem.style.display = 'block'
 })

 //change number of button click 

 document.getElementById('changeN-button').addEventListener('click', 
 function(){
     const numberInput = document.getElementById('number-input');
     const valu = parseFloat (numberInput.value) ;
     numberInput.value = valu + 1;
 })
 
 
 