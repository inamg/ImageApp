import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-ui-kitten'

import { FeedNavigator } from './FeedNavigator'
import AddImage from '../screens/AddImage'

const Navigator = createBottomTabNavigator({
    Feed: {
        screen: FeedNavigator,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}
            />
          )
        }
      },
     AddImage:  {
        screen: AddImage,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="plus-square-outline"
              width={32}
              height={32}
              fill={focused ? '#111' : '#939393'}
            />
          )
        }
      }
     },
     {
        tabBarOptions: {
          showLabel: false
        }
      })
  
  export default createAppContainer(Navigator)