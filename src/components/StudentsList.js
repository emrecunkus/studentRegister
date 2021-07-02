import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text,ListView } from 'react-native';
import { connect } from 'react-redux';
import { StudentListData } from '../actions/StudentActions';


class StudentsList extends Component {
    componentDidMount(){
        this.props.StudentListData();
       
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        const ds = new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1 !== r2
        })

        this.DataSource = ds.cloneWithRows(nextProps.studentsArray)
    }
    render (){
        return(
            <View>
                <Text> STUDENT 1</Text>
                <Text> STUDENT 1</Text>
                <Text> STUDENT 1</Text>
                <Text> STUDENT 1</Text>
                <Text> STUDENT 1</Text>
            </View>
        );
    }
}

const mapStateToProps  = ({ StudentDataResponse}) =>{
    const studentsArray = _.map(StudentDataResponse.data, (val,uid) => {
        return {...val, uid };
    });
    return studentsArray;

}
export default  connect(mapStateToProps ,{StudentListData  }) (StudentsList);