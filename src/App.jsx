import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-up/sign-in-up.component";
import {auth,createUserProfileDocument,db} from './firebase/firebase.utils'
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
        });
      }
      else{
        this.setState({currentUser:userAuth});
      }
    });
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInAndSignUp/>} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
