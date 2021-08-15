import * as React from 'react'
import { Card, CardContent, Box, makeStyles } from '@material-ui/core'
import LineBreakP from '../common/LineBreakP'

const useStyles = makeStyles(() => ({
  post_date: {
    fontSize: 19,
    textAlign: 'left',
    marginBottom: -35,
  },
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    borderBottom: '3px solid #4169e1',
  },
  contents: {
    fontSize: 17,
    letterSpacing: 0.2,
    marginLeft: 15,
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
          <LineBreakP className={classes.contents} strings={contents}></LineBreakP>
        </CardContent>
      </Card>
    </Box>
  )
}
