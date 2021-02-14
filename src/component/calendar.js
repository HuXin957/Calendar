import React, { Component } from 'react'
import moment from 'moment'
import y, { cm } from '../until/style'

const week = ['日', '一', '二', '三', '四', '五', '六']


class Calendar extends Component {
    constructor(props) {
        super(props)
        const { defaultVlue } = this.props
        this.state = {
            curMonth: defaultVlue ? moment(defaultVlue) : moment(),//当前月
            activeDay: defaultVlue ? moment(defaultVlue) : moment()//选中日期
        }
    }
    /** 
     * 上月数据 
     * 思路：首先要知道当前月的1号是星期几，这样才能知道要渲染多少个上个月的日子
     */

    lastMonth() {
        const date = moment(this.state.curMonth).date(1);// 当前月的1号
        const count = date.day();//1号是星期几
        date.subtract(count, "day");//比如本月1号是星期3，那么上个月的数据就应该显示3个
        let ui = []
        for (let i = 0; i < count; i++) {
            ui.push(
                <div key={'lastMonth_' + i} style={cm(y.color('#999'), y.h(50), y.wRatio(100 / 7), y.ujc, y.uac)}>{date.date()}</div>
            )
            date.add(1, 'day')
        }
        return ui
    }

    /**  
     * 下月数据 
     * 思路:首先获取本月1号的日期信息，然后通过add方法加1个月，就得到了下月1号的信息，从而得到下月1号是星期几，如果下月数据是星期2，那么下月数据就应该渲染7-2个
     * moment.js 中day()方法，如果是星期日，返回值为0
     */
    nextMonth() {
        //选中的时间改为1号,并且加上1个月
        const date = moment(this.state.curMonth).date(1).add(1, "months");
        const count = 7 - date.day();//7-星期几，就可知道要渲染几个下月数据
        if (count === 7) {
            return null;
        }
        let ui = []
        for (let i = 0; i < count; i++) {
            ui.push(
                <div
                    style={cm(y.wRatio(100 / 7), y.color('#999'), y.h(50), y.ujc, y.uac)} key={'nextMonth_' + i}>{date.date()}</div>
            )
            date.add(1, 'day')
        }
        return ui
    }

    /**  
     * 本月数据 
     * 思路：通过moment.js 的daysInMonth方法获取当月天数
     */

    thisMonth() {
        const date = moment(this.state.curMonth).date(1);//获取本月1号数据
        const count = date.daysInMonth();//当前选中月份的总条数
        //最后一个工作日,本月1号,+1月-1天=本月最后一天
        let ui = []
        for (let i = 0; i < count; i++) {
            const todayMoment = moment(date);
            const isSame = this.state.activeDay && todayMoment.isSame(this.state.activeDay, "day");//判断哪一天是选中日期
            ui.push(
                <div
                    key={'thisMonth_' + i}
                    style={cm(y.wRatio(100 / 7), y.ujc)}>
                    <div
                        style={cm(y.h(50), y.w(50), y.radiusA(25), y.ujc, y.uac, y.bgColor(isSame ? "blue" : "#fff"), y.color(isSame ? "#fff" : "#333"))}
                        onClick={() => {
                            this.setState({
                                activeDay: todayMoment
                            });
                            this.props.onPressDay && this.props.onPressDay(todayMoment);
                        }}
                    >{date.date()}</div>
                </div>
            )
            date.add(1, "day");
        }
        return ui
    }



    render() {
        return (
            <div style={cm(y.bgColor('#fff'), y.udc, y.cursor('pointer'))}>
                {/* 控制按钮 */}
                <div style={cm(y.udr, y.uac, y.uja, y.mtb(12))}>
                    <button onClick={() => {
                        this.setState({
                            curMonth: this.state.curMonth.subtract(1, 'year')
                        })
                    }}>去年子</button>
                    <button onClick={() => {
                        this.setState({
                            curMonth: this.state.curMonth.subtract(1, 'month')
                        })
                    }}>上月</button>
                    <h3>{this.state.curMonth.format('YYYY-MM')}</h3>
                    <button onClick={() => {
                        this.setState({
                            curMonth: this.state.curMonth.add(1, 'month')
                        })
                    }}>下月</button>
                    <button onClick={() => {
                        this.setState({
                            curMonth: this.state.curMonth.add(1, 'year')
                        })
                    }}>明年子</button>
                </div>
                {/* 星期 */}
                <div style={cm(y.udr, y.uac)}>
                    {week.map((item, index) => {
                        return (
                            <div key={'week_' + index} style={cm(y.wRatio(100 / 7), y.ujc)}>{item}</div>
                        )
                    })}
                </div>
                <div style={cm(y.udr, y.uac, y.uWrap)}>
                    {this.lastMonth()}
                    {this.thisMonth()}
                    {this.nextMonth()}
                </div>
            </div>
        )
    }
}

export default Calendar
