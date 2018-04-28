import React, {Component} from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Doughnut  from 'react-chartjs-2';
import ReactTable from "react-table/react-table.js";
import "react-table/react-table.css";
import * as brandService from '../../service/BrandAnalyticsAPI';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            labels: [], data: [], tableStats: []
        };
    }

    componentWillMount() {
        this.loadTopBrands();
    }

    loadTopBrands() {
        let labels = [], data = [], tableStats = [];
        brandService.getAllBrands().then((response) => {
            if (response) {
                console.log(response.data);
                for (let index = 0; index < response.data.length;
                     index++) {
                    let total = 0;
                    labels.push(response.data[index].brand);
                    total = response.data[index].likes +
                                                response.data[index].shares + response.data[index].comments;
                    data.push(total);
                    tableStats.push({brand: response.data[index].brand,
                                        likes: response.data[index].likes, comments: response.data[index].comments,
                                                                                    shares: response.data[index].shares, total: total})
                }

                this.setState({labels: labels, data: data, tableStats: tableStats});
            }
        }).catch((err) => {
            console.log(err);
        });
    }


    render() {

        const data = {
            labels: this.state.labels,
            datasets: [
                {
                    label: 'Social Analytics',
                    data: this.state.data,
                    backgroundColor: [
                        'rgba(255,0,0,0.7)',
                        'rgba(0,255,0,0.7)',
                        'rgba(0,0,255,0.7)',
                        'rgba(255,255,0,0.7)',
                        'rgba(255,255,255,0.7)',
                        'rgba(0,255,255,0.7)'
                    ]
                }
            ]
        };

        return (
            <div>
                <Header/>
                <Sidebar/>
                <div classname="main">
                    <br/>
                    <div>
                    <div style={{ height: "65%", width: "65%", float: 'left', marginLeft: '5%', display:'inline'}}>
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
                    <div style={{ height: "35%", width: "35%", marginRight: '5%', display:'inline'}}>
                        <h3 style={{paddingLeft: '80%'}}>Top Brands</h3>
                        <div style={{marginRight: '5%', textAlign: 'center'}}>
                            <ReactTable
                                data={this.state.tableStats}
                                columns={[
                                    {
                                        Header: 'Brand',
                                        accessor: 'brand',
                                    },
                                    {
                                        Header: 'Likes',
                                        accessor: 'likes',
                                    },
                                    {
                                        Header: 'Comments',
                                        accessor: 'comments',
                                    },
                                    {
                                        Header: 'shares',
                                        accessor: 'shares',
                                    },
                                    {
                                        Header: 'Total',
                                        accessor: 'total',
                                    }
                                ]}
                                defaultSorted={[
                                    {
                                        id: "total",
                                        desc: true
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