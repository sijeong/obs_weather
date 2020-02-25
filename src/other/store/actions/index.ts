import { createAction, createAsyncAction } from 'typesafe-actions';
import { Todo } from '../model';

export const setNote = createAction('NOTE:SET_NOTE')<string>();

export const listTodo = createAsyncAction(
    'TODO:LIST:REQUEST',
    'TODO:LIST:SUCCESS',
    'TODO:LIST:FAILURE',
)<void, Todo[], Error>();