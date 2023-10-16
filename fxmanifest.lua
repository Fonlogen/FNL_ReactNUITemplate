fx_version 'bodacious'

game 'gta5'

author 'Fonlogen'
description 'NUI + React JS Template'

version '1.0.0'

client_scripts {
	'client/cl_main.lua',
}

shared_scripts {
	'config.lua',
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'server/sv_main.lua'
}

ui_page 'ui/dist/index.html'

files {
	'ui/dist/*',
	'ui/dist/index.html',
	'ui/dist/**/*',
	'ui/dist/images/*',
	'ui/dist/assets/*',
	'ui/dist/assets/**/*',
}