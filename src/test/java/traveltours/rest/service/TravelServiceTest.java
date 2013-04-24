package traveltours.rest.service;

import org.apache.commons.lang.time.DateUtils;
import org.jboss.resteasy.specimpl.MultivaluedMapImpl;
import org.junit.Test;
import traveltours.rest.model.Travel;

import javax.ws.rs.core.MultivaluedMap;
import java.util.ArrayList;
import java.util.Date;

import static org.junit.Assert.assertEquals;


public class TravelServiceTest {


    @Test
    public void testCreate() throws Exception {

        Travel travel = new Travel();
        travel.setCountry("Grækenland");
        travel.setArea("Naxos");
        travel.setDiscount(20d);
        travel.setPrice(35000d);

        Date from = DateUtils.parseDate("2013-04-01", new String[]{"yyyy-MM-dd"});
        travel.setFrom(from);
        Date to = DateUtils.parseDate("2013-05-01", new String[]{"yyyy-MM-dd"});
        travel.setTo(to);

        TravelService service = new TravelService();

        MultivaluedMap<String, String> formValue = new MultivaluedMapImpl<String, String>();

        ArrayList<String> countries = new ArrayList();
        countries.add("Grækenland");
        formValue.put("country", countries);

        ArrayList<String> areas = new ArrayList();
        areas.add("Naxos");
        formValue.put("area", areas);

        //Travel travelRes = service.create(formValue);

       // assertEquals(travel.getCountry(), travelRes.getCountry());
       // assertEquals(travel.getArea(), travelRes.getArea());

        //assertEquals(travel.getFrom(), travelRes.getFrom());
        //assertEquals(travel.getTo(), travelRes.getTo());
    }
}
