import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '$primaryError',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
