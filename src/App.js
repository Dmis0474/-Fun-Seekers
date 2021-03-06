import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Dialogs from "./components/Dialogs/Dialogs";
import Profiles from "./components/Profiles/Profiles";
import Settings from "./components/Settings/Settings";
import Musics from "./components/Musics/Musics";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";





const App = (props) => {

    return ( 
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation state={props.state} />
                <div clasName ='app__wrapper-content'>
                    <Routes>
                        <Route path="/profiles" element={<Profiles/>}/>
                        <Route path="/dialogs" element={<Dialogs
                            dialogsData={props.state.dialogPage.dialogsData}
                                messagesData = {props.state.dialogPage.messagesData}/>}/>
                        <Route path="/musics" element={<Musics/>}/>
                        <Route path="/news"
                               element={<News Posts = {props.state.postsPage.Posts} addPost = {props.addPost}/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
