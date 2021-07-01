import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Button, Card, CardSection } from '../ortak';

class StudentCreate extends Component {

    clickSave() {

    }
    render() {
        const { inputStyle } = styles;
        return (
            <View>
                <CardSection>
                    <TextInput
                        placeholder="İsim"
                        style={inputStyle}
                        value={this.props.isim}
                        onChangeText={isim => this.props.studentChange(isim)}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChange(soyisim)}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.props.ogrencinumara}
                        onChangeText={ogrencinumara => this.props.studentChange(ogrencinumara)}
                    />
                </CardSection>

                <CardSection>
                <Text>Şube</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChange(sube)}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                        <Picker.Item label="D şubesi" value="dsube" />
                    </Picker>



                </CardSection>

                <CardSection>
                    <Button onPress={this.clickSave.bind(this)}> KAYDET </Button>
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

export default StudentCreate;