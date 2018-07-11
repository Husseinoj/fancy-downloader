import { StyleSheet, Dimensions } from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0, left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    margin: 5
  }
});

export default Styles;