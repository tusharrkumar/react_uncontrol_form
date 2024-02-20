import { useRef } from 'react'
import './Uncontrol.css'
function Uncontrol() {
    let fNameRef = useRef(null)
    let lNameRef = useRef(null)
    let emailRef = useRef(null)
    let mobileRef = useRef(null)
    let passRef = useRef(null)
    let conPassRef = useRef(null)

    const handelSubmit = (event) => {
        event.preventDefault()
        //# console.log(fNameRef.current.value);
        let fName = fNameRef.current.value;
        let lName = lNameRef.current.value;
        let email = emailRef.current.value;
        let mobile = mobileRef.current.value;
        let pass = passRef.current.value;
        let conPass = conPassRef.current.value;


        if(pass && pass === conPass) {
            console.log(fName,lName,email,mobile);
        }else if(fName === ''){
            alert('Please Enter The First Name')
        }else if(lName === ''){
            alert('Please Enter The Last Name')
        }else if(email === ''){
            alert('Please Enter The Email')
        }else if(mobile === ''){
            alert('Please Enter The Mobile Number')
        }else if(String(mobile).length < 10){
            alert('Minimum 10 digit numbers should be entered')
        }else if(pass === ''){
            alert('Please Enter The Password')
        }else if(conPass === ''){
            alert('Please Enter The Confirm Password')
        }
        else{
            alert("Passwords is not matching")
        }
    }

    return (
        <>
        <div style={{marginLeft:"600px"}}>
            <h1>Uncontrolled Form</h1>
                <form onSubmit={handelSubmit}>
                    <fieldset>
                        <legend>Sign Up</legend>
                        <table cellPadding={5} cellSpacing={5}>
                            <tr>
                                <td><label>FirstName: </label></td>
                                <td><input type="text" placeholder='Enter FirstName' ref={fNameRef}/></td>
                            </tr>
                            <tr>
                                <td><label>LastName: </label></td>
                                <td><input type="text" placeholder='Enter LastName'  ref={lNameRef}/></td>
                            </tr>
                            <tr>
                                <td><label>Email: </label></td>
                                <td><input type="email" placeholder='Enter Email'  ref={emailRef}/></td>
                            </tr>
                            <tr>
                                <td><label>Mobile No: </label></td>
                                <td><input type="number" placeholder='Enter Mobile Number'  ref={mobileRef}/></td>
                            </tr>
                            <tr>
                                <td><label>Password: </label></td>
                                <td><input type="password" placeholder='Enter Password'  ref={passRef}/></td>
                            </tr>
                            <tr>
                                <td><label>Confirm Pswd: </label></td>
                                <td><input type="password" placeholder='Enter Confirm Password'  ref={conPassRef}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{textAlign:"center"}}><input type="submit" /></td>
                            </tr>
                        </table>
                    </fieldset>
                </form>
        </div>
        </>

    )
}

export default Uncontrol;

