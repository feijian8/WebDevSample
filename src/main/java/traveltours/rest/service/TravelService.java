package traveltours.rest.service;

import traveltours.rest.model.Resource;
import traveltours.rest.model.Travel;

import java.util.List;

public class TravelService extends ResourceService<Travel> {

    @Override
    public Travel create(Travel travel) {
        System.out.println("TravelService.create: " + travel);
        return travel;
    }

    @Override
    public Travel read(String id) {
        return null;
    }

    @Override
    public Travel update(Travel travel) {
        return null;
    }

    @Override
    public void delete(Travel travel) {

    }

    @Override
    public List<Travel> all() {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
