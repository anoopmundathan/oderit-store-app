import firebase from 'firebase'

export const fetchFromFirebase = (collectionsPath, dispatch, type) => {
  
  const { currentUser } = firebase.auth()

  firebase.database().ref(`/users/${currentUser.uid}/${collectionsPath}`)
  .on('value', snapshot => {
    dispatch({ type, payload: snapshot.val() })
  })

}

export const saveStoreDataToFirebase = (collectionsPath, dispatch, type, store) => {
  
  debugger
  const { name, mobile, address } = store
  const { currentUser } = firebase.auth()
  
  firebase.database().ref(`/users/${currentUser.uid}/${collectionsPath}`)
  .push({ name, mobile, address })
  .then(() => {
    dispatch({ type })
  })

}
