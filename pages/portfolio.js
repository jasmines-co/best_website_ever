import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from 'axios';

class Portfolio extends React.Component {
    render(){
        return(
            <BaseLayout>
            <h1>I am a Portfolio Page</h1>
            </BaseLayout>
        )
    }
}

export default Portfolio;