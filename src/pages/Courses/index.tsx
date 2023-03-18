import React, {useEffect, useState} from "react";

import useStyles from "./useStyles";
import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import courses from './../../config/courses.json';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CourseItem from "../../components/Courses/CourseItem";
import groupBy from "../../utils/groupBy";

const Courses: React.FC = () => {
    const classes= useStyles();

    const [universities,setUniversities] = useState<string[]>([]);
    const [selectedUniversity,setSelectedUniversity]= useState<string | undefined>('')

    useEffect(() => {
        setUniversities([...new Set(courses.map(c => c.university))]as string[]);
    },[]);

    const handleChange = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        setSelectedUniversity(value);
    };

    const data = groupBy(courses,c => c.university)

    return(
        <Box className={classes.container}>
            <Box className={classes.universityBox}>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>University</InputLabel>
                    <Select
                        value={selectedUniversity}
                        onChange={handleChange}
                        input={<OutlinedInput label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                <Chip key={selected} label={selected} />
                            </Box>
                        )}
                    >
                        {universities.map((university:string,index:number) => (
                            <MenuItem
                                key={index}
                                value={university}
                            >
                                {university}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {selectedUniversity!== '' && <CloseOutlinedIcon onClick={() => setSelectedUniversity('')}/>}
            </Box>

            {Object.keys(data).map((key) => {
                return <Box className={classes.content}>
                    {selectedUniversity === '' ? <Typography variant={"subtitle1"}>{key}</Typography> :
                        selectedUniversity === key ? <Typography variant={"subtitle1"}>{key}</Typography> : null
                    }
                    {selectedUniversity === '' ?
                        data[key].map(course => <CourseItem key={course?.id} id={course?.id}  date={course?.date} title={course?.title} position={course?.position} url={course?.url} />) :
                    selectedUniversity === key ?
                        data[key].map(course => <CourseItem key={course?.id} id={course?.id}  date={course?.date} title={course?.title} position={course?.position}  url={course?.url} />) : null}
                </Box>
            })}
        </Box>
    )
};

export default Courses;
