import { ISkillsItem } from "../data/interfaces"
import { AppDispatch } from "../store"
import { setTechError, setTechLoading, setTechSuccess } from "../store/technologySlice"

export const techDataRest = (data: ISkillsItem[]) => async (dispatch: AppDispatch) => {
  dispatch(setTechLoading())
  try {
    setTimeout(() => {
      dispatch(setTechSuccess(data))
    }, 2000)
  } catch (error) {
    dispatch(setTechError(String(error)))
  }
}