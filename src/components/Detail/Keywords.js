import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
    root:{
        width: '80%',
        margin: '0 auto',
        textAlign: 'left'
    },
    chip:{
        margin: '12px 8px 0 0',
    },
}));


export default function Keywords({keywords}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                keywords ? (
                    keywords.length === 0 ? (
                        <p>no keywords</p>
                    ) : (
                        keywords.map((item,index) =>{
                            return(
                                <Chip label={item.name} key={index} variant="default" className={classes.chip}/>
                            )
                        }) 
                    )
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}
