/**
 * Created by ea375w on 7/26/2017.
 */


import React from 'react';

import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import {test, sad} from "../actions/bookActions";


class Event extends React.Component{


    componentDidMount(){
        console.log("%c Hello World!!", 'color:red');
        console.warn('shit!!');
        console.error('Danm that is terrible!!');
        console.log(this.props.data);


        console.time("fetching data...");
        fetch('https://api.github.com/users/accimeesterlin')
            .then(data => data.json())
            .then(data => {
                console.log(data);

                console.timeEnd("fetching data...");
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div>
                <h2>Hi there</h2>
                <p>My name is {this.props.data[0].firstname}  {this.props.data[0].lastname}</p>
                <p>I am a {this.props.data[0].title}</p>
                <button onClick={this.props.test}>Change Data</button>
                <button onClick={this.props.sad}>Emotions</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        data:state.books
    }
}

function matchDispatchToProps(dispatch) {

    return bindActionCreators({test: test, sad: sad}, dispatch);

}


// const mapStateToProps = (state) =>({
//     ...state
// });
//
// const matchDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators()
//
// })

export default connect(mapStateToProps, matchDispatchToProps)(Event);

