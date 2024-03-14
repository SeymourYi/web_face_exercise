import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
  state() {
    return {
      talkList: [
        { id: "afasf1", title: "今天你有点怪，哪里怪?怪好看的!" },
        { id: "afasf2", title: "草莓，蓝莓 想我了没" },
        { id: "afasf3", title: "心里给你留了一块地，我的死心塌地" },
      ]
    }
  },
}) 