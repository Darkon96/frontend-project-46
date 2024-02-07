install:
	sudo npm ci
	sudo npm link
	
publish: 
	npm publish --dry-run

lint:
	npx eslint .
	npx prettier . --check

lintFix:
	npx eslint . --fix
	npx prettier . --write

test:
	npx -n --experimental-vm-modules jest

test-watch:
	npm test -s -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8