import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DateFnsUtils from '@date-io/date-fns'
import MomentUtils from '@date-io/moment'
import LuxonUtils from '@date-io/luxon'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export default function NewsEditDialog({ open, item, onChange = (f) => f, onSubmit = (f) => f, onCancel = (f) => f }) {
  const handleChange = (e) => {
    onChange(e.target)
  }
  const handleDatechange = (e) => {
    onChange({ name: 'postDate', value: e })
  }
  const handleCloseOnDialog = (event, reason) => {
    if (reason !== 'backdropClick') {
      onCancel()
    }
  }
  if (!item) return <></>
  return (
    <div>
      <Dialog fullWidth={true} open={open} onClose={handleCloseOnDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">編集</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              required
              autoOk={true}
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date-picker-inline"
              label="投稿日時"
              value={item.postDate}
              name="postDate"
              onChange={handleDatechange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="タイトル"
            value={item.title}
            fullWidth
            name="title"
            onChange={handleChange}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="contents"
            name="contents"
            label="内容"
            value={item.contents}
            fullWidth
            multiline
            rows={10}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            キャンセル
          </Button>
          <Button onClick={onSubmit} color="primary">
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
