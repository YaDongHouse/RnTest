import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
//组件
class Header extends Component{
    render(){
        return(
            <View style={styles.mFlex}>
                <Text style={styles.mFont}>
                    <Text style={styles.mFont_1}>网易</Text>
                    <Text style={styles.mFont_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}



//样式
var styles = StyleSheet.create({
  mFlex:{
      marginTop:25,
      height:40,
      borderBottomWidth:1,
      borderBottomColor:"#EF2D36",
      alignItems:"center"
  },
    //字体的公共部分
    mFont:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center"
    },
    mFont_1:{
      color:"#CD1D1C"
    },
    mFont_2:{
        color:"#FFF",
        backgroundColor:"#CD1D1C"
    }
})

// 导出模块
module.exports = Header;