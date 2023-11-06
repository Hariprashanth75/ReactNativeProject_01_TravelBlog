import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style ={[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri: 'https://th.bing.com/th?id=OLC.OQXYq/dApFWjhw480x360&rs=1&pid=ImgDet'
        
      }}
      style = {styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Effiel Tower</Text>
        <Text style={styles.cardLabel}>City of Love, Paris</Text>
        <Text style={styles.cardDescription}>The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889</Text>
        <Text style={styles.cardFooter}>Iconic landmark in France</Text>
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