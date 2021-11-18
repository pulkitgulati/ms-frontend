import './App.css';
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    ""
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleTextChange = (event) => {
    setTextarea(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs, textarea);
  }

  return (
    <div class="container" style={{backgroundColor: 'gray', height: 600, width: 600, marginTop: 10, paddingTop: 10}}>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Enter your First Name:
          <input
            type="text" 
            name="firstname" 
            value={inputs.firstname || ""}
            class="form-control" 
            onChange={handleChange}
          />
          </label>
        </div>
        <br />
        <div class="form-group">
          <label>Enter your Middle Name:
          <input
            type="text" 
            name="middlename"
            class="form-control" 
            value={inputs.middlename || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <br />
        <div class="form-group">
          <label>Enter your Last Name:
          <input
            type="text" 
            name="lastname"
            class="form-control" 
            value={inputs.lastname || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <br />
        <div class="form-group">
          <label>Enter your Email:
          <input
            type="text" 
            name="email"
            class="form-control" 
            value={inputs.email || ""} 
            onChange={handleChange}
          />
          </label>
        </div>
        <br />
        <div class="form-group">
          <label>Enter your Phone Number:
          <input
            type="text" 
            name="phone" 
            value={inputs.phone || ""}
            class="form-control" 
            onChange={handleChange}
          />
          </label>
        </div>
        <br />
        <div class="form-group">
          <label>Enter your Address:
          <textarea name="address" value={textarea} onChange={handleTextChange} class="form-control" />
          </label>
        </div>
        <input type="submit" class="btn btn-primary" />
      </form>
    </div>
  )
}

export default Profile;
