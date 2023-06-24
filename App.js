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

const OperatorButton = props => {
  const { term1, setTerm1, setAns, ans } = props;
  return (
    
    <TouchableOpacity style={styles.button}
      onPress={() => {
      setTerm1(toString(ans))
      setAns(0)
      }}>
      {/*Set Term 1 to the current answer displayed
      Reset current display*/}
      <Text style={styles.buttonText}>{props.name}</Text>
  </TouchableOpacity>
  )
}

const Button = props => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => numPress(props.name, props.term1)}>
      <Text style={styles.buttonText}>{props.name}</Text>
  </TouchableOpacity>
  )
}

//function equalsPress(term1)

//operatorPress

function numPress(num, term) {
  term += num
  if (term[0] == '0') {
    term = term.substring(1)
  }
  console.log(term)
  return(term)
  
}

//clearPress
export default function App() {
  const [ans, setAns] = useState("0");
  const [term1, setTerm1] = useState(0);
  const [operator, setOperator] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.answer}>{ans}</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}
          onPress={() => {
          setAns("0")
          setOperator(0)
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

          //setAns(toString(parseFloat(ans)/100))
          }}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[operator === 1 ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(1)
          }}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>  

        <NumButton name="7" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="8" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="9" term1={term1} setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={[operator === 2 ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(2)
          }}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>  

        <NumButton name="4" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="5" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="6" term1={term1} setAns = {setAns} ans = {ans}/>

        <TouchableOpacity style={[operator === 3 ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(3)
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>  

        <NumButton name="1" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="2" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="3" term1={term1} setAns = {setAns} ans = {ans}/>
        <TouchableOpacity style={[operator === 4 ? styles.buttonOn : styles.button]}
          onPress={() => {
          setOperator(4)
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>  
        <NumButton name="0" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="0" term1={term1} setAns = {setAns} ans = {ans}/>
        <NumButton name="." term1={term1} setAns = {setAns} ans = {ans}/>
        <Button name="="/>
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
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginVertical: 10,
  },
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
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  answer: {
    margin: 15,
    alignSelf: 'flex-end',
    fontSize: 60,
    color: '#FFF',
  },
});
