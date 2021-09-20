import React, { Component } from 'react'
import News_item from './News_item'
import Spinner from './Spinner'
import './Style.css'
export class News extends Component {
    render() {
        
        return (
            <>
            <h1 className='text-center'>Top Heading</h1>
            <News_item/>
            
            </>
        )
    }
}

export default News
