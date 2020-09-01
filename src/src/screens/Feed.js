import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Text, withStyles, List } from 'react-native-ui-kitten'
import { withDataHOC } from '../contexts'
import PinchableBox from '../components/PinchableBox'

class _Feed extends Component {
  state = { DATA: null, isRefreshing: false }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    try {
      const posts = await this.props.data.getImages()
      this.setState({ DATA: posts, isRefreshing: false })
    } catch (error) {
      console.log(error)
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true })
    this.fetchPosts()
  }

  render() {
    const renderItem = ({ item }) => (
      <View style={this.props.themedStyle.card}>
        <PinchableBox imageUri={item.data.url} />
        <View style={this.props.themedStyle.cardHeader}>
          <Text category='s1' style={this.props.themedStyle.cardTitle}>
            {item.data.title}
          </Text>
        </View>
        <View style={this.props.themedStyle.cardContent}>
          <Text category='p2'>{item.data.description}</Text>
        </View>
      </View>
    )

    if (this.state.DATA != null) {
      return (
        <List
          style={this.props.themedStyle.container}
          data={this.state.DATA}
          renderItem={renderItem}
          keyExtractor={this.state.DATA.id}
          refreshing={this.state.isRefreshing}
          onRefresh={() => this.onRefresh()}
        />
      )
    } else
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
  }
}

export default Feed = withDataHOC(
  withStyles(_Feed, theme => ({
    container: {
      flex: 1
    },
    card: {
      backgroundColor: theme['color-basic-100'],
      marginBottom: 25
    },
    cardHeader: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cardTitle: {
      color: theme['color-basic-1000']
    },
    cardAvatar: {
      marginRight: 16
    },
    cardContent: {
      padding: 10,
      borderWidth: 0.25,
      borderColor: theme['color-basic-600']
    }
  }))
)