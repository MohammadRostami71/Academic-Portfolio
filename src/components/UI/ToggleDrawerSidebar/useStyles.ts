import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(()=>({
    container:{
        '& .MuiListItem-root':{

            '& .MuiListItemText-root':{

                '& .MuiTypography-root':{

                    'a':{
                        textDecoration:"none",
                        color: "blue",
                        fontSize: "20px",
                    }

                }
            }
        }

    },
}));

export default useStyles;