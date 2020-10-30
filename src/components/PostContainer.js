import React, {useState} from 'react'
import Post from './Post'

const PostContainer = props => {
  const {entries, depth} = props

  if (entries.length === 0 || depth === 0) {
    return null
  }
  let entryList = entries.map(function(entry, index) {
      return (
        <div className="thread" key={index}>
          <Post entry={entry} depth={depth} />
        </div>
      )
  })

  return  <div className="posts">{ entryList }</div>
}

export default PostContainer