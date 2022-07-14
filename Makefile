compose-production:
	@sudo docker-compose -f docker-compose.yml up
compose-dev:
	@sudo docker-compose -f docker-compose-dev.yml up --attach web
compose-cleanup:
	@sudo docker-compose down --rmi local -v --remove-orphans
