package traveltours.rest.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import traveltours.rest.model.Country;

public class CountryService extends ResourceService<Country>{

	@Override
	@Path("/create")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Country create(Country resource) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/read/{id}")
	@GET
	@Produces("application/json")
	public Country read(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/update")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Country update(Country resource) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/delete")
	@Consumes("application/json")
	@DELETE
	public void delete(Country resource) {
		// TODO Auto-generated method stub
		
	}

	@Override
	@Path("/list")
	@GET
	@Produces("application/json")
	public List<Country> all() {
		// TODO Auto-generated method stub
		return null;
	}

}
