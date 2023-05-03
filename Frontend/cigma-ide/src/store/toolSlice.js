import { createSlice } from "@reduxjs/toolkit";

const tools = { SELECTOR: "selector", TEXT: "text", CodeEditor: "code-editor" };

const initialState = {
  isSelectorActivated: false,
  isInputFieldFocused: false,
  isDragScrolling: false,
  currentScale: 1,
  selectedShapeIndexes: [],
  currentTool: tools.SELECTOR,
  tools: [tools.SELECTOR, tools.TEXT, tools.CodeEditor],
  workingCodeEditorIndex: 0,
  workingTextEditorIndex: 0,
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    deactivateSelector: (state) => {
      state.isSelectorActivated = false;
    },
    activateSelector: (state) => {
      state.isSelectorActivated = true;
    },
    setInputFieldFocused: (state) => {
      state.isInputFieldFocused = true;
    },
    setInputFieldBlurred: (state) => {
      state.isInputFieldFocused = false;
    },
    // 스페이스 누를 때
    startDragScroll: (state) => {
      state.isDragScrolling = true;
    },
    // 스페이스 안눌렀을 때
    finishDragScroll: (state) => {
      state.isDragScrolling = false;
    },
    // 줌 관련 scale
    setCurrentScale: (state, { payload }) => {
      state.currentScale = payload;
    },
    // innerRef관련..
    emptySelectedShapeIndexes: (state) => {
      state.selectedShapeIndexes = [];
    },
    setCurrentTool: (state, { payload }) => {
      state.currentTool = payload;
      console.log(`currTool::${state.currentTool}`);
    },
    setCodeEditorIndex: (state, { payload }) => {
      state.workingCodeEditorIndex = payload;
    },
    setTextEditorIndex: (state, { payload }) => {
      state.workingTextEditorIndex = payload;
    },
  },
});

export const selectIsInputFieldFocused = (state) => state.tool.isInputFieldFocused;

export const selectCurrentScale = (state) => state.tool.currentScale;

export const selectCurrentTool = (state) => state.tool.currentTool;

export const selectIsDragScrolling = (state) => state.tool.isDragScrolling;

export const selectCurrentCodeEditorIndex = (state) => state.tool.workingCodeEditorIndex;

export const selectCurrentTextEditorIndex = (state) =>
  state.tool.workingTextEditorIndex;

export const selectIsSelectorActivated = (state) =>
  state.tool.isSelectorActivated;

export const {
  activateSelector,
  deactivateSelector,
  setInputFieldFocused,
  setInputFieldBlurred,
  startDragScroll,
  finishDragScroll,
  setCurrentScale,
  emptySelectedShapeIndexes,
  setCurrentTool,
  setCodeEditorIndex,
  setTextEditorIndex,
} = toolSlice.actions;

export default toolSlice.reducer;