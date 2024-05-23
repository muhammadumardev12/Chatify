import { View, Text, FlatList,Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'

// const Users = () => {
//   let id =''

//   const navigation = useNavigation()
//   //--------------Get-Data-From-Firebase-------------------//
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       id = await AsyncStorage.getItem("USERID")
//       const email = await AsyncStorage.getItem('EMAIL');
//       const querySnapshot = await firestore().collection('users').where('email', '!=', email).get();
//       const fetchedUsers = [];
//       querySnapshot.forEach((doc) => {
//         fetchedUsers.push(doc.data());
//       });
//       setUsers(fetchedUsers);
//     } catch (error) {
//       console.error('Error fetching users: ', error);
//     }
//   };
    

//   return (
//     <View style={{flex:1 ,alignItems:'center'}}>
//     <View style={{
//       backgroundColor:'white',
//       height:responsiveHeight(8),
//       width:responsiveWidth(100),
//       elevation:5,
//       justifyContent:'center',
//       alignItems:'center'
//     }}>
//       <Text style={{fontSize:responsiveFontSize(3),fontWeight:'bold',color:'green'}}>Chats</Text>
//     </View>
//     <FlatList data={users} 
//     renderItem={({item})=>{
//       return(
//         <TouchableOpacity style={{
//           height: responsiveHeight(9),
//           width: responsiveWidth(93),
//           backgroundColor: 'white',
//           marginTop: responsiveHeight(2),
//           // justifyContent: 'center',
//           alignContent:'center',
//           alignItems:'center',
//           borderRadius: 10,
//           elevation: 5,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.3,
//           shadowRadius: 2,
//           borderColor: '#B2BEB5',
//           borderWidth: 2,
//           overflow: 'hidden', // Ensure shadow is not clipped,
//           flexDirection:'row',
//         }}
//         onPress={()=>{navigation.navigate('Chat',{data:item, id:id})}}
//         >
//           {
//         console.log("🚀 ~ Users ~ id:", id)}{
//         console.log("🚀 ~ Users ~ item:", item)
        
//           }
//          <Image
//                   source={{
//                     uri: "https://cdn.sanity.io/images/e3a07iip/production/db39b602de6ade3cbe6e5dd962f9544f07b28edd-1083x1083.png"
//                   }}
                
//                 style={{ width: 48, height: 48 ,borderColor:'green',borderWidth:2,borderRadius:100,marginHorizontal:responsiveWidth(2)}} 
//               />
//           <Text style={{fontSize:responsiveFontSize(2),fontWeight:'bold',color:'black'}}>{item.name}</Text>
//         </TouchableOpacity>
//       )
//     }}/>

  
//     </View>
//   )
// }

const Users = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedId = await AsyncStorage.getItem("USERID");
      setId(storedId);

      const email = await AsyncStorage.getItem('EMAIL');
      const querySnapshot = await firestore().collection('users').where('email', '!=', email).get();
      const fetchedUsers = [];
      querySnapshot.forEach((doc) => {
      fetchedUsers.push({...doc.data(), id:doc.id});
      });
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}> 
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                height: responsiveHeight(9),
                width: responsiveWidth(93),
                backgroundColor: 'white',
                marginTop: responsiveHeight(2),
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                borderColor: '#B2BEB5',
                borderWidth: 2,
                overflow: 'hidden', // Ensure shadow is not clipped,
                flexDirection: 'row',
              }}
              onPress={() => { navigation.navigate('Chat', { data: item, id: id }) }}
            >
                {
              // console.log("🚀 ~ Users ~ id:", id)
                  
              }
              <Image
                source={{
                  uri: item.avatar
                }}
                style={{ width: 48, height: 48, borderColor: 'green', borderWidth: 2, borderRadius: 100, marginHorizontal: responsiveWidth(2) }}
              />
              <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Users;

// export default Users