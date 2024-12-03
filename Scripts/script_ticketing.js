

// add seat price (total Price )
//coupon code (4ta ticket katlei coupon code dite pare )
//coupon code disable - enable 
// coupon 1bar nea hoye gele oi bar ta display : none hye jabe 
// koto taka discount pailo seta dekhabe 
// coupon vul hole alert 


// form submission button disable (name + phone)----> enable 
//



const clickedSeatArr = [];
document.getElementById('discount').style.display = "none";
document.getElementById('hr').style.display = "none";
document.getElementById('coupon_btn').style.opacity = "0.6";
document.getElementById('coupon_btn').style.cursor = "not-allowed";
document.getElementById('passenger_form_button').style.opacity = "0.6";
document.getElementById('passenger_form_button').style.cursor = "not-allowed";



function choosedSeat(seatName) {
    // koto gulo seat count hoise 
    const selectedSeatCount = parseInt(document.getElementById('counting').innerText);


    //limit 4 seat
    if (selectedSeatCount < 4) {
        const choosedSeatName = document.getElementById(seatName);
        // console.log(clickedSeatArr);
        // console.log(selectedSeatCount);
        // 1 seat can choose for 1 time 
        if (clickedSeatArr.includes(choosedSeatName.innerText) === false) {
            choosedSeatName.style.backgroundColor = "#1DD100";
            choosedSeatName.style.color = "white";




            // chnage selected seat color
            getSeatCountIncrease_Decrease('counting');
            // lefted seat count korbe 
            getSeatCountIncrease_Decrease('lefted_seat');
            // add seat to the recipt
            //add seat name
            addSeatRecipt('seat_serial', choosedSeatName);
            // add seat class
            addSeatRecipt('economy', choosedSeatName);
            //add seat price
            addSeatRecipt('price', choosedSeatName);



            //total
            totalPrice('total_price');
            totalPrice('grand_total');
            //total_bill_without Coupon

            //total_bill_with Coupon
            if (selectedSeatCount === 3) {
                document.getElementById('coupon_btn').style.opacity = "1";
                document.getElementById('coupon_btn').style.cursor = "default";
            }
            clickedSeatArr.push(choosedSeatName.innerText);
        }
        else {
            alert("Sorry! Not Available");
        }


        //form 
        if (selectedSeatCount>-1){

            formFunctionalities();
        }

        // if ((typeof name === 'string')&&(typeof contactNo))
    }
    else {
        clickedSeatArr.pop();
        clickedSeatArr.pop();
        clickedSeatArr.pop();
        clickedSeatArr.pop();
        alert("Sorry! Your Limit Exceed!");
    }
}


// koto gulo seat count hoise _____________&&&_____________lefted seat count korbe 
function getSeatCountIncrease_Decrease(inDeID) {
    const seatCountString = document.getElementById(inDeID);
    if (inDeID == 'counting') {
        const seatCountNum = parseInt(seatCountString.innerText) + 1;
        seatCountString.innerText = seatCountNum;
    }
    else if (inDeID == 'lefted_seat') {
        const seatCountNum = parseInt(seatCountString.innerText) - 1;
        seatCountString.innerText = seatCountNum;
    }

}
// add seat to the recipt
function addSeatRecipt(addElementId, seatName) {
    const elementSerial = document.getElementById(addElementId);
    const child = document.createElement('p');
    if (addElementId === 'seat_serial') {
        child.innerText = seatName.innerText;
    }
    else if (addElementId === 'economy') {
        child.innerText = "Economy";
    }
    else {
        child.innerText = "550";
    }
    elementSerial.appendChild(child);
}

//total ___________ &&& ___________ grand price
function totalPrice(priceTypeId) {
    const total_bill_text = document.getElementById(priceTypeId);
    const total_bill = parseInt(total_bill_text.innerText) + 550;
    total_bill_text.innerText = total_bill;
    // console.log(total_bill);
}

//coupon_code
function getCouponCode() {
    const typedCode = document.getElementById('coupon_code').value;
    const totalPriceText = document.getElementById('total_price');
    const grandTotalText = document.getElementById('grand_total');
    const totalPrice = parseInt(totalPriceText.innerText);
    let grandTotal = totalPrice;
    if (typedCode === 'NEW15') {
        grandTotal = totalPrice - (totalPrice * .15);
        document.getElementById('discount_price').innerText = totalPrice * .15;
    }
    else if (typedCode === 'NEW20') {
        grandTotal = totalPrice - (totalPrice * .20);
        document.getElementById('discount_price').innerText = totalPrice * .20;
    }
    else {
        alert('Please Type Correct Code');
    }
    grandTotalText.innerText = grandTotal;


    document.getElementById('discount').style.display = "flex";
    document.getElementById('coupon_container').style.display = "none";
    document.getElementById('hr').style.display = "block";

}


//form Submission 
// function submit_form() {
//     const name = document.getElementById('name_field').value;
//     const contactNo_text = document.getElementById('contactNo_field').value;
//     const contactNo = parseInt(contactNo_text)
//     // console.log(typeof null, typeof contactNo);
//     if ((typeof name === 'String')&&(typeof name === 'Number')){
//         document.getElementById('passenger_form_button').style.opacity = "1";
//         document.getElementById('passenger_form_button').style.cursor = "default";
//     }





// }



function formFunctionalities(){
    document.getElementById('name_field').addEventListener('keyup', function (event) {
        const text = event.target.value;
        const submitBtn = document.getElementById('btn-passenger_form_button');
        // console.log(typeof text);
        if (typeof text === 'string') {
            document.getElementById('contactNo_field').addEventListener('keyup', function (event) {
                const contact = event.target.value;
                if (typeof text === 'string') {
                    document.getElementById('passenger_form_button').style.opacity = "1";
                    document.getElementById('passenger_form_button').style.cursor = "default";
                }
                else {
                    alert('Please Provide Your Contact No.');
                }
            });
        }
        else {
            alert('Please Provide Your Name.');
        }
    });

    document.getElementById('name_field').value = '';
    document.getElementById('contactNo_field').value = '';
}








// document.getElementById('input_txt').addEventListener('keyup', function (event) {
//     const text = event.target.value;
//     const btnDelete = document.getElementById('btn-delete');
//     if (text === 'delete') {
//         btnDelete.removeAttribute('disabled');
//     }
//     else {
//         btnDelete.setAttribute('disabled', true);
//     }
// });

// document.getElementById('btn-delete').addEventListener('click', function () {
//     const secretText = document.getElementById('secText');
//     secretText.style.display = "none";
// });