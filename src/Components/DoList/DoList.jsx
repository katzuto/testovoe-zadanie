import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { defaultCases } from "../Store/defaultCases";
import CheckIcon from '@mui/icons-material/Check';


function DoList() {

    const taskList = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const updateCheckBox = (item) => {
        if (item.isDone === false) {
            dispatch({type: defaultCases.updateCheckTrue, payload: item.id})
        } else {
            dispatch({type: defaultCases.updateCheckFalse, payload: item.id})
        }
    }

    const changeValueTask = (item) => {
        dispatch({type: defaultCases.editTitle, payload: item})
        
    }

    const handleChangeValue = (item, e) => {
        dispatch({type: defaultCases.updateTitle, name: e.target.value, isEditing: false})
    }
    
   const deleteTask = (id) => {
    dispatch({type: defaultCases.deleteTask, payload: id})
   }

  return (
    <>

    {taskList.filter((task) => task.isEditing === true).map(item => (
        <>
        <TextField sx={{width: 300}}
            id="standard-multiline-flexible"
            label=""
            multiline
            maxRows={4}
            variant="standard"
            value={item.name}
            onChange={handleChangeValue}
            autoFocus
            />
            <button style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}><CheckIcon /></button>
        </>
    ))}
    
        {taskList.filter(task => task.isDone === false && task.isEditing === false).map(item => (
            <div key={item.id}>
        <FormControlLabel control={<Checkbox checked={item.isDone} onChange={() => updateCheckBox(item) } />} label={item.name} />
        <button onClick={() => changeValueTask(item)} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}><EditIcon /></button>
       <button onClick={() => deleteTask(item.id)} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}  > <DeleteIcon /></button>
    </div>
    ))}
        
    </>
  )
}

export default DoList