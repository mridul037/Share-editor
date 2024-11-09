import { useEffect, useRef } from 'react'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { QuillBinding } from 'y-quill'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './App.css' // We'll create this file for custom styles

function App() {
  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const bindingRef = useRef(null)

  useEffect(() => {
    const ydoc = new Y.Doc()
    const ytext = ydoc.getText('quill')
    
    const wsProvider = new WebsocketProvider(
      'wss://share-editor-back.onrender.com',
      'my-shared-doc',
      ydoc,
    )

    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            ['image', 'link'],
            ['clean']
          ]
        }
      })

      bindingRef.current = new QuillBinding(ytext, quillRef.current)
    }

    wsProvider.on('status', event => {
      console.log('Connection status:', event.status)
    })

    wsProvider.on('sync', (isSynced) => {
      console.log('Sync status:', isSynced)
    })
  }, [])

  return (
    <div className="editor-container">
      <header className="editor-header">
        <h1>Collaborative Text Editor</h1>
        <div className="connection-status">
          {/* You can add connection status indicator here */}
        </div>
      </header>
      <main className="editor-main">
        <div 
          ref={editorRef} 
          className="editor-content"
        />
        <footer className="footer">
        Made with <span className="heart">❤️</span> by{' '}
        <a 
          href="https://github.com/mridul037" 
          target="_blank" 
          rel="noopener noreferrer"
          className="author-link"
        >
          Mridul Shukla
        </a>
      </footer>
      </main>
    </div>
  )
}

export default App