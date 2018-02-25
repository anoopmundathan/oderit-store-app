import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    marginTop: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primaryButton',
    borderRadius: 5,
  },
  text: {
    color: '$primaryBackground',
    fontSize: 25,
  }
})
