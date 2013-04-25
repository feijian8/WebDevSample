package traveltours.rest.service;

import traveltours.rest.model.Vacancy;
import traveltours.rest.model.VacancyType;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;

@Path("/vacancy")
public class VacancyService extends ResourceService<Vacancy> {

    private static Vacancy currentStub;

	@Override
	@Path("/create")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Vacancy create(Vacancy resource) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/read/{id}")
	@GET
	@Produces("application/json")
	public Vacancy read(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/update")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Vacancy update(Vacancy resource) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Path("/delete")
	@Consumes("application/json")
	@DELETE
	public void delete(Vacancy resource) {
		// TODO Auto-generated method stub
		
	}

	@Override
	@Path("/list")
	@GET
	@Produces("application/json")
	public List<Vacancy> all() {
		// TODO Auto-generated method stub
		return null;
	}

    /*
    @Override
    public Vacancy create(MultivaluedMap<String, String> formParams) {

        System.out.println("VacancyService.create: formParams = " + formParams);

        String name = formParams.getFirst("name");

        Vacancy vacancy = new Vacancy();
        vacancy.setId("1");
        vacancy.setName(name);
        vacancy.setVacancyType(VacancyType.HOTEL);

        VacancyService.currentStub = vacancy;

        return vacancy;
    }
    */


    
    
}
