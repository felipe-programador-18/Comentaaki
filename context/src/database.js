import {useState, useEffect} from 'react'
import firebase from './firebase'


//this exporting to here place!!!
// create new function to push date
//create function to inject another dates
export const UsedatabasePush = endpoints => {
    const [status, setstatus] = useState('')
     const save = data => {
       const ref = firebase.database().ref(endpoints)
       ref.push(data,  err => {
         if(err){
           setstatus('error aplication')
         }else{
           setstatus('SUCCESS')
         }
       })
     }
      return [status, save]
 }

// this is tipy inject dependence...
export  const Usedatabase = endpoints => {
    const [data, setdata] = useState({})
    useEffect(() => {
      const ref = firebase.database().ref(endpoints)
    ref.on('value', snapshoot => {
       //console.log(snapshoot.val())
       setdata(snapshoot.val())
      })
      return () => {
       ref.off()
      }
    }, [endpoints])
    return data
  }
