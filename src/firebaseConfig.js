import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBdw_LHTk-2laK1uu-NSCnT5wTmty2Yehc",
    authDomain: "project-kanban-v1.firebaseapp.com",
    databaseURL: "https://project-kanban-v1.firebaseio.com",
    projectId: "project-kanban-v1",
    storageBucket: "project-kanban-v1.appspot.com",
    messagingSenderId: "288286113803"
  };
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
