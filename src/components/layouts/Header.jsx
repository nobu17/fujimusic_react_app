/* eslint-disable no-undef */
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Hidden,
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LogoutMenu, LogoutButton } from '../common/Logout'
import { useAuth } from '../../contexts/AuthContext'

const headersData = [
  {
    label: 'ご案内',
    href: '/',
    icon: 'home',
  },
  {
    label: '料金',
    href: '/price',
    icon: 'local_atm',
  },
  {
    label: 'お知らせ',
    href: '/news',
    icon: 'announcement',
  },
  {
    label: '教室紹介',
    href: '/class',
    icon: 'place',
  },
  {
    label: '生徒紹介',
    href: '/students',
    icon: 'account_box',
  },
  {
    label: '管理メニュー',
    href: '/admin',
    icon: 'lock',
    isLocked: true,
  },
]

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '8px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontWeight: 700,
    size: '18px',
    marginLeft: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}))

export default function Header() {
  const { currentUser } = useAuth()
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())

    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>
          {getMenuButtons()}
          {getLogout(true)}
        </div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices(handleDrawerClose)} {getLogout(false)}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = (handleDrawerClose) => {
    return headersData.map(({ label, href, icon, isLocked }) => {
      if (isLocked && !currentUser) {
        return
      }
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
          }}
        >
          <MenuItem onClick={handleDrawerClose}>
            <Icon>{icon}</Icon>
            {label}
          </MenuItem>
        </Link>
      )
    })
  }

  const getLogout = (isDesktop) => {
    if (isDesktop) {
      return <LogoutMenu className={menuButton}></LogoutMenu>
    } else {
      return <LogoutButton></LogoutButton>
    }
  }

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      fujimusic<Hidden smDown> ギタースクール</Hidden>
    </Typography>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href, icon, isLocked }) => {
      if (isLocked && !currentUser) {
        return
      }
      return (
        <Button
          key={label}
          {...{
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          <Icon>{icon}</Icon>
          {label}
        </Button>
      )
    })
  }

  return (
    <header>
      <AppBar position="fixed" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}
