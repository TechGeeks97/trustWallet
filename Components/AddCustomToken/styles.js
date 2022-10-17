import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  bottomView: {
    height: '27%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    height: '67%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#E2E2E2',
    borderWidth: 0.5,
  },
  detailTextBoxView: {
    backgroundColor: '#FFF3E1',
    height: '50%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    marginVertical: '2%',
  },
  detailText: {
    fontSize: 14,
    color: '#CC8821',
  },
  linkText: {
    color: '#3275BB',
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default styles;
