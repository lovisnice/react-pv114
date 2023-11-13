import React, { useState } from 'react';
// import './App.css';
import About from './components/About';
import { AboutShort } from './components/AboutShort';
import Privacy from './components/Privacy';
import Home from './components/Home';
import Menu from './components/Menu';
import { Route, Routes } from "react-router-dom";
import { BooksLayout } from './components/books/BooksLayout';
import { BooksList } from './components/books/BooksList';
import { Book } from './components/books/Book';
import { NotFound } from './components/NotFound';
import { NewBook } from './components/books/NewBook';
import { EditBook } from './components/books/EditBook';
import UsersList from './components/users/UsersList';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/users/Login';
import { AuthContext } from './contexts/AuthContext';
import Counter from './components/Counter';
// import UsersList from './components/users/UsersList';



function App() {
  // const [userName, setUserName] = useState("");
  // const clearUserName = () => userName = "";
  // const values = { userName, setUserName, clearUserName };
  return (
    // <AuthContext.Provider value={values}>
    // <AuthProvaider>
      <div className='App'>
        <header>
          {/* <h1>React PV114</h1> */}
          {/* <Menu /> */}
          {/* using MUI */}
          <ResponsiveAppBar />
        </header>
        <div className="main-container">
          <main>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/books" element={<BooksLayout />} >
                <Route index element={<BooksList />} />
                <Route path=":id" element={<Book />} />
                <Route path="newbook" element={<NewBook />} />
                <Route path="edit/:id" element={<EditBook />} />
                {/* <Route path="history" element={<h3>Book History</h3>} /> */}
                {/* <Route path="fantazy" element={<h3>Book fantezy</h3>} /> */}
              </Route>
              <Route path="/users" element={<UsersList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              {/* <Route path="/books" element={<h3>Book list</h3>}>
              <Route path=":id" element={<h3>Book 1</h3>}/>
              <Route path="history" element={<h3>Book History</h3>} />
              <Route path="fantazy" element={<h3>Book fantezy</h3>} />
            </Route> */}
              <Route path="*" element={<NotFound />} />
            </Routes>

          </main>
          <aside>
            <Routes>
              <Route path="/about" element={<AboutShort />} />
              {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
          </aside>
        </div>
      </div>
      //</AuthProvaider>
    // </AuthContext.Provider>
  );
}

export default App;
