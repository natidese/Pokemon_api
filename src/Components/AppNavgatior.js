import React from 'react'
import { AppBar, Toolbar , Typography  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'


const useStyle = makeStyles((theme) => ({

    AppBar: {
        background: 'black'
    },
    link: {
        textDecoratin: 'none'
    }, 
    title:{
        color:'white' , 
        cursor:'pointer '
    }
}))

export default function AppNavgatior() {
    const classes = useStyle()
    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar>
            <Link to="/" className={classes.link}>
            <Typography className={classes.title}>Pokedex</Typography>
            </Link>
            </Toolbar>
        </AppBar>
    )
}
