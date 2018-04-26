import React, {Component} from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Gallery from 'react-grid-gallery';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

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
        const brands =
            [{
                src: "https://i2.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2015/08/McDonalds.png?ssl=1",
                thumbnail: "https://i2.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2015/08/McDonalds.png?ssl=1",
                thumbnailWidth: 850,
                thumbnailHeight: 800,
                tags: [{value: "McDonalds", title: "McDonalds"}],
            },
                {
                    src: "https://www.coca-cola.co.uk/content/dam/journey/gb/en/hidden/History/Heritage/596x334/the_logo_story_01122014_596x334.jpg",
                    thumbnail: "https://www.coca-cola.co.uk/content/dam/journey/gb/en/hidden/History/Heritage/596x334/the_logo_story_01122014_596x334.jpg",
                    thumbnailWidth: 850,
                    thumbnailHeight: 800,
                    tags: [{value: "Coca Cola", title: "Coca Cola"}],
                },
             ]

        this.setState({brands: brands});
    }

    handleClick(event) {
        this.setState({redirect: true});
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
                state: {brand: "coke"}
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