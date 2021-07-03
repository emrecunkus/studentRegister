import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection ,Spinner} from '../ortak';

import { studentChange,studentUpdate ,studentDelete} from '../actions/StudentActions';
class StudentUpdate extends Component {


    state = {isim : ' ',soyisim: ' ' ,ogrencinumara: ' ',sube: ' '};
    componentDidMount(){
        const {
            isim,
            soyisim,
            ogrencinumara,
            sube
        } = this.props.student;
        this.setState( {isim,
            soyisim,
            ogrencinumara,
            sube});
    }

    clickUpdate() {
        const {
            isim,
            soyisim,
            ogrencinumara,
            sube
        } = this.state;
        this.props.studentUpdate({isim, soyisim, ogrencinumara, sube ,uid:this.props.student.uid });

    }
    clickDelete() {
        this.props.studentDelete({uid: this.props.student.uid});

    }
    renderButton() {
        if (!this.props.loading) {
          return     <Button onPress={this.clickUpdate.bind(this)}> GUNCELLE </Button>
        }
        return <Spinner size="small" />;
      }
      renderDeleteButton() {
        if (!this.props.loading) {
          return     <Button onPress={this.clickDelete.bind(this)}> SİL </Button>
        }
        return <Spinner size="small" />;
      }
    render() {
        console.log("gelen data here: " + this.props.student.isim);
        const { inputStyle } = styles;
        return (
            <View>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.state.isim}
                        onChangeText={isim => this.setState({ isim })}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.state.soyisim}
                        onChangeText={soyisim => this.setState({  soyisim })}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.state.ogrencinumara}
                        onChangeText={ogrencinumara => this.setState({  ogrencinumara })}
                    />
                </CardSection>

                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.state.sube}
                        onValueChange={sube => this.setState({  sube })}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                        <Picker.Item label="D şubesi" value="dsube" />
                    </Picker>



                </CardSection>

                <CardSection>
                {this.renderButton()}
                </CardSection>
                <CardSection>
                {this.renderDeleteButton()}
                </CardSection>
            </View>

        );
    }
}
const styles = {

    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
};
const mapToStateProps = ({ studentListResponse }) => {
    const {
       
        loading
    } = studentListResponse;

    return {
       
        loading
    };

}

export default connect(mapToStateProps, { studentChange ,studentUpdate,studentDelete})(StudentUpdate);