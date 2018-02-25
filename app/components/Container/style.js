import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: SCREEN_HEIGHT / 12,
    paddingLeft: SCREEN_WIDTH / 12,
    paddingRight: SCREEN_WIDTH / 12,
    backgroundColor: '$primaryBlue',
  }
})
