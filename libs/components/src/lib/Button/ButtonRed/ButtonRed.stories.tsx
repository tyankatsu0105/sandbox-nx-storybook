import React, {FunctionComponent} from 'react'
import {ButtonRed} from './ButtonRed'

import doc from './ButtonRed.doc.mdx';


export default {
  title: 'Button|ButtonRed',
  parameters: {
    order: 20,
    docs: {
      page: doc,
    },
  },
};

export const show: FunctionComponent = () => {
  return (
    <ButtonRed />
  )
}