import { GrRedo, GrStrikeThrough, GrUndo } from "react-icons/gr";
import "./TextEditor.css";
import { LiaParagraphSolid } from "react-icons/lia";
import { FaBold } from "react-icons/fa";
import { AiOutlineUnderline } from "react-icons/ai";
import { RiItalic } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { VscHorizontalRule, VscListOrdered } from "react-icons/vsc";
import { BsFileBreak } from "react-icons/bs";

const TextEditor = () => {
  return (
    <>
      <div className="deitor_main_container">
        <div className="deitor_navbar_main_container">

          <div className="deitor_nevbar_undo_and_redo_container">
            <button title="Undo"><GrUndo /></button>
            <button title="Redo"><GrRedo /></button>
          </div>

          <div className="deitor_nevbar_heading_container">
            <select>
              <option selected disabled>Heading</option>
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
              <button title="Bold"><FaBold /></button>
            </div>

            <div className="editor_navbar_underline_container">
              <button title="Underline"><AiOutlineUnderline /></button>
            </div>

            <div className="editor_navbar_italic_container">
              <button title="Italic"><RiItalic /></button>
            </div>

            <div className="editor_navbar_strike_container">
              <button title="Line through"><GrStrikeThrough /></button>
            </div>

            <div className="editor_navbar_paragraph_container">
              <button title="Paragraph"><LiaParagraphSolid /></button>
            </div>
            
          </div>

          <div className="editor_navbar_tools_section_two_container">

            <div className="editor_navbar_ul_container">
              <button title="Bullet list"><MdFormatListBulleted /></button>
            </div>

            <div className="editor_navbar_ol_container">
              <button title="Number list"><VscListOrdered /></button>
            </div>

          </div>

          <div className="editor_navbar_tools_section_three_container">

            <div className="editor_navbar_horizontal_rule_container">
              <button title="Horizontal rule"><VscHorizontalRule /></button>
            </div>

            <div className="deitor_navbar_break_container">
              <button title="Line break"><BsFileBreak /></button>
            </div>

          </div>

        </div>
        <div className="deitor_text_page_container">
          <textarea></textarea>
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
