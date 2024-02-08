install:
	sudo npm ci
	sudo npm link
	
publish: 
	npm publish --dry-run

lint:
	npx eslint .

lintFix:
	npx eslint . --fix

test:
	npx -n --experimental-vm-modules jest

test-watch:
	npm test -s -- --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8