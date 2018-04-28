import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Gallery from 'react-grid-gallery';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import * as brandService from '../../service/BrandAnalyticsAPI';
import {urlMap} from '../../utils/BrandConstants'

class BrandHome extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
                brands: [], selectedBrand: '', redirect: false
        };
    }

    componentWillMount() {
        this.loadBrands();
    }

    loadBrands(){
        let brands = [];
        brandService.getAllBrands().then((response) => {
            if (response) {
                console.log(response.data);
                for (let index = 0; index < response.data.length;
                                        index++) {
                    console.log(urlMap[response.data[index].brand]);
                    brands.push(
                        {src: urlMap[response.data[index].brand],
                        thumbnail: urlMap[response.data[index].brand],
                        thumbnailWidth: 850,
                        thumbnailHeight: 800,
                        brand: response.data[index].brand,
                        tags: [{value: "Likes: "+response.data[index].likes, title:
                                            "Likes: "+response.data[index].likes},
                            {value: "Comments: "+response.data[index].comments, title: "Comments: "+response.data[index].comments}
                            ,{value: "Shares: "+response.data[index].shares, title: "Shares: "+response.data[index].shares}]})
                }

                this.setState({brands: brands});
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    handleClick(event) {
        let selectedBrand = this.state.brands[event].brand;
        this.setState({redirect: true, selectedBrand: selectedBrand});
    }

    thumbStyle(){
        return {
            width: "300px", height: "300px"
        };
    }

    render() {

        const { redirect } = this.state;
        if (redirect) {

            return (<Redirect to={{
                pathname: '/brandengine/brands/brand',
                state: {brand: this.state.selectedBrand}
            }} />)
        }

        const mainStyle = {
            "paddingLeft": "20%"
        }

        return (
            <div>
                <Header/>
                <Sidebar />

                <div classname= "main" style={mainStyle}>
                    <br/>
                    <div class="w3-container">
                        <input type="button" value="Go to Home" className={"link"} onClick={this.context.router.history.goBack} />
                    </div>
                    <Gallery images={this.state.brands} onClickThumbnail={(e) => this.handleClick(e)} margin={75}
                             thumbnailStyle={this.thumbStyle}/>
                </div>
            </div>
        );
    }
}

export default BrandHome;