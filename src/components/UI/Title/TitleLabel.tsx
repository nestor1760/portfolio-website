import { motion } from 'framer-motion'
import { GeneralTitle } from '../../../GlobalStyles'
import { useAppSelector } from '../../../hook'
import { useNavMenu } from '../../../hooks/useNavMenu'
import { Title } from './TitleLabelStyles'
import { forwardRef } from 'react'

const TitleLabel = forwardRef<HTMLDivElement>((_, ref) => {
  const { switcher } = useAppSelector(state => state.switcher)
  const { scrollToStart } = useNavMenu()

  return (
    <Title ref={ref} darkTheme={switcher} dangerouslySetInnerHTML={{ __html: GeneralTitle }} onClick={scrollToStart} />
  )
})

export const MTitleLabel = motion(TitleLabel)
export default TitleLabel