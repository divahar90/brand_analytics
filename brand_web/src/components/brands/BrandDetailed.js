import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Gallery from 'react-grid-gallery';
import Datapopup from "./sub_components/DataPopup";
import PropTypes from 'prop-types'
import * as brandService from '../../service/BrandAnalyticsAPI';

class BrandDetailed extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            showDatapop: false, brands: [], data: {}
        };
    }

    componentWillMount() {
        this.loadBrands(this.props.location.state.brand);
    }

    loadBrands(brand) {

        const brands = [];
        brandService.getBrand(brand).then((response) => {
            if (response) {
                console.log(response.data.data[0]);
                let totShares = 0, totLikes = 0, totComments = 0;
                for (let index = 0; index < response.data.data.length;
                                index++) {
                    console.log(response);
                    let resp = response.data.data[index];

                    totShares += resp.shares;
                    totLikes += resp.likes;
                    totComments += resp.comments;

                    brands.push({
                        src: resp.photo,
                        thumbnail: resp.photo,
                        thumbnailWidth: 850,
                        thumbnailHeight: 800,
                        comments: resp.comments,
                        likes: resp.likes,
                        shares: resp.shares
                    })
                }

                this.setState({brands: brands, totShares: totShares,
                                                totLikes: totLikes, totComments: totComments});
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    handleClick(event) {
        this.setState({data: this.state.brands[event]});
        this.setState({showDatapop: true});
    }

    closePopup() {
        this.setState({showDatapop: false});
    }

    thumbStyle() {
        return {
            width: "300px", height: "300px"
        };
    }

    render() {
        const mainStyle = {
            "paddingLeft": "20%"
        }

        return (
            <div>
                <Header/>
                <Sidebar/>
                <div classname="main" style={mainStyle}>

                    <br/>
                    <div class="w3-container">
                        <input type="button" value="Go to Home" className={"link"}
                               onClick={this.context.router.history.goBack}/>
                        <br/>
                        <br/>
                        Shares: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>{this.state.totShares}</p></div>
                        &nbsp;&nbsp;&nbsp;
                        Likes: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>{this.state.totLikes}</p></div>
                        &nbsp;&nbsp;&nbsp;
                        Comments: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>{this.state.totComments}</p></div>
                    </div>

                    <Gallery images={this.state.brands} onClickThumbnail={(e) => this.handleClick(e)} margin={75}
                             thumbnailStyle={this.thumbStyle}/>
                </div>

                {this.state.showDatapop ?
                    <Datapopup
                        data={this.state.data} closePopup={this.closePopup.bind(this)}
                    />
                    : null
                }

            </div>
        );
    }
}

export default BrandDetailed;