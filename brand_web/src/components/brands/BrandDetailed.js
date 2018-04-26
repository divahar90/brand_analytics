import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Gallery from 'react-grid-gallery';
import Datapopup from "./sub_components/DataPopup";
import PropTypes from 'prop-types'

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
        console.log(this.props.location.state);
        this.loadBrands();
    }

    loadBrands() {
        const brands =
            [{
                src: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/k0quzlckcyjriw2fubj7/lunarepic-low-flyknit-2-mens                     -running-shoe-jnTpBD72.jpg",
                thumbnail: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/k0quzlckcyjriw2fubj7/lunarepic-low-flyknit-2                    -mens-running-shoe-jnTpBD72.jpg",
                thumbnailWidth: 850,
                thumbnailHeight: 800,
                tags: [{value: "Nike", title: "Nike"}, {value: "Shoes", title: "Shoes"}],
                comments: 32,
                likes: 11,
            },
                {
                    src: "https://assets.academy.com/mgen/94/10589194.jpg",
                    thumbnail: "https://assets.academy.com/mgen/94/10589194.jpg",
                    thumbnailWidth: 850,
                    thumbnailHeight: 800,
                    tags: [{value: "Nike", title: "Nike"}, {value: "Bags", title: "Bags"}],
                    comments: 8,
                    likes: 65
                }]

        this.setState({brands: brands});
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
                        Users: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>1</p></div>
                        &nbsp;&nbsp;&nbsp;
                        Posts: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>3</p></div>
                        &nbsp;&nbsp;&nbsp;
                        Likes: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>1</p></div>
                        &nbsp;&nbsp;&nbsp;
                        Comments: &nbsp;&nbsp;
                        <div class="w3-panel w3-card"><p>2</p></div>
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