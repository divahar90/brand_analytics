import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Doughnut  from 'react-chartjs-2';
import ReactTable from "react-table/react-table.js";
import "react-table/react-table.css";

class Home extends Component {
    render() {

        const data = {
            labels: ['McDonalds', 'Coke', 'Nike'],
            datasets: [
                {
                    label: 'Social Analytics',
                    data: [
                        40,
                        21,
                        34
                    ],
                    backgroundColor: [
                        'rgba(255,0,0,0.7)',
                        'rgba(0,255,0,0.7)'
                    ]
                }
            ]
        };
        const commentStats = [{comment: 'We all have that ONE BFF in school that can always read our minds...and knows what to get for us while we mug for the dreaded class test/exam! #CokeBreak5', like_count: 516, comment_count: 13, share_count: 158},
                                                {comment: 'Win yourself exclusive Coca-Cola premiums and vouchers when you purchase a beverage from our vending machines! Visit http://CokeURL.com/VendASurprise2 for more details today! Terms and conditions apply.', like_count: 33, comment_count: 4, share_count: 6}];

        return (
            <div>
                <Header/>
                <Sidebar/>
                <div classname="main">
                    <br/>
                    <div>
                    <div style={{ height: "70%", width: "70%", float: 'left', marginLeft: '5%', display:'inline'}}>
                        <Doughnut
                            data={data}
                            options={{
                                title: {
                                    display: this.props.displayTitle,
                                    text: 'Analytics',
                                    fontSize: 24
                                },
                                maintainAspectRatio: true
                            }}
                        />
                    </div>
                    <div style={{ height: "30%", width: "30%", marginRight: '5%', display:'inline'}}>
                        <h3 style={{paddingLeft: '82%'}}>Top Comments</h3>
                        <div style={{marginRight: '5%', textAlign: 'center'}}>
                            <ReactTable
                                data={commentStats}
                                columns={[
                                    {
                                        Header: 'Comment Description',
                                        accessor: 'comment',
                                    },
                                    {
                                        Header: 'Likes',
                                        accessor: 'like_count',
                                    },
                                    {
                                        Header: 'Comments',
                                        accessor: 'comment_count',
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />

                            <br />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;