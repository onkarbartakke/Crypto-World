import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import  Cryptocurrencies from '../components/Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;


const Homepage = () => {

    const { data , isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader/>
    console.log(data);
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>    
            <Row>
                <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24hr volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies on planet</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified={true}/>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>

        </>
    )
}

export default Homepage