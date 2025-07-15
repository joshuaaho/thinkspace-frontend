import { useCurrentEditor } from '@tiptap/react'


import { 
  RiBold, 
  RiItalic, 
  RiStrikethrough, 
  RiArrowGoBackLine, 
  RiArrowGoForwardLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
} from 'react-icons/ri'

export function EditorToolbar() {
  const { editor } = useCurrentEditor()
  
  if (!editor) {
    return null
  }

  return (
    <div className="border-b border-base-200 pb-2 mb-2">
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 1 }) ? 'btn-active' : ''}`}
        >
          <RiH1 size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 2 }) ? 'btn-active' : ''}`}
        >
          <RiH2 size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 3 }) ? 'btn-active' : ''}`}
        >
          <RiH3 size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 4 }) ? 'btn-active' : ''}`}
        >
          <RiH4 size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 5 }) ? 'btn-active' : ''}`}
        >
          <RiH5 size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={`btn btn-sm ${editor.isActive('heading', { level: 6 }) ? 'btn-active' : ''}`}
        >
          <RiH6 size={20} />
        </button>

        <div className="divider divider-horizontal"></div>

        <button 
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`btn btn-sm ${editor.isActive('bold') ? 'btn-active' : ''}`}
        >
          <RiBold size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`btn btn-sm ${editor.isActive('italic') ? 'btn-active' : ''}`}
        >
          <RiItalic size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`btn btn-sm ${editor.isActive('strike') ? 'btn-active' : ''}`}
        >
          <RiStrikethrough size={20} />
        </button>

        <div className="divider divider-horizontal"></div>

        <button 
          onClick={() => editor.chain().focus().undo().run()}
          className="btn btn-sm"
          disabled={!editor.can().undo()}
        >
          <RiArrowGoBackLine size={20} />
        </button>
        <button 
          onClick={() => editor.chain().focus().redo().run()}
          className="btn btn-sm"
          disabled={!editor.can().redo()}
        >
          <RiArrowGoForwardLine size={20} />
        </button>
      </div>
    </div>
  )
} 