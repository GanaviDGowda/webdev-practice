const btn = document.querySelector("button");
const condiv=document.querySelectorAll(".subcontainer");
/*
btn.addEventListener('click', () => {
    if (btn.innerHTML === "light mode") {
        document.body.style.backgroundImage = "url('light.jpg')";
        condiv.forEach(elements => {
        elements.style.backgroundColor="white";
        elements.style.color="black";
        });
        btn.innerHTML = "dark mode"; 
    } else {
        document.body.style.backgroundImage = "url('5073414.jpg')"; // Reset to original background
        condiv.forEach(elements=>{
        elements.style.backgroundColor="rgba(91, 110, 110, 0.6)";
        elements.style.color="white";
        });
        btn.innerHTML = "light mode"; 
    }
});
*/
btn.addEventListener('click',()=>{
    document.body.classList.toggle('light-mode');
    condiv.forEach(element=>{
        element.classList.toggle('light-mode');
    })
    btn.innerHTML=document.body.classList.contains('light-mode')?"Dark-mode":"Light mode";
})


function check(){
   
    var uname=document.getElementById("name").value ;
    var password=document.getElementById("password").value;
    var phone=document.getElementById("phone").value;
    let usn=document.getElementById("usn").value;
    if(uname.length<6){
        alert("name should be more than 6 character ");
        return false;
    }
    
    if(password.length<6){
        alert("password should be more than 6 character ");
        return false;
    }
    if(phone.length!==10){
        alert("enter a valid number");
        return false;
    }
    if(!usn.match(/^[1-4][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/)){
        alert("enter a valid USN");
        return false;
    }
    
    else{
        alert("form Submitted");
        return true;
    }
}

addBtn=document.querySelector("#addBtn");
addBtn.addEventListener('click',()=>{
    let inputText=document.querySelector("#inputTask").value.trim();
    let li=document.createElement('li');
    li.textContent=inputText;

    
    
    let deleteBtn=document.createElement('button');
    
    
    let compBtn=document.createElement('input');
    compBtn.type='radio';
    compBtn.name='tasks';
    compBtn.labels=li;
    compBtn.onclick=()=>{
        compBtn.checked=true;
    }

    let SubliContainer=document.createElement('div');
    SubliContainer.className='SubliContainer';
    let liContainer=document.createElement('div');
    liContainer.className='liContainer';

    let listContainer=document.createElement('div');
    listContainer.className='listContainer';

    listContainer.appendChild(li);
    SubliContainer.appendChild(compBtn);
    SubliContainer.appendChild(deleteBtn);
    
    liContainer.appendChild(listContainer);
    liContainer.appendChild(SubliContainer);
    deleteBtn.onclick=()=>{
        liContainer.remove();
    }

   
    addedList=document.querySelector('.addedList');
    addedList.appendChild(liContainer);
})

let shiftingPanels=document.querySelectorAll(".shifting-panel div");
 shiftingPanels.forEach(panel=>{
    panel.addEventListener('mouseover',()=>{
        panel.style.zIndex="999";
        panel.style.backgroundColor="rgb(27, 18, 18)";
    });
    panel.addEventListener('mouseout', () => {
        panel.style.zIndex = ''
        panel.style.backgroundColor='';  
      });
 });

 const images = document.querySelectorAll('.photo');
const fullmode = document.querySelector('.fullmode');
const fullImage = fullmode.querySelector('img');
const cancelBtn = document.querySelector('.cancel');

images.forEach(photo => {
    photo.addEventListener('click', () => {
        fullImage.src = photo.querySelector('img').src;
        fullmode.style.display = 'flex';
    });
});

cancelBtn.addEventListener('click', () => {
    fullmode.style.display = 'none';
});

fullmode.addEventListener('click', (event) => {
    if (event.target === fullmode) {
        fullmode.style.display = 'none';
    }
});
