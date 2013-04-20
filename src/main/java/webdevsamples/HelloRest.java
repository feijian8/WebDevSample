package webdevsamples;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class HelloRest {

    @GET
    @Path("/sayHello/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Hello sayHello(@PathParam("name") String name) {
        Hello hello = new Hello(name);
        System.out.println("HelloRest.sayHello: hello to " + name);
        return hello;

    }
}
