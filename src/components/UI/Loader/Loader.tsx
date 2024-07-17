import { loaderVariants, MLoaderItem } from "../../../animation"
import { useAppSelector } from "../../../hook"
import { Container } from "../../../styledTags/Container/Container"

const Loader = () => {
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <Container width="100%" height="100vh" align="center" justify="center">
      <MLoaderItem variants={loaderVariants} animate='animationOne' custom={1} darkTheme={switcher} />
      <MLoaderItem variants={loaderVariants} animate='animationOne' custom={2} darkTheme={switcher} />
      <MLoaderItem variants={loaderVariants} animate='animationOne' custom={3} darkTheme={switcher} />
      <MLoaderItem variants={loaderVariants} animate='animationOne' custom={4} darkTheme={switcher} />
    </Container>
  )
}

export default Loader