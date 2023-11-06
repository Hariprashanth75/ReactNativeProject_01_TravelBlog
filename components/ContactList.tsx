import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
        uid: 1,
        name: 'Harry simpson',
        status: 'Traveller, yoga teacher and fitness entusiast',
        imageurl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/413f43b4-dd82-407d-9fe6-1dfa417c6746-profile_image-300x300.png',
        },
        {
            uid: 2,
            name: 'Sammy simpson',
            status: 'Space hopper, Food hopper and travel hopper',
            imageurl: 'https://www.grcelearning.com/assets/images/avatar/alex-avatar.png',
        },
        {
            uid: 3,
            name: 'Gerald simpson',
            status: 'Wine enthusiast, blogger and health coach',
            imageurl: 'https://www.laterallearning.com/wp-content/uploads/2018/10/man_30.png',
        },
        {
            uid: 4,
            name: 'Penny simpson',
            status: 'Netflix lover, cocktail lover and Pickled eggs lover',
            imageurl: 'https://thissingleindividual.files.wordpress.com/2021/07/cropped-avataaars-1.png?w=300&h=286',
        },
        {
            uid: 5,
            name: 'Simmy simpson',
            status: 'Book lover, roadster and love cycling',
            imageurl: 'https://www.laterallearning.com/wp-content/uploads/2018/10/man_19-300x300.png',
        },
        


    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}
      scrollEnabled = {true}>

        {contacts.map(({uid, name, status, imageurl}) => (
            <View key={uid} style={styles.userCard}>
                <Image source={{uri: imageurl}}
                style={styles.userImage}/>
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

headingText : {
    fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
},
container: {
    paddingHorizontal: 16
},
userCard: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#EEECEA',
    padding: 4,
    borderRadius: 8
},
userImage: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    marginRight : 12
},
userName : {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000'
},
userStatus : {
    fontSize: 12
}


})