import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Banner from './components/Banner'
class App extends Component {

	    render(){
		return (
		   
		    <div>
			<BrowserRouter>
			<Routes>
			    <Route path="/" element={<Header isLogin="Login"/>}></Route>

			    <Route path="/login" element={<div> <Header isLogin=""/> <Login/> </div>}> </Route>
			    <Route path="/music" element={<div> This is music </div> }> </Route>
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
