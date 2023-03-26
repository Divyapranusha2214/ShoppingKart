import React, { useState } from "react";
function Registration() {
  const [firstName, setFirstName] = useState("");
  const[lastName,setLastName]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[errors,setErrors]=useState({});


  function handleSubmit(event) {
    event.preventDefault();
  
    // create an object with the user's details
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
  
    // validate the user's input
    const errors = validate(user);
  
    if (Object.keys(errors).length === 0) {
      // if there are no validation errors, clear the form and submit the data
      setFirstName("");
      setLastName("")
      setEmail("");
      setPassword("");
  
      fetch("https://localhost:44340/api/Account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.href = '/login';
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // if there are validation errors, set the errors state variable
      setErrors(errors);
    }
  }
  
  function validate(user) {
    let errors = {};
  
    // validate name
    if (!user.firstName.trim()) {
      errors.firstName = "Name is required";
    }
    if (!user.lastName.trim()) {
      errors.lastName = "LastName is required";
    }

  
    // validate email
    if (!user.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
    }
  
    // validate password
    if (!user.password) {
      errors.password = "Password is required";
    } else if (user.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  
    return errors;
  }
  

  return (
    <div>
        <div class="container mt-5">
            <div class="row mx-auto mt-5">
                
                <div class="mx-auto col-md-6 mt-5 pt-4">
                    <div class="card mb-5 p-2  shadow rounded">
                        <div class="card-body mt-2">
                            <div class="row mb-3">
                                
                                <h3 class="text-success text-center border-bottom border-success p-3">Registration</h3>
                            </div>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3 mt-2">
                                  <label for="firstName" class="form-label">FirstName</label>
                                  <input type="text" name="firstName" class="form-control border-success shadow-none " id="firstName" 
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                   {errors.firstName &&
                                   <span className="text-danger">{errors.firstName}</span>}
                                  
                                </div>
                                <div class="mb-3 mt-2">
                                  <label for="lastName" class="form-label">Lastname</label>
                                  <input type="text" name="lastName" class="form-control border-success shadow-none " id="lastName" 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                   {errors.lastName &&
                                   <span className="text-danger">{errors.lastName}</span>}
                                  
                                </div>

                                <div class="mb-3 mt-2">
                                  <label for="Email" class="form-label">Email address</label>
                                  <input type="email" name="email" class="form-control border-success shadow-none " id="Email" aria-describedby="emailHelp"
                                   value={email} onChange={(e) => setEmail(e.target.value)} />
                                  {errors.email &&
                                  <span className="text-danger">{errors.email}</span>}
                                  
                                </div>
                                <div class="mb-3 ">
                                  <label for="Password" class="form-label">Password</label>
                                  <input type="password" name="password" class="form-control border-success shadow-none " id="Password"
                                   value={password} onChange={(e) => setPassword(e.target.value)} />
                                  {errors.password &&
                                  <span className="text-danger">{errors.password}</span>}
                                </div>
                                 
                                  Already have an account <a href="/login" class="text-decoration-none mb-3 text-success fw-bold ">Login..</a>

                                
                                <div class="row">
                                <div class="mt-3 text-center">
                                    <input type="submit"  name="register" value="Register" class="btn  btn-success border-light shadow-none w-25 mb-3"/>
                                    </div>
                                </div>
                          </form>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
}

export default Registration;
