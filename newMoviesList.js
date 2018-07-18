import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

/**
 * 从文件中读取数据
 */
var movieData = require('./data');
/**
 * 获取所有movies数据 属性movies是一个数组
 * 原始数据
 */
var movies = movieData.movies;

export default class NewMoviesList extends Component{
    //创建dataSource对象
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
           rowHasChanged:(oldData,newData)=>oldData!==newData
        });
        this.state = {
            dataSource:ds.cloneWithRows(movies)
        };
    }
    //渲染行组件
    _renderRow(movie){
        return(
          <View style={styles.row}>
              <Image style={styles.mImage} source={{uri:movie.thumbnail}} />
              <View style={styles.rightContainer2}>
                  <Text style={styles.title}>{movie.title}</Text>
                  <Text style={styles.year}>{movie.year}</Text>
              </View>
          </View>
        );
    }
    //渲染头部
    _renderHeader(){
        return(
          <View style={styles.header}>
             <Text style={styles.header_text}>Movies List</Text>
             <View style={styles.separator}></View>
          </View>
        );
    }
    //渲染分割线
    _renderSeparator(sectionID,rowID){
        return(
          <View
              style={styles.separator}
              key={sectionID + rowID}></View>
        );
    }

    render(){
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderSeparator={this._renderSeparator}
                initialListSize={10}/>
        );
    }


}

var styles = StyleSheet.create({
    listView:{
        marginTop:25,
        flex:1,
        backgroundColor:"#F5FCFF"
    },
    //行组件样式
    row:{
        flexDirection:"row",
        padding:5,
        alignItems:"center",
        backgroundColor:"#f5fcff"
    },
    mImage:{
        width:53,
        height:81,
        backgroundColor:"blue"
    },
    rightContainer2:{
        marginLeft:10,
        flex:1
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center"
    },
    year:{
        marginBottom:3,
        textAlign:"center"
    },
    //header组件样式
    header:{
        height:50,
        backgroundColor:"#f5fcff"
    },
    header_text:{
        flex:1,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        lineHeight:44
    },
    //分割线样式
    separator:{
        height:1,
        backgroundColor:"#CCCCCC",
    }

})