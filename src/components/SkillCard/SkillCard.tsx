import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native'
import React from 'react'


interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
   <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
   >
     <Text style={styles.textSkill}>{skill}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill:{
    backgroundColor: '#1F1e25',
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill:{
    color: '#fff',
    fontSize:18,
    fontWeight: 'bold',
  }
})