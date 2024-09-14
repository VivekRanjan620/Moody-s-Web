import React, { lazy,Suspense } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInPage from './components/SignInpage'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
const Signin = lazy(()=>import('./components/SignInpage'))


export default function App() {
  return (
    <>
    <Suspense fallback={"Loading.."}>
    <Router>
    

          
              <Routes>
                  <Route path="/"  element={<Home/>} />
                  <Route path="/Search" element={<SignInPage />} />
                  <Route path="/Search" element={<SignInPage />} />
                  <Route path="/AboutUs" element={<AboutUs/>} />
            </Routes>

    </Router>
    </Suspense>
    </>
  )
}
