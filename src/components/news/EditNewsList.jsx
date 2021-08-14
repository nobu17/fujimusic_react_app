import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, Box, makeStyles, Button } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

export default function EditNewsList({ newsList, onSelectNews = (f) => f, onDelete = (f) => f }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {newsList.map((news, index) => (
          <ListItem key={index} button>
            <ListItemText primary={news.postDateStr + '  ' + news.title} />
            <Box mr={4}>
              <Button onClick={() => onSelectNews(index)} variant="contained" color="primary">
                編集
              </Button>
            </Box>
            <Button onClick={() => onDelete(index)} variant="contained" color="secondary">
              削除
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
