/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getLatesNewsList, postNews, deleteNews } from '../lib/NewsApi'

export function useNews() {
  const [newsList, setNewsList] = useState([])
  const [editNews, setEditNews] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getLatesNewsList()
      .then(setNewsList)
      .then(() => setLoading(false))
      .catch(setError)
  }, [])

  const post = () => {
    setLoading(true)
    return postNews(editNews)
      .then(() => setLoading(false))
      .catch(setError)
  }

  const deleteById = (id) => {
    setLoading(true)
    return deleteNews(id)
      .then(() => setLoading(false))
      .catch(setError)
  }

  const read = () => {
    setLoading(true)
    return getLatesNewsList()
      .then(setNewsList)
      .then(() => setLoading(false))
      .catch(setError)
  }

  return {
    newsList,
    editNews,
    setEditNews,
    error,
    loading,
    read,
    post,
    deleteById,
  }
}
export function usePostNews() {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const post = (news) => {
    postNews(news)
      .then(() => setLoading(false))
      .catch(setError)
  }

  return {
    post,
    error,
    loading,
  }
}
