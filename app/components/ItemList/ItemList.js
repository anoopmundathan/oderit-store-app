import React from 'react'
import { List, ListItem } from 'react-native-elements'
import { styles } from './style'

export const ItemList = ({ items }) => {
  
  const { container, list, wrapper, title } = styles

  return(
    <List 
      containerStyle={ container } >
        { 
          Object.keys(items).map((item, index) => (
            <ListItem
              key={index}
              containerStyle={ list }
              wrapperStyle={ wrapper }
              titleStyle={ title }
              title={items[item].name} />
          ))
        }
    </List>
  )
}
