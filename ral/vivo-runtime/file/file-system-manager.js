import _UTIL from "../../util"


_UTIL.exportTo("getFileSystemManager", qg, ral);

let fs = ral.getFileSystemManager();
let readFileSync = fs.readFileSync;
fs.readFileSync = function (path, encode) {
    try {
        let res = readFileSync.bind(this)(path, encode);
        return res.data;
    } catch (error) {
        throw error;
    }
}