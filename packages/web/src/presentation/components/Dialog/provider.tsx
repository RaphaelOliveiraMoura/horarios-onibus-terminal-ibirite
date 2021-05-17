import React, { useState, createContext, useContext } from 'react'

import { Dialog } from '.'

type openDialogParam = React.FC<{ close: () => void }>

type DialogContextValues = {
  isOpen: boolean
  openDialog: (param: openDialogParam) => void
}

const DialogContext = createContext<DialogContextValues>(
  {} as DialogContextValues
)

export const DialogProvider: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false)

  const [
    DialogComponent,
    setDialogComponent
  ] = useState<openDialogParam | null>(null)

  function openDialog(builder: openDialogParam) {
    setDialogComponent(() => builder)
    setOpen(true)
  }

  function close() {
    setOpen(false)
  }

  return (
    <DialogContext.Provider value={{ isOpen, openDialog }}>
      {children}

      <Dialog isOpen={isOpen} close={close}>
        {DialogComponent && <DialogComponent close={close} />}
      </Dialog>
    </DialogContext.Provider>
  )
}

export const useDialog = () => {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error('You just can access this context inside a provider')
  }

  return context
}

export default {
  DialogProvider,
  useDialog
}
