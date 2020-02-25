import { Todo } from "../model";

export type TodoState = Readonly<{
    byId: Readonly<{ [key: number]: Todo }>;
    allIds: number[];
    loading: boolean;
}>;

const initialState: TodoState = {
    byId: {},
    allIds: [],
    loading: false,
}

