import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Start from './Pages/Start/Start';

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route index element={<Start />}></Route>
                    <Route path='/log-in' element={<LogIn />}></Route>
                    <Route path='/sign-up' element={<SignUp />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                </Routes>
            </main>
        </>
    );
}

export default App;
