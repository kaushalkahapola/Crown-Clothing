import { React, Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password:""
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password} = this.state;
  
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'',password:''})
    }catch(err){
      console.log(err);
    }
  }
  

  handleChange = (e) => {
    const {value,name} = e.target;
    this.setState({[name]:value})
  }

  render(){
    return(
        <div className="sign-in">
            <h2>I already have a account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit} >
                <FormInput type="email" name="email" label='Email' handleChange={this.handleChange} value={this.state.email} required />
                <FormInput type="password" name="password" label='Password' handleChange={this.handleChange} value={this.state.password} required />
                <div className="buttons">
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''} Sign in with Google{''} </CustomButton>
                </div>
            </form>
        </div>
    )
  }
}

export default SignIn;
