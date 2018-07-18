import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//组件
class News extends Component{
    show(title){
        alert(title)
    }
    render(){
        // 定义数组用于存储设置好的Text组件
        var newsComponents=[];
        //遍历得到的数据
        for (var i in this.props.news){
            var text = (
                <Text
                    onPress={this.show.bind(this,this.props.news[i])}
                    style={styles.news_item}
                    numberOfLines={2}
                    key={i}>
                    {this.props.news[i]}
                </Text>
            );
            // 将设置好的Text存入数据
            newsComponents.push(text);
        }
        return(
            <View style={styles.mFlex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {newsComponents}
            </View>
        );
    }
}

// 样式
var styles = StyleSheet.create({
    mFlex:{
        flex:1
    },
    news_title:{
        fontSize:20,
        fontWeight:"bold" ,
        color:"#CD1D1C",
        marginLeft:10,
        marginTop:15
    },
    news_item:{
      marginTop:10,
      marginLeft:10,
      marginRight:10,
      fontSize:15,
      lineHeight:30
    }
})

// 导出模块
module.exports =  News;