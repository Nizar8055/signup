import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""});


  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = fetch("http://localhost:5000/api/createuser",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify()
    })
  }

  const onChangeHandler =(event)=> {
    setcredentials({...credentials,[event.target.value]:event.target.value})
  }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChangeHandler}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  value={credentials.password} onChange={onChangeHandler} id="exampleInputPassword1" name='password'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
    <input type="geolocation" className="form-control" value={credentials.geolocation} onChange={onChangeHandler} id="exampleInputAddress1" name='geolocation' />
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </>
  )
}
