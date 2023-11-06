import { StyleSheet, Text, View , Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink : string)
    {
        Linking.openURL(websiteLink)

    }

  return (
    <View>
      <Text style={styles.headingText}>Blog card </Text>
      <View style={[styles.card, styles.ElevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}> 
            What's new in Paris in 2023?
            </Text>
        </View>
        <Image
         source={{
            uri:'https://www.toureiffel.paris/sites/default/files/inline-images/070302-095.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            There are number of sites around Paris that offer exceptional views of the Tower. We consider three of them must-see spots for the best possible souvenir of the Iron Lady.
            Closest to the Tower is the Champ de Mars, where you can relax and stroll through the vast park. On the Palais de Chaillot side, the Trocadéro terraces also offer a stunning panorama of the Tower in its entirety. 
            For an unobstructed view with the Seine in the foreground, visit Bir-Hakeim Bridge, where you’ll also find the Renaissance France statue. 
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.toureiffel.paris/en/news/visit/what-see-around-eiffel-tower')}>
                <Text style={styles.socialLink}>
                    Read more
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/paris.explore/')}>
                <Text style={styles.socialLink}>
                    Follow me
                </Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card : {
        width: 350,
        height: 300,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    ElevatedCard: {
        backgroundColor: '#EEECEA',
        elevation: 3,
        shadowOffset: {width:1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3
    },
    headingContainer: {
        height:60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 15,
        fontWeight: '600'
    },
    cardImage: {height:100},
    bodyContainer: {
        padding: 10

    },
    footerContainer: {
        flexDirection:'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLink : {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4
    }
})