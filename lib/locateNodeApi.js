import path from 'node:path'
import { createRequire } from 'node:module'

async function locateNodeApi(projectRoot) {
	if (locateNodeApi.__projectRoot) {
		// Override for unit tests
		projectRoot = locateNodeApi.__projectRoot
	}

	try {
		const tmpRequire = createRequire(path.join(projectRoot, 'package.json'))
		const inc = tmpRequire('node-addon-api')
		return inc.include.replace(/"/g, '')
	} catch (e) {
		// It most likely wasn't found
		return null
	}
}

export default locateNodeApi
