import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  Thumbnail,
  Footer,
  FooterTab
} from "native-base";
import { View, } from 'react-native';
import { Grid, Row } from "react-native-easy-grid";

import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";
import Timer from '../timer';

class Home extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    console.log(DrawNav, "786785786");
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="ios-menu-outline" style={styles.hicon} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.hicon}>Home</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="log-out" style={styles.hicon} />
            </Button>
          </Right>
        </Header>

        {/* <Timer/> */}

        <Content padder>
          {/* <Grid style={styles.mt}>
            {this.props.list.map((item, i) => (
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() =>
                    this.props.navigation.navigate("BlankPage", {
                      name: { item }
                    })}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            ))}
          </Grid> */}



          <Card>
            <CardItem button>
              <Left>
                <Thumbnail source={{ uri: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg" }} />
                <Body>
                  <Text>Abans pvt</Text>
                  <Text note>236, Almeda Road Battaramulla SriLanka</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Left>
                <Thumbnail source={{ uri: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg" }} />
                <Body>
                  <Text>Abans pvt</Text>
                  <Text note>236, Almeda Road Battaramulla SriLanka</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Left>
                <Thumbnail source={{ uri: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg" }} />
                <Body>
                  <Text>Abans pvt</Text>
                  <Text note>236, Almeda Road Battaramulla SriLanka</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem button>
              <Left>
                <Thumbnail source={{ uri: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg" }} />
                <Body>
                  <Text>Abans pvt</Text>
                  <Text note>236, Almeda Road Battaramulla SriLanka</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer())
  };
}
const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
