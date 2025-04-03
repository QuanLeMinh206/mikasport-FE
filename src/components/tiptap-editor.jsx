import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";

import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { useEffect } from "react";

const TiptapEditor = ({ content, setContent }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Highlight,
            Image,
            Bold,
            Italic,
            Underline,
            Link.configure({ openOnClick: true }),
            TextAlign.configure({ types: ["heading", "paragraph"] }), // Kích hoạt hỗ trợ hình ảnh
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML()); // Lấy nội dung và cập nhật vào state
        },
    });

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    return (
        <div className="rounded-md border border-gray-300 p-2 dark:bg-slate-900 dark:text-cyan-50">
            <div className="toolbar">
                <button onClick={() => editor.chain().focus().toggleBold().run()}>
                    <b>B</b>
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <i>I</i>
                </button>
                <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <u>U</u>
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
                <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>⬅</button>
                <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>⏺</button>
                <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>➡</button>
                <button
                    onClick={() => {
                        const url = prompt("Enter a link:");
                        if (url) editor.chain().focus().setLink({ href: url }).run();
                    }}
                >
                    🔗
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
