import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

// Ran when any number button is pressed (ex. 0,1,2,'.' etc)
const NumButton = props => {
  const { setAns, ans } = props;
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => setAns(numPress(props.name, ans))}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  )
}
// Appends the number button pressed to the number in the viewer
function numPress(num, term) {
  term += num
  if (term[0] == '0') term = term.substring(1)
  return(round(term))
}
// Mess of code to try and make sure the answer fits on screen
function round(num) {
  numToString = num.toString()
  if (num[0] == '-' && numToString.length > 9) {
    if (numToString[9] == '.') return(numToString.slice(0,11))
    else return(numToString.slice(0,10))
  } 
  else if (numToString.length > 9) {
    if (numToString[8] == '.') return(numToString.slice(0,10))
    else return(numToString.slice(0,9))
  } 
  else return(num) 
}

// Main code
export default function App() {
  // 'ans' is what is displayed in the viewer
  const [ans, setAns] = useState("0");
  // Term1 remembers the value before an operator is pressed
  const [term1, setTerm1] = useState("0");
  // What operator should be used in the calculation (ex. +, - etc)
  const [operator, setOperator] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.answer}>{round(ans)}</Text>
      <View style={styles.buttonContainer}>
        {/* Clear button */}
        <TouchableOpacity style={styles.button}
          onPress={() => {
          setAns("0")
          setOperator(0)
          setTerm1(0)
          }}>
          <Text style={styles.buttonText}>c</Text>
        </TouchableOpacity>
        {/* +/- button */}
        <TouchableOpacity style={styles.button}
          onPress={() => {
          if (ans[0] == '-') setAns(ans.substring(1))
          else setAns("-"+ans)
          }}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        {/* % button */}
        <TouchableOpacity style={styles.button}
          onPress={() => {
          setAns((parseFloat(ans)/100).toString())
          console.log((parseFloat(ans)/100).toString())
          }}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        {/* Square root button */}
        <TouchableOpacity style={styles.button}
          onPress={() => {
          console.log(Math.sqrt(parseFloat(ans)).toString())
          setAns(Math.sqrt(parseFloat(ans)).toString())
          }}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
        {/* Buttons 7 - 9 */}
        <NumButton name="7" setAns = {setAns} ans = {ans}/>
        <NumButton name="8" setAns = {setAns} ans = {ans}/>
        <NumButton name="9" setAns = {setAns} ans = {ans}/>
        {/* Division button */}
        <TouchableOpacity style={[operator === 1 && ans == "0"  ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(1)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>  
        {/* Buttons 4 - 6 */}
        <NumButton name="4" setAns = {setAns} ans = {ans}/>
        <NumButton name="5" setAns = {setAns} ans = {ans}/>
        <NumButton name="6" setAns = {setAns} ans = {ans}/>
        {/* Multiplication button */}
        <TouchableOpacity style={[operator === 2 && ans == "0" ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(2)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>  
        {/* Buttons 1 - 3 */}
        <NumButton name="1" setAns = {setAns} ans = {ans}/>
        <NumButton name="2" setAns = {setAns} ans = {ans}/>
        <NumButton name="3" setAns = {setAns} ans = {ans}/>
        {/* Subtraction button */}
        <TouchableOpacity style={[operator === 3  && ans == "0" ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(3)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>  
         {/* 0 */}
        <NumButton name="0" setAns = {setAns} ans = {ans}/>
        {/* Decimal point */}
        <NumButton name="." setAns = {setAns} ans = {ans}/>
        {/* Equals button */}
        <TouchableOpacity style={styles.button}
          onPress={() => {
            if (operator == 1) answer = parseFloat(term1) / parseFloat(ans)
            else if (operator == 2) answer = parseFloat(term1) * parseFloat(ans)
            else if (operator == 3) answer = parseFloat(term1) - parseFloat(ans)
            else if (operator == 4) answer = parseFloat(term1) + parseFloat(ans)
            answer.toString()
            setTerm1("0")
            setAns(answer)            
          }}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>  
        {/* Addition button */}
        <TouchableOpacity style={[operator === 4 && ans == "0" ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(4)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>  
      </View>
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  // The screen
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#444',
  },
  // The area containing all of the buttons
  buttonContainer: {
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // The gray buttons
  button: {
    flexDirection: 'row',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#B2BEB5',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  // The orange button that replaces the gray one when pressed
  buttonOn: {
    flexDirection: 'row',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  // The text displayed on the buttons (ex. c, +/-, % etc)
  buttonText: {
    fontSize: 38,
    color: '#FFF',
  },
  // The answer box at the top of the screen
  answer: {
    margin: 15,
    alignSelf: 'flex-end',
    fontSize: 60,
    color: '#FFF',
  },
});
