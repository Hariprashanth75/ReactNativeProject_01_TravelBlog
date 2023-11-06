import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard3() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style ={[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri: 'https://lp-cms-production.imgix.net/features/2019/05/GettyImages-960609922-copy-1b250a469ea0.jpg?auto=format&w=1440&h=810&fit=crop&q=75'
        
      }}
      style = {styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Empire State Building</Text>
        <Text style={styles.cardLabel}>New York</Text>
        <Text style={styles.cardDescription}>The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.</Text>
        <Text style={styles.cardFooter}>Iconic landmark in New York, USA</Text>
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