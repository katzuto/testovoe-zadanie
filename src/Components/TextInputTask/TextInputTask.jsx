import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { defaultCases } from '../Store/defaultCases';

function TextInputTask() {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    

    const addTask = () => {
      console.log("taskAdded")
        dispatch({type: defaultCases.addTask, name: value.trim(), id: value.trim(), isDone: false, isEditing: false})
    }

  return (
    <div style={{display: "block"}}>
        <TextField sx={{width: 500}}
            id="standard-multiline-flexible"
            label="Имя новой задачи"
            multiline
            maxRows={4}
            variant="standard"
            onChange={(e) => setValue(e.target.value)}
            value={value}
    />
    <button onClick={addTask} style={{border: "none", backgroundColor: "transparent"}}><AddIcon style={{marginTop: 25}}/></button>
    </div>
  )
}

export default TextInputTask