import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rowView: {
    flexDirection: 'row',
    height: '7%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#000000',
    fontSize: 19,
  },
  buttonTextView: {
    height: '100%',
    width: '67%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  line: {
    backgroundColor: '#CCCCCC',
    height: 0.7,
    width: '82%',
    alignSelf: 'flex-end',
  },
  scrollView: {
    height: '100%',
    width: '100%',
    flexGrow: 1,
  },
});

export default styles;
