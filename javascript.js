const selector = document.querySelectorAll("a .circle");
const submitBtn = document.getElementById('submit');

selector.forEach((circle,index) =>{
    circle.addEventListener('click', ()=>{
        selector.forEach((otherCircle, otherIndex)=>{
            if(otherIndex == index){
        otherCircle.classList.add('active');
            }else{
                otherCircle.classList.remove('active');
                otherCircle.removeEventListener('click', ()=>{})
            }
    
        })
        // circle.classList.add("stop")
        console.log(`The number ${index + 1} rating was clicked`)
        let ratingCount = index + 1;
        let ratingCountString =ratingCount.toString();
        sessionStorage.setItem('ratingsCount', ratingCountString) 
        circle.removeEventListener('click', ()=>{});
    });
    
})

submitBtn.addEventListener('click', () =>{
    location.href = 'index2.html'
    })