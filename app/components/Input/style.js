import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center'
  },
  text: {
    color: '$primaryWhite',
    fontSize: 14,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    color: '$primaryWhite',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: .3,
    borderColor: '$primaryWhite'
  }
})
