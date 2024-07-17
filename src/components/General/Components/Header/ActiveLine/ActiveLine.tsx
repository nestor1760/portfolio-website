import { MLine } from '../../../../../animation'
import { useAppSelector } from '../../../../../hook'

const ActiveLine = () => {
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <MLine layoutId="activeItem" darkTheme={switcher} />
  )
}

export default ActiveLine