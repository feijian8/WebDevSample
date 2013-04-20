package traveltours.rest.model;

import java.util.Date;
import java.util.List;

public class Travel extends Resource {

    private String country;
    private String area;
    private Transport transport;
    private Date from;
    private Date to;
    private Vacancy vacancy;
    private List<Transport> transports;
    private Double price;
    private Double discount;


    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Transport getTransport() {
        return transport;
    }

    public void setTransport(Transport transport) {
        this.transport = transport;
    }

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public Vacancy getVacancy() {
        return vacancy;
    }

    public void setVacancy(Vacancy vacancy) {
        this.vacancy = vacancy;
    }

    public List<Transport> getTransports() {
        return transports;
    }

    public void setTransports(List<Transport> transports) {
        this.transports = transports;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "Travel{" +
                "country='" + country + '\'' +
                ", area='" + area + '\'' +
                ", transport=" + transport +
                ", from=" + from +
                ", to=" + to +
                ", vacancy=" + vacancy +
                ", transports=" + transports +
                ", price=" + price +
                ", discount=" + discount +
                '}';
    }
}
