import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

const NumButton = props => {
  const { setAns, ans } = props;
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => setAns(numPress(props.name, ans))}>

      <Text style={styles.buttonText}>{props.name}</Text>
  </TouchableOpacity>
  )
}

// Mess of code to try and make sure the answer fits on screen
function round(num) {
  numToString = num.toString()
  if (num[0] == '-' && numToString.length > 9) {
    if (numToString[9] == '.') {
      return(numToString.slice(0,11))
    } else {
      return(numToString.slice(0,10))
    }
  } else if (numToString.length > 9) {
    if (numToString[8] == '.') {
      return(numToString.slice(0,10))
    } else {
      return(numToString.slice(0,9))
    }
  } else {
    return(num)
  }
}

function numPress(num, term) {
  term += num
  if (term[0] == '0') {
    term = term.substring(1)
  }
  console.log(round(term))
  return(round(term))
  
}

//clearPress
export default function App() {
  const [ans, setAns] = useState("0");
  const [term1, setTerm1] = useState("0");
  const [term2, setTerm2] = useState("0")
  const [operator, setOperator] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.answer}>{round(ans)}</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}
          onPress={() => {
          setAns("0")
          setOperator(0)
          setTerm1(0)
          //Clear other terms
          }}>
          <Text style={styles.buttonText}>c</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => {
          if (ans[0] == '-') {
            setAns(ans.substring(1))
          } else {
            setAns("-"+ans)
          }
          }}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => {
          setAns((parseFloat(ans)/100).toString())
          console.log((parseFloat(ans)/100).toString())
          }}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => {
          console.log(Math.sqrt(parseFloat(ans)).toString())
          setAns(Math.sqrt(parseFloat(ans)).toString())
          }}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>

        <NumButton name="7" setAns = {setAns} ans = {ans}/>
        <NumButton name="8" setAns = {setAns} ans = {ans}/>
        <NumButton name="9" setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={[operator === 1 && ans == "0"  ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(1)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>  

        <NumButton name="4" setAns = {setAns} ans = {ans}/>
        <NumButton name="5" setAns = {setAns} ans = {ans}/>
        <NumButton name="6" setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={[operator === 2 && ans == "0" ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(2)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>  

        <NumButton name="1" setAns = {setAns} ans = {ans}/>
        <NumButton name="2" setAns = {setAns} ans = {ans}/>
        <NumButton name="3" setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={[operator === 3  && ans == "0" ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(3)
          setTerm1(ans)
          setAns("0")
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>  

        <NumButton name="0" setAns = {setAns} ans = {ans}/>
        <NumButton name="." setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={styles.button}
          onPress={() => {
            if (operator == 1) {
              answer = parseFloat(term1) / parseFloat(ans)
            } else if (operator == 2) {
              answer = parseFloat(term1) * parseFloat(ans)
            } else if (operator == 3) {
              answer = parseFloat(term1) - parseFloat(ans)
            } else if (operator == 4) {
              answer = parseFloat(term1) + parseFloat(ans)
            }
            answer.toString()
            setTerm1("0")
            setAns(answer)            
          }}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>  

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

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    backgroundColor: '#444',
  },
  buttonContainer: {
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#B2BEB5',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
  buttonOn: {
    flexDirection: 'row',
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  answer: {
    margin: '5%',
    alignSelf: 'flex-end',
    fontSize: 60,
    color: '#FFF',
  },
});
