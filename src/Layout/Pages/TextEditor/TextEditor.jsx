import "./TextEditor.css";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
// React icons__
import { FaBold } from "react-icons/fa";
import { RiItalic } from "react-icons/ri";
import { BsFileBreak } from "react-icons/bs";
import { AiOutlineUnderline } from "react-icons/ai";
import { LiaParagraphSolid } from "react-icons/lia";
import { MdFormatListBulleted } from "react-icons/md";
import { GrRedo, GrStrikeThrough, GrUndo } from "react-icons/gr";
import { VscHorizontalRule, VscListOrdered } from "react-icons/vsc";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
  });

  if (!editor) {
    return null;
  }

  // Tools active status__
  const isBold = editor.isActive("bold");
  const isItalic = editor.isActive("italic");
  const isStrike = editor.isActive("strike");
  const isParagraph = editor.isActive("paragraph");
  const isOrderedList = editor.isActive("orderedList");
  const isBulletList = editor.isActive("bulletList");
  const isHorizontalRule = editor.isActive("horizontalRule");
  const isHardBreak = editor.isActive("hardBreak");
  const isUnderline = editor.isActive("underline");

  return (
    <>
      <div className="deitor_main_container">
        <div className="deitor_navbar_main_container">
          <div className="deitor_nevbar_undo_and_redo_container">
            <button
              className="undo"
              title="Undo"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
            >
              <GrUndo />
            </button>

            <button
              className="redo"
              title="Redo"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
            >
              <GrRedo />
            </button>
          </div>

          <div className="deitor_nevbar_heading_container">
            <select
              onChange={(e) => {
                const level = parseInt(e.target.value, 10);
                if (level) {
                  editor.chain().focus().toggleHeading({ level }).run();
                }
              }}
            >
              <option selected disabled>
                Heading
              </option>
              <option value="1">H1</option>
              <option value="2">H2</option>
              <option value="3">H3</option>
              <option value="4">H4</option>
              <option value="5">H5</option>
              <option value="6">H6</option>
            </select>
          </div>

          <div className="editor_navbar_tools_section_one_container">
            <div className="editor_navbar_bold_container">
              <button
                title="Bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={isBold ? "active_tool" : "disable_tool"}
              >
                <FaBold />
              </button>
            </div>

            <div className="editor_navbar_italic_container">
              <button
                title="Italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={isItalic ? "active_tool" : "disable_tool"}
              >
                <RiItalic />
              </button>
            </div>

            <div className="editor_navbar_underline_container">
              <button
                title="Underline"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={isUnderline ? "active_tool" : "disable_tool"}
              >
                <AiOutlineUnderline />
              </button>
            </div>

            <div className="editor_navbar_strike_container">
              <button
                title="Line through"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={isStrike ? "active_tool" : "disable_tool"}
              >
                <GrStrikeThrough />
              </button>
            </div>

            <div className="editor_navbar_paragraph_container">
              <button
                title="Paragraph"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={isParagraph ? "active_tool" : "disable_tool"}
              >
                <LiaParagraphSolid />
              </button>
            </div>
          </div>

          <div className="editor_navbar_tools_section_two_container">
            <div className="editor_navbar_ul_container">
              <button
                title="Bullet list"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={isBulletList ? "active_tool" : "disable_tool"}
              >
                <MdFormatListBulleted />
              </button>
            </div>

            <div className="editor_navbar_ol_container">
              <button
                title="Number list"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={isOrderedList ? "active_tool" : "disable_tool"}
              >
                <VscListOrdered />
              </button>
            </div>
          </div>

          <div className="editor_navbar_tools_section_three_container">
            <div className="editor_navbar_horizontal_rule_container">
              <button
                title="Horizontal rule"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className={isHorizontalRule ? "active_tool" : "disable_tool"}
              >
                <VscHorizontalRule />
              </button>
            </div>

            <div className="deitor_navbar_break_container">
              <button
                title="Line break"
                onClick={() => editor.chain().focus().setHardBreak().run()}
                className={isHardBreak ? "active_tool" : "disable_tool"}
              >
                <BsFileBreak />
              </button>
            </div>
          </div>
        </div>

        <div className="deitor_text_page_container">
          <EditorContent
            placeholder="Let's edit text"
            editor={editor}
            className="editor_content"
          ></EditorContent>
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
