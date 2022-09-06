import React from 'react'
import Following from './Following'
import { Footer } from './Footer'
import Hiring from './Hiring'

const Widgets = () => (
  <div className="flex flex-col gap-3">
    <Following />
    <Hiring />
    {/* <Footer /> */}
  </div>
)

export default Widgets
