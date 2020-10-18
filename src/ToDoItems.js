import React , { useState }from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
        marginTop: 25,
        marginBottom:30
    }
  }));

const ToDoItems = (props) => {
    
    const [value, setValue] = useState();



      const classes = useStyles();
      const deleteKeys = (key) => {
          
        props.delete(key);
      }

      
        const toDoEntries = props.entries;
        const listItems = toDoEntries.map((tasks) => {
            console.count("rendered");
            return (<Grid xs={3}>
                        <Card>
                            <CardContent>
                                <li key={tasks}>{tasks}</li>
                            </CardContent>
                            <Button 
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={() => {deleteKeys(tasks)}} >Delete This Review</Button>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                        </Card>
                    </Grid>)
                    
        });

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    
}

export default ToDoItems;