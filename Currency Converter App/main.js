document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lekInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lek = e.target.value;
    console.log(lek)

    document.getElementById('euroOutput').innerHTML = lek * 0.00812930;
    document.getElementById('dollarOutput').innerHTML = lek * 0.00996014;
    document.getElementById('poundsOutput').innerHTML = lek * 0.00734935;
})