import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

/**
 * 导航器通过路由对象（route）来分辨不同的场景，每个路由对象都对应一个页面组件，开发者设置什么，
 * 导航器显示什么，所以route是导航器中重要的一个对象
 *
 * 三步操作实现导航功能
 *
 * 1 设置路由对象（告诉导航器我要显示那个页面）
 *   创建路由对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件
 * 2 场景渲染配置（告诉导航器我要什么样的页面跳转效果）
 * 3 渲染场景（告诉导航器如何渲染页面）
 *   利用第一步设置的路由对象进行渲染场景
 */


//定义第一个页面
//FirstPage 一个button 点击进去下一个页面
class FirstPage extends Component{
    //按钮onPress时间处理方法
    pressPush(){
        //退出下一级页面
    }
    render(){
        return(
            <View style={[styles.mFlex,{backgroundColor:"yellow"}]}>
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
    //按钮onPress时间处理方法
    pressPop(){
        //返回上一级页面
    }

    render(){
        return(
            <View style={[styles.mFlex,{backgroundColor:"blue"}]}>
                <TouchableOpacity style={styles.btn} onPress={this.pressPop}>
                    <Text>点击进入下一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class LessonNavigator extends Component{
    render(){
        var rootRoute={
            component:FirstPage
        }
        return(
           <Navigator
               /**
               * 第一步 设置属性initialRoute 初始化路有对象
               * 这个指定了默认的页面，也就是启动app以后会看到的界面的第一页，
               * 对象的属性是自定义的，这个对象中的内容会在renderScene方法中处理
               *
               * 备注：必须包含的属性，即component，表示需要渲染的页面组件
               */
               initialRoute={rootRoute}
               /**
               *第二步 configureScene
               * 场景渲染的配置
               */
               configureScene={(route)=>{
                   return Navigator.SceneConfigs.PushFromRight;
               }}
               /**
               * 第三步
               * renderScene
               * 渲染场景
               *
               * 参数：route（第一步场景并设置给导航器的路由对象) Navigator（导航器对象）
               * 实现：给需要显示的组件设置属性
               */
               renderScene={(route,navigator)=>{
                   //从路由对象中获取页面组件
                   var Component = route.component;
                   return(
                       <Component
                           navigator={navigator}
                           route={route}
                       />
                   )
               }}
           />
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
    }
})