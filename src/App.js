import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import { Layout , Typography , Space } from 'antd';
import   Navbar  from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './App.css';
const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>

            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>

                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>

                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies simplified={false}/>
                            </Route>

                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>

                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> 
                        <br/>
                        All Rights Reserved.
                        <br/>
                        By Onkar Bartakke
                    </Typography.Title>
                    <Space>
                      <Link to="/">Home</Link>
                      <Link to="/exchanges">Exchanges</Link>
                      <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App
