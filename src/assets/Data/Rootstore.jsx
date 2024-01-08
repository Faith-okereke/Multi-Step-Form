import React from 'react'
import { PlanData } from './SelectPlanData'
import { AddOnsContext } from './AddOnsData'

export default function Rootstore({children}) {
  return (
    <AddOnsContext>
    <PlanData>
      {children}
    </PlanData>
    </AddOnsContext>
  )
}
