import React, { Component } from 'react'
import Calendar from '../component/calendar'
import y, { cm } from '../until/style'

class Home extends Component {
    render() {
        return (
            <div style={cm(y.udc)}>
                <h2>日历</h2>
                <Calendar
                    defaultVlue={'2021-01-02'}
                    onPressDay={(date) => {
                        console.log(date.format('YYYY-MM-DD'))
                    }}
                />
            </div>
        )
    }
}

export default Home