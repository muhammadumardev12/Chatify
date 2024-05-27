  import { View, Text, FlatList,Image,TouchableOpacity, ScrollView } from 'react-native'
  import React, { useEffect, useState } from 'react'
  import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
  import firestore from '@react-native-firebase/firestore'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  import { useNavigation, useRoute } from '@react-navigation/native'  
import { connect, useDispatch, useSelector } from 'react-redux'
import { storeUsers } from '../Redux/Actions'



  const Users = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

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
        dispatch(storeUsers(fetchedUsers, storedId));
        
      } catch (error) {
        console.error('Error fetching users: ', error);
        setUsers([]);
      }
    };
  
    return (
      <View style={{ flex: 1, alignItems: 'center'}}> 
        <FlatList
          data={users}
          showsVerticalScrollIndicator={false}
          style={{marginBottom:responsiveHeight(.5)}}
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

