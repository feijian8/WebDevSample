package traveltours.rest.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import traveltours.rest.model.Travel;

@Path("/travel")
public class TravelService extends ResourceService<Travel> {

    private static Travel currentStub;

	@Override
	@Path("/create")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Travel create(Travel resource) {
		
		System.out.println("Travel resource: " + resource.getCountry());
		
		return resource;
	}

	@Override
	@Path("/read/{id}")
	@GET
	@Produces("application/json")
	public Travel read(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/update")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Travel update(Travel resource) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/delete")
	@Consumes("application/json")
	@DELETE
	public void delete(Travel resource) {
		// TODO Auto-generated method stub
		
	}

	@Override
	@Path("/list")
	@GET
	@Produces("application/json")
	public List<Travel> all() {
		// TODO Auto-generated method stub
		return null;
	}

    /*
    public Travel create(MultivaluedMap<String, String> formParams) {
        System.out.println("TravelService.create: " + formParams);

        String country = formParams.getFirst("country");
        String area = formParams.getFirst("area");

        Travel travel = new Travel();
        //dummy...
        travel.setId("1");
        travel.setCountry(country);
        travel.setArea(area);

        TravelService.currentStub = travel;
        return travel;
    }
    */


    
    
}
