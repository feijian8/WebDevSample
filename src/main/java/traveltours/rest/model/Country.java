package traveltours.rest.model;

import java.util.ArrayList;
import java.util.List;

public class Country extends Resource {
	
	private String country;	
	
	private List<String> areas = new ArrayList<String>();
	
	public Country() {
		super();
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public List<String> getAreas() {
		return areas;
	}

	public void setAreas(List<String> areas) {
		this.areas = areas;
	}

}
