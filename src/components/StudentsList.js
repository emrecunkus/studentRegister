import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { connect } from 'react-redux';
import { StudentListData } from '../actions/StudentActions';
import ListItem from './ListItem';


class StudentsList extends Component {
    componentDidMount() {
        this.props.StudentListData();
      

    }
    renderRow({ item, index }) {
        return <ListItem ogrenci={item} />;
      }
      render() {
        return (
        <FlatList
        data={this.props.studentsArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
        />
         
        );
        }
        }

const mapStateToProps = ({ StudentDataResponse }) => {
    const studentsArray = _.map(StudentDataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { studentsArray };

}
export default connect(mapStateToProps, { StudentListData })(StudentsList);