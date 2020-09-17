import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../common';
import normalize from 'react-native-normalize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: colors.white,
  },
  containerScroll: {
    width: normalize(365),
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  wrapLogo: {
    marginBottom: normalize(40),
    marginTop: normalize(100),
  },
  wrapContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(20),
    marginTop: normalize(90),
  },
  wrapTextInput: {
    width: '100%',
    paddingVertical: normalize(10),
  },
  wrapNotePassword: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  wrapButton: {
    width: normalize(185),
    marginVertical: normalize(20),
  },
  wrapLinkSignup: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  regular14Cerulean: {
    fontSize: normalize(14),
    fontWeight: 'normal',
    color: colors.cerulean,
  },
  wrapError: {alignItems: 'center', marginTop: metrics.short},
  error: {color: colors.tango, position: 'absolute'},
  errorPassword: {
    color: colors.tango,
    textAlign: 'center',
    bottom: -metrics.short,
  },
});
export default styles;
