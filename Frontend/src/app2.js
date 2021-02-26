
class Login_logout extends React.Component{


      render()
    {
        return (
      <div>
          <h1>Splitwise</h1>
          <label>Username  :</label>
          <input type="text" placeholder="Enter Username" name="username" required/>  
          <br />
          <label>Password  :</label>
          <input type="password" placeholder="Enter Password" name="password" required/>  
          <br />
          <br />
          <button>Login</button>
      
          <p>OR</p>
          <button>SignUp</button>
        </div>
     

        )
        }
      };


ReactDOM.render(<Login_logout />,document.getElementById("app"));