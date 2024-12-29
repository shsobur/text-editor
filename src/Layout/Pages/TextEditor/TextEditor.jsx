import "./TextEditor.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
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
    extensions: [StarterKit],
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

  return (
    <>
      <div className="deitor_main_container">
        <div className="deitor_navbar_main_container">
          <div className="deitor_nevbar_undo_and_redo_container">
            <button title="Undo">
              <GrUndo />
            </button>
            <button title="Redo">
              <GrRedo />
            </button>
          </div>

          <div className="deitor_nevbar_heading_container">
            <select>
              <option selected disabled>
                Heading
              </option>
              <option value="">H1</option>
              <option value="">H2</option>
              <option value="">H3</option>
              <option value="">H4</option>
              <option value="">H5</option>
              <option value="">H6</option>
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
              >
                <AiOutlineUnderline />
              </button>
            </div>

            <div className="editor_navbar_strike_container">
              <button title="Line through">
                <GrStrikeThrough />
              </button>
            </div>

            <div className="editor_navbar_paragraph_container">
              <button title="Paragraph">
                <LiaParagraphSolid />
              </button>
            </div>
          </div>

          <div className="editor_navbar_tools_section_two_container">
            <div className="editor_navbar_ul_container">
              <button title="Bullet list">
                <MdFormatListBulleted />
              </button>
            </div>

            <div className="editor_navbar_ol_container">
              <button title="Number list">
                <VscListOrdered />
              </button>
            </div>
          </div>

          <div className="editor_navbar_tools_section_three_container">
            <div className="editor_navbar_horizontal_rule_container">
              <button title="Horizontal rule">
                <VscHorizontalRule />
              </button>
            </div>

            <div className="deitor_navbar_break_container">
              <button title="Line break">
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
