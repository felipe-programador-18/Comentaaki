


//this exporting to here place!!!
// create new function to push date
//create function to inject another dates
const UsedatabasePush = endpoints => {
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