var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl, importMetaUrl;
var init_cjs_shims = __esm({
  "node_modules/tsup/assets/cjs_shims.js"() {
    getImportMetaUrl = () => typeof document === "undefined" ? new URL(`file:${__filename}`).href : document.currentScript && document.currentScript.tagName.toUpperCase() === "SCRIPT" ? document.currentScript.src : new URL("main.js", document.baseURI).href;
    importMetaUrl = /* @__PURE__ */ getImportMetaUrl();
  }
});

// lib/environment.js
var import_node_os, import_which, import_node_module, require2, packageJson, environment, environment_default;
var init_environment = __esm({
  "lib/environment.js"() {
    init_cjs_shims();
    import_node_os = __toESM(require("os"), 1);
    import_which = __toESM(require("which"), 1);
    import_node_module = require("module");
    require2 = (0, import_node_module.createRequire)(importMetaUrl);
    packageJson = require2("../package.json");
    environment = {
      cmakeJsVersion: packageJson.version,
      platform: import_node_os.default.platform(),
      isWin: import_node_os.default.platform() === "win32",
      isLinux: import_node_os.default.platform() === "linux",
      isOSX: import_node_os.default.platform() === "darwin",
      arch: import_node_os.default.arch(),
      isX86: import_node_os.default.arch() === "ia32" || import_node_os.default.arch() === "x86",
      isX64: import_node_os.default.arch() === "x64",
      isArm: import_node_os.default.arch() === "arm",
      isArm64: import_node_os.default.arch() === "arm64",
      runtime: "node",
      runtimeVersion: process.versions.node
    };
    Object.defineProperties(environment, {
      _isNinjaAvailable: {
        value: null,
        writable: true
      },
      isNinjaAvailable: {
        get: function() {
          if (this._isNinjaAvailable === null) {
            this._isNinjaAvailable = false;
            try {
              if (import_which.default.sync("ninja")) {
                this._isNinjaAvailable = true;
              }
            } catch (e) {
            }
          }
          return this._isNinjaAvailable;
        }
      },
      _isMakeAvailable: {
        value: null,
        writable: true
      },
      isMakeAvailable: {
        get: function() {
          if (this._isMakeAvailable === null) {
            this._isMakeAvailable = false;
            try {
              if (import_which.default.sync("make")) {
                this._isMakeAvailable = true;
              }
            } catch (e) {
            }
          }
          return this._isMakeAvailable;
        }
      },
      _isGPPAvailable: {
        value: null,
        writable: true
      },
      isGPPAvailable: {
        get: function() {
          if (this._isGPPAvailable === null) {
            this._isGPPAvailable = false;
            try {
              if (import_which.default.sync("g++")) {
                this._isGPPAvailable = true;
              }
            } catch (e) {
            }
          }
          return this._isGPPAvailable;
        }
      },
      _isClangAvailable: {
        value: null,
        writable: true
      },
      isClangAvailable: {
        get: function() {
          if (this._isClangAvailable === null) {
            this._isClangAvailable = false;
            try {
              if (import_which.default.sync("clang++")) {
                this._isClangAvailable = true;
              }
            } catch (e) {
            }
          }
          return this._isClangAvailable;
        }
      }
    });
    environment_default = environment;
  }
});

// lib/cmLog.js
var import_npmlog, import_debug, CMLog, cmLog_default;
var init_cmLog = __esm({
  "lib/cmLog.js"() {
    init_cjs_shims();
    import_npmlog = __toESM(require("npmlog"), 1);
    import_debug = __toESM(require("debug"), 1);
    CMLog = class {
      get level() {
        if (this.options.noLog) {
          return "silly";
        } else {
          return import_npmlog.default.level;
        }
      }
      constructor(options) {
        this.options = options || {};
        this.debug = (0, import_debug.default)(this.options.logName || "cmake-js");
      }
      silly(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.silly(cat, msg);
        }
      }
      verbose(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.verbose(cat, msg);
        }
      }
      info(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.info(cat, msg);
        }
      }
      warn(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.warn(cat, msg);
        }
      }
      http(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.http(cat, msg);
        }
      }
      error(cat, msg) {
        if (this.options.noLog) {
          this.debug(cat + ": " + msg);
        } else {
          import_npmlog.default.error(cat, msg);
        }
      }
    };
    cmLog_default = CMLog;
  }
});

// lib/targetOptions.js
var TargetOptions, targetOptions_default;
var init_targetOptions = __esm({
  "lib/targetOptions.js"() {
    init_cjs_shims();
    init_environment();
    TargetOptions = class {
      get arch() {
        return this.options.arch || environment_default.arch;
      }
      get isX86() {
        return this.arch === "ia32" || this.arch === "x86";
      }
      get isX64() {
        return this.arch === "x64";
      }
      get isArm() {
        return this.arch === "arm";
      }
      get isArm64() {
        return this.arch === "arm64";
      }
      get runtime() {
        return this.options.runtime || environment_default.runtime;
      }
      get runtimeVersion() {
        return this.options.runtimeVersion || environment_default.runtimeVersion;
      }
      constructor(options) {
        this.options = options || {};
      }
    };
    targetOptions_default = TargetOptions;
  }
});

// lib/runtimePaths.js
var import_node_assert, import_semver, NODE_MIRROR, ELECTRON_MIRROR, runtimePaths, runtimePaths_default;
var init_runtimePaths = __esm({
  "lib/runtimePaths.js"() {
    init_cjs_shims();
    import_node_assert = __toESM(require("assert"), 1);
    import_semver = __toESM(require("semver"), 1);
    NODE_MIRROR = process.env.NVM_NODEJS_ORG_MIRROR || "https://nodejs.org/dist";
    ELECTRON_MIRROR = process.env.ELECTRON_MIRROR || "https://artifacts.electronjs.org/headers/dist";
    runtimePaths = {
      node: function(targetOptions) {
        if (import_semver.default.lt(targetOptions.runtimeVersion, "4.0.0")) {
          return {
            externalPath: NODE_MIRROR + "/v" + targetOptions.runtimeVersion + "/",
            winLibs: [
              {
                dir: targetOptions.isX64 ? "x64" : "",
                name: targetOptions.runtime + ".lib"
              }
            ],
            tarPath: targetOptions.runtime + "-v" + targetOptions.runtimeVersion + ".tar.gz",
            headerOnly: false
          };
        } else {
          return {
            externalPath: NODE_MIRROR + "/v" + targetOptions.runtimeVersion + "/",
            winLibs: [
              {
                dir: targetOptions.isArm64 ? "win-arm64" : targetOptions.isX64 ? "win-x64" : "win-x86",
                name: targetOptions.runtime + ".lib"
              }
            ],
            tarPath: targetOptions.runtime + "-v" + targetOptions.runtimeVersion + "-headers.tar.gz",
            headerOnly: true
          };
        }
      },
      nw: function(targetOptions) {
        if (import_semver.default.gte(targetOptions.runtimeVersion, "0.13.0")) {
          return {
            externalPath: "https://node-webkit.s3.amazonaws.com/v" + targetOptions.runtimeVersion + "/",
            winLibs: [
              {
                dir: targetOptions.isX64 ? "x64" : "",
                name: targetOptions.runtime + ".lib"
              },
              {
                dir: targetOptions.isX64 ? "x64" : "",
                name: "node.lib"
              }
            ],
            tarPath: "nw-headers-v" + targetOptions.runtimeVersion + ".tar.gz",
            headerOnly: false
          };
        }
        return {
          externalPath: "https://node-webkit.s3.amazonaws.com/v" + targetOptions.runtimeVersion + "/",
          winLibs: [
            {
              dir: targetOptions.isX64 ? "x64" : "",
              name: targetOptions.runtime + ".lib"
            }
          ],
          tarPath: "nw-headers-v" + targetOptions.runtimeVersion + ".tar.gz",
          headerOnly: false
        };
      },
      electron: function(targetOptions) {
        return {
          externalPath: ELECTRON_MIRROR + "/v" + targetOptions.runtimeVersion + "/",
          winLibs: [
            {
              dir: targetOptions.isArm64 ? "arm64" : targetOptions.isX64 ? "x64" : "",
              name: "node.lib"
            }
          ],
          tarPath: "node-v" + targetOptions.runtimeVersion + ".tar.gz",
          headerOnly: import_semver.default.gte(targetOptions.runtimeVersion, "4.0.0-alpha")
        };
      },
      get: function(targetOptions) {
        (0, import_node_assert.default)(targetOptions && typeof targetOptions === "object");
        const runtime = targetOptions.runtime;
        const func = runtimePaths[runtime];
        let paths;
        if (typeof func === "function") {
          paths = func(targetOptions);
          if (paths && typeof paths === "object") {
            return paths;
          }
        }
        throw new Error("Unknown runtime: " + runtime);
      }
    };
    runtimePaths_default = runtimePaths;
  }
});

