const closedEmo = document.querySelector('.closed')
const openEmo = document.querySelector('.open')
//Event Listener
closedEmo.addEventListener('click',()=>{
    if(openEmo.classList.contains('open'))
    {
        openEmo.classList.add('active');
        closedEmo.classList.remove('active');
    }
});

openEmo.addEventListener('click',()=>{
    if(closedEmo.classList.contains('closed'))
    {
        closedEmo.classList.add('active');
        openEmo.classList.remove('active');
    }
})
