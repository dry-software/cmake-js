import assert from 'node:assert'
import { BuildSystem } from '../../lib/index.js'
import path from 'node:path'
import fs from 'fs-extra'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const testCases = {
	buildPrototypeWithDirectoryOption: async function (options) {
		options = {
			directory: path.resolve(path.join(__dirname, './prototype')),
			...options,
		}
		const buildSystem = new BuildSystem(options)
		await buildSystem.rebuild()
		assert.ok((await fs.stat(path.join(__dirname, 'prototype/build/Release/addon.node'))).isFile())
	},
	buildPrototype2WithCWD: async function (options) {
		const cwd = process.cwd()
		process.chdir(path.resolve(path.join(__dirname, './prototype2')))
		const buildSystem = new BuildSystem(options)
		try {
			await buildSystem.rebuild()
			assert.ok((await fs.stat(path.join(__dirname, 'prototype2/build/Release/addon2.node'))).isFile())
		} finally {
			process.chdir(cwd)
		}
	},
	buildPrototypeNapi: async function (options) {
		const cwd = process.cwd()
		process.chdir(path.resolve(path.join(__dirname, './prototype-napi')))
		const buildSystem = new BuildSystem(options)
		try {
			await buildSystem.rebuild()
			assert.ok((await fs.stat(path.join(__dirname, 'prototype-napi/build/Release/addon_napi.node'))).isFile())
		} finally {
			process.chdir(cwd)
		}
	},
	shouldConfigurePreC11Properly: async function (options) {
		options = {
			directory: path.resolve(path.join(__dirname, './prototype')),
			std: 'c++98',
			...options,
		}
		const buildSystem = new BuildSystem(options)
		if (!/visual studio/i.test(buildSystem.toolset.generator)) {
			const command = await buildSystem.getConfigureCommand()
			assert.equal(command.indexOf('-std=c++'), -1, 'c++ version still forced')
		}
	},
	configureWithCustomOptions: async function (options) {
		options = {
			directory: path.resolve(path.join(__dirname, './prototype')),
			cMakeOptions: {
				foo: 'bar',
			},
			...options,
		}
		const buildSystem = new BuildSystem(options)

		const command = await buildSystem.getConfigureCommand()
		assert.notEqual(command.indexOf('-Dfoo=bar'), -1, 'custom options added')
	},
	shouldForwardExtraCMakeArgs: async function (options) {
		options = {
			directory: path.resolve(path.join(__dirname, './prototype')),
			...options,
		}

		options.extraCMakeArgs = ['--debug-find-pkg=Boost', '--trace-source=FindBoost.cmake']
		const configure = await new BuildSystem(options).getConfigureCommand()
		assert.deepEqual(configure.slice(-2), options.extraCMakeArgs, 'extra CMake args appended')

		options.extraCMakeArgs = ['--', 'CMakeFiles/x.dir/y.cpp.o']
		const build = await new BuildSystem(options).getBuildCommand()
		assert.deepEqual(build.slice(-2), options.extraCMakeArgs, 'extra CMake args appended')

		options.extraCMakeArgs = ['.cache', '/tmp/jest_rs']
		const clean = await new BuildSystem(options).getCleanCommand()
		assert.deepEqual(clean.slice(-2), options.extraCMakeArgs, 'extra CMake args appended')
	},
}

export default testCases
