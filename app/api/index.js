import firebase from 'firebase'

export const fetchFromFirebase = async (collectionsPath, dispatch, type) => {

  const { currentUser } = firebase.auth()

  await firebase.database().ref(`/users/${currentUser.uid}/${collectionsPath}`)
  .on('value', snapshot => {
    dispatch({ type, payload: snapshot.val() })
  })

}

export const saveStoreDataToFirebase = async (dispatch, type, store) => {

  const { name, mobile, address } = store
  const { currentUser } = firebase.auth()
  
  await firebase.database().ref(`/users/${currentUser.uid}/stores`)
  .push({ name, mobile, address })
  .then(() => {
    dispatch({ type })
  })

}

export const saveItemDataToFirebase = async (dispatch, type, item, fn) => {

  const { name, price } = item
  const { currentUser } = firebase.auth()

  await firebase.database().ref(`/users/${currentUser.uid}/items`)
    .push({ name, price })
    .then(() => {
      dispatch({ type, payload: item })
      fn()
    })
  
}
