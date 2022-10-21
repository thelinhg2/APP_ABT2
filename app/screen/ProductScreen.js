import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';


const ProductScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }}>
            <View style={styles.item}>
              <View style={styles.boxleft}>
                <Image style={styles.image} source={{ uri: 'https://pastaxi-manager.onepas.vn/content/uploads/articles/2amthuc/nhahang/1534/luong-son-quan-2.JPG' }} />
              </View>
              <View style={styles.boxright}>
                <Text style={styles.title}>Romano's Macaroni Grill</Text>
                <Text style={styles.content}>3605 Parker Rd.</Text>
                <Text style={styles.content}>$10</Text>
              </View>
            </View>
          </TouchableOpacity>


          <View style={styles.item}>
            <View style={styles.boxleft}>
              <Image style={styles.image} source={{ uri: 'https://images.foody.vn/res/g19/185596/s180x180/foody-albumluong-son-quan-thai--895-635983827343141071.jpg' }} />
            </View>
            <View style={styles.boxright}>
              <Text style={styles.title}>Romano's Macaroni Grill</Text>
              <Text style={styles.content}>3605 Parker Rd.</Text>
              <Text style={styles.content}>$10</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.boxleft}>
              <Image style={styles.image} source={{ uri: 'https://pastaxi-manager.onepas.vn/content/uploads/articles/2amthuc/nhahang/1534/luong-son-quan-2.JPG' }} />
            </View>
            <View style={styles.boxright}>
              <Text style={styles.title}>Romano's Macaroni Grill</Text>
              <Text style={styles.content}>3605 Parker Rd.</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.boxleft}>
              <Image style={styles.image} source={{ uri: 'https://images.foody.vn/res/g19/185596/s180x180/foody-albumluong-son-quan-thai--895-635983827343141071.jpg' }} />
            </View>
            <View style={styles.boxright}>
              <Text style={styles.title}>Romano's Macaroni Grill</Text>
              <Text style={styles.content}>3605 Parker Rd.</Text>
              <Text style={styles.content}>$10</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.boxleft}>
              <Image style={styles.image} source={{ uri: 'https://pastaxi-manager.onepas.vn/content/uploads/articles/2amthuc/nhahang/1534/luong-son-quan-2.JPG' }} />
            </View>
            <View style={styles.boxright}>
              <Text style={styles.title}>Romano's Macaroni Grill</Text>
              <Text style={styles.content}>3605 Parker Rd.</Text>
              <Text style={styles.content}>$10</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 0
  },
  item: {
    flexDirection: 'row',
    marginBottom: 25
  },
  image: {
    width: 114,
    height: 91,
    borderRadius: 10,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontFamily: 'Helvetica Neue',
    paddingTop: 5,
    paddingBottom: 5
  },
  content: {
    fontWeight: '400',
    paddingTop: 3,

  }

});

export default ProductScreen;
