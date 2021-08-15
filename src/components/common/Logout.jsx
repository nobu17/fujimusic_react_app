import React from 'react'
import { MenuItem, Icon, Button } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const logoutMenu = (isDesktop) => {
  const { currentUser } = useAuth()
  return currentUser ? getMenu(isDesktop) : null
}

const getMenu = (isDesktop) => {
  const { logout } = useAuth()
  const history = useHistory()
  const handleLogout = async () => {
    try {
      await logout()
      history.push('/')
    } catch (err) {
      console.error(err)
      alert('ログアウトに失敗しました。')
    }
  }
  if (isDesktop) {
    return (
      <Button color="inherit" onClick={handleLogout}>
        <Icon>lockopen</Icon>
        ログアウト
      </Button>
    )
  } else {
    return (
      <MenuItem onClick={handleLogout}>
        <Icon>lockopen</Icon>
        ログアウト
      </MenuItem>
    )
  }
}

export function LogoutMenu() {
  return <>{logoutMenu(true)}</>
}

export function LogoutButton() {
  return <>{logoutMenu(false)}</>
}
