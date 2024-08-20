import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import DoList from "../DoList/DoList"
import DoneList from "../DoneList/DoneList"
import TextInputTask from "../TextInputTask/TextInputTask"



function MainPage() {

    const stateTasks = useSelector(state => state.tasks)
    
    

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <h1 style={{color: "blue"}}>TODO</h1>
        <TextInputTask />
        <Box sx={{marginTop: 3, maxWidth: 400}}>
         <p >ПЛАН ({stateTasks.filter(item => item.isDone === false).length})</p>
         <DoList />
        </Box>
        <Box sx={{marginTop: 30, maxWidth: 400}}>
            <p>ГОТОВО ({stateTasks.filter(item => item.isDone === true).length})</p>
            <DoneList />
        </Box>
    </div>
  )
}

export default MainPage