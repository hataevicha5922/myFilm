import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDitail from './components/MovieDitail/MovieDitail';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import LayOut from './components/LayOut/LayOut';
import History from './components/History/History';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/movie/:imbID" element={<MovieDitail />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