// lib/downloader.js
var import_node_crypto, import_axios, import_memory_stream, import_node_zlib, tar, import_node_fs, Downloader, downloader_default;
var init_downloader = __esm({
  "lib/downloader.js"() {
    init_cjs_shims();
    import_node_crypto = __toESM(require("crypto"), 1);
    import_axios = __toESM(require("axios"), 1);
    import_memory_stream = __toESM(require("memory-stream"), 1);
    import_node_zlib = __toESM(require("zlib"), 1);
    tar = __toESM(require("tar"), 1);
    import_node_fs = __toESM(require("fs"), 1);
    init_cmLog();
    Downloader = class {
      constructor(options) {
        this.options = options || {};
        this.log = new cmLog_default(this.options);
      }
      downloadToStream(url, stream, hash) {
        const self = this;
        const shasum = hash ? import_node_crypto.default.createHash(hash) : null;
        return new Promise(function(resolve, reject) {
          let length = 0;
          let done = 0;
          let lastPercent = 0;
          import_axios.default.get(url, { responseType: "stream" }).then(function(response) {
            length = parseInt(response.headers["content-length"]);
            if (typeof length !== "number") {
              length = 0;
            }
            response.data.on("data", function(chunk) {
              if (shasum) {
                shasum.update(chunk);
              }
              if (length) {
                done += chunk.length;
                let percent = done / length * 100;
                percent = Math.round(percent / 10) * 10 + 10;
                if (percent > lastPercent) {
                  self.log.verbose("DWNL", "	" + lastPercent + "%");
                  lastPercent = percent;
                }
              }
            });
            response.data.pipe(stream);
          }).catch(function(err) {
            reject(err);
          });
          stream.once("error", function(err) {
            reject(err);
          });
          stream.once("finish", function() {
            resolve(shasum ? shasum.digest("hex") : void 0);
          });
        });
      }
      async downloadString(url) {
        const result = new import_memory_stream.default();
        await this.downloadToStream(url, result);
        return result.toString();
      }
      async downloadFile(url, options) {
        if (typeof options === "string") {
          options.path = options;
        }
        const result = import_node_fs.default.createWriteStream(options.path);
        const sum = await this.downloadToStream(url, result, options.hash);
        this.testSum(url, sum, options);
        return sum;
      }
      async downloadTgz(url, options) {
        if (typeof options === "string") {
          options.cwd = options;
        }
        const gunzip = import_node_zlib.default.createGunzip();
        const extractor = tar.extract(options);
        gunzip.pipe(extractor);
        const sum = await this.downloadToStream(url, gunzip, options.hash);
        this.testSum(url, sum, options);
        return sum;
      }
      testSum(url, sum, options) {
        if (options.hash && sum && options.sum && options.sum !== sum) {
          throw new Error(options.hash.toUpperCase() + " sum of download '" + url + "' mismatch!");
        }
      }
    };
    downloader_default = Downloader;
  }
});

// lib/dist.js
function testSum(sums, sum, fPath) {
  const serverSum = sums.find(function(s) {
    return s.getPath === fPath;
  });
  if (serverSum && serverSum.sum === sum) {
    return;
  }
  throw new Error("SHA sum of file '" + fPath + "' mismatch!");
}
var import_node_path, import_posix, import_fs_extra, import_node_os2, Dist, dist_default;
var init_dist = __esm({
  "lib/dist.js"() {
    init_cjs_shims();
    init_environment();
    import_node_path = __toESM(require("path"), 1);
    import_posix = require("path/posix");
    import_fs_extra = __toESM(require("fs-extra"), 1);
    init_cmLog();
    init_targetOptions();
    init_runtimePaths();
    init_downloader();
    import_node_os2 = __toESM(require("os"), 1);
    Dist = class {
      get internalPath() {
        const cacheDirectory = ".cmake-js";
        const runtimeArchDirectory = this.targetOptions.runtime + "-" + this.targetOptions.arch;
        const runtimeVersionDirectory = "v" + this.targetOptions.runtimeVersion;
        return this.options.runtimeDirectory || import_node_path.default.join(import_node_os2.default.homedir(), cacheDirectory, runtimeArchDirectory, runtimeVersionDirectory);
      }
      get externalPath() {
        return runtimePaths_default.get(this.targetOptions).externalPath;
      }
      get downloaded() {
        let headers2 = false;
        let libs = true;
        let stat = getStat(this.internalPath);
        if (stat.isDirectory()) {
          if (this.headerOnly) {
            stat = getStat(import_node_path.default.join(this.internalPath, "include/node/node.h"));
            headers2 = stat.isFile();
          } else {
            stat = getStat(import_node_path.default.join(this.internalPath, "src/node.h"));
            if (stat.isFile()) {
              stat = getStat(import_node_path.default.join(this.internalPath, "deps/v8/include/v8.h"));
              headers2 = stat.isFile();
            }
          }
          if (environment_default.isWin) {
            for (const libPath of this.winLibs) {
              stat = getStat(libPath);
              libs = libs && stat.isFile();
            }
          }
        }
        return headers2 && libs;
        function getStat(path9) {
          try {
            return import_fs_extra.default.statSync(path9);
          } catch (e) {
            return {
              isFile: () => false,
              isDirectory: () => false
            };
          }
        }
      }
      get winLibs() {
        const libs = runtimePaths_default.get(this.targetOptions).winLibs;
        const result = [];
        for (const lib of libs) {
          result.push(import_node_path.default.join(this.internalPath, lib.dir, lib.name));
        }
        return result;
      }
      get headerOnly() {
        return runtimePaths_default.get(this.targetOptions).headerOnly;
      }
      constructor(options) {
        this.options = options || {};
        this.log = new cmLog_default(this.options);
        this.targetOptions = new targetOptions_default(this.options);
        this.downloader = new downloader_default(this.options);
      }
      async ensureDownloaded() {
        if (!this.downloaded) {
          await this.download();
        }
      }
      async download() {
        const log4 = this.log;
        log4.info("DIST", "Downloading distribution files to: " + this.internalPath);
        await import_fs_extra.default.ensureDir(this.internalPath);
        const sums = await this._downloadShaSums();
        await Promise.all([this._downloadLibs(sums), this._downloadTar(sums)]);
      }
      async _downloadShaSums() {
        if (this.targetOptions.runtime === "node") {
          const sumUrl = (0, import_posix.join)(this.externalPath, "SHASUMS256.txt");
          const log4 = this.log;
          log4.http("DIST", "	- " + sumUrl);
          return (await this.downloader.downloadString(sumUrl)).split("\n").map(function(line) {
            const parts = line.split(/\s+/);
            return {
              getPath: parts[1],
              sum: parts[0]
            };
          }).filter(function(i) {
            return i.getPath && i.sum;
          });
        } else {
          return null;
        }
      }
      async _downloadTar(sums) {
        const log4 = this.log;
        const self = this;
        const tarLocalPath = runtimePaths_default.get(self.targetOptions).tarPath;
        const tarUrl = (0, import_posix.join)(self.externalPath, tarLocalPath);
        log4.http("DIST", "	- " + tarUrl);
        const sum = await this.downloader.downloadTgz(tarUrl, {
          hash: sums ? "sha256" : null,
          cwd: self.internalPath,
          strip: 1,
          filter: function(entryPath) {
            if (entryPath === self.internalPath) {
              return true;
            }
            const ext = import_node_path.default.extname(entryPath);
            return ext && ext.toLowerCase() === ".h";
          }
        });
        if (sums) {
          testSum(sums, sum, tarLocalPath);
        }
      }
      async _downloadLibs(sums) {
        const log4 = this.log;
        const self = this;
        if (!environment_default.isWin) {
          return;
        }
        const paths = runtimePaths_default.get(self.targetOptions);
        for (const dirs of paths.winLibs) {
          const subDir = dirs.dir;
          const fn = dirs.name;
          const fPath = subDir ? (0, import_posix.join)(subDir, fn) : fn;
          const libUrl = (0, import_posix.join)(self.externalPath, fPath);
          log4.http("DIST", "	- " + libUrl);
          await import_fs_extra.default.ensureDir(import_node_path.default.join(self.internalPath, subDir));
          const sum = await this.downloader.downloadFile(libUrl, {
            path: import_node_path.default.join(self.internalPath, fPath),
            hash: sums ? "sha256" : null
          });
          if (sums) {
            testSum(sums, sum, fPath);
          }
        }
      }
    };
    dist_default = Dist;
  }
});

