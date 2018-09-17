import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  View,
  Textarea,
  Body,
  Right,
  Left,
  Footer,
} from "native-base";
import LinearGradient from 'react-native-linear-gradient';
const routes = ["Home", "BlankPage2"];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Content>
          <LinearGradient colors={['#06BEB6', '#48B1BF']} style={{ height: 300, alignSelf: "stretch", justifyContent: "center", alignItems: "center", }}>
            <TouchableOpacity
              style={{
                height: 300,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("DrawerClose")}
            >
              <Image
                square
                style={{ height: 100, width: 100, borderRadius: 50, borderColor: 'white', borderWidth: 3, marginTop: 20 }}
                source={{
                  uri: "https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg"
                }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, fontSize: 20 }}>Scarlett Johansson</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Supervisor</Text>
            </TouchableOpacity>
          </LinearGradient>
          {/* <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */}

        </Content>
        <View>
          {/* <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */}

          <ListItem icon>
            <Left>
              <Icon active name="ios-settings-outline" style={{ color: '#5d6166' }} />
            </Left>
            <Body>
              <Text style={{ color: '#5d6166' }}>Settings</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="log-out" style={{ color: '#5d6166' }} />
            </Left>
            <Body>
              <Text style={{ color: '#5d6166' }}>Log Out</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </View>
      </Container>
    );
  }
}
