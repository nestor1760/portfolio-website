import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hook'
import { techDataRest } from '../../restApi/techRest'
import { dataSkills } from '../../data/dataSkills'
import { useEffect } from 'react'

const SkillsContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & p {
    padding: 0 10%;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
  }
`

const TechBlock = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const TechItem = styled.div`
  margin: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s;
  cursor: grabbing;

  & img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  & p {
    width: 120px;
    font-size: 16px;
    text-align: center;
  }

  &:hover {
    & p {
      font-weight: 600;
    }
  }
`

const Loader = styled.div`
  width: 100%;
  margin: 40px 0;
  font-size: 28px;
  text-align: center;
  color: black;
`


const SkillsList = () => {
  const dispatch = useAppDispatch()
  const {data, loading} = useAppSelector(state => state.technology)

  useEffect(() => {
    dispatch(techDataRest(dataSkills))
  }, [])

  return (
    <SkillsContainer>
        <p id='skills'>I have many skills<br/>that could be useful for you.</p>
        {(loading)
          ? <Loader>Loading...</Loader>
          : <TechBlock>
              {data.map(item => 
                <TechItem key={item.id}>
                  <img src={item.image} alt={item.title}/>
                  <p>{item.title}</p>
                </TechItem>
              )}
            </TechBlock>
        }
      </SkillsContainer>
  )
}

export default SkillsList