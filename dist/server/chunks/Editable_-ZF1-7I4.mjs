import { jsx } from 'react/jsx-runtime';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { Extension } from '@tiptap/core';
import { CharacterCount } from '@tiptap/extensions';

const AddKbrd = ({ id, onActivate, onCancel }) => {
  const ext = Extension.create({
    name: "AddKbrd",
    addKeyboardShortcuts() {
      return {
        Escape: () => {
          this.editor.commands.blur();
          onCancel?.(id, this.editor);
          return true;
        },
        "Ctrl-Space": () => {
          onActivate?.(id, this.editor);
          return true;
        }
      };
    }
  });
  return ext;
};
const Editable = ({ id, content, editable = true, limit = 28, autofocus = false, onFocus, onBlur, onActivate, onCancel, className }) => {
  const editor = useEditor({
    editable,
    immediatelyRender: false,
    autofocus,
    onFocus: (props) => {
      onFocus?.(id, props.editor);
    },
    onBlur(props) {
      onBlur?.(id, props.editor);
    },
    extensions: [
      TextStyleKit,
      StarterKit,
      AddKbrd({ id, onActivate, onCancel }),
      CharacterCount.configure({
        limit
      })
    ],
    content
  });
  return /* @__PURE__ */ jsx(EditorContent, { editor, className });
};

export { Editable as E };
