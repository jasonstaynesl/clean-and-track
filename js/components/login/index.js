import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
const logo = require("../../../images/logo.png");
// import logo from "../../../images/logo.png";
const background = require("../../../images/shadow.png");

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon style={{ color: 'white' }} active name={input.name === "email" ? "person" : "unlock"} />
        <Input style={{ color: 'white' }}
          placeholder={input.name === "email" ? "User Name" : "Password"}
          placeholderTextColor='white'
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
            <Icon active style={{ color: "#FA5538", marginTop: 5 }} name="bug" />
            <Text style={{ fontSize: 15, color: "#FA5538" }}>{error}</Text>
          </Item>
          : <Text />}
      </Item>
    );
  }
  render() {
    return (
      <LinearGradient colors={['#06BEB6', '#48B1BF']} style={{ height: '100%', flex: 1 }}>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>
              <Image source={logo} style={{ flex: 1, alignSelf: 'center', marginBottom: 100 }} />
              <Field name="email" component={this.renderInput} />
              <Field name="password" component={this.renderInput} />
              <Button
                style={styles.forgot}
              >
                <Text>Forgot Password</Text>
              </Button>
              <Button
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Text style={{ color: '#0083B0', fontSize: 20 }}>Sign In</Text>
              </Button>
              <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center', marginTop: 40 }}>
                <Text style={{ flexDirection: 'row', marginTop: 10, color: 'white' }}>Not setup yet ?</Text>
                <Button
                  style={styles.signup}
                >
                  <Text style={{ paddingTop: 0 }}>Sign Up</Text>
                </Button>
              </View>
            </View>
          </Content>
        </View>
      </LinearGradient>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
