package traveltours.rest.service;

import traveltours.rest.model.Travel;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import java.util.ArrayList;
import java.util.List;

@Path("/travel")
public class TravelService extends ResourceService<Travel> {

    private static Travel currentStub;

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

    public Travel read(String id) {
        System.out.println("TravelService.read      **************************************");
        return currentStub;
    }

    public Travel update(MultivaluedMap<String, String> formParams) {
        return currentStub;
    }

    public void delete(Travel travel) {
        this.currentStub = null;
    }

    public List<Travel> all() {
        List<Travel> travels = new ArrayList();
        travels.add(currentStub);
        return travels;
    }
}
