import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  state = { email: '', password: '', loading: false };
  clickLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
    }
    return <Spinner size="small" />;
  }
  render() {
    const { inputStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <CardSection>
            <TextInput
              placeholder="E-mail"
              style={inputStyle}
              value={this.props.email}
              onChangeText={email => this.props.emailChanged(email)}
            />
          </CardSection>

          <CardSection>
            <TextInput
              secureTextEntry
              placeholder="Şifre"
              style={inputStyle}
              value={this.props.password}
              onChangeText={password => this.props.passwordChanged(password)}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
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
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
  const { email, password, loading } = kimlikdogrulamaResponse;
  return {
    email,
    password,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);