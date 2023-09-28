import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 10rem;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme['green-700']};
  border-radius: 6px 6px 0 0;
  margin-top: 1rem;
`
export const StyledTextarea = styled.textarea`
  min-height: 20rem;
  padding: 0 2rem;
  font-size: 0.875rem;
  line-height: 160%;
  border: none;
  border-radius: 0 0 6px 6px;
  background: ${(props) => props.theme['green-300']};
`

export const Maximized = styled.button`
  color: ${(props) => props.theme.black};
  background: transparent;
  border: none;
`
export const Minimize = styled.button`
  color: ${(props) => props.theme.black};
  background: transparent;
  border: none;
`
export const StyledContainer = styled.div`
  min-height: 20rem;
  padding: 2rem;
  font-size: 0.875rem;
  line-height: 160%;
  border: none;
  border-radius: 0 0 6px 6px;
  background: ${(props) => props.theme['green-300']};
`
