import * as firebase from 'firebase';
import '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyC6C___ZSeX5e_p4VItjXofh42a6OK2h3c',
  authDomain: 'manager-69e81.firebaseapp.com',
  databaseURL: 'https://manager-69e81.firebaseio.com',
  projectId: 'manager-69e81',
  storageBucket: 'manager-69e81.appspot.com',
  messagingSenderId: '457051211329'
}

firebase.initializeApp(config)

firebase.firestore()

export default firebase
