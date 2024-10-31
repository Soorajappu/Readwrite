import { Box } from "@mui/material"


const MyMessage = ({text, color}) => {
    return (
        <Box sx={{
            backgroundColor: color,   //'#69C9AB', 
            color: 'white', 
            width: '90%', 
            height: '40px', 
            position: 'absolute',
            top: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            {text}
        </Box>
    )
}

export default MyMessage