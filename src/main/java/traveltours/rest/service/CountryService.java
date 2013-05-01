package traveltours.rest.service;

import traveltours.rest.model.Country;

import javax.inject.Inject;
import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Path("/country")
public class CountryService extends ResourceService<Country>{

    @Inject
    private SessionContext session;

	@Override
	@Path("/create")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Country create(Country country) {

        String id = session.getId().toString();
        country.setId(id);

        session.addCountry(country);

    	return country;
	}

	@Override
	@Path("/read/{id}")
	@GET
	@Produces("application/json")
	public Country read(@PathParam("id") String id) {
        Country country = session.getAllCountries().get(id);
        return country;
	}

	@Override
	@Path("/update")
	@POST
	@Consumes("application/json")
	@Produces("application/json")
	public Country update(Country country) {
		session.addCountry(country);
		return country;
	}

	@Override
	@Path("/delete")
	@Consumes("application/json")
	@DELETE
	public void delete(Country country) {
        Map<String, Country> countries = session.getAllCountries();
        countries.remove(country.getId());
	}

	@Override
	@Path("/list")
	@GET
	@Produces("application/json")
	public List<Country> all() {
        List countries = new ArrayList(session.getAllCountries().values());
        return countries;
	}

}
