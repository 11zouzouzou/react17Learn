import React from "react";
class ProfilerAPI {
  static onRenderCallback(
    id: string, // 发生提交的 Profiler 树的 “id”
    phase: "mount" | "update", // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration: number, // 本次更新 committed 花费的渲染时间
    baseDuration: number, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime: number, // 本次更新中 React 开始渲染的时间
    commitTime: number, // 本次更新中 React committed 的时间
    interactions: Set<any> // 属于本次更新的 interactions 的集合) {
  ) {
    if (phase == "mount") {
      console.log(
        "id:" + id,
        "phase:" + phase,
        "actualDuration:" + actualDuration,
        "baseDuration:" + baseDuration,
        "startTime:" + startTime,
        "commitTime:" + commitTime,
        "interactions:" , interactions
      );
    }
  }
}

export { ProfilerAPI };
