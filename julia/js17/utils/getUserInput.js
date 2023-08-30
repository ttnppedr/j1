import promptSync from "prompt-sync";
// 讓外掛可以用control+c終止
export default promptSync({ sigint: true });
// 檢查輸入值