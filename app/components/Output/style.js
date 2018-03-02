import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
  },
  text: {
    color: '$primaryText',
    fontSize: 14,
    fontWeight: 'bold',
  },
  output: {
    height: 50,
    color: '$primaryText',
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '$primaryText',
  }
})
