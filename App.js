/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import NewNavigator from './newNavigator';
import NewTabNavigator from './newTabNavigator';


/**
 * 应用程序有很多功能视图组成，一个应用中重要功能之一就是导航，在React Native中成为“路由route"
 * 使用导航器可以让你在应用的不同场景（页面）间进行切换
 *
 * 在React Native中，有两个实际导航功能的组件：Navigator和NavigatorIOS
 * Navigator支持android和IOS，NavigatorIOS支持IOS
 * NavigatorIOS比Navigator具有更多的属性和方法，在UI方面可以进行更多的设置，例如：backButtonIcon，backButtonTitle，onLeftButtonPress等等，
 * 比较方便，如果想实现更多自定义设置，建议使用Navigator
 */


/**
 * 实现导航功能
 */

/**
 * 实现导航功能传值
 */
// const RootStack = StackNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//         },
//         Details: {
//             screen: DetailsScreen,
//         },
//     },
//     {
//         initialRouteName: 'Home',
//     }
// );

export default class App extends Component{
    render(){
        return(
            <NewTabNavigator/>
        )
    }
}

/**
 * 练习2 电影列表
 */
// import MoviesListView from './newMoviesList';

// export default class App extends Component{
//     render(){
//         return(<MoviesListView />);
//     }
// }



/**
 * 练习1 ListView基本联系
 */
// import LessonListView from './myListView';
// export default class App extends Component{
//     render(){
//         return(<LessonListView />);
//     }
// }



// import React, {Component} from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';
// var DongScrollView = require("./myScrollView")
/**
 * 练习1 实现ScrollView的基本功能
 */
// export default class App extends Component{
//     render(){
//         return(<DongScrollView />);
//     }
// }
/**
 * 练习2 电影列表
 */
// import React, {Component} from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View
// } from 'react-native';
// var DongScrollView = require("./MoviesList");
// export default class App extends Component{
//     render(){
//         return(
//             <DongScrollView />
//         );
//     }
// }


/**
 * 用于显示图片的组件，包括网络图片，静态资源等等
 * 常用属性：
 * resizeMode 图片适应模式 cover，contain，stretch
 * source 图片引用地址
 *https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=989341999,236255160&fm=27&gp=0.jpg
 */
// export default class App extends Component{
//     render(){
//         return(
//             <View style={styles.container}>
//
//                 <View style={styles.net}>
//                     <Image
//                         style={styles.netImage}
//                         source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=989341999,236255160&fm=27&gp=0.jpg"}}/>
//                 </View>
//                 <View style={styles.local}>
//                     <Image
//                         style={styles.localImage}
//                         source={require("./f.jpeg")}/>
//                 </View>
//             </View>
//         );
//     }
// }
//
// var styles = StyleSheet.create({
//     container:{
//         flex:1,
//         margin:25,
//         alignItems:"center"
//     },
//     net:{
//         marginTop:30,
//         width:300,
//         height:240,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"cyan"
//     },
//     netImage:{
//         width:100,
//         height:200,
//         backgroundColor:"gray",
//         borderRadius: 50
//     },
//     local:{
//         marginTop:30,
//         width:300,
//         height:200,
//         justifyContent:"center",
//         alignItems:"center",
//         backgroundColor:"yellow"
//     },
//     localImage:{
//         width:100,
//         height:100,
//         backgroundColor :"#FFF"
//     }
// })


/**
 * React Native提供3个组件用户给其他没有触摸事件的组件绑定触摸事件
 * TouchableOpacity 透明触摸，点击时，组件会出现透明过滤效果
 * TouchableHighLight 高亮触摸，点击时，组件会出现高亮效果
 * TouchableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
 */

/**
 * TextInput是一个允许用户在应用中通过键盘输入文本的基本组件，
 * 本组件的属性提供了多种特性的配置，譬如自动完成，自动大小写，
 * 占位文字，以及多种不同的键盘类型（如出数字键盘）等等
 * 常用：
 * placeholder 占位符
 * value 输入框的值
 * password 是否密文输入
 * editable 输入框是否可编辑
 * returnKeyType 键盘return键类型
 * onChange 当文本变化是调用
 * onEndEditing 当结束编辑时调用
 * onSubmitEditing 当结束编辑，点击提交按钮时调用
 */
// export default class App extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputText: ""
//         };
//     }
//     //输入框的onChange实现
//     getContent(text){
//         this.setState({
//             inputText:text
//         });
//     }
//
//     clickBtn(){
//         alert(this.state.inputText)
//     }
//
//     render(){
//         return(
//           <View style={styles.container}>
//               <View style={styles.mFlex}>
//                 <TextInput
//                     style={styles.input}
//                     underlineColorAndroid="transparent"
//                     returnKeyType="search"
//                     placeholder="请出入内容"
//                     onChangeText={this.getContent.bind(this)}
//                 />
//
//               </View>
//               <TouchableOpacity style={styles.btn} onPress={this.clickBtn.bind(this)}>
//                   <Text style={styles.search}>搜索</Text>
//               </TouchableOpacity>
//           </View>
//         );
//     }
// }
//
// var styles = StyleSheet.create({
//     container:{
//         flexDirection:"row",
//         height:45,
//         marginTop:25
//     },
//     mFlex:{
//         flex:1
//     },
//     input:{
//         height:45,
//         borderWidth:1,
//         marginLeft:5,
//         paddingLeft:5,
//         borderColor:"#ccc",
//         borderRadius:4,
//         padding: 0,
//     },
//     btn:{
//         width:55,
//         marginLeft:5,
//         marginRight:5,
//         backgroundColor:"#23BEFF",
//         height:45,
//         justifyContent:"center",
//         alignItems:"center"
//     },
//     search:{
//         color:"#FFF",
//         fontSize:15,
//         fontWeight:"bold"
//     }
//
//
// })






