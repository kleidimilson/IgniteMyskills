
import React, {useState, useEffect} from 'react';
import { 
  Text, 
  View,
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
 } from 'react-native'

 import { ButtonAdd } from '../components/ButtonAdd/ButtonAdd';
 import { SkillCard } from '../components/SkillCard/SkillCard';



interface SkillData{
  id: string,
  name: string
}


export function Home(){
  const [newSkill,setNewSkill] = useState('');
  const [myskills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    
    setMySkills(oldState => [...oldState,data]);
  }

  function removeSkill(id:string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(()=>{
    const currentHour = new Date().getHours();
    if(currentHour<12){
      setGretting('Good Morning!');
    }
    else if(currentHour > 12 && currentHour < 18){
      setGretting('Good afternoon!')
    }
    else{
      setGretting('Good Night!')
    }
  },[])

  return(
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Kleidimilson</Text>
        <Text style={styles.congrats}>{gretting}</Text>

        <TextInput
          placeholder='New skill'
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
          style={styles.input}
        />

        <ButtonAdd     
          title="Adicionar"
          onPress={handleAddNewSkill}
        />

        <Text
        style={[styles.title,{marginVertical:50}]}
        >
        My Skills
        </Text>

        <FlatList 
        data={myskills}
        keyExtractor={item=>item.id}
        renderItem={({ item })=>(
          <SkillCard skill={item.name}
          onPress={()=>removeSkill(item.id)}
          />
        )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     backgroundColor: '#121015',
     paddingHorizontal: 20,
     paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  congrats: {
    fontWeight:'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios'? 15 :10,
    marginTop:30,
    borderRadius: 7
  },
 
})


