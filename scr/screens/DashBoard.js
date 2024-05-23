import {View, Text, TouchableOpacity, StatusBar,Modal,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SearchIcon, VerticalThreeDots} from '../assets/pictures/Svgs';
import TopNavigation from '../components/TopNavigation';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '../Redux/Actions';




const DashBoard = () => {
    //-------------------Handle-Modal-------------------//
    const [modalVisible,setModalVisible] = useState(0)
    const pressingThreeDots = ()=>{
        setModalVisible(1)
    }
    const clearOut = ()=>{
        setModalVisible(0)
    }
    //----------------End------------------------------//
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleLogout = async () => {
      dispatch(logout());
      await AsyncStorage.removeItem('USERID');
      navigation.navigate('LoginScreen');
    };


  return (
    <View style={{flex: 1}}>
      <StatusBar
      backgroundColor={'green'}
      />
      {/* //----------------------Header-Section--------------------// */}
      <View
        style={{
          height: responsiveHeight(9),
          width: responsiveWidth(100),
          backgroundColor: 'white',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          //   backgroundColor:'orange'
        }}>
        <View
          style={{
            height: responsiveHeight(5.3),
            width: responsiveWidth(31),
            marginLeft: responsiveWidth(2),
            // backgroundColor:'red'
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.5),
              fontWeight: 'bold',
              color: 'green',
            }}>
            Chartify
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            height: responsiveHeight(8),
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginHorizontal: responsiveWidth(3),
            }}
            onPress={()=>navigation.navigate('Search')}
            >
            <SearchIcon />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: responsiveWidth(3)}}
          onPress={pressingThreeDots}
          >
            <VerticalThreeDots />
          </TouchableOpacity>
        </View>
      </View>
      {/* //--------------------Header-Section-End-----------------// */}
      <TopNavigation />
      {/* //-----------------------Modal------------------------------// */}

      { modalVisible?(
      <Modal
      transparent={true}
      style={{backgroundColor:'red'}}
      >
        <TouchableWithoutFeedback
        onPress={clearOut}
        >
        <View  style={{
            flex:1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View style={{
            height:responsiveHeight(13),
            width:responsiveWidth(38.5),
            backgroundColor:'white',
            marginLeft:responsiveWidth(55),
            marginTop:responsiveHeight(8),
            justifyContent:'center',
            borderRadius:10
            }}>
            <TouchableOpacity style={{
             marginLeft:responsiveWidth(3),
            //  marginVertical:responsiveHeight(1),
            }}>
                <Text
                style={{fontSize:responsiveFontSize(2.5),color:'black',fontWeight:'bold'}}
                >Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
             marginLeft:responsiveWidth(3),
             marginTop:responsiveHeight(2)
            }}
            onPress={handleLogout}
            >
                <Text
                style={{fontSize:responsiveFontSize(2.5),color:'black',fontWeight:'bold'}}
                >Logout</Text>
            </TouchableOpacity>
        </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>):(null)}
    </View>
  );
};
export default DashBoard;

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StatusBar, Modal, StyleSheet, Platform, Dimensions } from 'react-native';
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import { SearchIcon, VerticalThreeDots } from '../assets/pictures/Svgs';
// import TopNavigation from '../components/TopNavigation';

// const DashBoard = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const threeDotsRef = useRef(null);
//   const [modalPosition, setModalPosition] = useState({});

//   const handleThreeDotsPress = () => {
//     setModalVisible(true);
//   };

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   useEffect(() => {
//     calculateModalPosition();
//   }, [modalVisible]);

//   const calculateModalPosition = () => {
//     const screenHeight = Dimensions.get('window').height;
//     const screenWidth = Dimensions.get('window').width;

//     const modalWidth = 150;
//     const modalHeight = 200; // Adjust height as needed

//     const threeDots = threeDotsRef.current;

//     if (threeDots) {
//       threeDots.measure((x, y, width, height, pageX, pageY) => {
//         // Calculate the left position of the modal to align with the right edge of the screen
//         const left = screenWidth - pageX;

//         // Check if the modal exceeds the screen bounds
//         const modalTop = pageY + height;
//         const modalLeft = left - modalWidth;

//         setModalPosition({ top: modalTop, left: modalLeft });
//       });
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar />
//       <View style={styles.headerContainer}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.titleText}>Chartify</Text>
//         </View>
//         <View style={styles.iconContainer}>
//           <TouchableOpacity style={styles.iconButton}>
//             <SearchIcon />
//           </TouchableOpacity>
//           <TouchableOpacity
//             ref={threeDotsRef}
//             style={styles.iconButton}
//             onPress={handleThreeDotsPress}
//           >
//             <VerticalThreeDots />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <TopNavigation />

//       {/* Modal for VerticalThreeDots */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={handleModalClose}
//         style={[styles.modalView, modalPosition]}
//       >
//         <View style={styles.modalView}>
//           <TouchableOpacity style={styles.modalButton} onPress={() => {}}>
//             <Text style={styles.modalButtonText}>Settings</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.modalButton} onPress={() => {}}>
//             <Text style={styles.modalButtonText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     height: responsiveHeight(9),
//     width: responsiveWidth(100),
//     backgroundColor: 'white',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   titleContainer: {
//     height: responsiveHeight(5.3),
//     width: responsiveWidth(31),
//     marginLeft: responsiveWidth(2),
//   },
//   titleText: {
//     fontSize: responsiveFontSize(3.5),
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     height: responsiveHeight(8),
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginHorizontal: responsiveWidth(3),
//   },
//   modalView: {
//     // position: 'relative',
//     marginTop:60,
//     marginLeft:200,
//     backgroundColor: 'white',
//     width: 150,
//     paddingVertical: 20,
//     alignItems: 'center',
//     borderRadius: 8,
//     zIndex: 1,
//     elevation: 5,
//   },
//   modalButton: {
//     width: '100%',
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   modalButtonText: {
//     fontSize: 18,
//   },
// });

// export default DashBoard;


