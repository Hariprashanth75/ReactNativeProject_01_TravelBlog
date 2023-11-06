import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard4() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style ={[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/e5/a7/thanjavur-brihadeeshwara.jpg?w=1200&h=-1&s=1'
        
      }}
      style = {styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Brihadeeswarar Temple</Text>
        <Text style={styles.cardLabel}>Tanjore</Text>
        <Text style={styles.cardDescription}>Thanjavur Brihadeeswarar Temple, also known as the "Big Temple," is a stunning example of Chola dynasty architecture and a testament to the cultural and artistic achievements of the Chola Empire. Located in the city of Thanjavur in Tamil Nadu, India,</Text>
        <Text style={styles.cardFooter}>Iconic landmark in Tanjore, India</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8

    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16

    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      elevation: 3,
      shadowOffset: {width:1, height:1}

    },
    cardImage : {
      height: 180,
      marginBottom: 8,
      borderTopLeftRadius:6,
      borderTopRightRadius:6
    },
    cardBody : {
      flex:1,
      flexGrow:1,
      paddingHorizontal: 12

    },
    cardTitle : {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 4

    },
    cardLabel : {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6

    },
    cardDescription : {
      color: '#758283',
      fontSize: 12,
      marginTop: 6,
      marginBottom: 12,
      flexShrink: 1

    },
    cardFooter : {
      color: '#000000'

    }
    

})