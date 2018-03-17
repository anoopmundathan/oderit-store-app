import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  container: {
    marginTop: 0, 
    borderTopWidth: 0
  },
  list: {
    borderBottomWidth: .3
  },
  wrapper: {
    height: 50,
    marginLeft: 0
  },
  title: {
    fontSize: 25, 
    color: '$primaryText', 
    fontWeight: 'bold'
  }
})
