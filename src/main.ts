import * as blocklang from "designer-core/blocklang";

import { GitUrlSegment, ExtensionJsObjectMap } from "designer-core/interfaces";
import * as consoleWrapper from "@blocklang/web-api/console"; // 因为 console 关键字，所以重命名为 consoleWrapper

/*******************************/
/****往设计器中注册  Web API*****/
/*******************************/

// 一个问题：
// 如果在这里写了组件仓库所在的网址，如 github.com
// 那么在 gitee 中备份该仓库，然后从 gitee 开始安装，则这里的值却依然是 github.com
// 如果动态获取呢？
const gitUrlSegment: GitUrlSegment = { website: "github.com", owner: "blocklang", repoName: "ide-web-api" };
const jsObjects: ExtensionJsObjectMap = { console: consoleWrapper };
blocklang.registerJsObjects(gitUrlSegment, jsObjects);
