import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Image,TextInput,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./f.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}
//定义第一个页面
//FirstPage 一个button 点击进去下一个页面
class FirstPage extends Component{
    static navigationOptions = {
        headerTitle:<LogoTitle/>,
        headerRight:(
            <Button
                onPress={()=>alert("这是一个按钮")}
                title="Info"
                color="#000"
            />
        ),
        title: 'FirstPage',
        headerStyle: {
            backgroundColor: '#0000ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor(props) {
        super(props);
        this.pressPush = this.pressPush.bind(this);
        this.inputTextChange = this.inputTextChange.bind(this);
        this.state = {
            inputText: ""
        };
    }

    //按钮onPress时间处理方法
    pressPush(){
        //退出下一级页面
       this.props.navigation.navigate("Second",{
           itemId: 86,
           otherParam: this.state.inputText,
       })
    }
    inputTextChange(text){
        this.setState({
            inputText:text
        })
    }
    render(){
        return(
            <View style={[styles.mFlex,{backgroundColor:"yellow"}]}>
                <TextInput
                    style={styles.input}
                    placeholder="请输入内容"
                    underlineColorAndroid="transparent"
                    onChangeText={this.inputTextChange}
                />
                <TouchableOpacity style={styles.btn} onPress={this.pressPush}>
                    <Text>点击进入下一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
//定义第二个页面
//SecondPage 一个button 点击返回上一级页面
class SecondPage extends Component{
    static navigationOptions = {


    }


    static navigationOptions = ({ navigation }) => {
        const {params} = navigation.state;
        const params2 = navigation.state.params || {};
        return {
            title:params?params.otherParam:"SecondPage",
            headerRight: (
                <Button onPress={params2.increaseCount} title="+1" color="#fff" />
            ),
            headerLeft:(
                <Button
                    title="返回"
                        onPress={()=>navigation.goBack() }/>
            )
        };
    };


    constructor(props) {
        super(props);
        this.pressPop = this.pressPop.bind(this);
    }

    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    //设置增加
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    //按钮onPress时间处理方法
    pressPop(){
        //返回上一级页面
        return this.props.navigation.goBack();
    }

    render(){
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return(
            <View style={[styles.mFlex,{backgroundColor:"blue"}]}>
                <Text>Details Screen</Text>
                <Text>Count: {this.state.count}</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <TouchableOpacity style={styles.btn} onPress={this.pressPop}>
                    <Text>点击进入下一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const RootStack = StackNavigator(
    {
        First: {
            screen: FirstPage,
        },
        Second: {
            screen: SecondPage,
        },
    }, {
        initialRouteName: 'First',
        mode:'modal',
        navigationOptions: {
            //是否可以用手势关闭屏幕
            gesturesEnabled: true,
            gestureResponseDistance: {
                //横向手势距离
                horizontal: 30,
                //竖向手势距离
                vertical: 250
            },
            //手势方向 默认 left-to-right  inverted 反向
            gestureDirection: 'default',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
export default class NewNavigator extends Component{
    render(){
        return(
            <RootStack/>
        )
    }
}

var styles = StyleSheet.create({
    mFlex:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        width:150,
        height:30,
        borderColor:"#0089FF",
        borderWidth:1,
        borderRadius:3,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        height:45,
        width:300,
        borderWidth:1,
        marginLeft:5,
        paddingLeft:5,
        borderColor:"#ccc",
        borderRadius:4,
        padding: 0,
    },
})
