compose:
	@sudo docker-compose -f docker-compose.yml up --attach nginx
cleanup:
	@sudo docker-compose down --rmi local -v --remove-orphans
