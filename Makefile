.PHONY: build test
MAKEFLAGS += --silent

NODE_BIN=node_modules/.bin/
VITE_NODE=$(NODE_BIN)vite-node
ASTRO=$(NODE_BIN)astro

## install
install:
	pnpm i --frozen-lockfile

## env
copy-env:
	cp .envs/${type} .env

copy-env-development:
	make copy-env type="development"

copy-env-production:
	make copy-env type="productions"

copy-env-testing:
	make copy-env type="testing"

clear-cache:
	rm -rf .astro

start-development: copy-env-development clear-cache
	$(ASTRO) dev

start-production: copy-env-production clear-cache preview

sync:
	$(ASTRO) sync

## build
build-development: clear-cache copy-env-development build

build-production: clear-cache copy-env-production build

build-testing: clear-cache copy-env-testing build

build:
	$(ASTRO) build

## start
start:
	$(ASTRO) preview $(arguments)

## format
prettify:
	$(NODE_BIN)prettier --ignore-path .gitignore  --$(type) src/ test/ script/

format-check:
	make prettify type=check

format:
	make prettify type=write

## lint
lint:
	$(NODE_BIN)eslint --ignore-path .gitignore src/ test/ script/ -f='stylish' --color

## find unused exports
find-unused-exports:
	$(NODE_BIN)find-unused-exports

## find unimported files
find-unimported-files:
	$(NODE_BIN)unimported

## typecheck
typecheck:
	$(NODE_BIN)tsc -p tsconfig.json $(arguments) 

typecheck-watch:
	make typecheck arguments="--w"

## test
test-type:
	$(NODE_BIN)vitest test/$(path)/**.test.ts $(arguments)

test-snapshot-setup:
	$(VITE_NODE) script/test/setup.ts -- --$(type)

test-snapshot-setup-start:
	make test-snapshot-setup type="start"

test-snapshot-setup-end:
	make test-snapshot-setup type="end"

test-snapshot:
	make test-snapshot-setup-start &&\
		make build-testing &&\
		make test-type path="snapshot" arguments="$(arguments)" &&\
		make test-snapshot-setup-end
	
test: test-snapshot
