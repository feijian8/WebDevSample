package traveltours.rest.service;

import traveltours.rest.model.Country;

import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@SessionScoped
public class SessionContext implements Serializable{

    private Map<String, Country> countries = new HashMap<String, Country>();

    private Integer counter = 1;


    public Map<String, Country> getAllCountries() {
        return countries;
    }

    public void addCountry(Country country) {
        countries.put(country.getId(), country);
    }

    public Integer getId() {
        return counter ++;
    }

}
