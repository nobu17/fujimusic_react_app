import { Link, Button } from '@material-ui/core'

export default function AdminBackButton() {
  return (
    <Button href={'/admin'} variant="contained" color="secondary" fullWidth>
      管理メニューに戻る
    </Button>
  )
}
