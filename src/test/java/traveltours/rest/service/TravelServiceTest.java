package traveltours.rest.service;

import org.apache.commons.lang.time.DateUtils;
import org.junit.Test;
import static org.junit.Assert.*;
import traveltours.rest.model.Travel;

import java.util.Date;

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
        Travel travelRes = service.create(travel);

        assertEquals(travel.getFrom(), travelRes.getFrom());
        assertEquals(travel.getTo(), travelRes.getTo());



    }
}
