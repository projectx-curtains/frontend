import React, { useState } from "react"
import { FormikHelpers, FormikValues } from "formik"
import MultiStepForm from "../components"
import { IMultiStepFormContainer } from "../interfaces"

const MultiStepFormContainer: React.FC<IMultiStepFormContainer> = ({
  children,
  initialValues,
  onSubmit,
}) => {
  const [stepNumber, setStepNumber] = useState(0)
  const steps = React.Children.toArray(children) as React.ReactElement[]

  const [snapshot, setSnapshot] = useState(initialValues)

  const step = steps[stepNumber]
  const totalSteps = steps.length

  const isLastStep = stepNumber === totalSteps - 1

  const nextStep = (values: FormikValues) => {
    setSnapshot(values)
    setStepNumber(stepNumber + 1)
  }

  const previousStep = (values: FormikValues) => {
    setSnapshot(values)
    setStepNumber(stepNumber - 1)
  }

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit
    }
    if (isLastStep) {
      return onSubmit(values, actions)
    } else {
      actions.setTouched({})
      nextStep(values)
    }
  }

  return (
    <MultiStepForm
      step={step}
      steps={steps}
      stepNumber={stepNumber}
      isLastStep={isLastStep}
      snapshot={snapshot}
      handleSubmit={handleSubmit}
      previousStep={previousStep}
    />
  )
}

export default MultiStepFormContainer