//先引入
// var Header = require("./header");
// var News = require("./news");
// export default class App extends Component{
//     render(){
//         // 定义数组
//         var news = [
//             "1,共享社会主义美好家园",
//             "2，习近平构建社会主义和谐设备",
//             "3，毛泽东思想，邓小平理论",
//             "4，啊手动阀手动阀爱的发声进来看见了几点睡觉啊，大家爱老是觉得疯了"
//         ];
//        return (
//              <View style={styles.mFlex}>
//                  {/*Header*/}
//                  <Header/>
//                  {/*News*/}
//                 <News news={news}></News>
//              </View>
//        );
//     }
// }
//
// var styles = StyleSheet.create({
//     mFlex:{
//         flex:1
//     }
// });

/**
 * Text组件：
 * onPress  手指触摸事件
 * numberOfLines 显示多少行
 * 可以设置字体的颜色 大小 对其方式等等
 */

/**
 * 界面布局分为两个部分：
 * header和新闻内容
 *
 * 整个界面是一个组件，有两个子组件组成
 *  如果都写在app.js文件中，代码比较乱
 *  在单独一个文件中定义子组件，使用module.exports将组件导出为独立的模块
 *  可以在其他文件中引用
 *
 */





// //定义组件：
// export default class App extends Component{
//     render(){
//         return(
//             <View style={[styles.flex,styles.father]}>
//                 <View style={styles.item}>
//                     <View style={[styles.flex,styles.center]}>
//                         <Text>酒店</Text>
//                     </View>
//
//                     <View style={[styles.flex,styles.lineLeftRight]}>
//                         <View style={[styles.flex,styles.center,styles.lineCenter]}>
//                             <Text>海外酒店</Text>
//                         </View>
//                         <View style={[styles.flex,styles.center]}>
//                             <Text>特价酒店</Text>
//                         </View>
//                     </View >
//                     <View style={[styles.flex]}>
//                         <View style={[styles.flex,styles.center,styles.lineCenter]}>
//                             <Text>团购</Text>
//                         </View>
//                         <View style={[styles.flex,styles.center]}>
//                             <Text>民宿，客栈</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }
//
// var styles = StyleSheet.create({
//    father:{
//        marginTop:25,
//        backgroundColor:"#F2F2F2",
//    },
//     //多个子组件都需要设置
//     flex:{
//         flex:1,
//     },
//     center:{
//         justifyContent:"center",
//         alignItems:"center",
//     },
//     item:{
//         flexDirection:"row",
//         backgroundColor:"#FF607C",
//         marginTop:5,
//         marginLeft:5,
//         marginRight:5,
//         height:80,
//         borderRadius:5
//     },
//     //给中间的区域设置左右边线
//     lineLeftRight:{
//         borderLeftWidth:1,
//         borderRightWidth:1,
//         borderColor:"white"
//     },
//     //给上半区域设置下边线
//     lineCenter:{
//         borderBottomWidth:1,
//         borderColor:"white"
//     }
// });







/**
 * flex
 * 可以给组件指定flex，flex的值是数字，flex：1 表示组件可以撑满父组件所有的剩余空间
 * 可以存在多个并列的子组件，flex：1，均分
 * 练习
 */

// var styles = StyleSheet.create({
//    container:{
//        marginTop:30,
//        flex:1,
//        backgroundColor:"cyan",
//    } ,
//     child:{
//         flex:1,
//         backgroundColor:"green"
//     },
//     child2:{
//         flex:2,
//         backgroundColor:"yellow"
//     }
// });




// var styles = StyleSheet.create({
//     cantainer:{
//         margin:30,
//         width:300,
//         height:500,
//         backgroundColor:"yellow",
//         //默认主轴方向是colum
//         //设置为横向排列
//         flexDirection:"row",
//         //设置主轴方向
//         justifyContent:"center",
//         //交叉轴
//         alignItems:"center",
//     },
//     child:{
//         width:100,
//         height:100,
//         backgroundColor:"green",
//     },
//     child2:{
//         width:100,
//         height:100,
//         backgroundColor:"blue"
//     }
// });













// //定义组件
// export default class App extends Component<Props>{
//     render(){
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.top,styles.border]}></View>
//                 <View style={[styles.bottom,styles.border,{borderWidth:5}]}></View>
//             </View>
//         );
//     }
// }
//
//
//
//
// //定义样式
//
// var styles = StyleSheet.create({
//     //外层view
//     container: {
//         marginTop:25,
//         marginLeft:30,
//         backgroundColor: "red",
//         width: 300,
//         height: 400,
//
//     },
//     //上层view
//     top:{
//         backgroundColor:"green",
//         width:200,
//         height:250,
//         margin:10,
//     },
//     //下层view
//     bottom:{
//         backgroundColor:"yellow",
//         width:200,
//         height:110,
//         margin:10,
//     },
//     //公共类型
//     border:{
//         borderWidth:3,
//         borderColor:"black",
//     }
// });

