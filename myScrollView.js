import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';

/**
 *
 * ScrollView 的实现逻辑，
 * 实现监听拖拽 滑动的相关方法
 * 添加几个子组件
 *
 * */
class MyScrollView extends Component{
    mOnScrollBeginDrag(){
        console.log("开始拖拽")
    }
    mOnScrollEndDrag(){
        console.log("结束拖拽")
    }
    mOnMomentumScrollBegin(){
        console.log("开始滚动")
    }
    mOnMomentumScrollEnd(){
        console.log("结束滚动")
    }

    mOnRefresh(){
        console.log("刷新")
    }
     render(){
         return(
             <View style={styles.container}>
                 <ScrollView
                     style={styles.scrollView}
                     showsVerticalScrollIndicator={true}
                     onScrollBeginDrag={this.mOnScrollBeginDrag}
                     onScrollEndDrag={this.mOnScrollEndDrag}
                     onMomentumScrollBegin={this.mOnMomentumScrollBegin}
                     onMomentumScrollEnd={this.mOnMomentumScrollEnd}
                     refreshControl={
                         <RefreshControl
                             refreshing={false}
                             tintColor="#ff0000"
                             title="Loading..."
                             titleColor="#00ff00"
                             onRefresh={this.mOnRefresh}
                         />
                     }
                 >
                     <View style={styles.view_1}></View>
                     <View style={styles.view_2}></View>
                     <View style={styles.view_3}></View>
                 </ScrollView>
             </View>
         );
     }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"cyan",
    },
    scrollView:{
        marginTop:25,
        backgroundColor:"#CCCCCC"
    },
    view_1:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"yellow"
    },
    view_2:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"chocolate"
    },
    view_3:{
        margin:15,
        flex:1,
        height:300,
        backgroundColor:"cyan"
    }
})
module.exports = MyScrollView;

