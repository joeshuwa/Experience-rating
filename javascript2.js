const result = document.getElementById('selected')

function load(){
    let ratingsCountAsString = sessionStorage.getItem('ratingsCount');
    let finalRatingsCountAsNumber =parseInt(ratingsCountAsString);
    result.innerHTML = `You selected ${finalRatingsCountAsNumber} out of 5`
}