import { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hook"
import { setShow } from "../../../store/modalSlice"
import { ModalContent, ModalOverlay } from "./ModalStyles"
import { IModal } from "./interface"


const Modal: FC<IModal> = ({ children, show }) => {
  const { scroll } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  const closeModal = () => {
    dispatch(setShow({ show: false, scroll: false }))
  }

  useEffect(() => {
    if (scroll) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [scroll])

  return (
    <ModalOverlay onClick={() => closeModal()} className={show ? 'opened' : ''}>
      <ModalContent className={show ? 'active' : ''} onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal