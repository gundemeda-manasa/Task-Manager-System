import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
function App()
{
    const navigate=useNavigate();

  const [userRegistration,setUserRegistration]=useState(
    {
    username:"",
    password:""
  })

const handleClick=(e)=>
{
  const name=e.target.name;
  const value=e.target.value;
  //set to state
  setUserRegistration({...userRegistration,[name]:value});
}

const handleSubmit=(e)=>
{
    navigate("/task");
}


  return(
    <div className='wrapper d-flex bg-success align-items-center justify-content-center w-100'>
    <div className='login rounded'>
        <form className='needs-validation' onSubmit={handleSubmit}>
        <center><h2 className='mb-3 text-danger' >Login Form</h2></center>
        <div className='form-group was-validated mb-2'>

            <label htmlFor='name' className='form-label'>Email</label>
            <input type='text'  className='form-control' 
            name="username"
            value={userRegistration.username}
            onChange={handleClick} required/>
            <div className="invalid-feedback">
                Please Enter Your Email
            </div>

        </div>
        <div className='form-group was-validated mb-2'>

            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control'
            name="password"
             value={userRegistration.password}
             onChange={handleClick} 
             required/>

            <div className="invalid-feedback">
                Please Enter Your Password
            </div>

        </div>

    <br></br>
    <button type="submit" className='btn btn-warning w-100 mt-2'>Sign In</button>

    </form>
    </div>
</div>
  )

}
export default App;