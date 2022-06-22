import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Banner from './components/Banner'
import Signup from './components/Signup'
import Music from './components/Music';
class App extends Component {

	    render(){
		return (
		   
		    <div>
			<BrowserRouter>
			<Routes>
			    <Route path="/" element={<Header isLogin="Login" isSignUp="SignUp"/>}></Route>

			    <Route path="/login" element={<div> <Header isSignUp ="Sign Up"/> <Login/> </div>}> </Route>
			    <Route path="/music" element={<div> <Header /> <Music /> </div> }> </Route>

                            <Route path="/signup" element={<div> <Header isLogin="Login"/> <Signup/> </div> }> </Route>
                           
			</Routes>
			</BrowserRouter>
		    </div>
		)
	    }
	}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
)
