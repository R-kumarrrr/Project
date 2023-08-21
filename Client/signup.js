 document.addEventListener('DOMContentLoaded', () => {
     const termsCheckbox = document.getElementById('abcd');
     const signUpButton = document.getElementById('btn');

    signUpButton.disabled = true;

     termsCheckbox.addEventListener('change', () => {
        signUpButton.disabled = !abcd.checked;
    })});

document.getElementById('btn').addEventListener('click', (e) =>
 {
    e.preventDefault()

    const user_email= document.getElementById('email').value
    const user_fname = document.getElementById('fname').value
    const user_lname = document.getElementById('lname').value
    const user_password =document.getElementById('password').value  

    if (!user_fname || !user_lname || !user_email || !user_password) {
        alert('Please fill out all the form fields.');
        return;
    }

    const user = {
        fname: user_fname,
        lname:  user_lname,
        email: user_email,
        password: user_password
    }
    const url = `http://localhost:6969/users`
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Access-Control-Allow-Origin','*')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4) {
            console.log(user)
            console.log(xhr.responseText)
        }
        window.location='login.html'
    }
    xhr.send(JSON.stringify(user))

 })