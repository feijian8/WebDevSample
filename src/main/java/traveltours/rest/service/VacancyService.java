package traveltours.rest.service;

import traveltours.rest.model.Vacancy;
import traveltours.rest.model.VacancyType;

import javax.ws.rs.Path;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;

@Path("/vacancy")
public class VacancyService extends ResourceService<Vacancy> {

    private static Vacancy currentStub;

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

    @Override
    public Vacancy read(String id) {
        System.out.println("VacancyService.read");
        return VacancyService.currentStub;
    }

    @Override
    public Vacancy update(MultivaluedMap<String, String> formParams) {
        System.out.println("VacancyService.update");
        return null;
    }

    @Override
    public void delete(Vacancy resource) {
        System.out.println("VacancyService.delete");
    }

    @Override
    public List<Vacancy> all() {
        System.out.println("VacancyService.all");
        return null;
    }
}
