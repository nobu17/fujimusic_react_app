import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import { Card, CardContent, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  icon: {
    color: 'blue',
    marginRight: 3,
  },
  title: {
    marginBottom: 30,
  },
  contents: {
    fontSize: 17,
    lineHeight: 2,
    letterSpacing: 0.2,
  },
}))

export default function AppealBox({ title, contents }) {
  const classes = useStyles()
  return (
    <Box boxShadow={0}>
      <Card elevation={0} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.title}>
            <DoneOutlineIcon className={classes.icon}></DoneOutlineIcon>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.contents}>
            {contents}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
