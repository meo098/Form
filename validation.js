const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitBtn = document.querySelector('#submitBtn');
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkdata();
});

function checkdata() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    function setError(input, message) {
        input.parentElement.classList = 'form-control error';
        input.parentElement.querySelector('small').innerHTML = message ;
    }

    function setSuccess(input, message) {
        input.parentElement.classList = 'form-control success';
        input.parentElement.querySelector('small').innerHTML = message;
    }



    
    // empty username input
    if(usernameValue==='') {
        setError(username, "Username cannot be blank");
    }
    //correct username
    else {
        setSuccess(username, "Username is correct");
    }

    // empty email input
    if(emailValue==='') {
        setError(email, "Email cannot be blank");
    }
    //correct email or incorrect
    else {
        
        
        if(emailRegex.test(emailValue)) {
            setSuccess(email, "Email is correct");
        }
        else {
            setError(email, "email is not valid");
        }
    }

    //password



    function checkPassword(pass, checkBoth) {
        //check each password
        if (pass.value === '') {
            setError(pass, "Password cannot be blank ");
        }
        else {        
            //password form is correct
            if(passRegex.test(pass.value)) {
                setSuccess(pass, "Password is correct")
                if (checkBoth) {
                    if (passwordValue !== password2Value) {
                        setError(password, "passwords are not the same");
                        setError(password2, "passwords are not the same");
                    }
                }
            }
            //password form is not correct
            else {
                setError(pass, "Minimum eight characters, at least one letter and one number")     
            }
        }



    }


    
    checkPassword(password, false);
    checkPassword(password2, true);




      
}