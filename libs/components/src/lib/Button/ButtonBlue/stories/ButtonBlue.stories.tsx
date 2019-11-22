import React, {FunctionComponent} from 'react'
import {ButtonBlue} from '../ButtonBlue'

import doc from './ButtonBlue.doc.mdx';


export default {
  title: 'Button|ButtonBlue',
  parameters: {
    order: 10,
    docs: {
      page: doc,
    },
  },
};

export const show: FunctionComponent = () => {
  return (
    <ButtonBlue />
  )
}