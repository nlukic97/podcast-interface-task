// Event listener
document.getElementById('submit').addEventListener('click',function(){
    validateEmail()
})

//validation
function validateEmail(){
    let val = document.getElementById('email').value
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'g')

    let isEmail = (regex.test(val)) ? true : false;

}

function toggleError(itemSelector,errorClass){
    let item = document.querySelector(itemSelector)
    if(isEmail === true){
        //hide error
    } else {
        //show error
    }
}