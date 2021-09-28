// Event listener
document.getElementById('submit').addEventListener('click',function(){
    
    let val = document.getElementById('email').value
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'g')

    let classListAction = (regex.test(val)) ? 'remove' : 'add'; //remove or add the class to the element classList, based on the RegExp result

    let element = document.querySelector('.error-message')
    element.classList[classListAction]('show-error')
})

