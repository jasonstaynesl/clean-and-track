import React, { Component } from "react";
import { View } from "react-native";
import { Text, Icon } from "native-base";

class Timer extends Component {
    state = {}
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#06BEB6', padding: 20, borderBottomWidth: .5, borderColor: '#fff' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon active name="ios-home" style={{ color: 'white', fontSize: 20, width: 20 }} />
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 16, fontWeight: 'bold' }}>Abans pvt</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon active name="pin" style={{ color: 'white', fontSize: 20, width: 20 }} />
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 14, paddingTop: 2 }}>123,Almeda Road, Battaramulla SriLanka</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#06BEB6', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#eee', padding: 10, marginRight: 5, borderColor: '#05aba4', borderWidth: 1 }}>
                            <Text style={{ color: '#06BEB6', fontSize: 50 }}>00</Text>
                        </View>
                        <View style={{ backgroundColor: '#eee', padding: 10, marginRight: 5, borderColor: '#05aba4', borderWidth: 1 }}>
                            <Text style={{ color: '#06BEB6', fontSize: 50, }}>00</Text>
                        </View>
                        <View style={{ backgroundColor: '#eee', padding: 10, borderColor: '#05aba4', borderWidth: 1 }}>
                            <Text style={{ color: '#06BEB6', fontSize: 50 }}>00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#eeeeee' }}>
                        <View style={{ flex: 0.5, backgroundColor: '#1f25321f', height: 60, justifyContent: 'center', borderColor: '#ccc', borderWidth: 1 }}>
                            <Text style={{ marginLeft: 10, color: '#0698be', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Break</Text>
                        </View>
                        <View style={{ flex: 0.5, backgroundColor: '#06b7be', height: 60, justifyContent: 'center', borderColor: '#05aba4', borderWidth: 1 }}>
                            <Text style={{ marginLeft: 10, color: '#fff', fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>Check-Out</Text>
                        </View>
                    </View>



                    <View style={{ flex: 1, backgroundColor: '#1f253203' }}>
                        <View style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 20, backgroundColor: '#1f253203' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon active name="ios-pin" style={{ color: '#1f2532cc', fontSize: 20, width: 20 }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ marginLeft: 10, color: '#1f2532cc', fontSize: 18, fontWeight: 'bold' }}>Check In</Text>
                                    <Text style={{ marginLeft: 10, color: '#1f253280', fontSize: 16, }}>Abans Head Office</Text>
                                    <Text style={{ marginLeft: 10, color: '#1f253280', fontSize: 14, marginTop: 5 }}>123,Almeda Road, Battaramulla SriLanka</Text>
                                    <Text style={{ marginLeft: 10, color: '#1f253280', fontSize: 14 }}>Level 01</Text>
                                </View>
                                <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0 }}>
                                    <Text style={{ marginLeft: 10, color: '#1f253280', fontSize: 12, alignSelf: 'flex-end', flex: 1 }}>12.10pm</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 20, backgroundColor: '#1f253203' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon active name="ios-time" style={{ color: '#1f2532cc', fontSize: 20, width: 20 }} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ marginLeft: 10, color: '#1f2532cc', fontSize: 18, fontWeight: 'bold' }}>Break</Text>
                                    <Text style={{ marginLeft: 10, color: '#1f253280', fontSize: 16, marginTop: 5 }}>Break was 10hr, 50min</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Timer