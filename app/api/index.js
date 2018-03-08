import firebase from 'firebase'

export const fetchFromFirebase = async (collectionsPath, dispatch, type) => {

  const { currentUser } = firebase.auth()

  await firebase.database().ref(`/users/${currentUser.uid}/${collectionsPath}`)
  .on('value', snapshot => {
    dispatch({ type, payload: snapshot.val() })
  })

}

export const saveStoreDataToFirebase = async (collectionsPath, dispatch, type, store) => {

  const { name, mobile, address } = store
  const { currentUser } = firebase.auth()
  
  await firebase.database().ref(`/users/${currentUser.uid}/${collectionsPath}`)
  .push({ name, mobile, address })
  .then(() => {
    dispatch({ type })
  })

}
