import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import FancyCard2 from './components/FancyCard2'
import FancyCard3 from './components/FancyCard3'
import FancyCard4 from './components/FancyCard4'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <FlatCards />
      <ElevatedCard/>
      <ScrollView horizontal={true}>
      <FancyCard/>
      <FancyCard2/>
      <FancyCard3/>
      <FancyCard4/>
      </ScrollView>
      <ContactList/>
      <ActionCard/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App