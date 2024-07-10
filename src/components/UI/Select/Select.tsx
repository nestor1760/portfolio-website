import { useAppSelector } from "../../../hook"
import { StyledSelect } from "./SelectStyles"
import { ISelect } from "./interfaces"


const Select = ({ options, value, onChange }: ISelect) => {
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <StyledSelect
      darkTheme={switcher}
      value={value !== null ? value : ""}
      onChange={onChange}
    >
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      )}
    </StyledSelect>
  )
}

export default Select