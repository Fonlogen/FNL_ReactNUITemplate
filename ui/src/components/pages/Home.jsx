import React from 'react'

import { useState, useEffect } from 'react'

import TranslateStr from '../../utils/Translator.js'

import { useNui, callNui } from '../../utils/FiveM.js'

import './pages_style/Home.css'

function Home(props) {
  return (
    <div className='home_page'>
      {/* The function below imported from Translator.js takes a string parameter
      and returns its value. They should be configured from utils/Translator.js */}
      {TranslateStr('home_page_text')}
    </div>
  )
}

export default Home