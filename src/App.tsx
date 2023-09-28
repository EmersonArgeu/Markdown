import Markdown from 'react-markdown'
import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import {
  Wrapper,
  Maximized,
  Minimize,
  Header,
  StyledTextarea,
  StyledContainer,
} from './App'
import { ArrowsOutSimple, ArrowsInSimple } from 'phosphor-react'

const defaultMarkdown = `
# Markdown Previewer!

## This is a sub-heading...

There's also [links](https://www.freecodecamp.org)

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode
    }
}
\`\`\`

- And of course there are lists.
 

> Block Quotes!
    You can also make text **bold**...

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png)

`

export function App() {
  const [content, setContent] = useState(defaultMarkdown)
  const [newStyledEditor, setNewStyledEditor] = useState(false)
  const [newStyledPreviewer, setNewStyledPreviewer] = useState(false)

  function handleCreateMarkdown(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(ev.target.value)
  }

  function toggleStyledEditor() {
    setNewStyledEditor(!newStyledEditor)
  }

  function toggleStyledPreviewer() {
    setNewStyledPreviewer(!newStyledPreviewer)
  }
  return (
    <Wrapper>
      <ThemeProvider theme={defaultTheme}>
        <div
          style={
            newStyledPreviewer
              ? { display: 'none' }
              : { display: 'flex', flexDirection: 'column' }
          }
        >
          <Header>
            <h3>Markdown - editor</h3>

            {newStyledEditor ? (
              <Maximized onClick={toggleStyledEditor}>
                <ArrowsInSimple size={22} />
              </Maximized>
            ) : (
              <Minimize onClick={toggleStyledEditor}>
                {<ArrowsOutSimple size={22} />}
              </Minimize>
            )}
          </Header>

          <StyledTextarea
            onChange={handleCreateMarkdown}
            id="editor"
            name="editor"
            value={content}
            style={
              newStyledEditor
                ? { height: '80vh', resize: 'none' }
                : { resize: 'vertical', overflow: 'auto' }
            }
          ></StyledTextarea>
        </div>
        <Header>
          <h3>Markdown - previewer</h3>

          {newStyledPreviewer ? (
            <Maximized onClick={toggleStyledPreviewer}>
              <ArrowsInSimple size={22} />
            </Maximized>
          ) : (
            <Minimize onClick={toggleStyledPreviewer}>
              {<ArrowsOutSimple size={22} />}
            </Minimize>
          )}
        </Header>

        <StyledContainer
          id="preview"
          style={newStyledEditor ? { flex: 1 } : { height: '80vh' }}
        >
          <Markdown>{content}</Markdown>
        </StyledContainer>

        <GlobalStyle />
      </ThemeProvider>
    </Wrapper>
  )
}
