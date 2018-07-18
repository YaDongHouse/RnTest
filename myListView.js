import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

/**
 * ListView 数据列表
 * ListView最重要的是设置每行显示的组件
 * section，header
 *
 * ListView.DataSource 给它传递一个普通的数据数组，再使用dataSource对象实例化一个ListView组件。
 * ListView实现：row/section 组件定义，设置数据
 * 设置ListView数据源：
 * 将dataSource对象设置为state属性 ListView会根据数据源进行渲染
 */

//原始数据：数组（字符串）
var contents = [
    "我是第一行",
    "我是第二行",
    "我是第三行",
    "我是第四行",
    "我是第五行",
    "我是第六行",
    "我是第七行"
];
export default class MyListView extends Component{
    constructor(props) {
        super(props);
        //创建dataSource对象
        var ds = new ListView.DataSource({
            //通过判断决定渲染那些行组件避免全部渲染提高渲染效率
            rowHasChanged:(oldRow,newRow) => oldRow!==newRow
        });

        this.state = {
            //设置dataSource时，不直接使用提供的原始数据，使用cloneWithRows对数据源进行复制
            //使用复制后的数据源实例化ListView，优势：当原始数据发生变化时，ListView组件的dataSource不会改变
            dataSource:ds.cloneWithRows(contents)
        };
    }

    //渲染行组件，参数是每行要显示的数据对象
    _renderRow(rowData){
        return(
          <View style={styles.row}>
              <Text style={styles.content}>{rowData}</Text>
          </View>
        );
    }

    render(){
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        );
    }
}


var styles = StyleSheet.create({
   container:{
       flex:1,
       marginTop:25
   },
    row:{
       justifyContent:"center",
        alignItems:"center",
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:"#CCCCCC"
    },
    content:{
        flex:1,
        fontSize:20,
        color:"blue",
        lineHeight:100
    }

});
