document.getElementById('myBtn').onclick = function() {
    const subscribe = document.getElementById('checkbox').checked;
    const payment = document.querySelector('input[name="payment"]:checked');
    let ucapan = document.getElementById('ifSubscribe');

    if(subscribe){
        ucapan.innerHTML = "Thanks For Subscribe"
    }else{
        ucapan.innerHTML = "You're not subscribe"
    }

    if(payment.checked){
        document.getElementById('paymentMetode').innerHTML =   `You have pay with ${payment.value}`
    }else{
        document.getElementById('paymentMetode').innerHTML =   `you have'nt select any payment metode`
    }
}