// lib/processHelpers.js
var import_node_child_process, processHelpers, processHelpers_default;
var init_processHelpers = __esm({
  "lib/processHelpers.js"() {
    init_cjs_shims();
    import_node_child_process = require("child_process");
    processHelpers = {
      run: function(command, options) {
        if (!options) options = {};
        return new Promise(function(resolve, reject) {
          const env = Object.assign({}, process.env);
          if (env.Path && env.PATH) {
            if (env.Path !== env.PATH) {
              env.PATH = env.Path + ";" + env.PATH;
            }
            delete env.Path;
          }
          const child = (0, import_node_child_process.spawn)(command[0], command.slice(1), {
            stdio: options.silent ? "ignore" : "inherit",
            env
          });
          let ended = false;
          child.on("error", function(e) {
            if (!ended) {
              reject(e);
              ended = true;
            }
          });
          child.on("exit", function(code, signal) {
            if (!ended) {
              if (code === 0) {
                resolve();
              } else {
                reject(new Error("Process terminated: " + code || signal));
              }
              ended = true;
            }
          });
        });
      },
      execFile: function(command) {
        return new Promise(function(resolve, reject) {
          (0, import_node_child_process.execFile)(command[0], command.slice(1), function(err, stdout, stderr) {
            if (err) {
              reject(new Error(err.message + "\n" + (stdout || stderr)));
            } else {
              resolve(stdout);
            }
          });
        });
      }
    };
    processHelpers_default = processHelpers;
  }
});

// lib/locateNAN.js
async function isNodeJSProject(dir) {
  const pjson = import_node_path2.default.join(dir, "package.json");
  const node_modules = import_node_path2.default.join(dir, "node_modules");
  try {
    let stat = await import_fs_extra2.default.stat(pjson);
    if (stat.isFile()) {
      return true;
    }
    stat = await import_fs_extra2.default.stat(node_modules);
    if (stat.isDirectory()) {
      return true;
    }
  } catch (e) {
  }
  return false;
}
async function locateNAN(projectRoot) {
  if (locateNAN.__projectRoot) {
    projectRoot = locateNAN.__projectRoot;
  }
  let result = await isNodeJSProject(projectRoot);
  if (!result) {
    return null;
  }
  const nanModulePath = import_node_path2.default.join(projectRoot, "node_modules", "nan");
  result = await isNANModule(nanModulePath);
  if (result) {
    return nanModulePath;
  }
  return await locateNAN(goUp(projectRoot));
}
function goUp(dir) {
  const items = dir.split(import_node_path2.default.sep);
  const scopeItem = items[items.length - 2];
  if (scopeItem && scopeItem[0] === "@") {
    dir = import_node_path2.default.join(dir, "..");
  }
  dir = import_node_path2.default.join(dir, "..", "..");
  return import_node_path2.default.normalize(dir);
}
var import_fs_extra2, import_node_path2, isNANModule, locateNAN_default;
var init_locateNAN = __esm({
  "lib/locateNAN.js"() {
    init_cjs_shims();
    import_fs_extra2 = __toESM(require("fs-extra"), 1);
    import_node_path2 = __toESM(require("path"), 1);
    isNANModule = async function(dir) {
      const h = import_node_path2.default.join(dir, "nan.h");
      try {
        const stat = await import_fs_extra2.default.stat(h);
        return stat.isFile();
      } catch (e) {
        return false;
      }
    };
    locateNAN_default = locateNAN;
  }
});

