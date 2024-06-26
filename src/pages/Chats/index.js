import React from 'react'
import {SafeAreaView, StyleSheet, Text} from 'react-native'
import ChatItem from '../ChatItem'

const currentUser = 32

const chatsMock = [
  {
    id: 1,
    users: [
      {
        id: 32,
        phone: '+5511999882323',
      },
      {
        id: 99,
        phone: '+5521991234321',
      },
    ],
    messages: [
      {
        id: '-MLjvqRCEhOCF2MAFjng',
        content: 'Oi, tudo bem?',
        sent: '2020-11-09T22:16:40-04:00',
        sentBy: '+5511999990000',
      },
    ],
  },
  {
    id: 2,
    users: [
      {
        id: 32,
        phone: '+5511999882323',
      },
      {
        id: 99,
        phone: '+5532988882222',
      },
    ],
    messages: [
      {
        id: '-MLjvqRCEhOCF2MAFjng',
        content: 'E aquele conteúdo sobre como criar um chat?',
        sent: '2020-11-09T22:16:40-04:00',
        sentBy: '+5511999990000',
      },
    ],
  },
]

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 32,
  },
})

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      {chatsMock.map((chat) => (
        <ChatItem chat={chat} currentUser={currentUser} />
      ))}
    </SafeAreaView>
  )
}

export default Chats

