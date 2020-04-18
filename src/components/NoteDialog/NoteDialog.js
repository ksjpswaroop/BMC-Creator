import React, { useContext } from 'react';
import { NoteDialogWrapper, Div } from './styles/NoteDialog.style';
import {
  Dialog,
  Classes,
  H1,
  EditableText,
  Button,
  Intent,
} from '@blueprintjs/core';
import {
  CLOSE_DIALOG,
  UPDATE_NOTE_TITLE,
  UPDATE_NOTE_DESCRIPTION,
  SAVE_NOTE,
} from '../../actions/actions';
import { AppContext } from '../../utils';
import cmsData from '../../cms';

const NoteDialog = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isDialogOpen, noteTitle, noteDescription } = state;
  const { p_edit_note_title, p_edit_note_desc, b_close, b_save } = cmsData;

  return (
    <NoteDialogWrapper>
      <Dialog isOpen={isDialogOpen}>
        <Div className={Classes.DIALOG_BODY}>
          <H1>
            <EditableText
              selectAllOnFocus
              placeholder={p_edit_note_title}
              value={noteTitle}
              onChange={(evt) =>
                dispatch({ action: UPDATE_NOTE_TITLE, payload: evt })
              }
            />
          </H1>
          <EditableText
            alwaysRenderInput
            maxLines={10}
            minLines={5}
            multiline={true}
            placeholder={p_edit_note_desc}
            value={noteDescription}
            onChange={(evt) =>
              dispatch({ action: UPDATE_NOTE_DESCRIPTION, payload: evt })
            }
          />
        </Div>
        <Div className={Classes.DIALOG_FOOTER}>
          <Div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button onClick={() => dispatch({ action: CLOSE_DIALOG })}>
              {b_close}
            </Button>
            <Button
              intent={Intent.SUCCESS}
              onClick={() => dispatch({ action: SAVE_NOTE })}
            >
              {b_save}
            </Button>
          </Div>
        </Div>
      </Dialog>
    </NoteDialogWrapper>
  );
};

export default NoteDialog;