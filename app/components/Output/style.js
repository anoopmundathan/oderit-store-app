import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
  },
  text: {
    color: '$primaryText',
    fontSize: 18,
    fontWeight: 'bold',
    height: 30,
  },
  output: {
    backgroundColor: '#f5f5f5',
    height: 50,
    color: '$primaryText',
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '$primaryText',
    paddingTop: 15
  }
})
