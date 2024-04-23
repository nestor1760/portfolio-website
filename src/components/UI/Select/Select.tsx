import { StyledSelect } from "./SelectStyles"
import { ISelect } from "./interfaces"


const Select = ({options, value, onChange}: ISelect) => {
  return (
    <StyledSelect
      value={value}
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