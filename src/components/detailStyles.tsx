import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { MD3Colors } from "react-native-paper";

export const detailStyles = StyleSheet.create({
  surface: {
    flexDirection: 'column-reverse',
    flex: 1,
    padding: scale(4),
    margin: scale(2),
    textAlign: 'center',
    height: scale(50),
    width: scale(340),
    borderColor: 'grey',
    backgroundColor: MD3Colors.secondary95,
  },
  card: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(80),
  },
  table: {
    borderRadius: scale(4),
    borderWidth: scale(2),
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: MD3Colors.secondary90,
    height: scale(180),
  },
  detailsContainer: {
    flex: 1,
    FlexDirection: 'row',
    paddingBottom: scale(100),
  },
  surfaceIcon: {
    marginTop: scale(12),
    height: scale(40),
    left: scale(10),
    flexDirection: 'row',
    alignSelf: 'flex-start',
    transform: [{scaleX: scale(1)}, {scaleY: scale(1)}],
  },
  surfaceText: {
    margin: scale(8),
    position: 'absolute',
    left: '20%',
    fontSize: scale(15),
    paddingTop: scale(15),
  },
  noRep: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
