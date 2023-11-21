function submit(){
    var a = document.getElementById('userName').value
    var b = document.getElementById('pwd').value

    
    
    if(a==''){
        document.getElementById('span').innerText = "Please Fill It "

     
        }else{
            document.getElementById('span').innerText = "Please Fill It "

            alert('Login Successful')
    }
    if(b===''){
        document.getElementById('span1').innerText = "Please Fill It "

    }else{
        document.getElementById('span1').innerText = "Please Fill It "

    }

    if(a ===!'' && b ===!''){
        alert(" You Are login Successful")
    }

}



