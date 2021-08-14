import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  post_date: {
    fontSize: '20px',
    textAlign: 'left',
    marginBottom: -35,
  },
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  contents: {
    fontSize: 20,
    lineHeight: 0.9,
    letterSpacing: 0.2,
    marginLeft: 20,
    textAlign: 'left',
    overflowWrap: 'break-word',
  },
}))

export default function NewsBox({ title, postDate, contents }) {
  const classes = useStyles()
  return (
    <Box mb={3} boxShadow={0}>
      <Card elevation={1} sx={{ maxWidth: 345 }}>
        <CardContent>
          <p className={classes.post_date}>{postDate}</p>
          <p className={classes.title}>{title}</p>
          <p className={classes.contents}>{contents}</p>
        </CardContent>
      </Card>
    </Box>
  )
}
