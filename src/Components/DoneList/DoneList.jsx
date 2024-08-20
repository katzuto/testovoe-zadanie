import { Checkbox, FormControlLabel } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { defaultCases } from "../Store/defaultCases";


function DoneList() {

    const taskList = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    console.log(taskList)

    const updateCheckBox = (item) => {
        if (item.isDone === false) {
            dispatch({type: defaultCases.updateCheckTrue, payload: item.id})
        } else {
            dispatch({type: defaultCases.updateCheckFalse, payload: item.id})
        }
    }

   const deleteTask = (id) => {
    dispatch({type: defaultCases.deleteTask, payload: id})
    
   }

  return (
    <>
        {taskList.filter(task => task.isDone === true).map(item => (
        <div key={item.id}>
        <FormControlLabel control={<Checkbox checked={item.isDone} onChange={() => updateCheckBox(item) } />} label={item.name} />
        <EditIcon />
       <button onClick={() => deleteTask(item.id)} style={{backgroundColor: "transparent", border: "none"}}  > <DeleteIcon /></button>
    </div>
    ))}
    </>
  )
}

export default DoneList