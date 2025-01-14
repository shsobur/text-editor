import "./TextEditor.css";
import { jsPDF } from "jspdf";
// Tiptap__
import Color from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import { EditorContent, useEditor } from "@tiptap/react";
// React icons__
import { FaBold } from "react-icons/fa";
import { RiItalic } from "react-icons/ri";
import { BsFileBreak } from "react-icons/bs";
import { AiOutlineUnderline } from "react-icons/ai";
import { LiaParagraphSolid } from "react-icons/lia";
import { GrRedo, GrStrikeThrough, GrUndo } from "react-icons/gr";
import { VscHorizontalRule, VscListOrdered } from "react-icons/vsc";
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatListBulleted,
} from "react-icons/md";


const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      Color,
      TextStyle,
      Underline,
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      OrderedList,
      BulletList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
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
  const isHardBreak = editor.isActive("hardBreak");
  const isUnderline = editor.isActive("underline");
  const isBulletList = editor.isActive("bulletList");
  const isOrderedList = editor.isActive("orderedList");
  const isHorizontalRule = editor.isActive("horizontalRule");
  const isLeftAligned = editor.isActive({ textAlign: "left" });
  const isRightAligned = editor.isActive({ textAlign: "right" });
  const isCenterAligned = editor.isActive({ textAlign: "center" });

  // Export text file__
  const handleExportPdf = () => {
    const textContent = editor.getHTML();
    const pdf = new jsPDF();

    pdf.html(textContent, {
      callback: (doc) => {
        doc.save("Untitled");
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <>
      <div className="deitor_main_container">
        <div className="deitor_navbar_main_container">
          <div className="deitor_nevbar_undo_and_redo_container">
            <button
              className="undo"
              title="Undo (Ctrl + z)"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
            >
              <GrUndo />
            </button>

            <button
              className="redo"
              title="Redo (Ctrl + y)"
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

          <div className="editor_navbar_colot_tool_container">
            <input
              title="color"
              type="color"
              value={editor.getAttributes("textStyle").color}
              onInput={(e) =>
                editor.chain().focus().setColor(e.target.value).run()
              }
            />
          </div>

          <div className="editor_navbar_tools_section_one_container">
            <div className="editor_navbar_bold_container">
              <button
                title="Bold (Ctrl + b)"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={isBold ? "active_tool" : "disable_tool"}
              >
                <FaBold />
              </button>
            </div>

            <div className="editor_navbar_italic_container">
              <button
                title="Italic (Ctrl + i)"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={isItalic ? "active_tool" : "disable_tool"}
              >
                <RiItalic />
              </button>
            </div>

            <div className="editor_navbar_underline_container">
              <button
                title="Underline (Ctrl + u)"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={isUnderline ? "active_tool" : "disable_tool"}
              >
                <AiOutlineUnderline />
              </button>
            </div>

            <div className="editor_navbar_strike_container">
              <button
                title="Strike (Ctrl + shift + s)"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={isStrike ? "active_tool" : "disable_tool"}
              >
                <GrStrikeThrough />
              </button>
            </div>

            <div className="editor_navbar_paragraph_container">
              <button
                title="Paragraph (Ctrl + Alt + 0)"
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
                title="Bullet list (Ctrl + shift + 8)"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={isBulletList ? "active_tool" : "disable_tool"}
              >
                <MdFormatListBulleted />
              </button>
            </div>

            <div className="editor_navbar_ol_container">
              <button
                title="Number list (Ctrl + shift + 7)"
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

          <div className="editor_navbar_tools_section_fourth_container">
            <div className="editor_navbar_left_tool_container">
              <button
                title="Left (Ctrl + shift + l)"
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={isLeftAligned ? "active_tool" : "disable_tool"}
              >
                <MdFormatAlignLeft />
              </button>
            </div>

            <div className="editor_navbar_cente_toolr_container">
              <button
                title="Center (Ctrl + shift + e)"
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={isCenterAligned ? "active_tool" : "disable_tool"}
              >
                <MdFormatAlignCenter />
              </button>
            </div>
            <div className="editor_navbar_right_tool_container">
              <button
                title="Right (Ctrl + shift + r)"
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={isRightAligned ? "active_tool" : "disable_tool"}
              >
                <MdFormatAlignRight />
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
          <button onClick={handleExportPdf}>Export</button>
        </div>
      </div>
    </>
  );
};

export default TextEditor;