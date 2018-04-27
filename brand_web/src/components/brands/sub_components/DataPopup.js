import React, {Component} from "react";
import {Bar} from 'react-chartjs-2';

class Datapopup extends React.Component {

    constructor() {
        super();
        this.state = {insights: {}};
    }

    componentWillMount(){
        this.setState({insights: this.props.data});
    }

    render() {

        const data = {
            labels: ['Comments', 'Likes', 'Shares'],
            datasets: [
                {
                    label:'Count',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [this.state.insights.comments, this.state.insights.likes, this.state.insights.shares]
                }
            ]
        };

        return (
            <div className='dataPop'>
                <h3 align={"center"}>Insights</h3>
                <hr/>
                    <div className="popTable">
                        <table id={"insight"}>
                            <thead>
                            <tr>
                                <th>Comment</th>
                                <th>{this.state.insights.comments}</th>
                            </tr>
                            <tr>
                                <th>Likes</th>
                                <th>{this.state.insights.likes}</th>
                            </tr>
                            <tr>
                                <th>Shares</th>
                                <th>{this.state.insights.shares}</th>
                            </tr>
                            </thead>
                        </table>

                        <br/>
                        <br/>
                        <Bar
                            data={data}
                            width={100}
                            height={50}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />

                        <input style={{marginBottom: '2%'}}
                               onClick={(e) => this.props.closePopup(e)} type="button"
                               value="Close" className={"button"}/>
                        <br/>
                    </div>
            </div>
        );
    }
}

export default Datapopup;