// lib/locateNodeApi.js
async function locateNodeApi(projectRoot) {
  if (locateNodeApi.__projectRoot) {
    projectRoot = locateNodeApi.__projectRoot;
  }
  try {
    const tmpRequire = (0, import_node_module2.createRequire)(import_node_path3.default.join(projectRoot, "package.json"));
    const inc = tmpRequire("node-addon-api");
    return inc.include.replace(/"/g, "");
  } catch (e) {
    return null;
  }
}
var import_node_path3, import_node_module2, locateNodeApi_default;
var init_locateNodeApi = __esm({
  "lib/locateNodeApi.js"() {
    init_cjs_shims();
    import_node_path3 = __toESM(require("path"), 1);
    import_node_module2 = require("module");
    locateNodeApi_default = locateNodeApi;
  }
});

// lib/import/util.js
function logWithPrefix(log4, prefix) {
  function setPrefix(logFunction) {
    return (...args) => logFunction.apply(null, [prefix, ...args]);
  }
  return {
    silly: setPrefix(log4.silly),
    verbose: setPrefix(log4.verbose),
    info: setPrefix(log4.info),
    warn: setPrefix(log4.warn),
    error: setPrefix(log4.error)
  };
}
async function regGetValue(key, value, addOpts) {
  const outReValue = value.replace(/\W/g, ".");
  const outRe = new RegExp(`^\\s+${outReValue}\\s+REG_\\w+\\s+(\\S.*)$`, "im");
  const reg = import_node_path4.default.join(process.env.SystemRoot, "System32", "reg.exe");
  const regArgs = ["query", key, "/v", value].concat(addOpts);
  import_npmlog2.default.silly("reg", "running", reg, regArgs);
  const [err, stdout, stderr] = await execFile(reg, regArgs, { encoding: "utf8" });
  import_npmlog2.default.silly("reg", "reg.exe stdout = %j", stdout);
  if (err || stderr.trim() !== "") {
    import_npmlog2.default.silly("reg", "reg.exe err = %j", err && (err.stack || err));
    import_npmlog2.default.silly("reg", "reg.exe stderr = %j", stderr);
    if (err) {
      throw err;
    }
    throw new Error(stderr);
  }
  const result = outRe.exec(stdout);
  if (!result) {
    import_npmlog2.default.silly("reg", "error parsing stdout");
    throw new Error("Could not parse output of reg.exe");
  }
  import_npmlog2.default.silly("reg", "found: %j", result[1]);
  return result[1];
}
async function regSearchKeys(keys, value, addOpts) {
  for (const key of keys) {
    try {
      return await regGetValue(key, value, addOpts);
    } catch {
      continue;
    }
  }
}
var import_npmlog2, import_node_child_process2, import_node_path4, execFile;
var init_util = __esm({
  "lib/import/util.js"() {
    init_cjs_shims();
    import_npmlog2 = __toESM(require("npmlog"), 1);
    import_node_child_process2 = __toESM(require("child_process"), 1);
    import_node_path4 = __toESM(require("path"), 1);
    execFile = async (...args) => new Promise((resolve) => {
      const child = import_node_child_process2.default.execFile(...args, (...a) => resolve(a));
      child.stdin.end();
    });
  }
});

// lib/import/find-visualstudio.js
var find_visualstudio_exports = {};
__export(find_visualstudio_exports, {
  default: () => find_visualstudio_default,
  findVisualStudio: () => findVisualStudio
});
var import_npmlog3, import_node_fs2, import_node_path5, import_node_path6, import_node_url, import_semver2, __dirname, VisualStudioFinder, find_visualstudio_default, findVisualStudio;
var init_find_visualstudio = __esm({
  "lib/import/find-visualstudio.js"() {
    init_cjs_shims();
    import_npmlog3 = __toESM(require("npmlog"), 1);
    import_node_fs2 = require("fs");
    import_node_path5 = require("path");
    import_node_path6 = require("path");
    import_node_url = require("url");
    init_util();
    import_semver2 = __toESM(require("semver"), 1);
    __dirname = (0, import_node_path6.dirname)((0, import_node_url.fileURLToPath)(importMetaUrl));
    VisualStudioFinder = class _VisualStudioFinder {
      static findVisualStudio = (...args) => new _VisualStudioFinder(...args).findVisualStudio();
      log = logWithPrefix(import_npmlog3.default, "find VS");
      regSearchKeys = regSearchKeys;
      constructor(nodeSemver, configMsvsVersion) {
        this.nodeSemver = nodeSemver;
        this.configMsvsVersion = configMsvsVersion;
        this.errorLog = [];
        this.validVersions = [];
      }
      // Logs a message at verbose level, but also saves it to be displayed later
      // at error level if an error occurs. This should help diagnose the problem.
      addLog(message) {
        this.log.verbose(message);
        this.errorLog.push(message);
      }
      async findVisualStudio() {
        this.configVersionYear = null;
        this.configPath = null;
        if (this.configMsvsVersion) {
          this.addLog("msvs_version was set from command line or npm config");
          if (this.configMsvsVersion.match(/^\d{4}$/)) {
            this.configVersionYear = parseInt(this.configMsvsVersion, 10);
            this.addLog(`- looking for Visual Studio version ${this.configVersionYear}`);
          } else {
            this.configPath = import_node_path5.win32.resolve(this.configMsvsVersion);
            this.addLog(`- looking for Visual Studio installed in "${this.configPath}"`);
          }
        } else {
          this.addLog("msvs_version not set from command line or npm config");
        }
        if (process.env.VCINSTALLDIR) {
          this.envVcInstallDir = import_node_path5.win32.resolve(process.env.VCINSTALLDIR, "..");
          this.addLog(
            `running in VS Command Prompt, installation path is:
"${this.envVcInstallDir}"
- will only use this version`
          );
        } else {
          this.addLog("VCINSTALLDIR not set, not running in VS Command Prompt");
        }
        const checks = [
          () => this.findVisualStudio2017OrNewer(),
          () => this.findVisualStudio2015(),
          () => this.findVisualStudio2013()
        ];
        for (const check of checks) {
          const info = await check();
          if (info) {
            return this.succeed(info);
          }
        }
        return this.fail();
      }
      succeed(info) {
        this.log.info(
          `using VS${info.versionYear} (${info.version}) found at:
"${info.path}"
run with --verbose for detailed information`
        );
        return info;
      }
      fail() {
        if (this.configMsvsVersion && this.envVcInstallDir) {
          this.errorLog.push("msvs_version does not match this VS Command Prompt or the", "installation cannot be used.");
        } else if (this.configMsvsVersion) {
          this.errorLog.push("");
          if (this.validVersions) {
            this.errorLog.push("valid versions for msvs_version:");
            this.validVersions.forEach((version) => {
              this.errorLog.push(`- "${version}"`);
            });
          } else {
            this.errorLog.push("no valid versions for msvs_version were found");
          }
        }
        const errorLog = this.errorLog.join("\n");
        const infoLog = [
          "**************************************************************",
          "You need to install the latest version of Visual Studio",
          'including the "Desktop development with C++" workload.',
          "For more information consult the documentation at:",
          "https://github.com/nodejs/node-gyp#on-windows",
          "**************************************************************"
        ].join("\n");
        this.log.error(`
${errorLog}

${infoLog}
`);
        throw new Error("Could not find any Visual Studio installation to use");
      }
      // Invoke the PowerShell script to get information about Visual Studio 2017
      // or newer installations
      async findVisualStudio2017OrNewer() {
        const ps = import_node_path5.win32.join(process.env.SystemRoot, "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
        const csFile = import_node_path5.win32.join(__dirname, "Find-VisualStudio.cs");
        const psArgs = [
          "-ExecutionPolicy",
          "Unrestricted",
          "-NoProfile",
          "-Command",
          "&{Add-Type -Path '" + csFile + "';[VisualStudioConfiguration.Main]::PrintJson()}"
        ];
        this.log.silly("Running", ps, psArgs);
        const [err, stdout, stderr] = await execFile(ps, psArgs, { encoding: "utf8" });
        return this.parseData(err, stdout, stderr);
      }
      // Parse the output of the PowerShell script and look for an installation
      // of Visual Studio 2017 or newer to use
      parseData(err, stdout, stderr) {
        this.log.silly("PS stderr = %j", stderr);
        const failPowershell = () => {
          this.addLog(
            "could not use PowerShell to find Visual Studio 2017 or newer, try re-running with '--loglevel silly' for more details"
          );
          return null;
        };
        if (err) {
          this.log.silly("PS err = %j", err && (err.stack || err));
          return failPowershell();
        }
        let vsInfo;
        try {
          vsInfo = JSON.parse(stdout);
        } catch (e) {
          this.log.silly("PS stdout = %j", stdout);
          this.log.silly(e);
          return failPowershell();
        }
        if (!Array.isArray(vsInfo)) {
          this.log.silly("PS stdout = %j", stdout);
          return failPowershell();
        }
        vsInfo = vsInfo.map((info) => {
          this.log.silly(`processing installation: "${info.path}"`);
          info.path = import_node_path5.win32.resolve(info.path);
          const ret = this.getVersionInfo(info);
          ret.path = info.path;
          ret.msBuild = this.getMSBuild(info, ret.versionYear);
          ret.toolset = this.getToolset(info, ret.versionYear);
          ret.sdk = this.getSDK(info);
          return ret;
        });
        this.log.silly("vsInfo:", vsInfo);
        vsInfo = vsInfo.filter((info) => {
          if (info.versionYear) {
            return true;
          }
          this.addLog(`unknown version "${info.version}" found at "${info.path}"`);
          return false;
        });
        vsInfo.sort((a, b) => b.versionYear - a.versionYear);
        for (let i = 0; i < vsInfo.length; ++i) {
          const info = vsInfo[i];
          this.addLog(`checking VS${info.versionYear} (${info.version}) found at:
"${info.path}"`);
          if (info.msBuild) {
            this.addLog('- found "Visual Studio C++ core features"');
          } else {
            this.addLog('- "Visual Studio C++ core features" missing');
            continue;
          }
          if (info.toolset) {
            this.addLog(`- found VC++ toolset: ${info.toolset}`);
          } else {
            this.addLog("- missing any VC++ toolset");
            continue;
          }
          if (info.sdk) {
            this.addLog(`- found Windows SDK: ${info.sdk}`);
          } else {
            this.addLog("- missing any Windows SDK");
            continue;
          }
          if (!this.checkConfigVersion(info.versionYear, info.path)) {
            continue;
          }
          return info;
        }
        this.addLog("could not find a version of Visual Studio 2017 or newer to use");
        return null;
      }
      // Helper - process version information
      getVersionInfo(info) {
        const match = /^(\d+)\.(\d+)\..*/.exec(info.version);
        if (!match) {
          this.log.silly("- failed to parse version:", info.version);
          return {};
        }
        this.log.silly("- version match = %j", match);
        const ret = {
          version: info.version,
          versionMajor: parseInt(match[1], 10),
          versionMinor: parseInt(match[2], 10)
        };
        if (ret.versionMajor === 15) {
          ret.versionYear = 2017;
          return ret;
        }
        if (ret.versionMajor === 16) {
          ret.versionYear = 2019;
          return ret;
        }
        if (ret.versionMajor === 17) {
          ret.versionYear = 2022;
          return ret;
        }
        this.log.silly("- unsupported version:", ret.versionMajor);
        return {};
      }
      msBuildPathExists(path9) {
        return (0, import_node_fs2.existsSync)(path9);
      }
      // Helper - process MSBuild information
      getMSBuild(info, versionYear) {
        const pkg = "Microsoft.VisualStudio.VC.MSBuild.Base";
        const msbuildPath = import_node_path5.win32.join(info.path, "MSBuild", "Current", "Bin", "MSBuild.exe");
        const msbuildPathArm64 = import_node_path5.win32.join(info.path, "MSBuild", "Current", "Bin", "arm64", "MSBuild.exe");
        if (info.packages.indexOf(pkg) !== -1) {
          this.log.silly("- found VC.MSBuild.Base");
          if (versionYear === 2017) {
            return import_node_path5.win32.join(info.path, "MSBuild", "15.0", "Bin", "MSBuild.exe");
          }
          if (versionYear === 2019) {
            return msbuildPath;
          }
        }
        if (process.arch === "arm64" && this.msBuildPathExists(msbuildPathArm64)) {
          return msbuildPathArm64;
        } else if (this.msBuildPathExists(msbuildPath)) {
          return msbuildPath;
        }
        return null;
      }
      // Helper - process toolset information
      getToolset(info, versionYear) {
        const pkg = "Microsoft.VisualStudio.Component.VC.Tools.x86.x64";
        const express = "Microsoft.VisualStudio.WDExpress";
        if (info.packages.indexOf(pkg) !== -1) {
          this.log.silly("- found VC.Tools.x86.x64");
        } else if (info.packages.indexOf(express) !== -1) {
          this.log.silly("- found Visual Studio Express (looking for toolset)");
        } else {
          return null;
        }
        if (versionYear === 2017) {
          return "v141";
        } else if (versionYear === 2019) {
          return "v142";
        } else if (versionYear === 2022) {
          return "v143";
        }
        this.log.silly("- invalid versionYear:", versionYear);
        return null;
      }
      // Helper - process Windows SDK information
      getSDK(info) {
        const win8SDK = "Microsoft.VisualStudio.Component.Windows81SDK";
        const win10SDKPrefix = "Microsoft.VisualStudio.Component.Windows10SDK.";
        const win11SDKPrefix = "Microsoft.VisualStudio.Component.Windows11SDK.";
        let Win10or11SDKVer = 0;
        info.packages.forEach((pkg) => {
          if (!pkg.startsWith(win10SDKPrefix) && !pkg.startsWith(win11SDKPrefix)) {
            return;
          }
          const parts = pkg.split(".");
          if (parts.length > 5 && parts[5] !== "Desktop") {
            this.log.silly("- ignoring non-Desktop Win10/11SDK:", pkg);
            return;
          }
          const foundSdkVer = parseInt(parts[4], 10);
          if (isNaN(foundSdkVer)) {
            this.log.silly("- failed to parse Win10/11SDK number:", pkg);
            return;
          }
          this.log.silly("- found Win10/11SDK:", foundSdkVer);
          Win10or11SDKVer = Math.max(Win10or11SDKVer, foundSdkVer);
        });
        if (Win10or11SDKVer !== 0) {
          return `10.0.${Win10or11SDKVer}.0`;
        } else if (info.packages.indexOf(win8SDK) !== -1) {
          this.log.silly("- found Win8SDK");
          return "8.1";
        }
        return null;
      }
      // Find an installation of Visual Studio 2015 to use
      async findVisualStudio2015() {
        if (import_semver2.default.gte(this.nodeSemver, "19.0.0")) {
          this.addLog("not looking for VS2015 as it is only supported up to Node.js 18");
          return null;
        }
        return this.findOldVS({
          version: "14.0",
          versionMajor: 14,
          versionMinor: 0,
          versionYear: 2015,
          toolset: "v140"
        });
      }
      // Find an installation of Visual Studio 2013 to use
      async findVisualStudio2013() {
        if (import_semver2.default.gte(this.nodeSemver, "9.0.0")) {
          this.addLog("not looking for VS2013 as it is only supported up to Node.js 8");
          return null;
        }
        return this.findOldVS({
          version: "12.0",
          versionMajor: 12,
          versionMinor: 0,
          versionYear: 2013,
          toolset: "v120"
        });
      }
      // Helper - common code for VS2013 and VS2015
      async findOldVS(info) {
        const regVC7 = [
          "HKLM\\Software\\Microsoft\\VisualStudio\\SxS\\VC7",
          "HKLM\\Software\\Wow6432Node\\Microsoft\\VisualStudio\\SxS\\VC7"
        ];
        const regMSBuild = "HKLM\\Software\\Microsoft\\MSBuild\\ToolsVersions";
        this.addLog(`looking for Visual Studio ${info.versionYear}`);
        try {
          let res = await this.regSearchKeys(regVC7, info.version, []);
          const vsPath = import_node_path5.win32.resolve(res, "..");
          this.addLog(`- found in "${vsPath}"`);
          const msBuildRegOpts = process.arch === "ia32" ? [] : ["/reg:32"];
          try {
            res = await this.regSearchKeys([`${regMSBuild}\\${info.version}`], "MSBuildToolsPath", msBuildRegOpts);
          } catch (err) {
            this.addLog("- could not find MSBuild in registry for this version");
            return null;
          }
          const msBuild = import_node_path5.win32.join(res, "MSBuild.exe");
          this.addLog(`- MSBuild in "${msBuild}"`);
          if (!this.checkConfigVersion(info.versionYear, vsPath)) {
            return null;
          }
          info.path = vsPath;
          info.msBuild = msBuild;
          info.sdk = null;
          return info;
        } catch (err) {
          this.addLog("- not found");
          return null;
        }
      }
      // After finding a usable version of Visual Studio:
      // - add it to validVersions to be displayed at the end if a specific
      //   version was requested and not found;
      // - check if this is the version that was requested.
      // - check if this matches the Visual Studio Command Prompt
      checkConfigVersion(versionYear, vsPath) {
        this.validVersions.push(versionYear);
        this.validVersions.push(vsPath);
        if (this.configVersionYear && this.configVersionYear !== versionYear) {
          this.addLog("- msvs_version does not match this version");
          return false;
        }
        if (this.configPath && import_node_path5.win32.relative(this.configPath, vsPath) !== "") {
          this.addLog("- msvs_version does not point to this installation");
          return false;
        }
        if (this.envVcInstallDir && import_node_path5.win32.relative(this.envVcInstallDir, vsPath) !== "") {
          this.addLog("- does not match this Visual Studio Command Prompt");
          return false;
        }
        return true;
      }
    };
    find_visualstudio_default = VisualStudioFinder;
    findVisualStudio = VisualStudioFinder.findVisualStudio;
  }
});

// lib/toolset.js
async function getFindVisualStudio() {
  if (!_findVisualStudio && environment_default.isWin) {
    const vsModule = await Promise.resolve().then(() => (init_find_visualstudio(), find_visualstudio_exports));
    _findVisualStudio = vsModule.findVisualStudio;
  }
  return _findVisualStudio;
}
var import_node_assert2, _findVisualStudio, Toolset, toolset_default;
var init_toolset = __esm({
  "lib/toolset.js"() {
    init_cjs_shims();
    init_targetOptions();
    init_environment();
    import_node_assert2 = __toESM(require("assert"), 1);
    init_cmLog();
    _findVisualStudio = null;
    Toolset = class {
      constructor(options) {
        this.options = options || {};
        this.targetOptions = new targetOptions_default(this.options);
        this.generator = options.generator;
        this.toolset = options.toolset;
        this.platform = options.platform;
        this.target = options.target;
        this.cCompilerPath = options.cCompilerPath;
        this.cppCompilerPath = options.cppCompilerPath;
        this.compilerFlags = [];
        this.linkerFlags = [];
        this.makePath = null;
        this.log = new cmLog_default(this.options);
        this._initialized = false;
      }
      async initialize(install) {
        if (!this._initialized) {
          if (environment_default.isWin) {
            await this.initializeWin(install);
          } else {
            this.initializePosix(install);
          }
          this._initialized = true;
        }
      }
      initializePosix(install) {
        if (!this.cCompilerPath || !this.cppCompilerPath) {
          if (!environment_default.isGPPAvailable && !environment_default.isClangAvailable) {
            if (environment_default.isOSX) {
              throw new Error(
                "C++ Compiler toolset is not available. Install Xcode Commandline Tools from Apple Dev Center, or install Clang with homebrew by invoking: 'brew install llvm --with-clang --with-asan'."
              );
            } else {
              throw new Error(
                "C++ Compiler toolset is not available. Install proper compiler toolset with your package manager, eg. 'sudo apt-get install g++'."
              );
            }
          }
          if (this.options.preferClang && environment_default.isClangAvailable) {
            if (install) {
              this.log.info("TOOL", "Using clang++ compiler, because preferClang option is set, and clang++ is available.");
            }
            this.cppCompilerPath = this.cppCompilerPath || "clang++";
            this.cCompilerPath = this.cCompilerPath || "clang";
          } else if (this.options.preferGnu && environment_default.isGPPAvailable) {
            if (install) {
              this.log.info("TOOL", "Using g++ compiler, because preferGnu option is set, and g++ is available.");
            }
            this.cppCompilerPath = this.cppCompilerPath || "g++";
            this.cCompilerPath = this.cCompilerPath || "gcc";
          }
        }
        if (this.generator) {
          if (install) {
            this.log.info("TOOL", "Using " + this.generator + " generator, as specified from commandline.");
          }
        } else if (environment_default.isOSX) {
          if (this.options.preferXcode) {
            if (install) {
              this.log.info("TOOL", "Using Xcode generator, because preferXcode option is set.");
            }
            this.generator = "Xcode";
          } else if (this.options.preferMake && environment_default.isMakeAvailable) {
            if (install) {
              this.log.info(
                "TOOL",
                "Using Unix Makefiles generator, because preferMake option is set, and make is available."
              );
            }
            this.generator = "Unix Makefiles";
          } else if (environment_default.isNinjaAvailable) {
            if (install) {
              this.log.info("TOOL", "Using Ninja generator, because ninja is available.");
            }
            this.generator = "Ninja";
          } else {
            if (install) {
              this.log.info("TOOL", "Using Unix Makefiles generator.");
            }
            this.generator = "Unix Makefiles";
          }
        } else {
          if (this.options.preferMake && environment_default.isMakeAvailable) {
            if (install) {
              this.log.info(
                "TOOL",
                "Using Unix Makefiles generator, because preferMake option is set, and make is available."
              );
            }
            this.generator = "Unix Makefiles";
          } else if (environment_default.isNinjaAvailable) {
            if (install) {
              this.log.info("TOOL", "Using Ninja generator, because ninja is available.");
            }
            this.generator = "Ninja";
          } else {
            if (install) {
              this.log.info("TOOL", "Using Unix Makefiles generator.");
            }
            this.generator = "Unix Makefiles";
          }
        }
        if (environment_default.isOSX) {
          if (install) {
            this.log.verbose("TOOL", "Setting default OSX compiler flags.");
          }
          this.compilerFlags.push("-D_DARWIN_USE_64_BIT_INODE=1");
          this.compilerFlags.push("-D_LARGEFILE_SOURCE");
          this.compilerFlags.push("-D_FILE_OFFSET_BITS=64");
          this.linkerFlags.push("-undefined dynamic_lookup");
        }
        this.compilerFlags.push("-DBUILDING_NODE_EXTENSION");
        if (this.options.target) {
          this.log.info("TOOL", "Building only the " + this.options.target + " target, as specified from the command line.");
        }
      }
      async initializeWin(install) {
        if (!this.generator) {
          const foundVsInfo = await this._getTopSupportedVisualStudioGenerator();
          if (foundVsInfo) {
            if (install) {
              this.log.info("TOOL", `Using ${foundVsInfo.generator} generator.`);
            }
            this.generator = foundVsInfo.generator;
            const isAboveVS16 = foundVsInfo.versionMajor >= 16;
            if (!this.platform && isAboveVS16) {
              switch (this.targetOptions.arch) {
                case "ia32":
                case "x86":
                  this.platform = "Win32";
                  break;
                case "x64":
                  this.platform = "x64";
                  break;
                case "arm":
                  this.platform = "ARM";
                  break;
                case "arm64":
                  this.platform = "ARM64";
                  break;
                default:
                  this.log.warn("TOOL", "Unknown NodeJS architecture: " + this.targetOptions.arch);
                  break;
              }
            }
          } else {
            throw new Error("There is no Visual C++ compiler installed. Install Visual C++ Build Toolset or Visual Studio.");
          }
        } else {
          if (install) {
            this.log.info("TOOL", "Using " + this.options.generator + " generator, as specified from commandline.");
          }
        }
        this.linkerFlags.push("/DELAYLOAD:NODE.EXE");
        if (this.targetOptions.isX86) {
          if (install) {
            this.log.verbose("TOOL", "Setting SAFESEH:NO linker flag.");
          }
          this.linkerFlags.push("/SAFESEH:NO");
        }
      }
      async _getTopSupportedVisualStudioGenerator() {
        const { default: CMake2 } = await Promise.resolve().then(() => (init_cMake(), cMake_exports));
        (0, import_node_assert2.default)(environment_default.isWin);
        const findVisualStudio2 = await getFindVisualStudio();
        const selectedVs = await findVisualStudio2(environment_default.runtimeVersion, this.options.msvsVersion);
        if (!selectedVs) return null;
        const list = await CMake2.getGenerators(this.options, this.log);
        for (const gen of list) {
          const found = gen.startsWith(`Visual Studio ${selectedVs.versionMajor}`);
          if (!found) {
            continue;
          }
          const isAboveVS16 = selectedVs.versionMajor >= 16;
          if (!isAboveVS16) {
            const is64Bit = gen.endsWith("Win64");
            if (this.targetOptions.isX86 && is64Bit || this.targetOptions.isX64 && !is64Bit) {
              continue;
            }
          }
          return {
            ...selectedVs,
            generator: gen
          };
        }
        return null;
      }
    };
    toolset_default = Toolset;
  }
});

// lib/cMake.js
var cMake_exports = {};
__export(cMake_exports, {
  default: () => cMake_default
});
var import_which2, import_fs_extra3, import_node_path7, import_node_path8, import_node_url2, import_rc, import_node_api_headers, __dirname2, npmConfigData, CMake, cMake_default;
var init_cMake = __esm({
  "lib/cMake.js"() {
    init_cjs_shims();
    import_which2 = __toESM(require("which"), 1);
    import_fs_extra3 = __toESM(require("fs-extra"), 1);
    import_node_path7 = __toESM(require("path"), 1);
    import_node_path8 = require("path");
    import_node_url2 = require("url");
    init_environment();
    init_dist();
    init_cmLog();
    init_targetOptions();
    init_processHelpers();
    init_locateNAN();
    init_locateNodeApi();
    import_rc = __toESM(require("rc"), 1);
    init_toolset();
    import_node_api_headers = __toESM(require("node-api-headers"), 1);
    __dirname2 = (0, import_node_path8.dirname)((0, import_node_url2.fileURLToPath)(importMetaUrl));
    npmConfigData = (0, import_rc.default)("npm");
    CMake = class _CMake {
      get path() {
        return this.options.cmakePath || "cmake";
      }
      get isAvailable() {
        if (this._isAvailable === null) {
          this._isAvailable = _CMake.isAvailable(this.options);
        }
        return this._isAvailable;
      }
      constructor(options) {
        this.options = options || {};
        this.log = new cmLog_default(this.options);
        this.dist = new dist_default(this.options);
        this.projectRoot = import_node_path7.default.resolve(this.options.directory || process.cwd());
        this.workDir = import_node_path7.default.resolve(this.options.out || import_node_path7.default.join(this.projectRoot, "build"));
        this.config = this.options.config || (this.options.debug ? "Debug" : "Release");
        this.buildDir = import_node_path7.default.join(this.workDir, this.config);
        this._isAvailable = null;
        this.targetOptions = new targetOptions_default(this.options);
        this.toolset = new toolset_default(this.options);
        this.cMakeOptions = this.options.cMakeOptions || {};
        this.extraCMakeArgs = this.options.extraCMakeArgs || [];
        this.silent = !!options.silent;
      }
      static isAvailable(options) {
        options = options || {};
        try {
          if (options.cmakePath) {
            const stat = import_fs_extra3.default.lstatSync(options.cmakePath);
            return !stat.isDirectory();
          } else {
            import_which2.default.sync("cmake");
            return true;
          }
        } catch (e) {
        }
        return false;
      }
      static async getGenerators(options, log4) {
        const arch = " [arch]";
        options = options || {};
        const gens = [];
        if (_CMake.isAvailable(options)) {
          try {
            const stdout2 = await processHelpers_default.execFile([options.cmakePath || "cmake", "-E", "capabilities"]);
            const capabilities = JSON.parse(stdout2);
            return capabilities.generators.map((x) => x.name);
          } catch (error) {
            if (log4) {
              log4.verbose("TOOL", "Failed to query CMake capabilities (CMake is probably older than 3.7)");
            }
          }
          const stdout = await processHelpers_default.execFile([options.cmakePath || "cmake", "--help"]);
          const hasCr = stdout.includes("\r\n");
          const output = hasCr ? stdout.split("\r\n") : stdout.split("\n");
          let on = false;
          output.forEach(function(line, i) {
            if (on) {
              const parts = line.split("=");
              if (parts.length === 2 && parts[0].trim() || parts.length === 1 && i !== output.length - 1 && output[i + 1].trim()[0] === "=") {
                let gen = parts[0].trim();
                if (gen.endsWith(arch)) {
                  gen = gen.substr(0, gen.length - arch.length);
                }
                gens.push(gen);
              }
            }
            if (line.trim() === "Generators") {
              on = true;
            }
          });
        } else {
          throw new Error("CMake is not installed. Install CMake.");
        }
        return gens;
      }
      verifyIfAvailable() {
        if (!this.isAvailable) {
          throw new Error(
            "CMake executable is not found. Please use your system's package manager to install it, or you can get installers from there: http://cmake.org."
          );
        }
      }
      async getConfigureCommand() {
        let command = [this.path, this.projectRoot, "--no-warn-unused-cli"];
        const D = [];
        D.push({ CMAKE_JS_VERSION: environment_default.cmakeJsVersion });
        D.push({ CMAKE_BUILD_TYPE: this.config });
        if (environment_default.isWin) {
          D.push({ CMAKE_RUNTIME_OUTPUT_DIRECTORY: this.workDir });
        } else if (this.workDir.endsWith(this.config)) {
          D.push({ CMAKE_LIBRARY_OUTPUT_DIRECTORY: this.workDir });
        } else {
          D.push({ CMAKE_LIBRARY_OUTPUT_DIRECTORY: this.buildDir });
        }
        D.push({ CMAKE_MSVC_RUNTIME_LIBRARY: "MultiThreaded$<$<CONFIG:Debug>:Debug>" });
        const includesString = await this.getCmakeJsIncludeString();
        D.push({ CMAKE_JS_INC: includesString });
        const srcsString = this.getCmakeJsSrcString();
        D.push({ CMAKE_JS_SRC: srcsString });
        D.push({ NODE_RUNTIME: this.targetOptions.runtime });
        D.push({ NODE_RUNTIMEVERSION: this.targetOptions.runtimeVersion });
        D.push({ NODE_ARCH: this.targetOptions.arch });
        if (environment_default.isOSX) {
          if (this.targetOptions.arch) {
            let xcodeArch = this.targetOptions.arch;
            if (xcodeArch === "x64") xcodeArch = "x86_64";
            D.push({ CMAKE_OSX_ARCHITECTURES: xcodeArch });
          }
        }
        for (const [key, value] of Object.entries(this.cMakeOptions)) {
          D.push({ [key]: value });
        }
        await this.toolset.initialize(false);
        const libsString = this.getCmakeJsLibString();
        D.push({ CMAKE_JS_LIB: libsString });
        if (environment_default.isWin) {
          const nodeLibDefPath = this.getNodeLibDefPath();
          if (nodeLibDefPath) {
            const nodeLibPath = import_node_path7.default.join(this.workDir, "node.lib");
            D.push({ CMAKE_JS_NODELIB_DEF: nodeLibDefPath });
            D.push({ CMAKE_JS_NODELIB_TARGET: nodeLibPath });
          }
        }
        if (this.toolset.generator) {
          command.push("-G", this.toolset.generator);
        }
        if (this.toolset.platform) {
          command.push("-A", this.toolset.platform);
        }
        if (this.toolset.toolset) {
          command.push("-T", this.toolset.toolset);
        }
        if (this.toolset.cppCompilerPath) {
          D.push({ CMAKE_CXX_COMPILER: this.toolset.cppCompilerPath });
        }
        if (this.toolset.cCompilerPath) {
          D.push({ CMAKE_C_COMPILER: this.toolset.cCompilerPath });
        }
        if (this.toolset.compilerFlags.length) {
          D.push({ CMAKE_CXX_FLAGS: this.toolset.compilerFlags.join(" ") });
        }
        if (this.toolset.linkerFlags.length) {
          D.push({ CMAKE_SHARED_LINKER_FLAGS: this.toolset.linkerFlags.join(" ") });
        }
        if (this.toolset.makePath) {
          D.push({ CMAKE_MAKE_PROGRAM: this.toolset.makePath });
        }
        for (const [key, value] of Object.entries(npmConfigData)) {
          if (key.startsWith("cmake_")) {
            const sk = key.substr(6);
            if (sk && value) {
              D.push({ [sk]: value });
            }
          }
        }
        command = command.concat(
          D.map(function(p) {
            return "-D" + Object.keys(p)[0] + "=" + Object.values(p)[0];
          })
        );
        return command.concat(this.extraCMakeArgs);
      }
      getCmakeJsLibString() {
        const libs = [];
        if (environment_default.isWin) {
          const nodeLibDefPath = this.getNodeLibDefPath();
          if (nodeLibDefPath) {
            libs.push(import_node_path7.default.join(this.workDir, "node.lib"));
          } else {
            libs.push(...this.dist.winLibs);
          }
        }
        return libs.join(";");
      }
      async getCmakeJsIncludeString() {
        let incPaths = [];
        if (!this.options.isNodeApi) {
          if (this.dist.headerOnly) {
            incPaths = [import_node_path7.default.join(this.dist.internalPath, "/include/node")];
          } else {
            const nodeH = import_node_path7.default.join(this.dist.internalPath, "/src");
            const v8H = import_node_path7.default.join(this.dist.internalPath, "/deps/v8/include");
            const uvH = import_node_path7.default.join(this.dist.internalPath, "/deps/uv/include");
            incPaths = [nodeH, v8H, uvH];
          }
          const nanH = await locateNAN_default(this.projectRoot);
          if (nanH) {
            incPaths.push(nanH);
          }
        } else {
          incPaths.push(import_node_api_headers.default.include_dir);
          const napiH = await locateNodeApi_default(this.projectRoot);
          if (napiH) {
            incPaths.push(napiH);
          }
        }
        return incPaths.join(";");
      }
      getCmakeJsSrcString() {
        const srcPaths = [];
        if (environment_default.isWin) {
          const delayHook = import_node_path7.default.normalize(import_node_path7.default.join(__dirname2, "cpp", "win_delay_load_hook.cc"));
          srcPaths.push(delayHook.replace(/\\/gm, "/"));
        }
        return srcPaths.join(";");
      }
      getNodeLibDefPath() {
        return environment_default.isWin && this.options.isNodeApi ? import_node_api_headers.default.def_paths.node_api_def : void 0;
      }
      async configure() {
        this.verifyIfAvailable();
        this.log.info("CMD", "CONFIGURE");
        const listPath = import_node_path7.default.join(this.projectRoot, "CMakeLists.txt");
        const command = await this.getConfigureCommand();
        try {
          await import_fs_extra3.default.lstat(listPath);
        } catch (e) {
          throw new Error("'" + listPath + "' not found.");
        }
        try {
          await import_fs_extra3.default.ensureDir(this.workDir);
        } catch (e) {
        }
        const cwd = process.cwd();
        process.chdir(this.workDir);
        try {
          await this._run(command);
        } finally {
          process.chdir(cwd);
        }
      }
      async ensureConfigured() {
        try {
          await import_fs_extra3.default.lstat(import_node_path7.default.join(this.workDir, "CMakeCache.txt"));
        } catch (e) {
          await this.configure();
        }
      }
      getBuildCommand() {
        const command = [this.path, "--build", this.workDir, "--config", this.config];
        if (this.options.target) {
          command.push("--target", this.options.target);
        }
        if (this.options.parallel) {
          command.push("--parallel", this.options.parallel);
        }
        return Promise.resolve(command.concat(this.extraCMakeArgs));
      }
      async build() {
        this.verifyIfAvailable();
        await this.ensureConfigured();
        const buildCommand = await this.getBuildCommand();
        this.log.info("CMD", "BUILD");
        await this._run(buildCommand);
      }
      getCleanCommand() {
        return [this.path, "-E", "remove_directory", this.workDir].concat(this.extraCMakeArgs);
      }
      clean() {
        this.verifyIfAvailable();
        this.log.info("CMD", "CLEAN");
        return this._run(this.getCleanCommand());
      }
      async reconfigure() {
        this.extraCMakeArgs = [];
        await this.clean();
        await this.configure();
      }
      async rebuild() {
        this.extraCMakeArgs = [];
        await this.clean();
        await this.build();
      }
      async compile() {
        this.extraCMakeArgs = [];
        try {
          await this.build();
        } catch (e) {
          this.log.info("REP", "Build has been failed, trying to do a full rebuild.");
          await this.rebuild();
        }
      }
      _run(command) {
        this.log.info("RUN", command);
        return processHelpers_default.run(command, { silent: this.silent });
      }
      async getGenerators() {
        return _CMake.getGenerators(this.options, this.log);
      }
    };
    cMake_default = CMake;
  }
});

// lib/index.js
var index_exports = {};
__export(index_exports, {
  BuildSystem: () => buildSystem_default,
  CMLog: () => cmLog_default,
  CMake: () => cMake_default,
  Dist: () => dist_default,
  Downloader: () => downloader_default,
  TargetOptions: () => targetOptions_default,
  Toolset: () => toolset_default,
  default: () => index_default,
  environment: () => environment_default
});
module.exports = __toCommonJS(index_exports);
init_cjs_shims();

// lib/buildSystem.js
init_cjs_shims();
init_cMake();
init_dist();
init_cmLog();

// lib/appCMakeJSConfig.js
init_cjs_shims();
var import_node_path9 = __toESM(require("path"), 1);
var import_node_fs3 = __toESM(require("fs"), 1);
function getConfig(lookPath, log4) {
  const pjsonPath = import_node_path9.default.join(lookPath, "package.json");
  log4.silly("CFG", "Looking for package.json in: '" + pjsonPath + "'.");
  try {
    const content = import_node_fs3.default.readFileSync(pjsonPath, "utf-8");
    const json = JSON.parse(content);
    log4.silly("CFG", "Loaded:\n" + JSON.stringify(json));
    if (json && json["cmake-js"] && typeof json["cmake-js"] === "object") {
      log4.silly("CFG", "Config found.");
      return json["cmake-js"];
    } else {
      log4.silly("CFG", "Config not found.");
      return null;
    }
  } catch (e) {
    log4.silly("CFG", "'package.json' not found.");
    return null;
  }
}
function appCMakeJSConfig_default(projectPath, log4) {
  log4.verbose("CFG", "Looking for application level CMake.js config in '" + projectPath + ".");
  let currPath = projectPath;
  let lastConfig = null;
  let currConfig;
  for (; ; ) {
    currConfig = getConfig(currPath, log4);
    if (currConfig) {
      lastConfig = currConfig;
    }
    try {
      log4.silly("CFG", "Looking for parent path.");
      const lastPath = currPath;
      currPath = import_node_path9.default.normalize(import_node_path9.default.join(currPath, ".."));
      if (lastPath === currPath) {
        currPath = null;
      }
      if (currPath) {
        log4.silly("CFG", "Parent path: '" + currPath + "'.");
      }
    } catch (e) {
      log4.silly("CFG", "Exception:\n" + e.stack);
      break;
    }
    if (currPath === null) {
      log4.silly("CFG", "Parent path with package.json file doesn't exists. Done.");
      break;
    }
  }
  if (lastConfig) {
    log4.verbose("CFG", "Application level CMake.js config found:\n" + JSON.stringify(lastConfig));
  } else {
    log4.verbose("CFG", "Application level CMake.js config doesn't exists.");
  }
  return lastConfig;
}

// lib/npmConfig.js
init_cjs_shims();
function getNpmConfig() {
  const npmOptions = {};
  const npmConfigPrefix = "npm_config_";
  Object.keys(process.env).forEach(function(name) {
    if (name.indexOf(npmConfigPrefix) !== 0) {
      return;
    }
    const value = process.env[name];
    name = name.substring(npmConfigPrefix.length);
    if (name) {
      npmOptions[name] = value;
    }
  }, this);
  return npmOptions;
}
function npmConfig_default(log4) {
  log4.verbose("CFG", "Looking for NPM config.");
  const options = getNpmConfig();
  if (options) {
    log4.silly("CFG", "NPM options:", options);
  } else {
    log4.verbose("CFG", "There are no NPM options available.");
  }
  return options;
}

// lib/buildSystem.js
var import_node_path10 = __toESM(require("path"), 1);
var import_node_fs4 = __toESM(require("fs"), 1);
init_toolset();
function isNodeApi(log4, projectRoot) {
  try {
    const pjsonPath = import_node_path10.default.join(projectRoot, "package.json");
    const content = import_node_fs4.default.readFileSync(pjsonPath, "utf-8");
    const projectPkgJson = JSON.parse(content);
    return !!projectPkgJson?.binary?.napi_versions;
  } catch (e) {
    log4.silly("CFG", "'package.json' not found.");
    return false;
  }
}
var BuildSystem = class {
  constructor(options) {
    this.options = options || {};
    this.options.directory = import_node_path10.default.resolve(this.options.directory || process.cwd());
    this.options.out = import_node_path10.default.resolve(this.options.out || import_node_path10.default.join(this.options.directory, "build"));
    this.log = new cmLog_default(this.options);
    this.options.isNodeApi = isNodeApi(this.log, this.options.directory);
    const appConfig = appCMakeJSConfig_default(this.options.directory, this.log);
    const npmOptions = npmConfig_default(this.log);
    if (npmOptions && typeof npmOptions === "object" && Object.keys(npmOptions).length) {
      this.options.runtimeDirectory = npmOptions["nodedir"];
      this.options.msvsVersion = npmOptions["msvs_version"];
    }
    if (appConfig && typeof appConfig === "object" && Object.keys(appConfig).length) {
      this.log.verbose("CFG", "Applying CMake.js config from root package.json:");
      this.log.verbose("CFG", JSON.stringify(appConfig));
      this.options.runtime = this.options.runtime || appConfig.runtime;
      this.options.runtimeVersion = this.options.runtimeVersion || appConfig.runtimeVersion;
      this.options.arch = this.options.arch || appConfig.arch;
    }
    this.log.verbose("CFG", "Build system options:");
    this.log.verbose("CFG", JSON.stringify(this.options));
    this.cmake = new cMake_default(this.options);
    this.dist = new dist_default(this.options);
    this.toolset = new toolset_default(this.options);
  }
  async _ensureInstalled() {
    try {
      await this.toolset.initialize(true);
      if (!this.options.isNodeApi) {
        await this.dist.ensureDownloaded();
      }
    } catch (e) {
      this._showError(e);
      throw e;
    }
  }
  _showError(e) {
    if (this.log === void 0) {
      console.error("OMG", e.stack);
      return;
    }
    if (this.log.level === "verbose" || this.log.level === "silly") {
      this.log.error("OMG", e.stack);
    } else {
      this.log.error("OMG", e.message);
    }
  }
  install() {
    return this._ensureInstalled();
  }
  async _invokeCMake(method) {
    try {
      await this._ensureInstalled();
      return await this.cmake[method]();
    } catch (e) {
      this._showError(e);
      throw e;
    }
  }
  getConfigureCommand() {
    return this._invokeCMake("getConfigureCommand");
  }
  getCmakeJsLibString() {
    return this._invokeCMake("getCmakeJsLibString");
  }
  getCmakeJsIncludeString() {
    return this._invokeCMake("getCmakeJsIncludeString");
  }
  getCmakeJsSrcString() {
    return this._invokeCMake("getCmakeJsSrcString");
  }
  configure() {
    return this._invokeCMake("configure");
  }
  getBuildCommand() {
    return this._invokeCMake("getBuildCommand");
  }
  build() {
    return this._invokeCMake("build");
  }
  getCleanCommand() {
    return this._invokeCMake("getCleanCommand");
  }
  clean() {
    return this._invokeCMake("clean");
  }
  reconfigure() {
    return this._invokeCMake("reconfigure");
  }
  rebuild() {
    return this._invokeCMake("rebuild");
  }
  compile() {
    return this._invokeCMake("compile");
  }
};
var buildSystem_default = BuildSystem;

// lib/index.js
init_cmLog();
init_environment();
init_targetOptions();
init_dist();
init_cMake();
init_downloader();
init_toolset();
var index_default = {
  BuildSystem: buildSystem_default,
  CMLog: cmLog_default,
  environment: environment_default,
  TargetOptions: targetOptions_default,
  Dist: dist_default,
  CMake: cMake_default,
  downloader: downloader_default,
  Toolset: toolset_default
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BuildSystem,
  CMLog,
  CMake,
  Dist,
  Downloader,
  TargetOptions,
  Toolset,
  environment
});
//# sourceMappingURL=index.cjs.map