import React from 'react'
import { Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function AdminMenu() {
  const adminMenus = [
    {
      title: 'お知らせ投稿',
      link: '/admins/news',
    },
    {
      title: '三島教室 情報編集',
      link: '/admins/class/mishima',
    },
    {
      title: '清水教室 情報編集',
      link: '/admins/class/shimizu',
    },
  ]
  return (
    <>
      <h2>管理メニュー</h2>
      {adminMenus.map((menu, index) => (
        <Box m={1} key={index}>
          <Button component={Link} to={menu.link} variant="contained" color="primary" fullWidth>
            {menu.title}
          </Button>
        </Box>
      ))}
    </>
  )
}
