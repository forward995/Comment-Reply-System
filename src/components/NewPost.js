import React, {useState} from 'react'
import PostContainer from './PostContainer'
import Title from './Title'

const NewPost = (props) => {
  const {title, depth} = props
  const [nameInput, setNameInput] = useState('')
  const [postInput, setPostInput] = useState('')
  const [viewPost, setViewPost] = useState(false)
  const [entry, setEntry] = useState([])

  if (depth === 0) {
    return null
  }

  const handleClick = () => {
    if (nameInput !== '' && postInput !== '') {
      setViewPost(true)

      const newEntry = {
        name: nameInput,
        post: postInput,
      }
      const copyArray = entry.slice()
      copyArray.push(newEntry)
      setEntry(copyArray)

      setNameInput('')
      setPostInput('')
    }
  }

  if (title === 'new post') {
    return (
      <>
        <div className="newpost">
          <Title title={title}/>
          <input type="text" placeholder="name..." value={nameInput} onChange={e => setNameInput(e.target.value)} />
          <textarea placeholder="write a new post..." value={postInput} onChange={e => setPostInput(e.target.value)} />
          <button type="submit" onClick={() => handleClick()} disabled={(nameInput !== '' && postInput !== '') ? false : true}>submit</button>
        </div>
        <PostContainer entries={entry} depth={depth}/>
      </>
    )
  } if (viewPost) {
    return (<PostContainer entries={entry} depth={depth}/>)
  } else {
      return (
        <>
          <div className="newpost">
            <Title title={title}/>
            <input type="text" placeholder="name..." value={nameInput} onChange={e => setNameInput(e.target.value)} />
            <textarea placeholder="write a new post..." value={postInput} onChange={e => setPostInput(e.target.value)} />
            <button type="submit" onClick={() => handleClick()} disabled={(nameInput !== '' && postInput !== '') ? false : true}>submit</button>
          </div>
        </>
      )
    }
  }

export default NewPost
