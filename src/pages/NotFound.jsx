import React, { Component } from 'react'

import LANGUAGE from 'Options/language';

class NotFound extends Component {
    constructor(props) {
        super(props)

    }  
    render() {
        return (
            <div>
                {LANGUAGE.TEXT.BUILDTIPS}
            </div>
        )
    }
} 
export default NotFound;