import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard2() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style ={[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri: 'https://s1.1zoom.me/b5050/232/England_Bridges_Tower_440891_3840x2400.jpg'
        
      }}
      style = {styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>London Bridge</Text>
        <Text style={styles.cardLabel}>London</Text>
        <Text style={styles.cardDescription}>London Bridge, any of several successive structures spanning the River Thames between Borough High Street in Southwark and King William Street in the City of London</Text>
        <Text style={styles.cardFooter}>Iconic landmark in Great Britain</Text>
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